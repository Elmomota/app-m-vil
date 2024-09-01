import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.page.html',
  styleUrls: ['./torneo.page.scss'],
})
export class TorneoPage implements OnInit {

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
}
