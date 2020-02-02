import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CfgRoutingModule } from './cfg-routing.module';
import { CfgListComponent } from './cfg-list/cfg-list.component';
import { CfgDetailComponent } from './cfg-detail/cfg-detail.component';
import { CfgFormComponent } from './cfg-form/cfg-form.component';
import { SharedModule } from '../shared/shared.module';
import { CfgService } from './cfg.service';


@NgModule({
  declarations: [CfgListComponent, CfgDetailComponent, CfgFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    CfgRoutingModule
  ],
  providers: [CfgService]
})
export class CfgModule { }
