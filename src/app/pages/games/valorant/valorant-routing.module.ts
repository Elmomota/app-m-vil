import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValorantPage } from './valorant.page';

const routes: Routes = [
  {
    path: '',
    component: ValorantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValorantPageRoutingModule {}
