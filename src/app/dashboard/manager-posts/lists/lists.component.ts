import {Component, OnInit} from '@angular/core';
import {PostService} from "../post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-lists',
    templateUrl: './lists.component.html',
    styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

    posts: any = []
    page: number = 1;
    totalPage: number = 0;
    limit: number = 10;
    totalRecord: number = 0;
    currentPage: number = 1;
    keyword: string = "";
    categories: any = undefined;
    post_type: string | null = null
    title: string | null = null
    constructor(private service: PostService,
                private route: ActivatedRoute) {
        this.route.queryParams
            .subscribe(params => {
                    this.page = params['page'] ?? 1
                }
            );
        this.route
            .data
            .subscribe((data: any) => {
                this.title = data.title
                this.post_type = data.post_type
            })
    }

    ngOnInit(): void {
        this.getPosts()
    }

    getPosts() {
        this.service.getPosts(this.post_type ?? "",this.page, this.keyword, this.categories).subscribe(res => {
            this.posts = res.data;
            this.totalPage = res.total_page;
            this.totalRecord = res.totalRecord;
            this.currentPage = res.current_page;
        })
    }

    changeStatusPost(status: "DISABLE" | "ENABLE", postId: number, indexReplace: number) {
        this.service.updatePost(this.post_type ?? "",postId, {
            status
        }).subscribe(res => {
            this.posts[indexReplace].status = status;
        })
    }

    removePost(postId: number, postTitle: string) {
        if (confirm("Bạn có chắc chắn muốn xóa bài viết " + postTitle + "không?")) {
            this.service.removePost(this.post_type ?? "",postId).subscribe(res => {
                this.getPosts()
            })
        }
    }
}
