import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarTorneoPage } from './agregar-torneo.page';

describe('AgregarTorneoPage', () => {
  let component: AgregarTorneoPage;
  let fixture: ComponentFixture<AgregarTorneoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarTorneoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
