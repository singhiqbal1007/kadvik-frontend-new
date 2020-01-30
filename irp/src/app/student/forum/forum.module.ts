import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetpostsComponent } from './getposts/getposts.component';
import { CommentsComponent } from './comments/comments.component';
import { GetcommentsComponent } from './getcomments/getcomments.component';



@NgModule({
  declarations: [GetpostsComponent, CommentsComponent, GetcommentsComponent],
  imports: [
    CommonModule
  ]
})
export class ForumModule { }
