import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }
 
 
  @Output('sideNvaBarToggle') sideNvaBarToggle:any = new EventEmitter<void>();

  toggleSidebar(value:any) {
    this.sideNvaBarToggle.emit(value);
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('user-set');
    this.router.navigate(['/login']);

  }



//   closeOffcanvas() {
//     const offcanvasElement = document.getElementById('offcanvasWithBackdrop');
//     const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
//     offcanvas.hide();
// }
}
