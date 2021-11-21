import { Component, OnInit } from '@angular/core';
import { department } from 'src/assets/department';
import { ontwinsMember } from 'src/assets/mock';

// interface
import { Member } from 'src/app/interface/member';
import { Department } from 'src/app/interface/member';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  public department: any = department;
  public members!: Member[];
  constructor() {}

  ngOnInit(): void {
    const userCheck = localStorage.getItem('user');
    if (!userCheck) {
      console.log('our user!');
    }
  }
  selectDepevent(event: Event): void {
    const { target } = event;
    const value = (target as HTMLSelectElement).value;
    this.renderMembers(value);
  }
  renderMembers(dep: any) {
    this.members = ontwinsMember.filter((member) => member.department === dep);
  }
}
