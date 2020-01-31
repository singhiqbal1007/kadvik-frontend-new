import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from 'app/account/models/student';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private student:Student = new Student()
  constructor(private _studentService: StudentService) { }

  ngOnInit() {
    this._studentService.getStudentByPrn().subscribe(
      data => {
        this.student = data;
      }
    )
  }

}
