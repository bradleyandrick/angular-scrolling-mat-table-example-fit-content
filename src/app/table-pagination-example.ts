import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-pagination-example',
  styleUrls: ['table-pagination-example.css'],
  templateUrl: 'table-pagination-example.html',
})
export class TablePaginationExample implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrdsafdfasfsogen',
    weight: 1.007955555555555555555555555,
    symbol: 'Beryfsdafdsfasdfdsafdsafdsfsadllium',
  },
  {
    position: 2,
    name: 'Helidsafdadsfadsfum',
    weight: 4.007955555555555555555555555,
    symbol: 'He',
  },
  {
    position: 3,
    name: 'Lithasdfdfadsfdsfadsfdsium',
    weight: 6.007955555555555555555555555,
    symbol: 'Li',
  },
  {
    position: 4,
    name: 'Beryfsdafdsfasdfdsafdsafdsfsadllium',
    weight: 9.007955555555555555555555555,
    symbol: 'Be',
  },
  {
    position: 5,
    name: 'Borfasdfdsfdsafdsafdsfon',
    weight: 20.1797,
    symbol: 'Ne',
  },
  {
    position: 11,
    name: 'Sodium',
    weight: 22.9897,
    symbol: 'Beryfsdafdsfasdfdsafdsafdsfsadllium',
  },
  {
    position: 12,
    name: 'Magnesium',
    weight: 24.007955555555555555555555555,
    symbol: 'Mg',
  },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  {
    position: 14,
    name: 'Sifdsafdsafdsafdsafdsfdlicon',
    weight: 28.0855,
    symbol: 'Si',
  },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
