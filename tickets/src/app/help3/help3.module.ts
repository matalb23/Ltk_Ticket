import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Help3PageRoutingModule } from './help3-routing.module';

import { Help3Page } from './help3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Help3PageRoutingModule
  ],
  declarations: [Help3Page]
})
export class Help3PageModule {}
