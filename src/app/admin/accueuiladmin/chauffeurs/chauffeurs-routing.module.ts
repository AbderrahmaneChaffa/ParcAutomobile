import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChauffeursPage } from './chauffeurs.page';

const routes: Routes = [
  {
    path: '',
    component: ChauffeursPage
  },
  {
    path: 'ajouterchauffeur',
    loadChildren: () => import('./ajouterchauffeur/ajouterchauffeur.module').then( m => m.AjouterchauffeurPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChauffeursPageRoutingModule {}
