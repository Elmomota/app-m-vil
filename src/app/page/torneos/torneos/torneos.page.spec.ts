import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TorneosPage } from './torneos.page';

describe('TorneosPage', () => {
  let component: TorneosPage;
  let fixture: ComponentFixture<TorneosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TorneosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
