import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../student/dashboard/dashboard.component';
import { UserProfileComponent } from '../../student/user-profile/user-profile.component';
import { TableListComponent } from '../../student/table-list/table-list.component';
import { TypographyComponent } from '../../student/typography/typography.component';
import { IconsComponent } from '../../student/icons/icons.component';
import { MapsComponent } from '../../student/maps/maps.component';
import { NotificationsComponent } from '../../student/notifications/notifications.component';
import { UpgradeComponent } from '../../student/upgrade/upgrade.component';

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
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    TimetableComponent,
    FeedbackComponent,
    FeedbackListComponent
  ]
})

export class AdminLayoutModule {}
