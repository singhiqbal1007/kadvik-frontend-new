import { OnInit, Component, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { Observable, interval, Subscription } from "rxjs";
import { Comments } from "../models/Comments";
import { CommentsService } from "../services/comments.service";

@Component({
  selector: "app-getcomments",
  templateUrl: "./getcomments.component.html",
  styleUrls: ["./getcomments.component.scss"]
})
export class GetcommentsComponent implements OnInit {
  constructor(private router: Router, private commentsService: CommentsService, private route: ActivatedRoute) {}

  private postId: number;
  public getComment: Comments[];
  public comments: Comments = new Comments();
  public counter: number;
  private updateSubscription: Subscription;
  public finalcount: number;
  public moreComments: boolean;
  private addLoading: boolean = false;
  private showMoreLoading: boolean = false;
  public alert: String = "";

  ngOnInit() {
    this.comments.commentText = "";
    var data1 = this.route.snapshot.queryParamMap.get("postId");
    this.postId = Number(data1);
    this.moreComments = false;
    this.commentsService.findFirstThree(this.postId).subscribe(data => {
      this.getComment = data;
    });
  }

  public postSubmit() {
    this.alert = "";
    this.addLoading = true;
    if (this.comments.commentText.length < 1) {
      this.alert = `<div class="alert text-center alert-danger">
    Comment cannot be empty
  </div>`;
      this.addLoading = false;
      return;
    }
    this.counter++;
    {
      this.commentsService.postSubmit(this.comments, this.postId).subscribe(
        data => {
          // location.reload();--page reload
          this.commentsService.findFirstThree(this.postId).subscribe(data => {
            this.getComment = data;
            this.addLoading = false;
            this.comments.commentText = "";
            this.alert = `<div class="alert text-center alert-success">
            Your comment added
          </div>`;
            this.ngOnInit();
          });
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  public showMore() {
    {
      this.showMoreLoading = true; //show loader
      this.moreComments = true;
      this.commentsService.findAllComments(this.postId).subscribe(data => {
        this.getComment = data;
        this.showMoreLoading = false; //hide loader
      });
    }
  }
}
