import {Component, OnInit} from '@angular/core';
import {PostService} from "../post.service";
import {ActivatedRoute} from "@angular/router";
import {NbDialogService} from "@nebular/theme";
import {CreateComponent} from "../create/create.component";
import {CreateGameCardComponent} from "../create-game-card/create-game-card.component";
import {CreateAdvertisementComponent} from "../create-advertisement/create-advertisement.component";
import {CreateGameMobileComponent} from "../create-game-mobile/create-game-mobile.component";
import {CreateLivestreamComponent} from "../create-livestream/create-livestream.component";
import {CreateNotiComponent} from "../create-noti/create-noti.component";

@Component({
    selector: 'app-lists',
    templateUrl: './lists.component.html',
    styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

    componentWithType = {
        POST: CreateComponent,
        GAME_CARD: CreateGameCardComponent,
        ADS: CreateAdvertisementComponent,
        GAME_MOBILE: CreateGameMobileComponent,
        LIVESTREAM: CreateLivestreamComponent,
        NOTIFY: CreateNotiComponent
    };
    posts: any = []
    page: number = 1;
    totalPage: number = 0;
    limit: number = 10;
    totalRecord: number = 0;
    currentPage: number = 1;
    keyword: string = "";
    categories: any = undefined;
    post_type: any;
    title: string | null = null;
    fake: boolean = false

    constructor(private service: PostService,
                private route: ActivatedRoute,
                private dialogService: NbDialogService) {
        this.route.queryParams
            .subscribe(params => {
                    this.page = params['page'] ?? 1
                }
            );
        this.route
            .data
            .subscribe((data: any) => {
                this.fake = data.fake
                this.title = data.title
                this.post_type = data.post_type
            })
    }

    ngOnInit(): void {
        this.getPosts()
    }

    getPosts() {
        this.service.getPosts(this.post_type ?? "", this.page, this.keyword, this.categories, "id", "DESC", 15, this.fake).subscribe(res => {
            this.posts = res.data;
            this.totalPage = res.total_page;
            this.totalRecord = res.totalRecord;
            this.currentPage = res.current_page;
        })
    }

    changeStatusPost(status: "DISABLE" | "ENABLE", postId: number, indexReplace: number) {
        this.service.updatePost(postId, {
            status
        }, this.fake).subscribe(res => {
            this.posts[indexReplace].status = status;
        })
    }

    removePost(postId: number, postTitle: string) {
        if (confirm("Bạn có chắc chắn muốn xóa bài viết " + postTitle + " không?")) {
            this.service.removePost(this.post_type ?? "", postId, this.fake).subscribe(res => {
                this.getPosts()
            })
        }
    }

    openPopupCreatePost() {
        this.dialogService.open(this.componentWithType[this.post_type], {closeOnBackdropClick: true, context: {fake: true}})
            .onClose
            .subscribe({
                next: () => {
                    this.getPosts()
                },
                error: (err) => console.error(`Observer got an error: ${err}`),
            })
    }

    onUpdate(post) {
        console.log(post)
        this.dialogService.open(this.componentWithType[this.post_type], {
            closeOnBackdropClick: true, context: {
                _type: "update",
                fake: this.fake,
                post
            }
        })
            .onClose
            .subscribe({
                next: () => {
                    this.getPosts()
                },
                error: (err) => console.error(`Observer got an error: ${err}`),
            })
    }
}
