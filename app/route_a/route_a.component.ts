import { Component } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  template: `<h1>Route A View Here</h1>
              <app-child-component *ngFor = "let member of members | async" [childProp]="member"
                (emitter)="select($event)">
              </app-child-component>
              <p [style.color]="membServ.selected ? 'black' : 'lightgray'">current selection: {{membServ.selected | json}}</p>`,
  styleUrls: ['route_a.component.css']
  })
export class RouteAComponent  {

  members: Promise<Member[]> = this.membServ.getMembers();

  select(memb: Member) {
    this.router.navigate(['routeB', memb.id]);
  }
  
  constructor(private membServ: MemberService, private router: Router){}
  
}
