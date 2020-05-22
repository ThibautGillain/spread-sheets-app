import { Component, OnInit } from '@angular/core';
import * as Handsontable from 'handsontable';
// tslint:disable-next-line:import-spacing


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../css/handsontable.css']
})
export class AppComponent {
  title = 'spread-sheets-app';
  columns = [];
  columnNumber = 10;
  rowNumber = 10;
  dataset: any[] = [
    {id: 1, name: 'Ted Right', address: 'Wall Street'},
    {id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue'},
    {id: 3, name: 'Joan Well', address: 'Broadway'},
    {id: 4, name: 'Gail Polite', address: 'Bourbon Street'},
    {id: 5, name: 'Michael Fair', address: 'Lombard Street'},
    {id: 6, name: 'Mia Fair', address: 'Rodeo Drive'},
    {id: 7, name: 'Cora Fair', address: 'Sunset Boulevard'},
    {id: 8, name: 'Jack Right', address: 'Michigan Avenue'},
  ];

  ngOnInit() {
    for (let i = 1 ; i <= this.columnNumber ; i++) {
      this.columns.push(i);
    }
  }
}
