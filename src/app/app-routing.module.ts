import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inscrption',
    loadChildren: () => import('./inscrption/inscrption.module').then( m => m.InscrptionPageModule)
  },
  {
    path: 'accueuiladmin',
    loadChildren: () => import('./admin/accueuiladmin/accueuiladmin.module').then( m => m.AccueuiladminPageModule)
  },
  {
    path: 'inscrptionchauffeur',
    loadChildren: () => import('./inscrptionchauffeur/inscrptionchauffeur.module').then( m => m.InscrptionchauffeurPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'chauffeur',
    loadChildren: () => import('./chauffeur/chauffeur.module').then( m => m.ChauffeurPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
