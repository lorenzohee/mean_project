import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntelligenceAudioRoutingModule } from './intelligence-audio-routing.module';
import { IntelligenceAudioComponent } from './intelligence-audio.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [IntelligenceAudioComponent],
  imports: [
    CommonModule,
    SharedModule,
    IntelligenceAudioRoutingModule
  ]
})
export class IntelligenceAudioModule { }
