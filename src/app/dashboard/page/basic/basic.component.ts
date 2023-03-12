import {Component, OnInit} from '@angular/core';
import {BaseAPIService} from "../../../core/services/http.service";
import {PageService} from "../page.service";
import {of} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-basic',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
    public pageTypes: any = [];
    public fake: boolean = false

    constructor(private readonly service: PageService, public route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route
            .data
            .subscribe((data: any) => {
                this.fake = data.fake
                this.service.getPageData(data.id, data.fake)
                    .subscribe(res => {
                        res.pageTypes.map((page: { type: string; id: number }, index: number) => {
                            this.pageTypes.push({
                                ...page,
                                data: []
                            })
                            this.getPageTypeDetail(page.id, index)
                        });
                    })
            });

    }


    getPageTypeDetail(id: number, index: number) {
        this.service.getPageTypeDetail(id, this.fake).subscribe(res => {
            this.pageTypes[index].data = res.items;
        })
    }
}
