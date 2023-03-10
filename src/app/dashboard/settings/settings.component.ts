import {Component, OnInit} from '@angular/core';
import {SettingsService} from "./settings.service";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    configs: any = [];
    fakeData: string = "0";
    openLink: string = "0";
    enableLogin: string = "0";

    constructor(private service: SettingsService) {
        service.getConfig().subscribe(configs => {
            this.configs = configs
        })
        service.getConfigFakeData().subscribe(fakeData => {
            this.fakeData = fakeData ? "1" : "0"
        })
        service.getConfigOpenLink().subscribe(openLink => {
            this.openLink = openLink ? "1" : "0"
        })
        service.getConfigEnableLogin().subscribe(enableLogin => {
            this.enableLogin = enableLogin ? "1" : "0"
        })
    }

    ngOnInit(): void {
    }


    changeInput(value: any, key: any) {
        let data: any = {}
        if (key.link) {
            data.link = value
        } else {
            data.content = value
        }
        this.service.changeSetting(key.id, data).subscribe(res => {
            console.log("updated data")
        })
    }

    changeSettingFakeData () {
        this.service.changeSettingFakeData().subscribe(res => {})
    }

    changeSettingConfigOpenLink() {
        this.service.changeSettingConfigOpenLink().subscribe(res => {})
    }

    changeSettingConfigEnableLogin() {
        this.service.changeSettingConfigEnableLogin().subscribe(res => {})
    }
}
