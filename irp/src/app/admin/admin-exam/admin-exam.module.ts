import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { QuestionComponent } from './question/question.component';



@NgModule({
  declarations: [ReportComponent, QuestionComponent],
  imports: [
    CommonModule
  ]
})
export class AdminExamModule { }
