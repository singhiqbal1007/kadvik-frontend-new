import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTableAdminComponent } from './time-table-admin/time-table-admin.component';
import { TimeTableListComponent } from './time-table-list/time-table-list.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [TimeTableAdminComponent, TimeTableListComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
