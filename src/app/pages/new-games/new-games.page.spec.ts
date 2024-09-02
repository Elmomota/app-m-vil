import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewGamesPage } from './new-games.page';

describe('NewGamesPage', () => {
  let component: NewGamesPage;
  let fixture: ComponentFixture<NewGamesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
