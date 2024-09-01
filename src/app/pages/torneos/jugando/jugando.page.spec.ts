import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JugandoPage } from './jugando.page';

describe('JugandoPage', () => {
  let component: JugandoPage;
  let fixture: ComponentFixture<JugandoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JugandoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
