import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntelligenceAudioRoutingModule } from './intelligence-audio-routing.module';
import { IntelligenceAudioComponent } from './intelligence-audio.component';


@NgModule({
  declarations: [IntelligenceAudioComponent],
  imports: [
    CommonModule,
    IntelligenceAudioRoutingModule
  ]
})
export class IntelligenceAudioModule { }
