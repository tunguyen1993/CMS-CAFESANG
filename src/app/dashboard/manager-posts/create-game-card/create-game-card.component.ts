import {Component, Input, OnInit, Optional} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../post.service";
import {NbDialogRef} from "@nebular/theme";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-create-game-card',
    templateUrl: './create-game-card.component.html',
    styleUrls: ['./create-game-card.component.scss']
})
export class CreateGameCardComponent implements OnInit {

    isFullSize:any
    @Input() post: any;
    @Input() _type: string | undefined;
    @Input() fake: boolean = false;
    is_fake: boolean = false;
    angForm: FormGroup = new FormGroup({
        title: new FormControl('', [Validators.required]),
        image: new FormControl(""),
        link: new FormControl(""),
        pricing: new FormControl(""),
        promotion: new FormControl(""),
    });

    public imageListUpload: any;
    public imageList: any;

    constructor(public service: PostService,
                @Optional() public dialog: NbDialogRef<any>,
                private route: ActivatedRoute) {
        if (dialog){
            this.isFullSize = '640px'
        }
    }

    ngOnInit(): void {
        if (this._type === "update") {
            this.angForm.patchValue({
                title: this.post.title,
                link: this.post.link,
                pricing: this.post.pricing,
                promotion: this.post.promotion
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
                category_id: 2
            },
            type: "CARD",
        }
        this.service.uploadImageFile(this.imageListUpload).subscribe(res => {
            data.image = res;
            data.link = this.angForm.value.link;
            data.title = this.angForm.value.title;
            data.promotion = this.angForm.value.promotion;
            data.pricing = this.angForm.value.pricing;
            this.service.createPost(data, this.is_fake)
                .subscribe(res => {
                    this.imageList = undefined;
                    this.imageListUpload = undefined
                    this.angForm.reset()
                    this.close()
                })
        })
    }


    onUpdate() {
        let data: any = {
            link: this.angForm.value.link,
            title: this.angForm.value.title,
            promotion: this.angForm.value.promotion,
            pricing: this.angForm.value.pricing
        }
        if (this.imageListUpload) {
            this.service.uploadImageFile(this.imageListUpload).subscribe(res => {
                data.image= res
                this.service.updatePost(this.post.id, data, this.is_fake)
                    .subscribe(res => {
                        this.imageList = undefined;
                        this.imageListUpload = undefined
                        this.angForm.reset()
                        this.close()
                    })
                return
            })
        }
        this.service.updatePost(this.post.id, data, this.is_fake)
            .subscribe(res => {
                this.imageList = undefined;
                this.imageListUpload = undefined
                this.angForm.reset()
                this.close()
            })
        return
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
