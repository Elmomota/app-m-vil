import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  correoEle: string="";
  newNameUser:string="";
  newPassword:any;
  confiPassword:any;



  constructor( private router:Router,private alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {
  }
    async presentAlert(titulo:string, msj:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Soy un mensaje',
      duration: 2500,
      position: position,
    });

    await toast.present();
  }
  async validarRegistro() {
    if (this.correoEle === "" || this.newNameUser === "" || this.newPassword === "" || this.confiPassword === "") {
      await this.presentAlert('Campos incompletos', 'Por favor, rellena todos los campos obligatorios.');
      return;
    }

    if (this.newPassword !== this.confiPassword) {
      await this.presentAlert('Contraseñas no coinciden', 'Las contraseñas ingresadas no son iguales.');
      return;
    }

    this.irPagina();

    await this.presentAlert('bienvenido', 'disfrura.');






  }
  irPagina(){
    let contex:NavigationExtras={
      state:{
        nombreUser:this.newNameUser
      }
    }
    this.router.navigate(['/home'],contex);

  }


}
