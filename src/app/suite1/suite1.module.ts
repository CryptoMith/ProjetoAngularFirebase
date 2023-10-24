import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suite1PageRoutingModule } from './suite1-routing.module';

import { Suite1Page } from './suite1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suite1PageRoutingModule
  ],
  declarations: [Suite1Page]
})
export class Suite1PageModule {}
