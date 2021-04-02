import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public title = 'My Profile | Systems Ipsum';
  constructor() { }

  ngOnInit(): void {
  }

}
