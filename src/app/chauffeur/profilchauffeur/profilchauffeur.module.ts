import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilchauffeurPageRoutingModule } from './profilchauffeur-routing.module';

import { ProfilchauffeurPage } from './profilchauffeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilchauffeurPageRoutingModule
  ],
  declarations: [ProfilchauffeurPage]
})
export class ProfilchauffeurPageModule {}
