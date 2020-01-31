import { Component, OnInit } from '@angular/core';
import { Register } from '../../account/models/register';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../account/services/account.service';
import { CourseAdmin } from 'app/admin/model/CourseAdmin';
import { CourseService } from 'app/student/course/services/course.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private student:Register = new Register();
  private cPassword:string;
  private courses:any[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _accountService: AccountService,
    private _courseService: CourseService
  ) { }

  ngOnInit() {
    this._courseService.getAllCourse().subscribe(
      (data) => {
       this.courses = data;
      }
    );
  }
  public registerStudent(){
    //console.log(this.student);
    if(this.cPassword==this.student.password)
     this._accountService.register(this.student).subscribe(
       (data) => {
          this.router.navigate(['/admin/register']);
        },
        (err) => {
          console.log(err);
        }
      );
     
}
}
