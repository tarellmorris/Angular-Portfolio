import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fadeIn, slideInLeft } from '../models/animations';

@Component({
  selector: 'app-about-bar',
  templateUrl: './about-bar.component.html',
  styleUrls: ['./about-bar.component.sass'],
  animations: [
    fadeIn,
    slideInLeft
  ]
})

export class AboutBarComponent implements OnInit, AfterViewInit {
  mobile: boolean

  options = {
    root: null,
    threshold: 0.25,
    rootMargin: "-100px"
  }

  constructor() {
  }

  ngOnInit() {
    if ( window.screen.width < 640 ) {
      this.mobile = true 
    } else {
      this.mobile = false
    }
  }

  ngAfterViewInit() {
    const targets = document.querySelectorAll('.graphic-breaker')

    if (!this.mobile) {

      // create intersection observer
      let observer: IntersectionObserver = 
        new IntersectionObserver( entries => {

          // for loop for each intersection observer entry
          entries.forEach( entry => {

            // if statement checks for intersecting elements and applies transition classes
            if (entry.isIntersecting) {

              entry.target.querySelectorAll('.left').forEach( element => {
                element.classList.add('fadeIn', 'slide')
              })

              entry.target.querySelector('.img-wrapper').classList.add('fadeIn')

              entry.target.querySelectorAll('.right').forEach( element => {
                element.classList.add('fadeIn', 'slide')
              })

            // else statement removes classes when elements are not intersecting
            } else {

              entry.target.querySelectorAll('.left').forEach( element => {
                element.classList.remove('fadeIn', 'slide')
              })

              entry.target.querySelector('.img-wrapper').classList.remove('fadeIn')

              entry.target.querySelectorAll('.right').forEach( element => {
                element.classList.remove('fadeIn', 'slide')
              })

            }

          })
          // options add specifications for observer targeting
        }, this.options)

      // for loop goes through each element in targets array
      targets.forEach( target => {
        observer.observe(target)
      })

    }
  }
}
