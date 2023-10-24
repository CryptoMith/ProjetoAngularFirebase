import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuitedxPage } from './suitedx.page';

describe('SuitedxPage', () => {
  let component: SuitedxPage;
  let fixture: ComponentFixture<SuitedxPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuitedxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
