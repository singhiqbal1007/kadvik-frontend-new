import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeTable } from 'app/student/timetable/models/TimeTable';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {}

  public getTimeTable(courseId): Observable<TimeTable[]> {
    let params = new HttpParams();
    //console.log(courseId);
    params=params.set("courseId",courseId);
    return this.http.get<TimeTable[]>("http://localhost:8080/api/timetable/getTimeTableAdmin",{params});
  }

  public updateTimeTable(timetable): any{
    //console.log(timetable);
    return this.http.post<any>("http://localhost:8080/api/timetable/updateTimeTable",timetable);
  }

  public authenticate(email, password){
    var body = {
      "email":email,
      "password":password
    }

    return this.http.post<any>("http://localhost:8080/api/admin/authenticate",body);
  }

}
