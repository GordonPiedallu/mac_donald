import { Component, Output, signal, Input } from '@angular/core';
import { Restaurant } from './restaurant/restaurant';
import { Search } from './search/search';
import { EventEmitter } from '@angular/core';
import { Map } from './map/map';

@Component({
  imports: [Restaurant, Search, Map],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
villeSelection: any = null;


  protected readonly title = signal('mac_donald');
  
  restaurantNom = "McDonald's Tours";
  
  message = "Bienvenue sur l'application de gestion des restaurants !";
  
  selectionnerRestaurant() {
     this.message = `Vous avez sélectionné le restaurant : ${this.restaurantNom}`;
  }
 recevoirVille (ville: any) {
    this.message = ' Vous avez selectionné la ville : ' + ville.display_name;
    this.villeSelection = ville;
    console.log('Ville sélectionnée dans App:', ville);
 }
}



