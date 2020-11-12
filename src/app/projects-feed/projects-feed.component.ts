import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectsDataService } from '../services/projects-data.service';
import { fadeIn } from '../models/animations';

@Component({
  selector: 'app-projects-feed',
  templateUrl: './projects-feed.component.html',
  styleUrls: ['./projects-feed.component.sass'],
  animations: [
    fadeIn
  ]
})
export class ProjectsFeedComponent implements OnInit, AfterViewInit {
  projects: Project[];
  
  ngOnInit(): void {

  }

  constructor(private projectRoll: ProjectsDataService) {
    this.projects = this.projectRoll.projectRequest()
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0)
  }

}
