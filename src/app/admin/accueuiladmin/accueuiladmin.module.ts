import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueuiladminPageRoutingModule } from './accueuiladmin-routing.module';

import { AccueuiladminPage } from './accueuiladmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueuiladminPageRoutingModule
  ],
  declarations: [AccueuiladminPage]
})
export class AccueuiladminPageModule {}
