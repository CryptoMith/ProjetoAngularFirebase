import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuitePageRoutingModule } from './suite-routing.module';

import { SuitePage } from './suite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuitePageRoutingModule
  ],
  declarations: [SuitePage]
})
export class SuitePageModule {}
