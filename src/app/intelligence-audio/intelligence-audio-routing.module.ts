import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntelligenceAudioComponent } from './intelligence-audio.component';


const routes: Routes = [{
  path: '',
  component: IntelligenceAudioComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntelligenceAudioRoutingModule { }
