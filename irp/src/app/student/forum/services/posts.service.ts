import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../models/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  seconds: number;
  timer;
  post:Posts;
  
  readonly rootUrl = "http://localhost:8080/api/posts";

  constructor(private http: HttpClient) { }

  public postSubmit(post: Posts) {

    let nid = sessionStorage.getItem('prn');
    console.log(nid);
    post.prn=nid;
    return this.http.post<any>(this.rootUrl+"/addposts", post);
  }

  public getFirstThreePosts():Observable<Posts[]>{

    return this.http.get<Posts[]>(this.rootUrl+"/getFirstThreePosts");
  }

  
  public getAllPosts():Observable<Posts[]>{

    return this.http.get<Posts[]>(this.rootUrl+"/getAllPosts");
  }

}
