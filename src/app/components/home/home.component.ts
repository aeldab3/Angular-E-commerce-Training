import { filter, map, Subscription } from 'rxjs';
import { NotificationService } from './../../services/notification.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  constructor(private _NotificationService: NotificationService) {}
  ngOnInit() {
    this.subscription = this._NotificationService
      .getNotifications()
      .pipe(
        map((msg) => `${msg} eldab3`),
        filter((msg) => msg.includes('cancelled'))
      )
      .subscribe({
        next: (notification) => {
          console.log(notification);
        },
        error: (err) => {
          console.log(err.message);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
