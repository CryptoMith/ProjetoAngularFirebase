import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suite5PageRoutingModule } from './suite5-routing.module';

import { Suite5Page } from './suite5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suite5PageRoutingModule
  ],
  declarations: [Suite5Page]
})
export class Suite5PageModule {}
