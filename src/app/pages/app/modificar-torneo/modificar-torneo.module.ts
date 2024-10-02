import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ModificarTorneoPage } from './modificar-torneo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModificarTorneoPage
      }
    ])
  ],
  declarations: [ModificarTorneoPage]
})
export class ModificarTorneoPageModule {}

