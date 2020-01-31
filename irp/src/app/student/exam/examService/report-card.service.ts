import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from '../models/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportCardService {

  rootUrl = "http://localhost:8080/api";
  sId;
  sMarks;
  sName;
  reports:Report[];


  constructor(private http: HttpClient) { }

  getReport(): Observable<any> {
    var body = {
      "prn": sessionStorage.getItem("prn")
    }
    return this.http.post<any>(this.rootUrl + "/result/report", body);
  }
}
