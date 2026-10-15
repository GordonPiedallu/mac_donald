import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class Recherche {

@Input()
  villeSelection: any;

    constructor(private http: HttpClient) {
        
    }

rechercheNominatim(ville: string) { 
return this.http.get(`https://nominatim.openstreetmap.org/search?q=${ville}&format=json`);
  }
};

rechercheMacdo(lat : number, lon: number) {
  const overpassQuery = `
  [out:json];
  node(around:10000,${lat},${lon})["amenity"="fast_food"]["name"~"McDonald's"];
  way(around:10000,${lat},${lon})["amenity"="fast_food"]["name"~"McDonald's"];
  relation(around:10000,${lat},${lon})["amenity"="fast_food"]["name"~"McDonald's"];
  out center;
  `;
  const overpassUrl = 'https://overpass-api.de/api/interpreter';
  return this.http.post(overpassUrl, overpassQuery, { responseType: 'json' });
}


