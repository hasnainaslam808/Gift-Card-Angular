import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  password: string = '';
  showPassword: boolean = false;
  showPassword1: boolean = false;
  showPassword2: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;

  }
  togglePasswordVisibility1() {
    this.showPassword1 = !this.showPassword1;

  }
  togglePasswordVisibility2() {
    this.showPassword2 = !this.showPassword2;

  }
  getPasswordValues(val:any){

  }

}
