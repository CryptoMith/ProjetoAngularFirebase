import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuitedxPageRoutingModule } from './suitedx-routing.module';

import { SuitedxPage } from './suitedx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuitedxPageRoutingModule
  ],
  declarations: [SuitedxPage]
})
export class SuitedxPageModule {}
