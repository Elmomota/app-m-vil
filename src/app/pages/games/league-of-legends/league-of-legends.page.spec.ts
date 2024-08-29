import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeagueOfLegendsPage } from './league-of-legends.page';

describe('LeagueOfLegendsPage', () => {
  let component: LeagueOfLegendsPage;
  let fixture: ComponentFixture<LeagueOfLegendsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueOfLegendsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
