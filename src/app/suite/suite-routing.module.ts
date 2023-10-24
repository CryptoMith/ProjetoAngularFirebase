import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuitePage } from './suite.page';

const routes: Routes = [
  {
    path: '',
    component: SuitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuitePageRoutingModule {}
