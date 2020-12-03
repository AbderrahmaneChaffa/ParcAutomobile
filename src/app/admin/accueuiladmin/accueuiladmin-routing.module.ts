import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueuiladminPage } from './accueuiladmin.page';

const routes: Routes = [
  {
    path: '',
    component: AccueuiladminPage
  },
  {
    path: 'voitures',
    loadChildren: () => import('./voitures/voitures.module').then( m => m.VoituresPageModule)
  },
  {
    path: 'chauffeurs',
    loadChildren: () => import('./chauffeurs/chauffeurs.module').then( m => m.ChauffeursPageModule)
  },
  {
    path: 'missions',
    loadChildren: () => import('./missions/missions.module').then( m => m.MissionsPageModule)
  },
  {
    path: 'maintenance',
    loadChildren: () => import('./maintenance/maintenance.module').then( m => m.MaintenancePageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueuiladminPageRoutingModule {}
