import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenancePage } from './maintenance.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenancePage
  },
  {
    path: 'ajouterreparation',
    loadChildren: () => import('./ajouterreparation/ajouterreparation.module').then( m => m.AjouterreparationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenancePageRoutingModule {}
