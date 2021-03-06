import { Component, OnInit } from "@angular/core";
import { StudentService } from "app/student/student.service";
import { Student } from "app/account/models/student";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/student/notifications", title: "Notifications", icon: "notifications", class: "" },
  { path: "/student/time-table", title: "Time Table", icon: "content_paste", class: "" },
  { path: "/student/feedback", title: "Feedback", icon: "feedback", class: "" },
  { path: "/student/exam", title: "Exam", icon: "menu_book", class: "" },
  { path: "/student/report", title: "Reports", icon: "list", class: "" },
  { path: "/student/forum", title: "Forum", icon: "forum", class: ""},
  { path: "/student/user-profile", title: "User Profile", icon: "person", class: "" }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  student: Student = new Student();
  menuItems: any[];

  constructor(private _studentService: StudentService) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this._studentService.getStudentByPrn().subscribe(data => {
      this.student = data;
    });
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
