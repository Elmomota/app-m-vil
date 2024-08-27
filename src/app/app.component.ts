import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Registro', url: '/register', icon: 'person-add' },
    { title: 'Iniciar sesión', url: '/login', icon: 'person' },
    { title: 'Home', url: '/home', icon: 'home' },
    
  ];
  
  constructor() {}
}
