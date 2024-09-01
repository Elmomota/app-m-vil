import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-street-fighter',
  templateUrl: './street-fighter.page.html',
  styleUrls: ['./street-fighter.page.scss'],
})
export class StreetFighterPage implements OnInit {

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

}
