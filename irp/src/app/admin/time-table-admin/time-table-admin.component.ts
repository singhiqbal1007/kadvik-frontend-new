import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeTable } from 'app/student/timetable/models/TimeTable';
import { CourseService } from 'app/student/course/services/course.service';
import {  AdminService } from '../services/admin-service.service';
import { CourseAdmin } from '../model/CourseAdmin';

@Component({
  selector: 'app-time-table-admin',
  templateUrl: './time-table-admin.component.html',
  styleUrls: ['./time-table-admin.component.scss']
})
export class TimeTableAdminComponent implements OnInit {
  private course: CourseAdmin = new CourseAdmin;
  private timeTable:TimeTable[];
  private flag: boolean = false;
  private isFilled:boolean;
  private alert:string;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _courseService: CourseService,
    private _adminService:AdminService
  ) { }

  ngOnInit() {
    this._courseService.getAllCourse().subscribe((data) => {
        this.route.params.subscribe((param) => {
          for (const [key, course] of Object.entries(data)) {
            console.log(course['courseId']);
            if (course['courseId'] == param['courseId']) {
              this.course.courseId = Number(course['courseId']);
              this.course.courseName = course['courseName'];
              console.log(this.course.courseName);
              this.flag = true;
            }
          }
          if (this.flag === false) {
            this.router.navigate(['/','courses']);
          }
          
          
          
           this._adminService.getTimeTable(this.course.courseId).subscribe(
             (data) => {
               if (data === null) { //if feedback is not filled
                 this.isFilled = false;
               }
               else { // if feedback is already filled
                 this.timeTable =  data;
                 this.isFilled = true;
               }
             });
        })
      });
  }


   public submitTimeTable(){
     this.timeTable.forEach(data=>{
       data.courseId=Number(this.course.courseId);
     })
      this._adminService.updateTimeTable(this.timeTable).subscribe(
        (data) => {
           this.router.navigate(['/courses']);
         },
         (err) => {
           console.log(err);
         }
       );
      
}
}