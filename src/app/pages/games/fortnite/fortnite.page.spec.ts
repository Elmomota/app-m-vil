import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FortnitePage } from './fortnite.page';

describe('FortnitePage', () => {
  let component: FortnitePage;
  let fixture: ComponentFixture<FortnitePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FortnitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
