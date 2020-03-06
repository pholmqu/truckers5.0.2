import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-driver-dash',
  templateUrl: './driver-dash.component.html',
  styleUrls: ['./driver-dash.component.css']
})
export class DriverDashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tiles: Tile[] = [
    { text: "Point Status", cols: 3, rows: 1, color: "lightblue" },
    { text: "View Catalog", cols: 1, rows: 2, color: "lightgreen" },
    { text: "View Purchase Status", cols: 1, rows: 1, color: "lightpink" },
    { text: "Cancel/Update Purchase", cols: 2, rows: 1, color: "#DDBDF1" }
  ];

}
