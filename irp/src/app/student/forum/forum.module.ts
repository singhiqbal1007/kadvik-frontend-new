import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetpostsComponent } from './getposts/getposts.component';
import { GetcommentsComponent } from './getcomments/getcomments.component';



@NgModule({
  declarations: [GetpostsComponent, GetcommentsComponent],
  imports: [
    CommonModule
  ]
})
export class ForumModule { }
