import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTableAdminComponent } from './time-table-admin/time-table-admin.component';
import { TimeTableListComponent } from './time-table-list/time-table-list.component';



@NgModule({
  declarations: [TimeTableAdminComponent, TimeTableListComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
