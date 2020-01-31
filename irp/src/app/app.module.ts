import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './student/dashboard/dashboard.component';
import { UserProfileComponent } from './student/user-profile/user-profile.component';
import { NotificationsComponent } from './student/notifications/notifications.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './account/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LogoutComponent } from './account/logout/logout.component';
import { TimeTableListComponent } from './admin/time-table-list/time-table-list.component';
import { TimeTableAdminComponent } from './admin/time-table-admin/time-table-admin.component';
import { RegisterComponent } from './admin/register/register.component';
import { MainAdminLayoutComponent } from './layouts/main-admin-layout/main-admin-layout.component';
import { AdminComponentsModule } from './layouts/main-admin-layout/components/admin-components.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MainAdminLayoutComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    AdminComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
