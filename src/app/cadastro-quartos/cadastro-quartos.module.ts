import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroQuartosPageRoutingModule } from './cadastro-quartos-routing.module';

import { CadastroQuartosPage } from './cadastro-quartos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroQuartosPageRoutingModule
  ],
  declarations: [CadastroQuartosPage]
})
export class CadastroQuartosPageModule {}
