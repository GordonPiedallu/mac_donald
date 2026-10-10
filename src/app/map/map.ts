import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  imports: [],
  selector: 'app-map',
  styleUrl: './map.css',
  templateUrl: './map.html',
})
export class Map implements AfterViewInit {
  ngAfterViewInit() {
   const map = L.map('map').setView([48.8566, 2.3522], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
map.invalidateSize();
   
  }
}
