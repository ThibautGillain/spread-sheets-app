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
  dataset: any[] = [];
  productList = ['Ordinateur', 'Serveur', 'Téléphone mobile', 'Baie de brassage'];

  ngOnInit() {
    this.columns.push('Nombre');
    for (let i = 1 ; i <= this.columnNumber ; i++) {
      this.columns.push(i);
    }
  }
}
