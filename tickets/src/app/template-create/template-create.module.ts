import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplateCreatePageRoutingModule } from './template-create-routing.module';

import { TemplateCreatePage } from './template-create.page';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    TemplateCreatePageRoutingModule
  ],
  declarations: [TemplateCreatePage]
})
export class TemplateCreatePageModule {}
