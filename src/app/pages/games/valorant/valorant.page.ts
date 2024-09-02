import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-valorant',
  templateUrl: './valorant.page.html',
  styleUrls: ['./valorant.page.scss'],
})
export class ValorantPage implements OnInit {
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

  home(){
    this.router.navigate(['/home']);
  }

  torneo(){
    this.router.navigate(['/torneo']);
  }
  valorant(){
    this.router.navigate(['/valorant']);
  }
}
