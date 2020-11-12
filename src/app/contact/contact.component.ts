import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../models/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
  animations: [
    fadeIn
  ]
})
export class ContactComponent implements OnInit {
  submit: boolean = false

  onSubmit() {
    this.submit = !this.submit
  }

  constructor() { }

  ngOnInit(): void {
  }

}
