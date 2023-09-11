import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suite1Page } from './suite1.page';

const routes: Routes = [
  {
    path: '',
    component: Suite1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suite1PageRoutingModule {}
