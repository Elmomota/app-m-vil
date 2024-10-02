import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SqliteService } from 'src/app/services/sqlite.service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

interface Torneo {
  id: number;
  nombre: string;
  juego: string;
  estado: string;
  numEquipos: number;
  fechaInicio: string;
  imagen: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  adminUser: string = "";
  torneos: Torneo[] = [];

  constructor(
    private router: Router,
    private activedrouter: ActivatedRoute,
    private navCtrl: NavController,
    private sqliteService: SqliteService
  ) {
    this.activedrouter.queryParams.subscribe(param => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        this.adminUser = this.router.getCurrentNavigation()?.extras?.state?.['nombreUser'];
      }
    });
  }

  async ngOnInit() {
    await this.sqliteService.initDB();
    this.loadTorneos();
  }

  async loadTorneos() {
    this.torneos = await this.sqliteService.getTorneos();
  }

  verDetallesTorneo(torneo: Torneo) {
    this.navCtrl.navigateForward(`/detalles-torneo/${torneo.id}`, {
      queryParams: {
        torneo: JSON.stringify(torneo)
      }
    });
  }
}

