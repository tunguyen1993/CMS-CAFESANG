import {Component, Input, OnInit, Optional} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../post.service";
import {NbDialogRef} from "@nebular/theme";

@Component({
  selector: 'app-create-noti',
  templateUrl: './create-noti.component.html',
  styleUrls: ['./create-noti.component.scss']
})
export class CreateNotiComponent implements OnInit {
  isFullSize:any

  @Input() post: any;
  @Input() _type: string | undefined;
  @Input() fake: boolean = false;


  angForm: FormGroup = new FormGroup({
    title: new FormControl(""),
    category_id: new FormControl("14"),
    type: new FormControl("NOTIFY"),
    image: new FormControl(""),
    link: new FormControl(""),
    content: new FormControl(""),
  });

  public imageListUpload: any;
  public imageList: any;

  constructor(public service: PostService,
              @Optional() public dialog: NbDialogRef<any>) {
    if (dialog){
      this.isFullSize = '640px'
    }
  }

  ngOnInit(): void {
    if (this._type === "update") {
      this.angForm.patchValue({
        title: this.post.title,
        content: this.post.content,
        link: this.post.link,
        category_id: this.post.categoryItem.category_id,
        type: this.post.type,
      })
      this.imageList = this.post.image
    }
  }

  removeImage() {
    this.imageList = null
  }

  uploadImageFile($event: any) {
    let selectFile = $event.target.files;
    if (selectFile && selectFile[0]) {
      if (selectFile[0].type === 'image/jpeg' ||
          selectFile[0].type === 'image/png' ||
          selectFile[0].type === 'image/jpg' ||
          selectFile[0].type === 'image/webp') {
        this.imageListUpload = selectFile[0]
        this.convertImgPreView($event)
      } else {
        alert("wrong type image")
      }
    }
  }

  convertImgPreView(event: any): any {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        let object = {
          image: reader.result,
        }
        this.imageList = object;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSubmit() {
    if (this.angForm.invalid) {
      return
    }
    this.service.uploadImageFile(this.imageListUpload).subscribe(res => {
      const data = {
        ...this.angForm?.value, image: res, CategoryItemEntity: {
          category_id: this.angForm?.value.category_id
        }, category_id: undefined,
        type: "NOTIFY"
      }
      delete data.category_id;

      this.service.createPost(data).subscribe(res => {
        this.imageList = undefined
        this.imageListUpload = undefined
        this.angForm.reset()
        this.close()
      })
    })
  }

  onUpdate(){
    const data = {
      ...this.angForm?.value, image: this.post.image, CategoryItemEntity: {
        category_id: this.angForm?.value.category_id
      }, category_id: undefined,
      type: "NOTIFY"
    }
    if (this.imageListUpload) {
      this.service.uploadImageFile(this.imageListUpload).subscribe(res => {
        delete data.category_id;
        this.service.updatePost(this.post.id, data).subscribe(res => {
          this.angForm.reset()
        })
        this.close()
        return;
      })
    }

    this.service.updatePost(this.post.id, data).subscribe(res => {
      this.close()
    })
  }

  close(returnedObject = null) {
    if (this.dialog){
      this.dialog.close(returnedObject);
    }
  }

  expand(){
    this.isFullSize = "90vw"
  }

  collapse(){
    this.isFullSize = "640px"
  }

}
