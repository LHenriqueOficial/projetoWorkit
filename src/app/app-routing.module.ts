import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'screen-login',
    loadChildren: () => import('./screen-login/screen-login.module').then( m => m.ScreenLoginPageModule)
  },
  {
    path: 'sreen-inicial',
    loadChildren: () => import('./sreen-inicial/sreen-inicial.module').then( m => m.SreenInicialPageModule)
  },
  {
    path: 'scree-resgister',
    loadChildren: () => import('./scree-resgister/scree-resgister.module').then( m => m.ScreeResgisterPageModule)
  },
  {
    path: 'screen-professional-register',
    loadChildren: () => import('./screen-professional-register/screen-professional-register.module').then( m => m.ScreenProfessionalRegisterPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
