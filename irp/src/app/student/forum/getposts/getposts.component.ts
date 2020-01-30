import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Posts } from "../models/Posts";
import { PostsService } from "../services/posts.service";

@Component({
  selector: "app-getposts",
  templateUrl: "./getposts.component.html",
  styleUrls: ["./getposts.component.scss"]
})
export class GetpostsComponent implements OnInit {
  constructor(private router: Router, private postsService: PostsService) {}
  public post = new Posts();

  public alert: String = "";
  public getPost: Posts[];
  public viewPost: Posts[];
  private updateSubscription: Subscription;
  public morePosts: boolean;
  public flag = true;
  private showMoreLoading: boolean = false;
  private askLoading: boolean = false;

  ngOnInit() {
    this.post.postText = "";
    if (this.flag == true) {
      this.flag = false;
    }
    this.morePosts = false;
    //this.updateSubscription = interval(4000).subscribe((val) => {
    this.postsService.getFirstThreePosts().subscribe(data => {
      this.getPost = data;
      //});
    });
  }

  //submit the post
  postSubmit(): void {
    this.askLoading = true;
    this.alert = "";
    if (this.post.postText.length < 1) {
      this.alert = `<div class="alert text-center alert-danger">
      Please Enter a Question. 
    </div>`;
    this.askLoading = false;
      return;
    }
    this.postsService.postSubmit(this.post).subscribe(data => {
      this.post.postText = "";
      this.alert = `<div class="alert text-center alert-success">
      Question added successfully. 
    </div>`;
    this.askLoading = false;
      this.ngOnInit();
    });
  }

  public showMore() {
    {
      this.showMoreLoading = true;//start loading icon
      console.log(this.getPost.length);
      this.morePosts = true;
      this.postsService.getAllPosts().subscribe(data => {
        this.getPost = data;
        this.showMoreLoading = false;//stop loading icon
      });
    }
  }
}
