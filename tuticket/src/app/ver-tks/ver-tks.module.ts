import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerTksPageRoutingModule } from './ver-tks-routing.module';

import { VerTksPage } from './ver-tks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerTksPageRoutingModule
  ],
  declarations: [VerTksPage]
})
export class VerTksPageModule {}
