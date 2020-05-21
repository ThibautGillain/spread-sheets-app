import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

interface Entry {
  value: string;
}

// Here you can choose the size of the spreadSheet
export const inputColumns = 100;
export const inputRows = 10;
let SheetHeader = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spread-sheets-app';

  // array containing the headers of the spreadsheet
  displayedColumns: string[] = [' '];

  // Array of the dropdown values
  objects: Entry[] = [
                        {value: 'Ordinateur'},
                        {value: 'Baie de brassage'},
                        {value: 'Serveur'},
                        {value : 'Base de données'}
                      ];

  dataSource: any;

  constructor() {

  }

  // This method initializes the spreadsheet with the right number of rows and columns.
  ngOnInit() {
    this.displayedColumns.push('Produits');
    this.displayedColumns.push('Quantité');
    for (let j = 1 ; j < inputColumns + 1 ; j++) {
      this.displayedColumns.push('c' + j.toString());
    }

    for (let i = 0; i < inputRows; i++) {
      let line = [];
      for (let j = 0 ; j < inputColumns ; j++) {
        const column = '                       ';
        line.push(column);
      }
      SheetHeader.push(line);
    }

    this.dataSource = new MatTableDataSource(SheetHeader);
  }



}
