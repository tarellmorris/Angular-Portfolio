import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/models/animations';

@Component({
  selector: 'app-infographic-micropage',
  templateUrl: './infographic-micropage.component.html',
  styleUrls: ['./infographic-micropage.component.sass'],
  animations: [
    fadeIn
  ]
})
export class InfographicMicropageComponent implements OnInit, AfterViewInit {
  detailOpnr: any
  isCollapsed: boolean = false

  capSwitch() {
    let imgClick = event.target as HTMLImageElement
    let newBlock = imgClick.dataset
    let infoBlock: HTMLElement = document.querySelector("#pro-block")
    let fullBlock: HTMLElement = document.querySelector("#full-block-container")
    
    infoBlock.style.backgroundImage = "url(/assets/images/blocks/" + newBlock.img + ")"
    fullBlock.style.backgroundColor = newBlock.colorBg 

  }

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0)
  }

}
