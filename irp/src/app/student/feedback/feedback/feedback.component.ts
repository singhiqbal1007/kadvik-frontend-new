import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../services/feedback.service';
import { Feedback } from '../models/feedback';
import { Faculty } from '../../faculty/models/faculty';
import { FacultyService } from '../../faculty/services/faculty.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  private faculty: Faculty = new Faculty();
  private flag: boolean = false;
  private feedback:Feedback = new Feedback();
  private isFilled:boolean;
  private alert:string;
  private loading: boolean = false;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _facultyService: FacultyService,
    private _feedbackService: FeedbackService
  ) { }

  ngOnInit() {
    var prn: number = Number(sessionStorage.getItem('prn'));
    this._facultyService.
      getListByStudentPrn(prn).
      subscribe((data) => {
        this.route.params.subscribe((param) => {
          for (const [key, faculty] of Object.entries(data)) {
            if (faculty['facultyId'] === Number(param['id'])) {
              this.faculty.facultyId = faculty['facultyId'];
              this.faculty.facultyName = faculty['facultyName'];
              this.faculty.subjectName = faculty['subjectName'];
              this.faculty.courseName = faculty['courseName'];
              this.flag = true;
            }
          }
          //If faculty does not teach the logged in student)
          if (this.flag === false) {
            this.router.navigate(['/default','feedback']);
          }
          //If facultyId is verified(i.e faculty teaches to the logged in student)
          //check if feedback is already filled for this faculty by the logged in student
          this._feedbackService.getFeedback(prn, this.faculty.facultyId).subscribe(
            (data) => {
              if (data === null) { //if feedback is not filled
                this.isFilled = false;
              }
              else { // if feedback is already filled
                this.feedback =  data;
                this.isFilled = true;
              }
            });
        })
      });
  }


  public submitFeedback(){
    this.loading = true;
    if(Object.keys(this.feedback).length < 5 || this.feedback.comments.length === 0){
      //If All fields are not filled
      this.alert = `<div class="alert text-center alert-danger">
      Please Fill All details before pressing submit. 
    </div>`
    this.loading = false;
    }
    else{
      //if all fields are filled 
      this.alert = '';
      this._feedbackService.addFeedback(this.feedback, this.faculty.facultyId).subscribe(
        (data) => {
          this.ngOnInit();
          //location.reload();
        },
        (err) => {
          console.log(err);
        }
      );
      
    }
  }

}
