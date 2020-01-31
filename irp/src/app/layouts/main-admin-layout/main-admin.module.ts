import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainAdminLayoutRoutes } from './main-admin-layout.routing';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { TimeTableListComponent } from 'app/admin/time-table-list/time-table-list.component';
import { RegisterComponent } from 'app/admin/register/register.component';
import { TimeTableAdminComponent } from 'app/admin/time-table-admin/time-table-admin.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MainAdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule
  ],
  declarations: [
    TimeTableListComponent,
    RegisterComponent,
    TimeTableAdminComponent
  ]
})

export class MainAdminLayoutModule {}
