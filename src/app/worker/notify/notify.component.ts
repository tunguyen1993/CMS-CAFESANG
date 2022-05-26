import { Component, OnInit } from '@angular/core';
import {ShareSideBarService} from "../../core/services/shareSideBar.service";

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

  constructor(private sideBarService: ShareSideBarService) {
    this.sideBarService
      .onShowSecondSidebar
      .emit('notify')
  }

  ngOnInit(): void {
  }

}
