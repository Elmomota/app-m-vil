import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarTorneoPage } from './modificar-torneo.page';

describe('ModificarTorneoPage', () => {
  let component: ModificarTorneoPage;
  let fixture: ComponentFixture<ModificarTorneoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarTorneoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
