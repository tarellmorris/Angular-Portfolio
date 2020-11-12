import { Injectable } from '@angular/core';
import { Project } from '../models/project'


@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
  projects: Project[] = [
   new Project(
      "Bobs Burgers' Homepage", 
      `This page design was inspired by the fictional television show "Bob's Burgers". The project was made originally using standard HTML, CSS, and vanilla JS stylings, then converted to work within this Angular-based portfolio site.`,
      '/assets/images/backgrounds/bbs-thumbnail.png',
      '/projects/bobs-burgers-homepage'
   ),
   new Project(
      'Interactable Infographic', 
      `The goal of this project was to translate a simple webinar infographic into an interactable web page. 
      The project was originally created using HTML, CSS, and jquery, 
      but was then converted to work with Typescript in Angular.
      I try to avoid using jquery now, as I have been told is has known security issues.`,
      '/assets/images/backgrounds/info-thumbnail.png',
      '/projects/infographic-micropage'
    ),
    new Project(
      `Basic 'Rock Paper Scissors' Game`,
      `This project was initially created early on to achieve a better understanding of Javascript. It is a functioning and stylized game of 'Rock Paper Scissors.'
      I did not start this blind, however, I had already spent several months working with Python first. 
      This made the transition into a new language much easier.`,
      '/assets/images/backgrounds/rps-thumbnail.png',
      '/projects/rock-paper-scissors'
    )
  ];

  constructor() { }  

  projectRequest() {
    return this.projects;
  }
}
