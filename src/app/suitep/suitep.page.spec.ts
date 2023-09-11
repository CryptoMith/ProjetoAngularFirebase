import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuitepPage } from './suitep.page';

describe('SuitepPage', () => {
  let component: SuitepPage;
  let fixture: ComponentFixture<SuitepPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuitepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
