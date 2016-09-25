import { Member } from './member';
import { Subject } from 'rxjs/Subject';


let MEMBERS = [
  new Member(1, 'Sam', 'San Francisco', 'USA'),
  new Member(2, 'Francoise', 'Paris', 'France'),
  new Member(3, 'Pedro', 'Barcelona', 'Spain'),
  new Member(4, 'Sophia', 'Moscow', 'Russia'),
  new Member(5, 'Hartmut', 'Heidelberg', 'Germany')
];


export class MemberService {
  
  selected: Member;
  subj : Subject<Member> = new Subject();
    
  getMembers() {return Promise.resolve(MEMBERS);}

  getMemberSubject(id: number) {
    let mem = MEMBERS.find(m => m.id === id);
    this.selected = mem;
    this.subj.next(mem);
  }
    
}
