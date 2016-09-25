import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from './member.service';


@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<h1>Parent View Here</h1>
        <button (click)="next()">First or Next Member</button>
        <p [style.color]="membServ.selected ? 'white' : 'lightgray'">current selection:</p>
        <p>{{ membServ.selected | json }} </p>
        <router-outlet></router-outlet>`,
  styleUrls: ['app.component.css']
  
})
export class AppComponent{

  
  constructor(private membServ: MemberService, private router: Router){}
  
  next() {
    if (this.membServ.selected && this.membServ.selected.id < 5) 
        {this.router.navigate(['routeB', this.membServ.selected.id + 1]);}


    else this.router.navigate(['routeB', 1]);
  }  

}
