import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChauffeursPageRoutingModule } from './chauffeurs-routing.module';

import { ChauffeursPage } from './chauffeurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChauffeursPageRoutingModule
  ],
  declarations: [ChauffeursPage]
})
export class ChauffeursPageModule {}
