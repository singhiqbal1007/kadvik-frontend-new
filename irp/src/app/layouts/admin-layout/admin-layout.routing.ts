import { Routes } from "@angular/router";
import { DashboardComponent } from "../../student/dashboard/dashboard.component";
import { UserProfileComponent } from "../../student/user-profile/user-profile.component";
import { TableListComponent } from "../../student/table-list/table-list.component";
import { IconsComponent } from "../../student/icons/icons.component";
import { TypographyComponent } from "../../student/typography/typography.component";
import { MapsComponent } from "../../student/maps/maps.component";
import { NotificationsComponent } from "../../student/notifications/notifications.component";
import { UpgradeComponent } from "../../student/upgrade/upgrade.component";
import { FeedbackListComponent } from "../../student/feedback/feedback-list/feedback-list.component";
import { FeedbackComponent } from "../../student/feedback/feedback/feedback.component";
import { TimetableComponent } from "../../student/timetable/timetable.component";
import { SubjectsComponent } from "app/student/exam/subjects/subjects.component";
import { QuizComponent } from "app/student/exam/quiz/quiz.component";
import { ResultComponent } from "app/student/exam/result/result.component";

export const AdminLayoutRoutes: Routes = [
  // {
  //   path: '',
  //   children: [ {
  //     path: 'dashboard',
  //     component: DashboardComponent
  // }]}, {
  // path: '',
  // children: [ {
  //   path: 'userprofile',
  //   component: UserProfileComponent
  // }]
  // }, {
  //   path: '',
  //   children: [ {
  //     path: 'icons',
  //     component: IconsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'notifications',
  //         component: NotificationsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'maps',
  //         component: MapsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'typography',
  //         component: TypographyComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'upgrade',
  //         component: UpgradeComponent
  //     }]
  // }
  { path: '', redirectTo: '/notifications', pathMatch: 'full' },
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "table-list", component: TableListComponent },
  { path: "typography", component: TypographyComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "upgrade", component: UpgradeComponent },
  { path: "feedback", component: FeedbackListComponent },
  { path: "feedback/:id", component: FeedbackComponent },
  { path: "time-table", component: TimetableComponent },
  { path: "exam", component: SubjectsComponent },
  { path: "exam/quiz", component: QuizComponent },
  { path: "exam/result", component: ResultComponent }
];
