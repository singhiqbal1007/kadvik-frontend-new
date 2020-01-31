import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserProfileComponent } from '../../student/user-profile/user-profile.component';
import { NotificationsComponent } from '../../student/notifications/notifications.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { FeedbackComponent } from '../../student/feedback/feedback/feedback.component';
import { FeedbackListComponent } from '../../student/feedback/feedback-list/feedback-list.component';
import { TimetableComponent } from '../../student/timetable/timetable.component';
import { ExamModule } from 'app/student/exam/exam.module';
import { SubjectsComponent } from 'app/student/exam/subjects/subjects.component';
import { QuizComponent } from 'app/student/exam/quiz/quiz.component';
import { ResultComponent } from 'app/student/exam/result/result.component';
import { FeedbackModule } from 'app/student/feedback/feedback.module';
import { ForumModule } from 'app/student/forum/forum.module';
import { GetcommentsComponent } from 'app/student/forum/getcomments/getcomments.component';
import { GetpostsComponent } from 'app/student/forum/getposts/getposts.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ExamModule
  ],
  declarations: [
    UserProfileComponent,
    NotificationsComponent,
    TimetableComponent,
    FeedbackComponent,
    FeedbackListComponent,
    GetpostsComponent,
    GetcommentsComponent,
  ]
})

export class AdminLayoutModule {}
