import { Component, OnInit } from '@angular/core';

import { TimetableService } from './services/timetable.service';
import { TimeTable } from './models/TimeTable';
import { CourseService } from '../course/services/course.service';
import { Course } from '../course/models/course';


@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  timeTable: TimeTable[];
  course: Course = new Course();
  constructor(private timeTableService: TimetableService, private _courseService: CourseService) { }

  ngOnInit() {
    var data=sessionStorage.getItem('prn');
    this.timeTableService.findAll(data).subscribe(data=>{
      this.timeTable=data;
    });
    this._courseService.getCourseByStudentPrn(Number(data)).subscribe(
      (course) => {
        this.course = course;
      }
    )
}
}
