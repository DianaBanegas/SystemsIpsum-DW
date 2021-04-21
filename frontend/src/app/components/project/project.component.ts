import { Component, OnInit } from '@angular/core';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  public title = 'Project | Systems Ipsum';
  public code ='aver';

  constructor( ) { }

  ngOnInit(): void {

  }

}
