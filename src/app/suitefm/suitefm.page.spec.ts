import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuitefmPage } from './suitefm.page';

describe('SuitefmPage', () => {
  let component: SuitefmPage;
  let fixture: ComponentFixture<SuitefmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuitefmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
