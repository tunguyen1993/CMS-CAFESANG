import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {
    NbButtonModule,
    NbCardModule, NbContextMenuModule, NbFormFieldModule,
    NbIconModule, NbInputModule,
    NbLayoutModule,
    NbMenuModule,
    NbSelectModule,
    NbSidebarModule, NbUserModule
} from "@nebular/theme";
import {BasicComponent} from './page/basic/basic.component';
import {ItemComponent} from './page/basic/item/item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SettingsComponent} from './settings/settings.component';
import {AccountsComponent} from './accounts/accounts.component';
import {ListsComponent} from './manager-posts/lists/lists.component';
import {NgxPaginationModule} from "ngx-pagination";
import {CreateComponent} from './manager-posts/create/create.component';
import {CKEditorModule} from 'ckeditor4-angular';
import {CreateGameCardComponent} from './manager-posts/create-game-card/create-game-card.component';
import {CreateAdvertisementComponent} from './manager-posts/create-advertisement/create-advertisement.component';
import {CreateGameMobileComponent} from './manager-posts/create-game-mobile/create-game-mobile.component';
import {CreateLivestreamComponent} from './manager-posts/create-livestream/create-livestream.component';
import {CreateNotiComponent} from './manager-posts/create-noti/create-noti.component';
import { AccountsCreateComponent } from './accounts-create/accounts-create.component';
import { CreateSubscribeComponent } from './manager-posts/create-subscribe/create-subscribe.component';

@NgModule({
    declarations: [
        DashboardComponent,
        BasicComponent,
        ItemComponent,
        SettingsComponent,
        AccountsComponent,
        ListsComponent,
        CreateComponent,
        CreateGameCardComponent,
        CreateAdvertisementComponent,
        CreateGameMobileComponent,
        CreateLivestreamComponent,
        CreateNotiComponent,
        AccountsCreateComponent,
        CreateSubscribeComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        NbLayoutModule,
        NbMenuModule,
        NbSidebarModule,
        NbCardModule,
        NbSelectModule,
        FormsModule,
        NbIconModule,
        NbButtonModule,
        NbInputModule,
        NgxPaginationModule,
        NbFormFieldModule,
        ReactiveFormsModule,
        CKEditorModule,
        NbUserModule,
        NbContextMenuModule
    ],

})
export class DashboardModule {
}
