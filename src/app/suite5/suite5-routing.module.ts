import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suite5Page } from './suite5.page';

const routes: Routes = [
  {
    path: '',
    component: Suite5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suite5PageRoutingModule {}
