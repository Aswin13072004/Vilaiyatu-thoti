
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyGamesComponent } from './pages/my-games/my-games.component';
import { LoginComponent } from './pages/login/login.component';
import { GameListComponent } from './pages/game-list/game-list.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my-games', component: MyGamesComponent }, 
  { path: 'game-list', component: GameListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
