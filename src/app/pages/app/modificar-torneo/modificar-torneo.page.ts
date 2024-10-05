import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SqliteService } from 'src/app/services/sqlite.service';

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
  previewImage?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private sqliteService: SqliteService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['torneo']) {
        try {
          this.torneo = JSON.parse(params['torneo']);
          this.previewImage = this.torneo?.imagen; // Muestra la imagen actual si existe
        } catch (error) {
          console.error('Error al parsear el torneo:', error);
          this.router.navigate(['/admin']);
        }
      }
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.uploadFile();
    }
  }

  uploadFile() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result as string; // Vista previa de la imagen
        if (this.torneo) {
          this.torneo.imagen = this.previewImage; // Asigna la imagen al torneo
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
          handler: async () => {
            // Verifica que 'torneo' no sea undefined antes de continuar
            if (this.torneo) {
              try {
                await this.sqliteService.actualizarTorneo(this.torneo);
                console.log('Cambios guardados:', this.torneo);
                await this.router.navigate(['/admin']);
              } catch (error) {
                console.error('Error al guardar los cambios:', error);
                const errorAlert = await this.alertController.create({
                  header: 'Error',
                  message: 'No se pudo guardar los cambios. Intenta nuevamente.',
                  buttons: ['OK'],
                });
                await errorAlert.present();
              }
            } else {
              console.error('Torneo no definido al intentar guardar cambios.');
              const errorAlert = await this.alertController.create({
                header: 'Error',
                message: 'No se pudo guardar los cambios porque el torneo no está definido.',
                buttons: ['OK'],
              });
              await errorAlert.present();
            }
          }
        }
      ]
    });
  
    await alert.present();
  }
  
}
