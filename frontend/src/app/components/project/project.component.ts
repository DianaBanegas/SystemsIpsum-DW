import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  public title = 'Project | Systems Ipsum';
  constructor() { }

  ngOnInit(): void {
  }

}
