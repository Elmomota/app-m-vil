import { Component, OnInit } from '@angular/core';

import { NavigationExtras, Router } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';


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



  constructor( private router:Router,private alertController: AlertController, private toastController: ToastController,private menuCtrl: MenuController,) { }

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
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Soy un mensaje',
      duration: 2500,
      position: position,
    });

    await toast.present();
  }
  async validarRegistro() {
    // Check if all fields are filled
    if (this.correoEle === "" || this.newNameUser === "" || this.newPassword === "" || this.confiPassword === "") {
      await this.presentAlert('Campos incompletos', 'Por favor, rellena todos los campos obligatorios.');
      return;
    }

    if (this.newPassword !== this.confiPassword) {
      await this.presentAlert('Contraseñas no coinciden', 'Las contraseñas ingresadas no son iguales.');
      return;
    }
  
    
    const commonPasswords = ['12345678', 'password', 'qwerty', 'abc123'];
    if (commonPasswords.includes(this.newPassword)) {
      await this.presentAlert('Contraseña no segura', 'La contraseña ingresada es muy común. Por favor, elige una más segura.');
      return;
    }
  
    
    this.irPagina();
  
    await this.presentAlert('Bienvenido', 'Registro exitoso. Disfruta.');
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
