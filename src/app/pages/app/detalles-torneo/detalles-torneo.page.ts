import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
  selector: 'app-detalles-torneo',
  templateUrl: './detalles-torneo.page.html',
  styleUrls: ['./detalles-torneo.page.scss'],
})
export class DetallesTorneoPage implements OnInit {
  torneo?: Torneo;

  constructor(private route: ActivatedRoute, private router: Router, private alertController: AlertController) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['torneo']) {
        this.torneo = JSON.parse(params['torneo']);
      }
    });
  }

  modificarTorneo() {
    this.router.navigate(['/modificar-torneo'], {
      queryParams: {
        torneo: JSON.stringify(this.torneo)
      }
    });
  }

  async eliminarTorneo() {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: '¿Estás seguro de que deseas eliminar este torneo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            // Lógica para eliminar el torneo
            console.log('Torneo eliminado:', this.torneo);
            // Navegar de vuelta a la lista de torneos
            this.router.navigate(['/admin']);
          }
        }
      ]
    });

    await alert.present();
  }
}

