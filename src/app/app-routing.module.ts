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
    path: 'suite',
    loadChildren: () => import('./suite/suite.module').then( m => m.SuitePageModule)
  },
  {
    path: 'suite1',
    loadChildren: () => import('./suite1/suite1.module').then( m => m.Suite1PageModule)
  },
  {
    path: 'suite2',
    loadChildren: () => import('./suite2/suite2.module').then( m => m.Suite2PageModule)
  },
  {
    path: 'suite3',
    loadChildren: () => import('./suite3/suite3.module').then( m => m.Suite3PageModule)
  },
  {
    path: 'suite4',
    loadChildren: () => import('./suite4/suite4.module').then( m => m.Suite4PageModule)
  },
  {
    path: 'suite5',
    loadChildren: () => import('./suite5/suite5.module').then( m => m.Suite5PageModule)
  },
  {
    path: 'suite6',
    loadChildren: () => import('./suite6/suite6.module').then( m => m.Suite6PageModule)
  },
  {
    path: 'suitefm',
    loadChildren: () => import('./suitefm/suitefm.module').then( m => m.SuitefmPageModule)
  },
  {
    path: 'suiteid',
    loadChildren: () => import('./suiteid/suiteid.module').then( m => m.SuiteidPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 