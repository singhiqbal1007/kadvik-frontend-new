import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Student } from 'app/account/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  readonly rootUrl = "http://localhost:8080/api/student";

  public getStudentByPrn(){
    var prn = sessionStorage.getItem('prn')
    let params = new HttpParams();
    params = params.set("prn", prn);
    return this.http.get<Student>(this.rootUrl+"/getstudentbyprn", {params})
  }
}
