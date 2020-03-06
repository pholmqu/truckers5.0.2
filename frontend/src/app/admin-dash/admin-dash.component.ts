import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  page: string;
}

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tiles: Tile[] = [
    { text: "View Users", cols: 3, rows: 1, color: "lightblue", page: "/view-user" },
    { text: "Register User", cols: 1, rows: 2, color: "lightgreen", page: ""},
    { text: "View Purchase Status", cols: 1, rows: 1, color: "lightpink", page: "" },
    { text: "Cancel/Update Purchase", cols: 2, rows: 1, color: "#DDBDF1", page: "" }
  ];

}
