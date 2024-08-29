import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeagueOfLegendsPage } from './league-of-legends.page';

const routes: Routes = [
  {
    path: '',
    component: LeagueOfLegendsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeagueOfLegendsPageRoutingModule {}
