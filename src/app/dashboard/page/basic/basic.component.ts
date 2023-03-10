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


    constructor(private readonly service: PageService, public route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route
            .data
            .subscribe((data: any) => {
                this.service.getPageData(data.id)
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
        this.service.getPageTypeDetail(id).subscribe(res => {
            this.pageTypes[index].data = res.items;
        })
    }
}
