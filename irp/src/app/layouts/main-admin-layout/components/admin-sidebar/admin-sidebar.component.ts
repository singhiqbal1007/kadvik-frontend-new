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
  { path: "/admin/register", title: "Register", icon: "home", class: ""},
  { path: "/admin/timetable", title: "Time Table", icon: "home", class: ""},
  { path: "/admin/report", title: "Reports", icon: "home", class: ""},
  { path: "/admin/question", title: "Quiz Question", icon: "home", class: ""}


];

@Component({
  selector: "app-admin-sidebar",
  templateUrl: "./admin-sidebar.component.html",
  styleUrls: ["./admin-sidebar.component.css"]
})
export class AdminSidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
