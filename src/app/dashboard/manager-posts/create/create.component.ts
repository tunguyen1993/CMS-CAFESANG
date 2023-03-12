import {Component, Input, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../post.service";
import {NbDialogRef} from "@nebular/theme";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

    isFullSize: any
    @Input() post: any;
    @Input() _type: string | undefined;
    @Input() fake: boolean = false;

    is_fake: boolean = false;

    angForm: FormGroup = new FormGroup({
        title: new FormControl(""),
        category_id: new FormControl("13"),
        type: new FormControl("DEFAULT"),
        image: new FormControl(""),
        link: new FormControl(""),
        content: new FormControl(""),
        video: new FormControl(""),
        video_type: new FormControl(""),
    });

    public imageListUpload: any;
    public imageList: any;
    public videoUpload: any

    constructor(public service: PostService,
                @Optional() public dialog: NbDialogRef<any>,
                private route: ActivatedRoute,) {
        if (dialog) {
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
        this.route
            .data
            .subscribe((data: any) => {
                this.is_fake = this.fake
                if (data.fake){
                    this.is_fake = data.fake
                }
            })
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
                }, category_id: undefined,
                type: "DEFAULT"
            }
            delete data.category_id;
            if (this.angForm?.value.video_type === 'upload') {
                this.service.uploadVideo(this.videoUpload)
                    .subscribe(res => {
                        data.video = res;
                        this.service.createPost(data, this.is_fake).subscribe(res => {
                            this.imageList = undefined
                            this.videoUpload = undefined
                            this.imageListUpload = undefined
                            this.angForm.reset()
                        })
                    })
                this.close()
                return
            }
            this.service.createPost(data, this.is_fake).subscribe(res => {
                this.imageList = undefined
                this.imageListUpload = undefined
                this.angForm.reset()
                this.close()
            })
        })
    }

    onUpdate() {
        const data = {
            ...this.angForm?.value, image: this.post.image, CategoryItemEntity: {
                category_id: this.angForm?.value.category_id
            }, category_id: undefined,
            type: "DEFAULT"
        }
        if (this.imageListUpload) {
            this.service.uploadImageFile(this.imageListUpload).subscribe(res => {
                delete data.category_id;
                if (this.angForm?.value.video_type === 'upload' && this.videoUpload) {
                    this.service.uploadVideo(this.videoUpload)
                        .subscribe(res => {
                            data.video = res;
                            this.service.updatePost(this.post.id, data, this.is_fake).subscribe(res => {
                                this.angForm.reset()
                            })
                        })
                    this.close()
                    return
                }
                this.service.updatePost(this.post.id, data, this.is_fake).subscribe(res => {
                    this.angForm.reset()
                })
                this.close()
                return;
            })
        }
        if (this.videoUpload) {
            if (this.angForm?.value.video_type === 'upload' && this.videoUpload) {
                this.service.uploadVideo(this.videoUpload)
                    .subscribe(res => {
                        this.service.updatePost(this.post.id, data, this.is_fake).subscribe(res => {
                            this.angForm.reset()
                        })
                    })
                this.close()
                return
            }
        }

        this.service.updatePost(this.post.id, data, this.is_fake).subscribe(res => {
            this.close()
        })
    }

    close(returnedObject = null) {
        if (this.dialog) {
            this.dialog.close(returnedObject);
        }
    }

    expand() {
        this.isFullSize = "90vw"
    }

    collapse() {
        this.isFullSize = "640px"
    }
}
