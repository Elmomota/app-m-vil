import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StreetFighterPage } from './street-fighter.page';

const routes: Routes = [
  {
    path: '',
    component: StreetFighterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreetFighterPageRoutingModule {}
