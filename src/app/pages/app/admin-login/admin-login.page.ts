import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {
  
  newNameUser:string="";
  nameAdmin:string="Admin";
  password:any;
  passwordAdmin:string="123";
  

  constructor( private router:Router,private alertController: AlertController, private toastController: ToastController,private menuCtrl: MenuController) { }

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
    if (this.newNameUser === "" || this.password === "") {
      await this.presentAlert('Campos incompletos', 'Por favor, rellena todos los campos obligatorios.');
      return;
    }

    if (this.password !== this.passwordAdmin || this.newNameUser!==this.nameAdmin ) {
      await this.presentAlert('Datos incorrectos', 'los datos ingresados son incorrectos',);
      return;
    }

    this.irPagina();




  }
  irPagina(){
    let contex:NavigationExtras={
      state:{
        nombreUser:this.nameAdmin
      }
    }
    this.router.navigate(['/admin'],contex);

  }


}
