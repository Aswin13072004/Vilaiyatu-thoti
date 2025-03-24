import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.scss']
})
export class MyGamesComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string = '';
  purchasedGames: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('currentUser') || '';
    this.isLoggedIn = !!this.username;

    if (this.isLoggedIn) {
      const gamesData = localStorage.getItem(`games_${this.username}`); // ✅ Fix the key
      this.purchasedGames = gamesData ? JSON.parse(gamesData) : [];
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
