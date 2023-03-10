import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../post.service";

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    angForm: FormGroup = new FormGroup({
        title: new FormControl('', [Validators.required]),
        category_id: new FormControl('', [Validators.required]),
        type: new FormControl("DEFAULT"),
        image: new FormControl(""),
        link: new FormControl(""),
        content: new FormControl("", [Validators.required]),
        video: new FormControl(""),
        video_type: new FormControl(""),
    });

    public imageListUpload: any;
    public imageList: any;
    public videoUpload: any

    constructor(public service: PostService) {
    }

    ngOnInit(): void {

    }

    uploadVideoFile($event: any) {
        let selectFile = $event.target.files;
        this.videoUpload = selectFile[0]
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
                }, category_id: undefined
            }
            delete data.category_id;
            if (this.angForm?.value.video_type === 'upload') {
                this.service.uploadVideo(this.videoUpload)
                    .subscribe(res => {
                        data.video = res;
                        this.service.createPost(data).subscribe(res => {
                            this.imageList = undefined
                            this.videoUpload = undefined
                            this.imageListUpload = undefined
                            this.angForm.reset()
                        })
                    })
                return
            }
            this.service.createPost(data).subscribe(res => {
                this.imageList = undefined
                this.imageListUpload = undefined
                this.angForm.reset()
            })
        })
    }

}
