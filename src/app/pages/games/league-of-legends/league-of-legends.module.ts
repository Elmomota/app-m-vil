import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeagueOfLegendsPageRoutingModule } from './league-of-legends-routing.module';

import { LeagueOfLegendsPage } from './league-of-legends.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeagueOfLegendsPageRoutingModule
  ],
  declarations: [LeagueOfLegendsPage]
})
export class LeagueOfLegendsPageModule {}
