import { Component, Output, signal, EventEmitter } from '@angular/core';
import { Recherche } from '../recherche';
import { HttpClient } from '@angular/common/http';


@Component({
  imports: [],
  selector: 'app-search',
  styleUrl: './search.css',
  templateUrl: './search.html',
})

export class Search {
response: any = signal([]);
villeSelectionner : any = signal(null);
message: any;


rechercheNominatim(ville: string) {
 this.rechercheService.rechercheNominatim(ville).subscribe((response) => {
  console.log(response);
  this.response.set(response);
  });
}

selectionnerVille(ville: any) {
  this.message = `Vous avez sélectionné la ville : ${ville.display_name}`; 
  this.villeSelectionner.set(ville);
  console.log(this.villeSelectionner());
  this.villeSelection.emit(ville);
 }
  
  constructor(private rechercheService: Recherche) {
 }

@Output()
  villeSelection = new EventEmitter<any>();

} 
