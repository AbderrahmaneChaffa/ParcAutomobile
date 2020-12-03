import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscrptionPageRoutingModule } from './inscrption-routing.module';

import { InscrptionPage } from './inscrption.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscrptionPageRoutingModule
  ],
  declarations: [InscrptionPage]
})
export class InscrptionPageModule {}
