import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private facultyListByStudentPrn;

  constructor(private http : HttpClient) { }

  readonly rootUrl = "http://localhost:8080/api/course";

  public getCourseByStudentPrn(prn:number): Observable<Course>{
    var body = {
      "prn" : prn
    }

    return this.http.post<Course>(this.rootUrl+"/getCourseByStudentPrn", body);
  }

}
