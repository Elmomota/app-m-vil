import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewGamesinfoPage } from './new-gamesinfo.page';

const routes: Routes = [
  {
    path: '',
    component: NewGamesinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewGamesinfoPageRoutingModule {}
