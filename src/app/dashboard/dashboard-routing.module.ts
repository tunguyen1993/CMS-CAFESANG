import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {BasicComponent} from "./page/basic/basic.component";
import {SettingsComponent} from "./settings/settings.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {ListsComponent} from "./manager-posts/lists/lists.component";
import {CreateComponent} from "./manager-posts/create/create.component";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: "home",
                component: BasicComponent,
                data: {
                    id: 1
                }
            },
            {
                path: "e-sport",
                component: BasicComponent,
                data: {
                    id: 2
                }
            },
            {
                path: "hot-news",
                component: BasicComponent,
                data: {
                    id: 10
                }
            },
            {
                path: "sport",
                component: BasicComponent,
                data: {
                    id: 8
                }
            },
            {
                path: "live-stream",
                component: BasicComponent,
                data: {
                    id: 9
                }
            },
            {
                path: "video",
                component: BasicComponent,
                data: {
                    id: 5
                }
            },
            {
                path: "game-card",
                component: BasicComponent,
                data: {
                    id: 3
                }
            }
        ]
    },
    {
        path: "",
        component: DashboardComponent,
        children: [
          {
            path: 'settings',
            component: SettingsComponent,
          }
        ]
    },
    {
        path: "",
        component: DashboardComponent,
        children: [
            {
                path: 'account-management',
                component: AccountsComponent,
            }
        ]
    },
    {
        path: "",
        component: DashboardComponent,
        children: [
            {
                path: 'posts',
                component: ListsComponent,
                data: {
                    post_type: "POST",
                    title: "Bài Viết"
                }
            },
            {
                path: "post-create",
                component: CreateComponent
            },
            {
                path: 'game-cards',
                component: ListsComponent,
                data: {
                    post_type: "GAME_CARD",
                    title: "Thẻ Trò Chơi"
                }
            },
            {
                path: 'advertisements',
                component: ListsComponent,
                data: {
                    post_type: "ADS",
                    title: "Quảng Cáo"
                }
            },
            {
                path: 'games-mobile',
                component: ListsComponent,
                data: {
                    post_type: "GAME_MOBILE",
                    title: "Game Mobile"
                }
            },
            {
                path: 'livestreams',
                component: ListsComponent,
                data: {
                    post_type: "LIVESTREAM",
                    title: "Livestreams"
                }
            },
            {
                path: 'notifications',
                component: ListsComponent,
                data: {
                    post_type: "NOTIFY",
                    title: "Thông Báo"
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
