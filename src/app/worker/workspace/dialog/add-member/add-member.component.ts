import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from "@nebular/theme";

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

  constructor(private dialog: NbDialogRef<any>) { }

  ngOnInit(): void {
  }

  close(returnedObject = null) {
    this.dialog.close(returnedObject,);
  }
}
