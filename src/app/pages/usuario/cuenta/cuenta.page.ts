import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})



export class CuentaPage implements OnInit {

  user:string="";


  constructor(private router: Router, private activedrouter: ActivatedRoute) {
    this.activedrouter.queryParams.subscribe(param =>{
      //validamos si llega o no la informacion
      if(this.router.getCurrentNavigation()?.extras.state){
        
        this.user = this.router.getCurrentNavigation()?.extras?.state?.['nombreUser'];
        
      }
    });
   }

   ngOnInit(){}

seleccion = 'Torneos jugados';

home(){
  this.router.navigate(['/home']);
}






}
