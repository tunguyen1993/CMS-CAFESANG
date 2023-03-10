import {Injectable} from "@angular/core";
import {BaseAPIService} from "../../core/services/http.service";
import ApiConst from "../../core/const/api.const";

@Injectable()
export class SettingsService extends BaseAPIService {
    getConfig() {
        return this.actionGet(`${ApiConst.GET_CONFIG}`)
    }

    getConfigOpenLink() {
        return this.actionGet(`${ApiConst.GET_CONFIG_OPEN_LINK}`)
    }

    getConfigFakeData() {
        return this.actionGet(`${ApiConst.GET_CONFIG_FAKE_DATA}`)
    }

    getConfigEnableLogin() {
        return this.actionGet(`${ApiConst.GET_CONFIG_ENABLE_LOGIN}`)
    }

    changeSetting(configId: number, data: any) {
       return this.actionPut(`${ApiConst.CHANGE_SETTING}/${configId}`, data)
    }

    changeSettingFakeData() {
        return this.actionPut(`${ApiConst.GET_CONFIG_FAKE_DATA}`,{})
    }

    changeSettingConfigOpenLink() {
        return this.actionPut(`${ApiConst.GET_CONFIG_OPEN_LINK}`, {})
    }

    changeSettingConfigEnableLogin() {
        return this.actionPut(`${ApiConst.GET_CONFIG_ENABLE_LOGIN}`, {})
    }
}