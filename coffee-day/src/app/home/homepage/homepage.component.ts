import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  public on = 'On';
  public twins = 'twins';
  public and = ' & ';
  public paranoid = 'Paranoid';
  constructor() {}

  ngOnInit(): void {
    const userCheck = localStorage.getItem('user');
    if (!userCheck) {
      console.log('our user!');
    }
  }
}
