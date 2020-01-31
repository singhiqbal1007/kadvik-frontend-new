import { Component, OnInit } from '@angular/core';
import { ReportCardService } from '../examService/report-card.service';
import { StudentService } from 'app/student/student.service';
import { Student } from 'app/account/models/student';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  private student:Student = new Student();

  constructor(private reportService: ReportCardService, private _studentService: StudentService) { }
  
  ngOnInit() {
   this.reportService.getReport().subscribe(
     (data)=>{
       this.reportService.reports=data;
     },
     (err)=>{console.log(err)},
    // ()=>{console.log(this.reportService.reports);}
   );

   this._studentService.getStudentByPrn().subscribe(
    data => {
      this.student = data;
    }
  )
  }

}