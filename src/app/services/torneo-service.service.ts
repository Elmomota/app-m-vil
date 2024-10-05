import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {
  private torneoAgregadoSource = new Subject<void>();
  torneoAgregado$ = this.torneoAgregadoSource.asObservable();

  private torneoEliminadoSource = new Subject<void>();
  torneoEliminado$ = this.torneoEliminadoSource.asObservable();

  notificarTorneoAgregado() {
    this.torneoAgregadoSource.next();

  }
  notificarTorneoEliminado() {
    this.torneoEliminadoSource.next();
  }
}
