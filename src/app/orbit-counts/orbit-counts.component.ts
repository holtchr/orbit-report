import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';


@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  types: string[];

  constructor() { 
    this.types = ['Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope'];
  }

  ngOnInit() {
  }

  getCountsByType(type: string) :number {
    return this.satellites.filter(function(satellite) {
      return satellite.type.toLowerCase() === type.toLowerCase();
    }).length;
  }

}
