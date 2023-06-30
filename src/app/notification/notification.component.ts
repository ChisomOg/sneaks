import { Component, OnInit } from '@angular/core';
import { NotificationData } from '../serice/notification-data.model';
import { NotificationService } from '../serice/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notification?: NotificationData[]

  timeout: any

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.notification.subscribe((notification: NotificationData) => {
      this.notification = Array(notification)

      clearTimeout(this.timeout)

    this.timeout = setTimeout(() => {
      
        this.notification = undefined
      }, notification.duration)
    })
  }

}
