import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.page.html',
  styleUrls: ['./new-games.page.scss'],
})
export class NewGamesPage implements OnInit {
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
}
