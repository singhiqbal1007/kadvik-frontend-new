import { OnInit, Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, interval, Subscription } from 'rxjs';
import { Comments } from '../models/Comments';
import { CommentsService } from '../services/comments.service';



@Component({
  selector: 'app-getcomments',
  templateUrl: './getcomments.component.html',
  styleUrls: ['./getcomments.component.scss']
})
export class GetcommentsComponent implements OnInit {
  postId: number;

  // @Input() postId:number;
  constructor(private router: Router,private commentsService:CommentsService,private route: ActivatedRoute) { }
  public getComment : Comments[];
  public comments: Comments=new Comments();
  public counter:number;
  private updateSubscription: Subscription;
  public finalcount:number;
  public moreComments:boolean;


//   ngOnInit() { ----normally working
// //    this.commentsService.getNumberOfComments(this.counter)
// var data1 = this.route.snapshot.queryParamMap.get('firstParamKey');
// console.log(data1);
// console.log(this.postId);    
//   var data=this.postId;
//     console.log("getcomm",data);
//     this.commentsService.findAll(data).subscribe(data=>{
//       this.getComment=data;
//       // console.log(this.getComment);
//   });
// }


  ngOnInit() { 
    // this.updateSubscription = interval(4000).subscribe((val) => {
    var data1 = this.route.snapshot.queryParamMap.get('postId');
    this.postId = Number(data1);
    this.moreComments=false;
    console.log("asa"+this.moreComments);
    this.commentsService.findFirstThree(this.postId).subscribe(data=>{
      this.getComment=data;
      // this.refreshData(); //working for ajax
  });
// });
}

public postSubmit(){
  this.counter++;
  {
    this.commentsService.postSubmit(this.comments, this.postId).subscribe(
      (data) => {
        console.log("hi");
       // location.reload();--page reload
       console.log("testing",data);
        this.commentsService.findFirstThree(data).subscribe(data=>
          {
            this.getComment=data;
            console.log("inside co");
            this.ngOnInit();
          });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

  public showMore(){
    {
      this.moreComments=true;
      console.log("on click"+this.moreComments);
      this.commentsService.findAllComments(this.postId).subscribe(data=>{
        this.getComment=data;
    });
    }
  }
}

//  //ajax 
//  private refreshData(): void {
//   this.commentsSubscription = this.commentsService.findAll(this.postId).subscribe(comments => {
//       this.getComment = comments;
//       this.subscribeToData();
//   });
// }

// private subscribeToData(): void {
//   this.timerSubscription = Observable.timer(5000).first().subscribe(() => this.refreshData());
// }


// ngOnInit() {
//   this.updateSubscription = interval(4000).subscribe((val) => 
//   { 
//       this.postsService.findAll().subscribe(data=>
//         {this.getPost=data;
//         });
// });
// }