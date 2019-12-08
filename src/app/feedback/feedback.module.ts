import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FeedbackComponent } from './feedback.component';


@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeedbackRoutingModule
  ]
})
export class FeedbackModule { }
