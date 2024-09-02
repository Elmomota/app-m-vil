import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewGamesinfoPage } from './new-gamesinfo.page';

describe('NewGamesinfoPage', () => {
  let component: NewGamesinfoPage;
  let fixture: ComponentFixture<NewGamesinfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGamesinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
