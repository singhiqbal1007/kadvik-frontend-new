import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comments } from '../models/Comments';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  postId:number;
  comments:Comments;
  
  readonly rootUrl = "http://localhost:8080/api/comments";
  
  constructor(private http: HttpClient) { 

  }

  public postSubmit(comments: Comments,postId) {
    
    const body = {
      prn: Number(sessionStorage.getItem("prn")),
      postId:Number(postId),
      commentText: comments.commentText,
    };
    console.log(body);
    let nid = sessionStorage.getItem('prn');
    console.log(nid);
    let nid1=Number(nid);
    comments.prn=nid1;
    return this.http.post<any>(this.rootUrl+"/addcomments", body);
  }

  public findFirstThree(data):Observable<Comments[]>{
    let params= new HttpParams();
    console.log("pid",data)
    params = params.set("postId",data);
    console.log("params",params);
    return this.http.get<Comments[]>(this.rootUrl+"/getFirstThree",{params});
  }

  public getNumberOfComments(data){
    let params= new HttpParams();
    params = params.set("count",data);
    return this.http.get<any>(this.rootUrl+"/getNumberOfComments",{params})
  }
  public findAllComments(data):Observable<Comments[]>{
    let params= new HttpParams();
    console.log("pid",data)
    params = params.set("postId",data);
    console.log("params",params);
    return this.http.get<Comments[]>(this.rootUrl+"/getAllComments",{params});
  }
  
}
