import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'template-create/:username',
    loadChildren: () => import('./template-create/template-create.module').then( m => m.TemplateCreatePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./auth/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'help2',
    loadChildren: () => import('./help2/help2.module').then( m => m.Help2PageModule)
  },
  {
    path: 'help3',
    loadChildren: () => import('./help3/help3.module').then( m => m.Help3PageModule)
  },
  {
    path: 'help4',
    loadChildren: () => import('./help4/help4.module').then( m => m.Help4PageModule)
  },
  {
    path: 'ver-tks/:tipo',
    loadChildren: () => import('./ver-tks/ver-tks.module').then( m => m.VerTksPageModule)
  },
  {
    path: 'mensaje',
    loadChildren: () => import('./mensaje/mensaje.module').then( m => m.MensajePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }