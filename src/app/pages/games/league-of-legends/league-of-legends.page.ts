import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-league-of-legends',
  templateUrl: './league-of-legends.page.html',
  styleUrls: ['./league-of-legends.page.scss'],
})
export class LeagueOfLegendsPage implements OnInit {

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
