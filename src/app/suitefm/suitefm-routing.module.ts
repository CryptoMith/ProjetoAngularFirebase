import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuitefmPage } from './suitefm.page';

const routes: Routes = [
  {
    path: '',
    component: SuitefmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuitefmPageRoutingModule {}
