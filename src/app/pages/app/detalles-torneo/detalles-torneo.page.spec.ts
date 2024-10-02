import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesTorneoPage } from './detalles-torneo.page';

describe('DetallesTorneoPage', () => {
  let component: DetallesTorneoPage;
  let fixture: ComponentFixture<DetallesTorneoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTorneoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
