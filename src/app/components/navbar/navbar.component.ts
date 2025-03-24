import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    this.isLoggedIn = !!localStorage.getItem('userEmail');
  }

  logout() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('purchasedGames');
    alert("Logged out successfully!");
    this.router.navigate(['/']);
    this.isLoggedIn = false;  // Update login status
  }
}
