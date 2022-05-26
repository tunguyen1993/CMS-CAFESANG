import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-tab',
  templateUrl: './member-tab.component.html',
  styleUrls: ['./member-tab.component.scss']
})
export class MemberTabComponent implements OnInit {
  dropDownClass : boolean = false
  constructor() {
  }

  ngOnInit(): void {
  }

  dropdown() {
    this.dropDownClass = !this.dropDownClass
  }
}
