import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarTorneoPage } from './agregar-torneo.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarTorneoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarTorneoPageRoutingModule {}
