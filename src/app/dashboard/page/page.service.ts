import {Injectable} from "@angular/core";
import {BaseAPIService} from "../../core/services/http.service";
import ApiConst from "../../core/const/api.const";
import PostTypeConst from "../../core/const/post-type.const";

@Injectable()
export class PageService extends BaseAPIService {
    getPageData(pageNumber: number) {
        return this.actionGet(`${ApiConst.GET_PAGE}/${pageNumber}`)
    }

    getPostType(postType: "POST" | "ADS" | "CATEGORY", category_id: number | undefined = undefined) {
        if (postType === "CATEGORY") {
            return this.getPostByCategory()
        }
        if (category_id) {
            return this.getPostsByCategory(category_id)
        }
        return this.actionGet(`${ApiConst.GET_POST_TYPE}?type=${PostTypeConst[postType]}`)
    }

    getPostsByCategory(categoryId: number) {
        return this.actionGet(`${ApiConst.GET_POST_BY_CATEGORY}/${categoryId}`)
    }
    getPostByCategory() {
        return this.actionGet(`${ApiConst.GET_POST_CATEGORY}?fake=`)
    }

    getPageTypeDetail(pageType: number) {
        return this.actionGet(`${ApiConst.GET_PAGE_TYPE}/${pageType}`)
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
    }) {
        return this.actionPost(`${ApiConst.ADD_PAGE_ITEM}`, body)
    }
}