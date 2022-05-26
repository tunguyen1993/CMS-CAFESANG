import {Component, OnInit} from '@angular/core';
import {NbDialogRef, NbDialogService, NbTagComponent, NbTagInputAddEvent} from "@nebular/theme";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {

  public submitted: boolean = false;
  public myFiles: string [] = [];
  public imageList: Array<any> = [];
  public addJobForm: FormGroup = new FormGroup({
    content: new FormControl('', [
      Validators.required,
    ]),
    status: new FormControl('', [
      Validators.required,
    ]),
    priority: new FormControl('', [
      Validators.required,
    ]),
    link: new FormControl('', [
      Validators.required,
    ]),
  });
  trees: Set<string> = new Set([]);

  constructor(private dialog: NbDialogRef<any>) {
  }

  ngOnInit(): void {

  }

  onFileChange(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.myFiles.push(event.target.files[i]);
      let selectFile = event.target.files[i];

      this.convertImgPreView(selectFile)

    }
  }


  close(returnedObject = null) {
    this.dialog.close(returnedObject,);
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


  /**
   *
   * @param event
   */
  convertImgPreView(event: any): any {
    const reader = new FileReader();
    reader.onload = () => {
      let object = reader.result
      this.imageList.push(object);
    };
    reader.readAsDataURL(event);
  }

  /**
   *
   */
  removeImage(index: number) {
    delete this.myFiles[index]
    delete this.imageList[index]
    this.myFiles = Object.values(this.myFiles);
    this.imageList = Object.values(this.imageList);
  }

  /**
   *
   */
  public onSubmit() {
    this.submitted = true;
    if (this.addJobForm.invalid) {
      return;
    }
  }
}
