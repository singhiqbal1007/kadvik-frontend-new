import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/student/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/student/feedback', title: 'Feedback',  icon: 'feedback', class: '' },
    { path: '/student/time-table', title: 'Time Table',  icon: 'content_paste', class: '' },
    { path: '/student/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/student/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/student/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/student/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/student/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/student/notifications', title: 'Notifications',  icon:'notifications', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
