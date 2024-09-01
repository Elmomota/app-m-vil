import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TorneoPage } from './torneo.page';

describe('TorneoPage', () => {
  let component: TorneoPage;
  let fixture: ComponentFixture<TorneoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TorneoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
