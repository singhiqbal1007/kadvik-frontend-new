import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeTable } from 'app/student/timetable/models/TimeTable';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  readonly rootUrl = "http://localhost:8080/api/timetable/getTimeTableAdmin";
  readonly updateUrl="http://localhost:8080/api/timetable/updateTimeTable";
  constructor(private http: HttpClient) {}

  public getTimeTable(courseId): Observable<TimeTable[]> {
    let params = new HttpParams();
    console.log(courseId);
    params=params.set("courseId",courseId);
    return this.http.get<TimeTable[]>(this.rootUrl,{params});
  }

  public updateTimeTable(timetable): any{
    console.log(timetable);
    return this.http.post<any>(this.updateUrl,timetable);
  }
}
