import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Help4PageRoutingModule } from './help4-routing.module';

import { Help4Page } from './help4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Help4PageRoutingModule
  ],
  declarations: [Help4Page]
})
export class Help4PageModule {}
