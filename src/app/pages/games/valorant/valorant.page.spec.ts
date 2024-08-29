import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValorantPage } from './valorant.page';

describe('ValorantPage', () => {
  let component: ValorantPage;
  let fixture: ComponentFixture<ValorantPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
