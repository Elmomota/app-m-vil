import { Component } from '@angular/core';
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
  
  constructor() {}
}
