import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
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
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/usuario/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/app/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'jugando',
    loadChildren: () => import('./pages/torneos/jugando/jugando.module').then( m => m.JugandoPageModule)
  },
  {
    path: 'torneo',
    loadChildren: () => import('./pages/torneos/torneo/torneo.module').then( m => m.TorneoPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/app/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./pages/app/admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'new-games',
    loadChildren: () => import('./pages/new-games/new-games.module').then( m => m.NewGamesPageModule)
  },
  {
    path: 'new-gamesinfo',
    loadChildren: () => import('./pages/new-gamesinfo/new-gamesinfo.module').then( m => m.NewGamesinfoPageModule)
  },
  {
  path: 'recuperacion-pass',
  loadChildren: () => import('./pages/usuario/recuperacion-pass/recuperacion-pass.module').then( m => m.RecuperacionPassPageModule)
  },
  {
    path: 'detalles-torneo/:id',
    loadChildren: () => import('./pages/app/detalles-torneo/detalles-torneo.module').then(m => m.DetallesTorneoPageModule)
  },
  {
    path: 'modificar-torneo',
    loadChildren: () => import('./pages/app/modificar-torneo/modificar-torneo.module').then( m => m.ModificarTorneoPageModule)
  },
  {
    path: 'agregar-torneo',
    loadChildren: () => import('./pages/app/agregar-torneo/agregar-torneo.module').then( m => m.AgregarTorneoPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },   


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
