import { Component, AfterViewInit, Input, OnChanges } from '@angular/core';
import * as L from 'leaflet';
import { Recherche } from '../recherche';
@Component({
  imports: [],
  selector: 'app-map',
  styleUrl: './map.css',
  templateUrl: './map.html',
})
export class Map implements AfterViewInit, OnChanges {
@Input() villeSelection: any;
constructor(private rechercheService: Recherche) {}
 map!: L.Map;
 
  ngAfterViewInit() {
   this.map = L.map('map').setView([48.8566, 2.3522], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(this.map);
this.map.invalidateSize();
}
}
 ngOnChanges() {
    if (this.villeSelection) {
      console.log('Ville sélectionnée dans Map:', this.villeSelection);
      const lat = this.villeSelection.lat;
      const lon = this.villeSelection.lon;
      this.map.setView([lat, lon], 13);
      this.rechercheService.rechercheMacdo(lat, lon).subscribe((resultats) => {
      console.log(resultats);
      
    if (resultats && resultats.elements) {
      resultats.elements.forEach((element: any) => {
        let marker: L.Marker;
        if (element.type === 'node') {
          marker = L.marker([element.lat, element.lon]);
        } else if (element.type === 'way' || element.type === 'relation') {
          const center = element.center;
          marker = L.marker([center.lat, center.lon]);
        }
        marker.addTo(this.map);
        });
      
    }}
    )}


}
