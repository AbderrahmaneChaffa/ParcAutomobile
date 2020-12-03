import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoituresPage } from './voitures.page';

const routes: Routes = [
  {
    path: '',
    component: VoituresPage
  },
  {
    path: 'ajoutervoitures',
    loadChildren: () => import('./ajoutervoitures/ajoutervoitures.module').then( m => m.AjoutervoituresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoituresPageRoutingModule {}
