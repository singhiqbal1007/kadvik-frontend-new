import { Routes } from "@angular/router";
import { TimeTableListComponent } from "app/admin/time-table-list/time-table-list.component";
import { RegisterComponent } from "app/admin/register/register.component";
import { TimeTableAdminComponent } from "app/admin/time-table-admin/time-table-admin.component";

export const MainAdminLayoutRoutes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: "register", component: RegisterComponent},
  { path: "timetable", component: TimeTableListComponent},
  { path: "timetable/:courseId", component: TimeTableAdminComponent}
];
