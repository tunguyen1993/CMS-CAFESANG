import { Component, OnInit } from '@angular/core';
import {NbDialogRef, NbTagComponent, NbTagInputAddEvent} from "@nebular/theme";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  trees: Set<string> = new Set([]);

  constructor(private dialog: NbDialogRef<any>) { }

  ngOnInit(): void {
  }

  onTagRemove(tagToRemove: NbTagComponent): void {
    this.trees.delete(tagToRemove.text);
  }

  onTagAdd({value, input}: NbTagInputAddEvent): void {
    if (value) {
      this.trees.add(value)
    }
    input.nativeElement.value = '';
  }

  close(returnedObject = null) {
    this.dialog.close(returnedObject,);
  }
}
