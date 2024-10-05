import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SqliteService } from 'src/app/services/sqlite.service';

interface Torneo {
  id?: number;
  nombre: string;
  juego: string;
  estado: string;
  numEquipos: number;
  fechaInicio: string;
  imagen: string;
}

@Component({
  selector: 'app-agregar-torneo',
  templateUrl: './agregar-torneo.page.html',
  styleUrls: ['./agregar-torneo.page.scss'],
})
export class AgregarTorneoPage {
  nuevoTorneo: Torneo = {
    nombre: '',
    juego: '',
    estado: 'Próximo',
    numEquipos: 0,
    fechaInicio: new Date().toISOString(),
    imagen: ''
  };

  constructor(private sqliteService: SqliteService, private navCtrl: NavController) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.nuevoTorneo.imagen = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  async agregarTorneo() {
    if (!this.nuevoTorneo.nombre || !this.nuevoTorneo.juego || this.nuevoTorneo.numEquipos <= 0) {
      console.warn('Debes completar todos los campos obligatorios');
      return;
    }
  
    try {
      await this.sqliteService.addTorneo(this.nuevoTorneo);
      this.navCtrl.navigateBack('/admin'); // Redirige al admin tras agregar el torneo
    } catch (error) {
      console.error('Error al agregar el torneo:', error);
      // Puedes mostrar un mensaje de error al usuario aquí
    }
  }
}
