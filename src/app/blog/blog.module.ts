import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogTypePipe } from '../pipe/blog-type.pipe';

import { EditorModule } from '@tinymce/tinymce-angular';
import { CommentComponent } from '../shared/comment/comment/comment.component';
import { CommentItemComponent } from '../shared/comment/comment-item/comment-item.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { BlogService } from './blog.service';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    EditorModule
  ],
  providers: [MatDatepickerModule, BlogTypePipe, BlogService],
  declarations: [BlogListComponent, BlogDetailComponent, BlogFormComponent, BlogTypePipe,
    CommentComponent, CommentItemComponent, SidebarComponent, BlogIndexComponent]
})
export class BlogModule { }
