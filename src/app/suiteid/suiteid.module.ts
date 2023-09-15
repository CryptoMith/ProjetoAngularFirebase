import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuiteidPageRoutingModule } from './suiteid-routing.module';

import { SuiteidPage } from './suiteid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuiteidPageRoutingModule
  ],
  declarations: [SuiteidPage]
})
export class SuiteidPageModule {}
