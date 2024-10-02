import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarTorneoPage } from './modificar-torneo.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarTorneoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarTorneoPageRoutingModule {}
