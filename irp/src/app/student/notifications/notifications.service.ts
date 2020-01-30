import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NotificationsService {
  readonly rootUrl = "http://localhost:8080/api/noticeboard";
  constructor(private http: HttpClient) {}

  public findAll(data): Observable<Notification[]> {
    let nid = sessionStorage.getItem("prn");
    let params = new HttpParams();
    params = params.set("page", data);
    return this.http.get<Notification[]>(this.rootUrl+"/getnoticeboard", { params });
  }
}
