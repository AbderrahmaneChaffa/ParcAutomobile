import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoituresPageRoutingModule } from './voitures-routing.module';

import { VoituresPage } from './voitures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoituresPageRoutingModule
  ],
  declarations: [VoituresPage]
})
export class VoituresPageModule {}
