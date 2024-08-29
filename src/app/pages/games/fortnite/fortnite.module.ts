import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FortnitePageRoutingModule } from './fortnite-routing.module';

import { FortnitePage } from './fortnite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FortnitePageRoutingModule
  ],
  declarations: [FortnitePage]
})
export class FortnitePageModule {}
