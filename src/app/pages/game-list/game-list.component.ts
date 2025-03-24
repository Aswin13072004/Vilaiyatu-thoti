import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games: any[] = [];
  searchTerm: string = ''; // ✅ Search term for filtering
  userEmail: string | null = null; // ✅ Store logged-in user

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('currentUser'); // ✅ Get logged-in user
    this.fetchGames();
  }

  fetchGames(): void {
    this.gameService.getGames().subscribe((response: { results: any[] }) => {
      this.games = response.results;
    });
  }

  buyGame(game: any) {
    this.userEmail = localStorage.getItem('currentUser'); // ✅ Refresh localStorage check
  
    if (!this.userEmail || this.userEmail.trim() === '') {
      alert('⚠️ Please login to buy games!');
      return;
    }
  
    let userGames = JSON.parse(localStorage.getItem(`games_${this.userEmail}`) || '[]');
  
    if (userGames.some((g: any) => g.id === game.id)) {
      alert('✅ You already own this game!');
      return;
    }
  
    userGames.push(game);
    localStorage.setItem(`games_${this.userEmail}`, JSON.stringify(userGames));
  
    alert(`🎮 Game "${game.name}" purchased successfully!`);
  }
  

  // ✅ Check if the game is already purchased
  isGamePurchased(game: any): boolean {
    if (!this.userEmail) return false;
    const userGames = JSON.parse(localStorage.getItem(`games_${this.userEmail}`) || '[]');
    return userGames.some((g: any) => g.id === game.id);
  }
}
