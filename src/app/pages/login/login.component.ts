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
  currentRoute: string = ''
  password: string = '';
  showPassword: boolean = false;
  showPassword1: boolean = false;
  showPassword2: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService,private toastr: ToastrService) {
    this.activatedRoute.data.subscribe((data: any) => {
      this.currentRoute = data.currentRoute;

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



  login(val: any) {
    this.http.login(val).subscribe((res: any) => {

      if (res.data?.token) {
        this.toastr.success('successfully logged In!');
        this.router.navigate(['/dashboard']);
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
this.toastr.error( err.message);
});
}


  getPasswordValues(val: any) {
    this.http.newPassword(val).subscribe((res: any) =>{
      
    }, (err: any) =>{

    });
   }

}
