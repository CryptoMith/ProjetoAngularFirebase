import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuitedxPage } from './suitedx.page';

const routes: Routes = [
  {
    path: '',
    component: SuitedxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuitedxPageRoutingModule {}
