import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
 
 
  @Output('sideNvaBarToggle') sideNvaBarToggle:any = new EventEmitter<void>();

  toggleSidebar(value:any) {
    this.sideNvaBarToggle.emit(value);
  }

  ngOnInit(): void {
  }
//   closeOffcanvas() {
//     const offcanvasElement = document.getElementById('offcanvasWithBackdrop');
//     const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
//     offcanvas.hide();
// }
}
