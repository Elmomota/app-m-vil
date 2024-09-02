import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewGamesPage } from './new-games.page';

const routes: Routes = [
  {
    path: '',
    component: NewGamesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewGamesPageRoutingModule {}
