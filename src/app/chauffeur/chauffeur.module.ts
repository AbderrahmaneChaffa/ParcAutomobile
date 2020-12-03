import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChauffeurPageRoutingModule } from './chauffeur-routing.module';

import { ChauffeurPage } from './chauffeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChauffeurPageRoutingModule
  ],
  declarations: [ChauffeurPage]
})
export class ChauffeurPageModule {}
