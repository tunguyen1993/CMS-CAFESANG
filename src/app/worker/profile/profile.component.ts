import {Component, OnInit} from '@angular/core';
import {ShareSideBarService} from "../../core/services/shareSideBar.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private sideBarService: ShareSideBarService) {
    this.sideBarService
      .onShowSecondSidebar
      .emit('profile')
  }

  ngOnInit(): void {
  }

}
