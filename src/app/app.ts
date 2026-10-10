import { Component, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Restaurant } from './restaurant/restaurant';
import { Search } from './search/search';

@Component({
  imports: [RouterOutlet, Restaurant, Search],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('mac_donald');
  
  restaurantNom = "McDonald's Tours";
  
  message = "Bienvenue sur l'application de gestion des restaurants !";
  
  selectionnerRestaurant() {
     this.message = `Vous avez sélectionné le restaurant : ${this.restaurantNom}`;
  }
}


