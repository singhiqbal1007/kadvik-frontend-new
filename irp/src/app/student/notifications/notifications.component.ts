import { Component, OnInit } from "@angular/core";
import { NotificationsService } from "./notifications.service";

@Component({
  selector: "app-noticeboard",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.css"]
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[];
  constructor(private _notificationService: NotificationsService) {}
  options = {};
  ngOnInit() {
    var prn = sessionStorage.getItem("prn");
    this._notificationService.findAll(prn).subscribe(data => {
      this.notifications = data;
    });
  }

}
