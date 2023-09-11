import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suite6PageRoutingModule } from './suite6-routing.module';

import { Suite6Page } from './suite6.page';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suite6PageRoutingModule,
    RouterLink
  ],
  declarations: [Suite6Page]
})
export class Suite6PageModule {}
