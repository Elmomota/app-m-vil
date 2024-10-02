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
  selector: 'app-modificar-torneo',
  templateUrl: './modificar-torneo.page.html',
  styleUrls: ['./modificar-torneo.page.scss'],
})
export class ModificarTorneoPage implements OnInit {
  torneo?: Torneo;
  selectedFile?: File;

  constructor(private route: ActivatedRoute, private router: Router, private alertController: AlertController) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['torneo']) {
        this.torneo = JSON.parse(params['torneo']);
      }
    });
  }

onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.selectedFile = input.files[0]; // Accede al primer archivo en el FileList
    this.uploadFile();
  }
}

  uploadFile() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        if (this.torneo) {
          this.torneo.imagen = reader.result as string;
        }
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  async guardarCambios() {
    const alert = await this.alertController.create({
      header: 'Confirmar Cambios',
      message: '¿Estás seguro de que deseas guardar los cambios?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Guardar',
          handler: () => {
            // Lógica para guardar los cambios del torneo
            console.log('Cambios guardados:', this.torneo);
            // Navegar de vuelta a la lista de torneos
            this.router.navigate(['/admin']);
          }
        }
      ]
    });

    await alert.present();
  }
}

