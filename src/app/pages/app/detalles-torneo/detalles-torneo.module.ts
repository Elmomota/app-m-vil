import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { DetallesTorneoPage } from './detalles-torneo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetallesTorneoPage
      }
    ])
  ],
  declarations: [DetallesTorneoPage]
})
export class DetallesTorneoPageModule {}

