import { Component, OnInit } from '@angular/core';
import { CourseService } from 'app/student/course/services/course.service';

@Component({
  selector: 'app-time-table-list',
  templateUrl: './time-table-list.component.html',
  styleUrls: ['./time-table-list.component.scss']
})
export class TimeTableListComponent implements OnInit {
  private courseList;

  constructor(private _courseService: CourseService) { }

  ngOnInit() {
   this._courseService.getAllCourse().subscribe(
     (data) => {
      this.courseList = data;
     }
   );
  }

}
