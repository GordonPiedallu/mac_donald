import { Component, signal } from '@angular/core';
import { Recherche } from '../recherche';
import { HttpClient } from '@angular/common/http';


@Component({
  imports: [],
  selector: 'app-search',
  styleUrl: './search.css',
  templateUrl: './search.html',
})

export class Search {
rechercheNominatim(ville: string) {
 this.rechercheService.rechercheNominatim(ville).subscribe((response) => {
  console.log(response);
  this.response.set(response);
});
}
//rechercherVille() {
  //this.message = "Recherche ville en cours...";
  //this.rechercheService.rechercherVille();
  //return this.message = "Recherche ville terminée !";
//}
  message: string = 'Bonjour depuis le composant Search !';

  selectionnerVille() {
    
  }

  constructor(private rechercheService: Recherche) {

  
 }

 response: any = signal([]);
} 
