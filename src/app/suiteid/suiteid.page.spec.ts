import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuiteidPage } from './suiteid.page';

describe('SuiteidPage', () => {
  let component: SuiteidPage;
  let fixture: ComponentFixture<SuiteidPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuiteidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
