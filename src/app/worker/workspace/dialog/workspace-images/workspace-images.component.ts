import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from "@nebular/theme";

@Component({
  selector: 'app-workspace-images',
  templateUrl: './workspace-images.component.html',
  styleUrls: ['./workspace-images.component.scss']
})
export class WorkspaceImagesComponent implements OnInit {

  constructor(private dialog: NbDialogRef<any>) { }

  ngOnInit(): void {
  }

  close(returnedObject = null) {
    this.dialog.close(returnedObject,);
  }

}
