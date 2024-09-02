import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-jugando',
  templateUrl: './jugando.page.html',
  styleUrls: ['./jugando.page.scss'],
})
export class JugandoPage implements OnInit {

  user:string="";


  constructor(private router: Router, private activedrouter: ActivatedRoute) {
    this.activedrouter.queryParams.subscribe(param =>{
      //validamos si llega o no la informacion
      if(this.router.getCurrentNavigation()?.extras.state){
        
        this.user = this.router.getCurrentNavigation()?.extras?.state?.['nombreUser'];
        
      }
    });
   }
  ngOnInit() {
  }
  seleccion = 'Torneos jugados';
  home(){
    this.router.navigate(['/home']);
  }

  valorant(){
    this.router.navigate(['/valorant']);
  }

  torneo(){
    this.router.navigate(['/torneo']);
  }

}
