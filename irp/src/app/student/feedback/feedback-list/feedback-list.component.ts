import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FacultyService } from '../../faculty/services/faculty.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.scss']
})
export class FeedbackListComponent implements OnInit {

  private facultyList;

  constructor(private _facultyService: FacultyService) { }

  ngOnInit() {
   var prn: number = Number(sessionStorage.getItem('prn'));
   this._facultyService.getListByStudentPrn(prn).subscribe(
     (data) => {
      this.facultyList = data;
     }
   );
  }

}
