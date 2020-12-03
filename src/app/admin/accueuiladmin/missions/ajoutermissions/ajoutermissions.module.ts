import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutermissionsPageRoutingModule } from './ajoutermissions-routing.module';

import { AjoutermissionsPage } from './ajoutermissions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutermissionsPageRoutingModule
  ],
  declarations: [AjoutermissionsPage]
})
export class AjoutermissionsPageModule {}
