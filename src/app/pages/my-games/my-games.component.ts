import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.scss']
})
export class MyGamesComponent implements OnInit {
  purchasedGames: any[] = [];
  userEmail: string | null = '';

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('userEmail'); // ✅ Get logged-in user

    if (this.userEmail) {
      this.loadPurchasedGames();
    }
  }

  loadPurchasedGames() {
    this.purchasedGames = JSON.parse(localStorage.getItem(`games_${this.userEmail}`) || '[]');
  }
}
