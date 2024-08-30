import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },


  {
    path: 'register',
    loadChildren: () => import('./pages/usuario/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/usuario/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/usuario/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/usuario/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'torneos',
    loadChildren: () => import('./pages/torneos/torneos/torneos.module').then( m => m.TorneosPageModule)
  },
  {
    path: 'valorant',
    loadChildren: () => import('./pages/games/valorant/valorant.module').then( m => m.ValorantPageModule)
  },
  {
    path: 'fortnite',
    loadChildren: () => import('./pages/games/fortnite/fortnite.module').then( m => m.FortnitePageModule)
  },
  {
    path: 'street-fighter',
    loadChildren: () => import('./pages/games/street-fighter/street-fighter.module').then( m => m.StreetFighterPageModule)
  },
  {
    path: 'league-of-legends',
    loadChildren: () => import('./pages/games/league-of-legends/league-of-legends.module').then( m => m.LeagueOfLegendsPageModule)
  },  {
    path: 'cuenta',
    loadChildren: () => import('./pages/usuario/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/app/inicio/inicio.module').then( m => m.InicioPageModule)
  },

  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
