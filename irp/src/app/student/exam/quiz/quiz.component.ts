import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../examService/quiz.service';
import { jsonpFactory } from '@angular/http/src/http_module';
import { SubjectsService } from '../examService/subjects.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  activate: number;
  progressPercent:number;

  constructor(private router: Router, private quizService: QuizService, private subjectService: SubjectsService) { }

  ngOnInit() {

    if (parseInt(localStorage.getItem('seconds')) < 1800) {
      this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.qstProgress = parseInt(localStorage.getItem('qstProgress'));
      this.progressPercent=(this.quizService.qstProgress+1)*10;
      this.quizService.questions = JSON.parse(localStorage.getItem('questions'));
      this.subjectService.subject= localStorage.getItem("subjectName");
      if (this.quizService.qstProgress == 10)
        this.router.navigate(['/student', 'exam', 'result']);
      else {
        if (this.quizService.examFlag == false)
          this.startTimer();

      }

    }
    else {
      this.quizService.seconds = 1800;
      this.quizService.qstProgress = 0;
      this.progressPercent=(this.quizService.qstProgress+1)*10;
      /* this.quizService.getQuestions().subscribe(
         (data: any) => {
           console.log('quizData'+ data);
           this.quizService.questions = data;
           this.startTimer();
         }
       );*/
      if (localStorage.getItem('subjects') == null) {
        this.getSubjectList();
      }
      this.quizService.getQuestionsBySubject().subscribe(
        (data: any) => {
          //console.log('quizDataByQst' + data);
          this.quizService.questions = data;
          this.startTimer();
        }
      );
    }
  }

  startTimer() {
    this.quizService.timer = setInterval(() => {
      localStorage.setItem('questions', JSON.stringify(this.quizService.questions));
      localStorage.setItem('qstProgress', this.quizService.qstProgress.toString());
      this.quizService.seconds--;
      localStorage.setItem('seconds', this.quizService.seconds.toString());
      if (this.quizService.seconds == 0) {
        this.onSubmit();
        window.alert("Time's Up");
      }
    }, 1000);
    //console.log(this.quizService.seconds);

  }

  getSubjectList() {
    this.router.navigate(['/student', 'exam']);
  }

  answer(qId, choice) {
    //console.log(this.quizService.qstProgress);
    this.quizService.questions[this.quizService.qstProgress].answer = choice;
    localStorage.setItem('questions', JSON.stringify(this.quizService.questions));
    this.next(this.quizService.qstProgress);
    localStorage.setItem('qstProgress', this.quizService.qstProgress.toString());
    this.progressPercent=(this.quizService.qstProgress+1)*10;

  }

  previous(qProgress) {

    if (this.quizService.qstProgress == 0)
      this.quizService.qstProgress = 9;
    else
      this.quizService.qstProgress--;
    this.activate = this.quizService.questions[this.quizService.qstProgress].answer;
    this.progressPercent=(this.quizService.qstProgress+1)*10;
  }

  next(qProgress) {
    if (this.quizService.qstProgress == 9)
      this.quizService.qstProgress = 0;
    else
      this.quizService.qstProgress++;
    this.activate = this.quizService.questions[this.quizService.qstProgress].answer;
    this.progressPercent=(this.quizService.qstProgress+1)*10;
  }

  onSubmit() {
    this.quizService.qstProgress = 10;
    localStorage.setItem('qstProgress', this.quizService.qstProgress.toString());
    this.progressPercent=(this.quizService.qstProgress+1)*10;
    clearInterval(this.quizService.timer);
    this.quizService.examFlag = false;
    this.router.navigate(['/student', 'exam', 'result']);
  }
}
