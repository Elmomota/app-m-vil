import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperacionPassPage } from './recuperacion-pass.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperacionPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperacionPassPageRoutingModule {}
