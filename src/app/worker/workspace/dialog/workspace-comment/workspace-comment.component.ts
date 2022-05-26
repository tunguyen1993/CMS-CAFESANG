import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from "@nebular/theme";

@Component({
  selector: 'app-workspace-comment',
  templateUrl: './workspace-comment.component.html',
  styleUrls: ['./workspace-comment.component.scss']
})
export class WorkspaceCommentComponent implements OnInit {

  constructor(private dialog: NbDialogRef<any>) { }

  ngOnInit(): void {
  }

  close(returnedObject = null) {
    this.dialog.close(returnedObject,);
  }
}
