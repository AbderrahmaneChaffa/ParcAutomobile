import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutervoituresPage } from './ajoutervoitures.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutervoituresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutervoituresPageRoutingModule {}
