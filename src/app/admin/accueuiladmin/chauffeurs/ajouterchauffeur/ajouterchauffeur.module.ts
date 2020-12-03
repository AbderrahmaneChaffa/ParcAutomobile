import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterchauffeurPageRoutingModule } from './ajouterchauffeur-routing.module';

import { AjouterchauffeurPage } from './ajouterchauffeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterchauffeurPageRoutingModule
  ],
  declarations: [AjouterchauffeurPage]
})
export class AjouterchauffeurPageModule {}
