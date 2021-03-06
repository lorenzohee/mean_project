import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'auth',
  loadChildren: () => import('../auth/auth.module').then(mod => mod.AuthModule)
}, {
  path: 'admin',
  loadChildren: () => import('../admin/admin.module').then(mod => mod.AdminModule),
  canLoad: [AuthGuard]
}, {
  path: 'blogs',
  loadChildren: () => import('../blog/blog.module').then(mod => mod.BlogModule)
}, {
  path: 'method',
  loadChildren: () => import('../blog/blog.module').then(mod => mod.BlogModule)
}, {
  path: 'tech',
  loadChildren: () => import('../blog/blog.module').then(mod => mod.BlogModule)
}, {
  path: 'things',
  loadChildren: () => import('../blog/blog.module').then(mod => mod.BlogModule)
}, {
  path: 'cfgs',
  loadChildren: () => import('../cfg/cfg.module').then(mod => mod.CfgModule),
  canLoad: [AuthGuard]
}, {
  path: 'intelligenceAudio',
  loadChildren: () => import('../intelligence-audio/intelligence-audio.module').then(mod => mod.IntelligenceAudioModule)
}, {
  path: 'about',
  loadChildren: () => import('../about/about.module').then(mod => mod.AboutModule)
}, {
  path: 'comments',
  loadChildren: () => import('../comments/comments.module').then(mod => mod.CommentsModule)
}, {
  path: 'feedback',
  loadChildren: () => import('../feedback/feedback.module').then(mod => mod.FeedbackModule),
  canLoad: [AuthGuard]
}, {
  path: 'dashboard',
  loadChildren: () => import('../dashboard/dashboard.module').then(mod => mod.DashboardModule)
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
