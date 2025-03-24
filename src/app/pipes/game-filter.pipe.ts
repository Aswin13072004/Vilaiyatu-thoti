import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameFilter' // ✅ This is the pipe name used in HTML
})
export class GameFilterPipe implements PipeTransform {
  transform(games: any[], searchTerm: string): any[] {
    if (!games || !searchTerm) {
      return games; // ✅ Return all games if no search term
    }
    
    return games.filter(game =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase()) // ✅ Search by name
    );
  }
}
