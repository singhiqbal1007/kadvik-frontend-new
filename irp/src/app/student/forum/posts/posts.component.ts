import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from '../models/Posts';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public post = new Posts();

  public getPost : Posts[];

  public counter:number;
  constructor(private router: Router,private postsService:PostsService) { }

  ngOnInit() {


    // this.postsService.findAll().subscribe(data=>{
    //   this.getPost=data;
    // });
  }

  //submit the post
  postSubmit(): void {
    this.postsService.postSubmit(this.post).subscribe(data=>{
      alert("Your Question is added!");
    })
  };

}
