import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  backgroundColor = environment.navBarBackgroundColor;

  constructor() { }

  ngOnInit() {
  }

}
