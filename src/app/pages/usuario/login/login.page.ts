import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nameUser:string="";
  password:any;



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

  /*------------------------------------------------------------*/
  async validarRegistro() {
    if (this.nameUser === "" || this.password === "" ) {
      await this.presentAlert('Campos incompletos', 'Por favor, rellena todos los campos obligatorios.');
      return;
    }
    if (this.nameUser.length<5) {
      await this.presentAlert('contraseña invalida', 'Por favor, intenta nuevamente.');
      return;
    }


    this.irPagina();

    await this.presentAlert('Bienvenido', 'disfruta.');

  }

  async x() {
    
      
    }
  
  /*------------------------------------------------------------*/

  irPagina(){
    let navigationextras:NavigationExtras={
      state:{
        nombreUser:this.nameUser
      }
    }
    this.presentToast('bottom');
    this.router.navigate(['/home'],navigationextras);
  }


}
