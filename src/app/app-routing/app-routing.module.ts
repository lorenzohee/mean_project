import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'auth',
  loadChildren: 'app/auth/auth.module#AuthModule'
}, {
  path: 'admin',
  loadChildren: 'app/admin/admin.module#AdminModule'
}, {
  path: 'blogs',
  loadChildren: 'app/blog/blog.module#BlogModule'
}, {
  path: 'cfgs',
  loadChildren: 'app/cfg/cfg.module#CfgModule'
}, {
  path: 'intelligenceAudio',
  loadChildren: 'app/intelligence-audio/intelligence-audio.module#IntelligenceAudioModule'
}, {
  path: 'about',
  loadChildren: 'app/about/about.module#AboutModule'
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: []
})

export class AppRoutingModule { }
