import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroQuartosPage } from './cadastro-quartos.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroQuartosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroQuartosPageRoutingModule {}
