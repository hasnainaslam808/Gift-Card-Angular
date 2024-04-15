import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gift-card';

show = false;
constructor(private router:Router,private activatedRoute:ActivatedRoute){

}
ngOnInit(): void {
 
  
  

  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe(() => {
  
    this.show = this.activatedRoute.firstChild?.snapshot.data['header'] === undefined
  
  });
} 

}
