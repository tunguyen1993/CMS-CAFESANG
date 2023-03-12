import {Injectable} from "@angular/core";
import {BaseAPIService} from "../../core/services/http.service";
import ApiConst from "../../core/const/api.const";
import PostTypeConst from "../../core/const/post-type.const";

@Injectable()
export class PageService extends BaseAPIService {
    getPageData(pageNumber: number, fake: boolean = false) {
        return this.actionGet(`${ApiConst.GET_PAGE}/${pageNumber}?fake=${fake ? "fake" : ""}`)
    }

    getPostType(postType: "POST" | "ADS" | "CATEGORY", category_id: number | undefined = undefined, fake: boolean = false) {
        if (postType === "CATEGORY") {
            return this.getPostByCategory(fake)
        }
        if (category_id) {
            return this.getPostsByCategory(category_id, fake)
        }
        return this.actionGet(`${ApiConst.GET_POST_TYPE}?type=${PostTypeConst[postType]}?fake=${fake ? "fake" : ""}`)
    }

    getPostsByCategory(categoryId: number, fake: boolean = false) {
        return this.actionGet(`${ApiConst.GET_POST_BY_CATEGORY}/${categoryId}?fake=${fake ? "fake" : ""}`)
    }

    getPostByCategory(fake: boolean = false) {
        return this.actionGet(`${ApiConst.GET_POST_CATEGORY}?fake=${fake ? "fake" : ""}`)
    }

    getPageTypeDetail(pageType: number, fake: boolean = false) {
        return this.actionGet(`${ApiConst.GET_PAGE_TYPE}/${pageType}?fake=${fake ? "fake" : ""}`)
    }

    addPageItem(body: {
        data: Array<{
            order: number,
            post_id: number,
            page_type_id: number,
            page_id: number
        }>;
        page_id: number;
        page_type_id: number
    }, fake: boolean = false) {
        return this.actionPost(`${ApiConst.ADD_PAGE_ITEM}?fake=${fake ? "fake" : ""}`, body)
    }
}