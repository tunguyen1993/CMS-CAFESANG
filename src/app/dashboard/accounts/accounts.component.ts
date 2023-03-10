import { Component, OnInit } from '@angular/core';
import {AccountsService} from "./accounts.service";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  users: any = [];
  constructor(private service: AccountsService) {
    service.getUsers(1).subscribe(res => {
      this.users = res.data
    })
  }

  ngOnInit(): void {
  }

  deActiveUser (userId: number, index: number) {
    this.service.deActiveAccount(userId).subscribe(res => {
      this.users[index] = res
    })
  }

  activeUser(userId: number, index: number){
    this.service.activeAccount(userId).subscribe(res => {
      this.users[index] = res
    })
  }
}
