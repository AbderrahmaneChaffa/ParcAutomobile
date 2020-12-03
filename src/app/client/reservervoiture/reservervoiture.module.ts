import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservervoiturePageRoutingModule } from './reservervoiture-routing.module';

import { ReservervoiturePage } from './reservervoiture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservervoiturePageRoutingModule
  ],
  declarations: [ReservervoiturePage]
})
export class ReservervoiturePageModule {}
