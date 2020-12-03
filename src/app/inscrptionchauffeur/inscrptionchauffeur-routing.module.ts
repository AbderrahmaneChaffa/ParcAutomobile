import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscrptionchauffeurPage } from './inscrptionchauffeur.page';

const routes: Routes = [
  {
    path: '',
    component: InscrptionchauffeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscrptionchauffeurPageRoutingModule {}
