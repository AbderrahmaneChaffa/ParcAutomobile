import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutermissionsPage } from './ajoutermissions.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutermissionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutermissionsPageRoutingModule {}
