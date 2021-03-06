import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
   readonly rootUrl = "http://localhost:8080/api/";

   constructor(private http: HttpClient) { }

  public authenticate(email, password): Observable<any> {
    var body = {
      "email": email,
      "password": password
    }
    // return this.http.post<any>(this.rootUrl+"student/authenticate", body).pipe(
    //   map(
    //     userData => {
    //       sessionStorage.setItem('prn', userData);
    //       return userData;
    //     }
    //   )
    // );
    return this.http.post<any>(this.rootUrl+"/student/authenticate", body);
  }

  public isUserLoggedIn() {
    var user = sessionStorage.getItem('prn')
    return !(user === null)
  }

  public logOut() {
    sessionStorage.clear();
    // sessionStorage.removeItem('prn');
    // sessionStorage.removeItem('adminId');
    localStorage.clear();
  }

  public register(student: Register) {
    return this.http.post<Student>(this.rootUrl+"/student/register", student);
  }


}