import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  destorySubject = new Subject(); 

  constructor(private authService : AuthService, private router : Router) {
    authService.authStatus.pipe(takeUntil(this.destorySubject))
      .subscribe(result => this.isLoggedIn = result);
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  ngOnDestroy() {
    this.destorySubject.next(true);
    this.destorySubject.complete();
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
