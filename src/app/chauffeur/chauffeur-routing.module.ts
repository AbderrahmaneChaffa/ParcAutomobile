import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChauffeurPage } from './chauffeur.page';

const routes: Routes = [
  {
    path: '',
    component: ChauffeurPage
  },
  {
    path: 'profilchauffeur',
    loadChildren: () => import('./profilchauffeur/profilchauffeur.module').then( m => m.ProfilchauffeurPageModule)
  },
  {
    path: 'ajouterreparation',
    loadChildren: () => import('./ajouterreparation/ajouterreparation.module').then( m => m.AjouterreparationPageModule)
  },
  {
    path: 'historique',
    loadChildren: () => import('./historique/historique.module').then( m => m.HistoriquePageModule)
  },
  {
    path: 'aide',
    loadChildren: () => import('./aide/aide.module').then( m => m.AidePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChauffeurPageRoutingModule {}
