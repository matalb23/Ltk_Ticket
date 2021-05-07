import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerTkPage } from './ver-tk.page';

const routes: Routes = [
  {
    path: '',
    component: VerTkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerTkPageRoutingModule {}
