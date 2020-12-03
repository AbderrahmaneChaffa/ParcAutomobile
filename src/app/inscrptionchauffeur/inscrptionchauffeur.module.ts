import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscrptionchauffeurPageRoutingModule } from './inscrptionchauffeur-routing.module';

import { InscrptionchauffeurPage } from './inscrptionchauffeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscrptionchauffeurPageRoutingModule
  ],
  declarations: [InscrptionchauffeurPage]
})
export class InscrptionchauffeurPageModule {}
