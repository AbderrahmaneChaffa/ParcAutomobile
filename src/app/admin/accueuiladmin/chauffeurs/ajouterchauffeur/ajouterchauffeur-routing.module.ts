import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterchauffeurPage } from './ajouterchauffeur.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterchauffeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterchauffeurPageRoutingModule {}
