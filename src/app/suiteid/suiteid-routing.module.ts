import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuiteidPage } from './suiteid.page';

const routes: Routes = [
  {
    path: '',
    component: SuiteidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuiteidPageRoutingModule {}
