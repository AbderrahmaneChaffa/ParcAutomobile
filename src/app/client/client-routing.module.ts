import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientPage } from './client.page';

const routes: Routes = [
  {
    path: '',
    component: ClientPage
  },
  {
    path: 'profilclient',
    loadChildren: () => import('./profilclient/profilclient.module').then( m => m.ProfilclientPageModule)
  },
  {
    path: 'reservervoiture',
    loadChildren: () => import('./reservervoiture/reservervoiture.module').then( m => m.ReservervoiturePageModule)
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
export class ClientPageRoutingModule {}
