import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Comments } from '../models/Comments';
import { CommentsService } from '../services/comments.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  postId:any;
  public comments =new Comments();
  constructor( private route: ActivatedRoute,private router: Router,private commentsService:CommentsService) { }
  ngOnInit() {}
  public postSubmit(): void {
    this.commentsService.postSubmit(this.comments,this.postId).subscribe(data=>{alert("New Comment added!");
    }) 
};
  
}
