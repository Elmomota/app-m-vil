import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesTorneoPage } from './detalles-torneo.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesTorneoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesTorneoPageRoutingModule {}
