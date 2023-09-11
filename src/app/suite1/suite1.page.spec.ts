import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Suite1Page } from './suite1.page';

describe('Suite1Page', () => {
  let component: Suite1Page;
  let fixture: ComponentFixture<Suite1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Suite1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
