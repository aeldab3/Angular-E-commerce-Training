import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn!: boolean;
  constructor(private _userAuthService: UserAuthService) {}
  ngOnInit(): void {
    this._userAuthService.getAuthSubject().subscribe({
      next: (response) => {
        this.isUserLoggedIn = response;
      },
    });
  }
}
