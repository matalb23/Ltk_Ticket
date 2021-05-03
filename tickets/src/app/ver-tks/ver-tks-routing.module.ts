import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerTksPage } from './ver-tks.page';

const routes: Routes = [
  {
    path: '',
    component: VerTksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerTksPageRoutingModule {}
