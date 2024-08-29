import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StreetFighterPage } from './street-fighter.page';

describe('StreetFighterPage', () => {
  let component: StreetFighterPage;
  let fixture: ComponentFixture<StreetFighterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetFighterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
