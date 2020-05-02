import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  email: any = undefined;

  constructor() { }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
  }

}
