import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuitepPage } from './suitep.page';

const routes: Routes = [
  {
    path: '',
    component: SuitepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuitepPageRoutingModule {}
