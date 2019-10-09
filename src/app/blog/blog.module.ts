import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BlogTypePipe } from '../pipe/blog-type.pipe';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [BlogTypePipe],
  declarations: [BlogListComponent, BlogDetailComponent, BlogFormComponent, BlogTypePipe]
})
export class BlogModule { }
