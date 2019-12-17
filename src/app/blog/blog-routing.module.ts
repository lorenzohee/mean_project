import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogIndexComponent } from './blog-index/blog-index.component';

const routes: Routes = [{
  path: '',
  component: BlogListComponent
}, {
  path: 'index',
  component: BlogIndexComponent
}, {
  path: 'new',
  component: BlogFormComponent
}, {
  path: ':id',
  children: [
    {
      path: '',
      component: BlogDetailComponent
    }, {
      path: 'edit',
      component: BlogFormComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
