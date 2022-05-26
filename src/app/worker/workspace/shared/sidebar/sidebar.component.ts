import {Component, OnInit} from '@angular/core';
import {NbDialogService} from "@nebular/theme";
import {AddProjectComponent} from "../../dialog/add-project/add-project.component";
import {AddMemberComponent} from "../../dialog/add-member/add-member.component";

@Component({
  selector: 'workspace-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor( private dialogService: NbDialogService) {

  }

  ngOnInit(): void {
  }

  addProject() {
    this.dialogService.open(AddProjectComponent)
  }

  addMember() {
    this.dialogService.open(AddMemberComponent)
  }
}
