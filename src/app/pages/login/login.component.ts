import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  currentRoute: string = ''
  password: string = '';
  showPassword: boolean = false;
  showPassword1: boolean = false;
  showPassword2: boolean = false;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((data: any) => {
      this.currentRoute = data.currentRoute;
      console.log(this.currentRoute);
    });
  }

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








  getPasswordValues(val:any){}

}
