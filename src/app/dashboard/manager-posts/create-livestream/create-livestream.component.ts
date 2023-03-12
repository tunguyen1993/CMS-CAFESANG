import {Component, Input, OnInit, Optional} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../post.service";
import {NbDialogRef} from "@nebular/theme";

@Component({
    selector: 'app-create-livestream',
    templateUrl: './create-livestream.component.html',
    styleUrls: ['./create-livestream.component.scss']
})
export class CreateLivestreamComponent implements OnInit {

    isFullSize:any
    @Input() post: any;
    @Input() _type: string | undefined;
    @Input() fake: boolean = false;
    angForm: FormGroup = new FormGroup({
        title: new FormControl('', [Validators.required]),
        image: new FormControl(""),
        link: new FormControl(""),
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
                link: this.post.link,
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
                this.imageList = {
                    image: reader.result,
                };
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    onSubmit() {
        let data: any = {
            CategoryItemEntity: {
                category_id: 9
            },
            type: "LIVESTREAM",
        }
        this.service.uploadImageFile(this.imageListUpload).subscribe(res => {
            data.image = res;
            data.link = this.angForm.value.link;
            data.title = this.angForm.value.title;
            this.service.createPost(data)
                .subscribe(res => {
                    this.imageList = undefined;
                    this.imageListUpload = undefined
                    this.angForm.reset();
                    this.close()
                })
        })
    }

    onUpdate() {
        let data: any = {
            link: this.angForm.value.link,
            title: this.angForm.value.title
        }
        if (this.imageListUpload) {
            this.service.uploadImageFile(this.imageListUpload).subscribe(res => {
                data.image = res;
                data.link = this.angForm.value.link;
                data.title = this.angForm.value.title;
                this.service.updatePost(this.post.id, data)
                    .subscribe(res => {
                        this.imageList = undefined;
                        this.imageListUpload = undefined
                        this.angForm.reset();
                        this.close()
                    })
            })
          return
        }
      this.service.updatePost(this.post.id, data)
          .subscribe(res => {
            this.imageList = undefined;
            this.imageListUpload = undefined
            this.angForm.reset();
            this.close()
          });
        return;
    }

    close(returnedObject = null) {
        if (this.dialog) {
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
