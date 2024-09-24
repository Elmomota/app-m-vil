import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperacionPassPage } from './recuperacion-pass.page';

describe('RecuperacionPassPage', () => {
  let component: RecuperacionPassPage;
  let fixture: ComponentFixture<RecuperacionPassPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperacionPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
