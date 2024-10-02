import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [


    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Torneos', url: '/torneo', icon: 'trophy' },
    { title: 'Noticias Games', url: '/new-games', icon: 'mail'},
    { title: 'Mi Perfil', url: '/cuenta', icon: 'person' },
   
    
  ];
  
  constructor(private router: Router, private menuCtrl: MenuController) {}
   // Función para cerrar sesión
   logout() {
    // Aquí puedes agregar lógica para eliminar datos de la sesión si los estás guardando en localStorage o sessionStorage
    localStorage.clear(); // O sessionStorage.clear() si usas sessionStorage
    this.menuCtrl.close(); // Cierra el menú si está abierto
    this.router.navigate(['/inicio']); // Redirige a la página de inicio de sesión
  }

}
