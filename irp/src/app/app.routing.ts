import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './account/login/login.component';
import { LogoutComponent } from './account/logout/logout.component';
import { TimeTableListComponent } from './admin/time-table-list/time-table-list.component';
import { TimeTableAdminComponent } from './admin/time-table-admin/time-table-admin.component';
import { RegisterComponent } from './admin/register/register.component';
import { MainAdminLayoutComponent } from './layouts/main-admin-layout/main-admin-layout.component';

const routes: Routes =[
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'student', redirectTo: '/student/notifications', pathMatch: 'full' },
  { path: 'student', component: AdminLayoutComponent, canActivate: [AuthGuardService],
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  { path: 'admin', redirectTo: '/admin/register', pathMatch: 'full' },
  { path: 'admin', component: MainAdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/main-admin-layout/main-admin.module#MainAdminLayoutModule'
    }]
  },
  { path: '**', redirectTo: '/student/notifications', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
