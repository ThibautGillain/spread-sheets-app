import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';

interface Entry {
  value: string;
}

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spread-sheets-app';

  displayedColumns: string[] = [' ', 'Produits', 'Nombre'];
  objects: Entry[] = [
    {value: 'Ordinateur'}, {value: 'Baie de brassage'}, {value: 'Serveur'}, {value : 'Base de données'} ];
  dataSource = new MatTableDataSource(SheetHeader);

}
