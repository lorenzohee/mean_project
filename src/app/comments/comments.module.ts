import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { SharedModule } from '../shared/shared.module';
import { CommentService } from './comment.service';


@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CommentsRoutingModule
  ],
  providers: [CommentService]
})
export class CommentsModule { }
