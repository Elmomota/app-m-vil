import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SqliteService } from 'src/app/services/sqlite.service';
import { TorneoService } from 'src/app/services/torneo-service.service';
import { Torneo } from 'src/app/services/torneo'; // Ruta correcta hacia la clase Torneo

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  adminUser: string = '';
  torneos: Torneo[] = [];
  loading: boolean = true; // Estado de carga

  constructor(
    private router: Router,
    private activedrouter: ActivatedRoute,
    private navCtrl: NavController,
    private sqliteService: SqliteService,
    private torneoService: TorneoService
  ) {
    this.activedrouter.queryParams.subscribe(param => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        this.adminUser = this.router.getCurrentNavigation()?.extras?.state?.['nombreUser'];
      }
    });
  }

  async ngOnInit() {
    await this.sqliteService.initDB();
    await this.loadTorneos();

    this.torneoService.torneoAgregado$.subscribe(() => {
      this.loadTorneos();
    });
    this.torneoService.torneoEliminado$.subscribe(() => {
      this.loadTorneos();
    });
  }

  async loadTorneos() {
    this.loading = true; // Iniciar el estado de carga
    try {
      this.torneos = await this.sqliteService.getTorneos();
    } catch (error) {
      console.error('Error loading torneos', error);
      // Opcional: mostrar un mensaje de error al usuario
    } finally {
      this.loading = false; // Finalizar el estado de carga
    }
  }

  verDetallesTorneo(torneo: Torneo) {
    if (torneo && torneo.id) {
      this.navCtrl.navigateForward(`/detalles-torneo/${torneo.id}`, {
        queryParams: {
          torneo: JSON.stringify(torneo)
        }
      });
    } else {
      console.warn('Torneo no válido', torneo);
      // Opcional: Notificar al usuario que el torneo no es válido
    }
  }

  agregarTorneo() {
    this.router.navigate(['/agregar-torneo']);
  }
}
