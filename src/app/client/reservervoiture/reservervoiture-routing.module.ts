import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservervoiturePage } from './reservervoiture.page';

const routes: Routes = [
  {
    path: '',
    component: ReservervoiturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservervoiturePageRoutingModule {}
