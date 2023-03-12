import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {
    NbButtonModule,
    NbCardModule, NbFormFieldModule,
    NbIconModule, NbInputModule,
    NbLayoutModule,
    NbMenuModule,
    NbSelectModule,
    NbSidebarModule
} from "@nebular/theme";
import {BasicComponent} from './page/basic/basic.component';
import {PageService} from "./page/page.service";
import { ItemComponent } from './page/basic/item/item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SettingsComponent } from './settings/settings.component';
import {SettingsService} from "./settings/settings.service";
import { AccountsComponent } from './accounts/accounts.component';
import {AccountsService} from "./accounts/accounts.service";
import { ListsComponent } from './manager-posts/lists/lists.component';
import {PostService} from "./manager-posts/post.service";
import {NgxPaginationModule} from "ngx-pagination";
import { CreateComponent } from './manager-posts/create/create.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { CreateGameCardComponent } from './manager-posts/create-game-card/create-game-card.component';
import { CreateAdvertisementComponent } from './manager-posts/create-advertisement/create-advertisement.component';
import { CreateGameMobileComponent } from './manager-posts/create-game-mobile/create-game-mobile.component';
import { CreateLivestreamComponent } from './manager-posts/create-livestream/create-livestream.component';
import { CreateNotiComponent } from './manager-posts/create-noti/create-noti.component';

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
        CreateNotiComponent
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
        CKEditorModule
    ],

})
export class DashboardModule {
}
