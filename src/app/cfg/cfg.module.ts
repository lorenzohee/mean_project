import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CfgRoutingModule } from './cfg-routing.module';
import { CfgListComponent } from './cfg-list/cfg-list.component';
import { CfgDetailComponent } from './cfg-detail/cfg-detail.component';
import { CfgFormComponent } from './cfg-form/cfg-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CfgListComponent, CfgDetailComponent, CfgFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    CfgRoutingModule
  ]
})
export class CfgModule { }
