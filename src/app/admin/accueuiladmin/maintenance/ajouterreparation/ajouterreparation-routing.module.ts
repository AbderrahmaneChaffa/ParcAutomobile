import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterreparationPage } from './ajouterreparation.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterreparationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterreparationPageRoutingModule {}
