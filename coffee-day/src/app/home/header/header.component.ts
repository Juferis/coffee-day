import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public on = 'On';
  public twins = 'twins';
  public and = ' & ';
  public paranoid = 'Paranoid';
  constructor() {}

  ngOnInit(): void {}
}
