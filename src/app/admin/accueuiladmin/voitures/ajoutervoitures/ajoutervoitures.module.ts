import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutervoituresPageRoutingModule } from './ajoutervoitures-routing.module';

import { AjoutervoituresPage } from './ajoutervoitures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutervoituresPageRoutingModule
  ],
  declarations: [AjoutervoituresPage]
})
export class AjoutervoituresPageModule {}
