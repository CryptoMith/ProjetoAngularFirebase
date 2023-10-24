import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Suite5Page } from './suite5.page';

describe('Suite5Page', () => {
  let component: Suite5Page;
  let fixture: ComponentFixture<Suite5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Suite5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
