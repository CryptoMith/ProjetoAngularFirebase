import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroQuartosPage } from './cadastro-quartos.page';

describe('CadastroQuartosPage', () => {
  let component: CadastroQuartosPage;
  let fixture: ComponentFixture<CadastroQuartosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroQuartosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
