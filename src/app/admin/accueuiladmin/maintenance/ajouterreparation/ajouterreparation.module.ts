import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterreparationPageRoutingModule } from './ajouterreparation-routing.module';

import { AjouterreparationPage } from './ajouterreparation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterreparationPageRoutingModule
  ],
  declarations: [AjouterreparationPage]
})
export class AjouterreparationPageModule {}
