import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games: any[] = [];
  searchTerm: string = ''; // ✅ Bind this to the search box

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe((response: { results: any[]; }) => {
      this.games = response.results; 
    });
  }

  buyGame(game: any) {
    const userEmail = localStorage.getItem('userEmail'); // ✅ Get logged-in user email
    if (!userEmail) {
      alert('Please login to buy games!');
      return;
    }
  
    // ✅ Get existing purchased games for this user
    let userGames = JSON.parse(localStorage.getItem(`games_${userEmail}`) || '[]');
  
    // ✅ Check if game is already purchased
    const isAlreadyBought = userGames.some((g: any) => g.id === game.id);
    if (isAlreadyBought) {
      alert('You already own this game!');
      return;
    }
  
    // ✅ Add new game to the user's list
    userGames.push(game);
    localStorage.setItem(`games_${userEmail}`, JSON.stringify(userGames));
  
    alert(`Game "${game.name}" purchased successfully!`);
  }

}
