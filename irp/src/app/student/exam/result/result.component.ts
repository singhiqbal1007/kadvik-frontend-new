import { Component, OnInit } from '@angular/core';
import { QuizService } from '../examService/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  prn;

  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    if (parseInt(localStorage.getItem('qstProgress')) == 10) {
      this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.qstProgress = parseInt(localStorage.getItem('qstProgress'));
      this.quizService.questions = JSON.parse(localStorage.getItem('questions'));
      this.prn = sessionStorage.getItem('prn');
      //console.log(this.quizService.questions);
      this.quizService.getAnswers().subscribe(
        (data: any) => {
          //console.log(data);
          this.quizService.correctAnswerCounter = 0;
          this.quizService.questions.forEach((ele, i) => {
            if (ele.answer == data[i]['answer'])// checks whether select option matches database answer
            {
              this.quizService.correctAnswerCounter++;
              // console.log('hey'+data[i]['answer'])
            }
            ele.correct = data[i]['answer'];//sets correct options from database
            //console.log("correct record "+this.quizService.correctAnswerCounter);
            //console.log("correct"+ele.correct);
            //console.log("sub ans"+ele.answer);
          }
          );
        }
      );
    }
    else
      this.router.navigate(['/student', 'exam', 'quiz']);
  }

  // onSubmit(){
  //   this.quizService.submitScore().subscribe(()=>
  //   this.restart();

  //   );
  // }

  restart() {

    this.quizService.qstProgress = 0;
    localStorage.setItem('qstProgress', this.quizService.qstProgress.toString());
    localStorage.setItem('questions', "");
    this.quizService.seconds = 0;
    localStorage.setItem('seconds', this.quizService.seconds.toString());
    this.quizService.subjectId = 0;
    localStorage.setItem('subjectId', this.quizService.subjectId.toString());

    this.router.navigate(['/student', 'exam']);
  }

}
