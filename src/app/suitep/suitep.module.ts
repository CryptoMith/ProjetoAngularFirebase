import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuitepPageRoutingModule } from './suitep-routing.module';

import { SuitepPage } from './suitep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuitepPageRoutingModule
  ],
  declarations: [SuitepPage]
})
export class SuitepPageModule {}
