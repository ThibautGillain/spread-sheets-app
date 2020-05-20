import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';

interface Entry {
  value: string;
}
/*
export let SheetHeader = [
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        '],
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        '],
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        '],
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        '],
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        '],
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        '],
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        '],
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        '],
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        '],
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ']
];
*/
export const inputColumns = 20;
export const inputRows = 10;
let SheetHeader = [];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spread-sheets-app';


  displayedColumns: string[] = [' '];
  objects: Entry[] = [
                        {value: 'Ordinateur'},
                        {value: 'Baie de brassage'},
                        {value: 'Serveur'},
                        {value : 'Base de données'}
                      ];

  dataSource: any;

  constructor() {

  }

  ngOnInit() {
    for (let j = 1 ; j < inputColumns + 1 ; j++) {
      this.displayedColumns.push('c' + j.toString());
    }

    for(let i = 0; i < inputRows; i++) {
      let line = [];
      for (let j = 0 ; j < inputColumns ; j++) {
        const column = ' ';
        line.push(column);
      }
      SheetHeader.push(line);
    }

    this.dataSource = new MatTableDataSource(SheetHeader);
  }



}
