import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Suite6Page } from './suite6.page';

describe('Suite6Page', () => {
  let component: Suite6Page;
  let fixture: ComponentFixture<Suite6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Suite6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
