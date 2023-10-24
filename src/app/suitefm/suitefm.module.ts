import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuitefmPageRoutingModule } from './suitefm-routing.module';

import { SuitefmPage } from './suitefm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuitefmPageRoutingModule
  ],
  declarations: [SuitefmPage]
})
export class SuitefmPageModule {}
