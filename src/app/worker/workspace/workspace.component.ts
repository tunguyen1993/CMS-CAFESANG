import {Component, OnInit} from '@angular/core';
import {ShareSideBarService} from "../../core/services/shareSideBar.service";
import {FormControl} from "@angular/forms";
import {AddJobComponent} from "./dialog/add-job/add-job.component";
import {NbDialogService} from "@nebular/theme";
import {WorkspaceImagesComponent} from "./dialog/workspace-images/workspace-images.component";
import {WorkspaceCommentComponent} from "./dialog/workspace-comment/workspace-comment.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  actionVisible: boolean = false;
  priorityVisible: boolean = false
  options = [
    {value: 'This is value 1', label: '긴급'},
    {value: 'This is value 2', label: '높음'},
    {value: 'This is value 3', label: '보통'},
    {value: 'This is value 4', label: '없음'},
  ];
  option: any;
  formControl = new FormControl(new Date());

  constructor(private sideBarService: ShareSideBarService,
              private dialogService: NbDialogService,
              public route: ActivatedRoute) {

    this.sideBarService
      .onShowSecondSidebar
      .emit('workspace')
  }

  ngOnInit(): void {
  }

  changeActionVisible() {
    this.actionVisible = !this.actionVisible
  }

  changePriorityVisible() {
    this.priorityVisible = !this.priorityVisible
  }

  showImage() {
    this.dialogService.open(WorkspaceImagesComponent)
  }

  showComment() {
    this.dialogService.open(WorkspaceCommentComponent,{
      dialogClass: "test222"
    })
  }
}
