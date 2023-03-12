import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {BasicComponent} from "./page/basic/basic.component";
import {SettingsComponent} from "./settings/settings.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {ListsComponent} from "./manager-posts/lists/lists.component";
import {CreateComponent} from "./manager-posts/create/create.component";
import {CreateLivestreamComponent} from "./manager-posts/create-livestream/create-livestream.component";
import {CreateGameMobileComponent} from "./manager-posts/create-game-mobile/create-game-mobile.component";
import {CreateAdvertisementComponent} from "./manager-posts/create-advertisement/create-advertisement.component";
import {CreateGameCardComponent} from "./manager-posts/create-game-card/create-game-card.component";
import {CreateNotiComponent} from "./manager-posts/create-noti/create-noti.component";
import {CreateSubscribeComponent} from "./manager-posts/create-subscribe/create-subscribe.component";

const routes: Routes = [
    {
        path: "",
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
                path: "home-fake",
                component: BasicComponent,
                data: {
                    id: 1,
                    fake: true
                }
            },
            {
                path: "e-sport-fake",
                component: BasicComponent,
                data: {
                    id: 2,
                    fake: true
                }
            },
            {
                path: "hot-news-fake",
                component: BasicComponent,
                data: {
                    id: 10,
                    fake: true
                }
            },
            {
                path: "sport-fake",
                component: BasicComponent,
                data: {
                    id: 8,
                    fake: true
                }
            },
            {
                path: "live-stream-fake",
                component: BasicComponent,
                data: {
                    id: 9,
                    fake: true
                }
            },
            {
                path: "video-fake",
                component: BasicComponent,
                data: {
                    id: 5,
                    fake: true
                }
            },
            {
                path: "game-card-fake",
                component: BasicComponent,
                data: {
                    id: 3,
                    fake: true
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
                component: CreateComponent,
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
                path: "game-card-create",
                component: CreateGameCardComponent,
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
                path: "advertisement-create",
                component: CreateAdvertisementComponent,
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
                path: "game-mobile-create",
                component: CreateGameMobileComponent,
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
                path: 'subscribe',
                component: ListsComponent,
                data: {
                    post_type: "subscribe",
                    title: "ĐĂNG KÝ"
                }
            },
            {
                path: "subscribe-create",
                component: CreateSubscribeComponent,
            },
            {
                path: "livestream-create",
                component: CreateLivestreamComponent,
            },
            {
                path: 'notifications',
                component: ListsComponent,
                data: {
                    post_type: "NOTIFY",
                    title: "Thông Báo"
                }
            },
            {
                path: "notify-create",
                component: CreateNotiComponent,
            },
        ]
    },
    {
        path: "",
        component: DashboardComponent,
        children: [
            {
                path: 'posts-fake',
                component: ListsComponent,
                data: {
                    post_type: "POST",
                    title: "Bài Viết",
                    fake: true
                }
            },
            {
                path: "post-create-fake",
                component: CreateComponent,
                data: {fake: true}
            },
            {
                path: 'game-cards-fake',
                component: ListsComponent,
                data: {
                    post_type: "GAME_CARD",
                    title: "Thẻ Trò Chơi",
                    fake: true
                }
            },
            {
                path: "game-card-create-fake",
                component: CreateGameCardComponent,
                data: {fake: true}
            },
            {
                path: 'advertisements-fake',
                component: ListsComponent,
                data: {
                    post_type: "ADS",
                    title: "Quảng Cáo",
                    fake: true
                }
            },
            {
                path: "advertisement-create-fake",
                component: CreateAdvertisementComponent,
                data: {fake: true}
            },
            {
                path: 'games-mobile-fake',
                component: ListsComponent,
                data: {
                    post_type: "GAME_MOBILE",
                    title: "Game Mobile",
                    fake: true
                }
            },
            {
                path: "game-mobile-create-fake",
                component: CreateGameMobileComponent,
                data: {fake: true}
            },
            {
                path: 'livestreams-fake',
                component: ListsComponent,
                data: {
                    post_type: "LIVESTREAM",
                    title: "Livestreams",
                    fake: true
                }
            },
            {
                path: "livestream-create-fake",
                component: CreateLivestreamComponent,
                data: {fake: true}
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
