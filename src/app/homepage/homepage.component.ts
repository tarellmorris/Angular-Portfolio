import { Component, OnInit } from '@angular/core';
import { fadeIn, slideInLeft } from '../models/animations';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass'],
  animations: [
    fadeIn,
    slideInLeft
  ]
})

export class HomepageComponent implements OnInit {

  ngOnInit() {
  }

}
