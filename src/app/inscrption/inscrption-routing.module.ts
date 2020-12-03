import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscrptionPage } from './inscrption.page';

const routes: Routes = [
  {
    path: '',
    component: InscrptionPage
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscrptionPageRoutingModule {}
