import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'email'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;



  constructor() { }

  users: any = undefined;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  username: string;
  email: string;
  id: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    email: 'vidhi@gmail.com',
    username: 'vidhi',
    id: 1
  },
  {
    id : 2,
    username: 'Meena',
    email: 'vidhi@gmail.com',
  },
  {
    id : 3,
    username: 'Tina',
    email: 'tina@gmail.com',
  },
  {
    id : 4,
    username: 'Reena',
    email: 'reena@gmail.com',
  }
];
