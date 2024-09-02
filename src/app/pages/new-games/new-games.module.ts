import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewGamesPageRoutingModule } from './new-games-routing.module';

import { NewGamesPage } from './new-games.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewGamesPageRoutingModule
  ],
  declarations: [NewGamesPage]
})
export class NewGamesPageModule {}
