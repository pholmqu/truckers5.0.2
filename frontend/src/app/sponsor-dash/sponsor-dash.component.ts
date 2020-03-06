import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-sponsor-dash',
  templateUrl: './sponsor-dash.component.html',
  styleUrls: ['./sponsor-dash.component.less']
})
export class SponsorDashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tiles: Tile[] = [
    { text: 'Review Driver Status', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Review Driver Applications', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Register Driver', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Update Driver Information', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

}
