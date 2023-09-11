import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suite6Page } from './suite6.page';

const routes: Routes = [
  {
    path: '',
    component: Suite6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suite6PageRoutingModule {}
