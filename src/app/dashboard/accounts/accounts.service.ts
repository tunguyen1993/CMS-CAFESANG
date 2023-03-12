import {Injectable} from "@angular/core";
import {BaseAPIService} from "../../core/services/http.service";
import ApiConst from "../../core/const/api.const";

@Injectable()
export class AccountsService extends BaseAPIService {
    getUsers(page: number, limit: number = 15) {
        return this.actionGet(`${ApiConst.GET_USERS}?page=${page}&limit=${limit}`)
    }

    deActiveAccount(userId: number) {
        return this.actionDelete(`${ApiConst.GET_USERS}/${userId}`)
    }

    activeAccount(userId: number) {
        return this.actionPut(`${ApiConst.GET_USERS}/active/${userId}`, {})
    }

    create (data) {
        return this.actionPost(`/admin/user/create-user`, data)
    }

    update (userId: number, data) {
        return this.actionPut(`/admin/user/${userId}`, data)
    }
}