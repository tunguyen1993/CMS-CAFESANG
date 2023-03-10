import {Injectable} from "@angular/core";
import {BaseAPIService} from "../../core/services/http.service";
import ApiConst from "../../core/const/api.const";

@Injectable()
export class PostService extends BaseAPIService {
    getPosts(post_type: string, page: number,
             search: string | undefined = "",
             categories: string | Array<any> | undefined = undefined,
             sort_by: string = "id",
             order_by: "DESC" | "ASC" = "DESC",
             limit: number = 10) {
        let category = ""
        if (categories && typeof categories !== "string") {
            categories.map(cat => {
                category += `&category=${cat}`
            })

        }
        const TYPE_API = `GET_LIST_BY_TYPE_${post_type}`
        return this.actionGet(`${ApiConst[TYPE_API]}?page=${page}&limit=${limit}&search=${search}&sort_by=${sort_by}&order_by=${order_by}${category}`)
    }

    updatePost(post_type: string,postId: number, data: Object) {
        const TYPE_API = `ACTION_POST`
        return this.actionPut(`${ApiConst[TYPE_API]}/${postId}`, data)
    }

    removePost(post_type: string,postId: number) {
        const TYPE_API = `ACTION_${post_type}`
        return this.actionDelete(`${ApiConst[TYPE_API]}/${postId}`)
    }

    createPost(data){
        return this.actionPost(`/admin/post/create-post`, data)
    }

    uploadImageFile (file: File) {
        return this.uploadFile(`/upload-file/upload-single-image`, file)
    }

    uploadVideo(file: File){
        return this.uploadFile(`/upload-file/upload-video`, file)
    }
}