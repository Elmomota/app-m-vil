import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Torneo } from './torneo'; // Asegúrate de que la ruta sea correcta
import { TorneoService } from './torneo-service.service';

@Injectable({
  providedIn: 'root'
})
export class SqliteService {
  private dbInstance: SQLiteObject | null = null;

  constructor(private sqlite: SQLite, private torneoService: TorneoService) {}

  async initDB() {
    try {
      this.dbInstance = await this.sqlite.create({
        name: 'torneos.db',
        location: 'default'
      });
      await this.dbInstance.executeSql(`
        CREATE TABLE IF NOT EXISTS torneos (
          id INTEGER PRIMARY KEY,
          nombre TEXT,
          juego TEXT,
          estado TEXT,
          numEquipos INTEGER,
          fechaInicio TEXT,
          imagen TEXT
        )
      `, []);
    } catch (error) {
      console.error('Error creating database', error);
    }
  }

  async addTorneo(torneo: Torneo) {
    if (this.dbInstance) {
      const sql = `INSERT INTO torneos (nombre, juego, estado, numEquipos, fechaInicio, imagen) VALUES (?, ?, ?, ?, ?, ?)`;
      const values = [torneo.nombre, torneo.juego, torneo.estado, torneo.numEquipos, torneo.fechaInicio, torneo.imagen];
      await this.dbInstance.executeSql(sql, values);
      this.torneoService.notificarTorneoAgregado(); // Notificar que se ha agregado un torneo
    } else {
      throw new Error('Database is not initialized');
    }
  }

  async getTorneos(): Promise<Torneo[]> {
    if (this.dbInstance) {
      const res = await this.dbInstance.executeSql(`SELECT * FROM torneos`, []);
      const torneos: Torneo[] = [];
      for (let i = 0; i < res.rows.length; i++) {
        torneos.push(res.rows.item(i));
      }
      return torneos;
    } else {
      throw new Error('Database is not initialized');
    }
  }

  async actualizarTorneo(torneo: Torneo): Promise<void> {
    if (this.dbInstance) {
      const sql = `UPDATE torneos SET nombre = ?, juego = ?, estado = ?, numEquipos = ?, fechaInicio = ?, imagen = ? WHERE id = ?`;
      const values = [torneo.nombre, torneo.juego, torneo.estado, torneo.numEquipos, torneo.fechaInicio, torneo.imagen, torneo.id];
      await this.dbInstance.executeSql(sql, values);
    } else {
      throw new Error('Database is not initialized');
    }
  }

  async eliminarTorneo(id: number): Promise<void> {
    if (this.dbInstance) {
      const sql = `DELETE FROM torneos WHERE id = ?`;
      await this.dbInstance.executeSql(sql, [id]);
      this.torneoService.notificarTorneoEliminado();
    } else {
      throw new Error('Database is not initialized');
    }
  }
}
