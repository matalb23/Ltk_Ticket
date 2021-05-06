import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Help3Page } from './help3.page';

const routes: Routes = [
  {
    path: '',
    component: Help3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Help3PageRoutingModule {}
