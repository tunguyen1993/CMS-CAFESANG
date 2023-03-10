import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../post.service";

@Component({
    selector: 'app-create-game-card',
    templateUrl: './create-game-card.component.html',
    styleUrls: ['./create-game-card.component.scss']
})
export class CreateGameCardComponent implements OnInit {
    angForm: FormGroup = new FormGroup({
        title: new FormControl('', [Validators.required]),
        image: new FormControl(""),
        link: new FormControl(""),
        pricing: new FormControl(""),
        promotion: new FormControl(""),
    });

    public imageListUpload: any;
    public imageList: any;

    constructor(public service: PostService) {
    }

    ngOnInit(): void {
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
            this.service.createPost(data)
                .subscribe(res => {
                    this.imageList = undefined;
                    this.imageListUpload = undefined
                    this.angForm.reset()
                })
        })
    }

}
