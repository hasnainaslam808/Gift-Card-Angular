import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
update:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  updateprofile(){
    this.update=true;
  }

}
