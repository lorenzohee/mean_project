import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { BlogDeactivateGuard } from './blog-form/blog-deactivate.guard';
import { AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [{
  path: '',
  component: BlogListComponent
}, {
  path: 'index',
  canActivate: [AuthGuard],
  component: BlogIndexComponent
}, {
  path: 'new',
  canActivate: [AuthGuard],
  component: BlogFormComponent,
  canDeactivate: [BlogDeactivateGuard]
}, {
  path: ':id',
  children: [
    {
      path: '',
      component: BlogDetailComponent
    }, {
      path: 'edit',
      canActivate: [AuthGuard],
      component: BlogFormComponent,
      canDeactivate: [BlogDeactivateGuard]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
