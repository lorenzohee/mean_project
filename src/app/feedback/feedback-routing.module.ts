import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback.component';
import { AuthGuard } from '../auth/auth-guard.service';


const routes: Routes = [{
  path: '',
  canActivate: [AuthGuard],
  component: FeedbackComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
