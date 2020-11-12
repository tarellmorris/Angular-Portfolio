import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/models/animations';

@Component({
  selector: 'app-bobs-burgers',
  templateUrl: './bobs-burgers.component.html',
  styleUrls: ['./bobs-burgers.component.sass'],
  animations: [
    fadeIn
  ]
})
export class BobsBurgersComponent implements OnInit, AfterViewInit {
  mobile: boolean
  // Array with slideshow URLs
  images = [
    "/assets/images/bobs-burgers/backgrounds/bobs1.jpg",
    "/assets/images/bobs-burgers/backgrounds/bobs2.jpg",
    "/assets/images/bobs-burgers/backgrounds/bobs3.jpg",
    "/assets/images/bobs-burgers/backgrounds/bobs4.jpg"
  ]

  // Function for maximized portraits
  maximize(portrait: string) {
    let portraitTarget = document.getElementById(portrait)

    portraitTarget.classList.toggle('maximized')
  }

  constructor() { 
  }

  // Scroll to top of screen OnInIt
  ngOnInit() {
    if (window.screen.width < 640) { 
      this.mobile = true;
    } else {
      this.mobile = false
    }    
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0)
  }


}

