import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilchauffeurPage } from './profilchauffeur.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilchauffeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilchauffeurPageRoutingModule {}
