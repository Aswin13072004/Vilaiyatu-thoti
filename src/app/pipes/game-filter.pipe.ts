import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameFilter' 
})
export class GameFilterPipe implements PipeTransform {
  transform(games: any[], searchTerm: string): any[] {
    if (!games || !searchTerm) {
      return games; 
    }
    
    return games.filter(game =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase()) // ✅ Search by name
    );
  }
}
