import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/shared/Services/http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  token: string = '';
  currentRoute: string = ''
  password: string = '';
  showPassword: boolean = false;
  showPassword1: boolean = false;
  showPassword2: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, private toastr: ToastrService) {
    this.activatedRoute.data.subscribe((data: any) => {
      this.currentRoute = data.currentRoute;

    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
       this.token = params['token'];
    });














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



  login(val: any) {
    this.http.login(val).subscribe((res: any) => {

      if (res.data?.token) {
        this.toastr.success('successfully logged In!');
        this.router.navigate(['/dashboard']);
        localStorage.setItem('user-set', res.data.token);
        return
      }
      this.toastr.error(res.message);


      console.log(res);

    }, (err: any) => {
      this.toastr.error(err.message);
      this.router.navigate([' ']);
    }
    )
  }

  // email verification
  emailverification(val: string) {
    this.http.emailverification(val).subscribe((res: any) => {
      this.toastr.warning(res.message);
      this.router.navigate(['/emial-verification']);
    }, (err: any) => {
      this.toastr.error(err.message);
    });
  }


  getPasswordValues(val: any) {
    const data = {
      token: this.token,
      password: val
    };
    this.http.newPassword(data).subscribe((res: any) => {
      if (res.status) {
        this.toastr.success(res.message);
        this.router.navigate(['/dashboard']);
      }
      else{
        this.toastr.error(res.message);
      
      }
    }, (err: any) => {
      this.toastr.error(err.message);
      console.log(err.errors);

    });
  }










}
