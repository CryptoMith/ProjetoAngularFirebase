import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuitePage } from './suite.page';

describe('SuitePage', () => {
  let component: SuitePage;
  let fixture: ComponentFixture<SuitePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
