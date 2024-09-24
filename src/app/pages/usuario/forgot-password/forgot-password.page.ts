import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  eleCorreo: string="";

  constructor( private router:Router,private alertController: AlertController,private toastController: ToastController,private menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable(false); 
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(true); 
  }
  async presentAlert(titulo:string, msj:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }
  
  async enviarConfirmacion() {
    if (this.eleCorreo) {
      const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (!emailRegex.test(this.eleCorreo)) {
        await this.presentAlert('Error', 'Por favor, ingresa un correo electrónico válido.');
        return;
      }
  

      await this.presentAlert('Correo enviado', `Correo de recuperación enviado a: ${this.eleCorreo}`);
      this.irPagina();
    } else {
      await this.presentAlert('Error', 'Por favor, ingresa un correo electrónico válido.');
    }
  }
  

  irPagina(){

    this.router.navigate(['/login']);
  }

}
