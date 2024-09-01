import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

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
  Ircuenta(){
    let navigationextras:NavigationExtras={
      state:{ 
        nombreUser:this.user
      }
    }
    this.router.navigate(['/cuenta'],navigationextras);
  }
  



  Valorant(){
    this.router.navigate(['/valorant']);
  }
  Fortnite(){
    this.router.navigate(['/fortnite']);
  }
  LOL(){
    this.router.navigate(['/league-of-legends']);
  }
  Sf(){
    this.router.navigate(['/street-fighter']);
  }

  
}
