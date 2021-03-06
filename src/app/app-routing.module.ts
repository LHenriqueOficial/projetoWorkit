import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sreen-inicial',
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
  },
  {
    path: 'screen-bank-account-register',
    loadChildren: () => import('./screen-bank-account-register/screen-bank-account-register.module').then( m => m.ScreenBankAccountRegisterPageModule)
  },
  {
    path: 'screen-update-profile',
    loadChildren: () => import('./screen-update-profile/screen-update-profile.module').then( m => m.ScreenUpdateProfilePageModule)
  },
  {
    path: 'screen-address-register',
    loadChildren: () => import('./screen-address-register/screen-address-register.module').then( m => m.ScreenAddressRegisterPageModule)
  },
  {
    path: 'screen-person-register',
    loadChildren: () => import('./screen-person-register/screen-person-register.module').then( m => m.ScreenPersonRegisterPageModule)
  },
  {
    path: 'screen-home',
    loadChildren: () => import('./screen-home/screen-home.module').then( m => m.ScreenHomePageModule)
  },
  {
    path: 'screen-usuarios',
    loadChildren: () => import('./screen-usuarios/screen-usuarios.module').then( m => m.ScreenUsuariosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
