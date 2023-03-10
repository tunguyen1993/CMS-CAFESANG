import {Injectable} from "@angular/core";
import {BaseAPIService} from "../../core/services/http.service";
import ApiConst from "../../core/const/api.const";

@Injectable()
export class AccountsService extends BaseAPIService {
    getUsers(page: number, limit: number = 10) {
        return this.actionGet(`${ApiConst.GET_USERS}`, {page: 1, limit})
    }

    deActiveAccount(userId: number) {
        return this.actionDelete(`${ApiConst.GET_USERS}/${userId}`)
    }

    activeAccount(userId: number) {
        return this.actionPut(`${ApiConst.GET_USERS}/active/${userId}`, {})
    }
}