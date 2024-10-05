import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';  // Importa SQLite
import { SqliteService } from './services/sqlite.service';  // Importa tu servicio SQLite

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite,  // Asegúrate de añadir SQLite como proveedor
    SqliteService  // Asegúrate de añadir tu servicio
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
