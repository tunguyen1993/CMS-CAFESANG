import {Component, OnInit} from '@angular/core';
import {NbMenuItem, NbSidebarService} from "@nebular/theme";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: []
})
export class DashboardComponent implements OnInit {

    items: NbMenuItem[] = [
        {
            title: "Quản Lý Trang",
            icon: {icon: 'flag-outline', pack: 'eva'},
            children: [
                {
                    title: 'Trang Chủ',
                    link: '/dashboard/home',
                },
                {
                    title: 'Thể Thao Điện Tử',
                    link: '/dashboard/e-sport',
                },
                {
                    title: 'Tin Nóng',
                    link: '/dashboard/hot-news',
                },
                {
                    title: 'HOT',
                    children: [
                        {
                            title: 'Thể Thao',
                            link: '/dashboard/sport',
                        },
                        {
                            title: 'Live Stream',
                            link: '/dashboard/live-stream',
                        },
                    ]
                },
                {
                    title: 'Video',
                    link: '/dashboard/video',
                },
                {
                    title: 'Thẻ Trò Chơi',
                    link: '/dashboard/game-card',
                },
            ],
        },
        {
            title: "Quản Lý Trang FAKE",
            icon: {icon: 'flag-outline', pack: 'eva'},
            children: [
                {
                    title: 'Trang Chủ',
                    link: '/dashboard/home-fake',
                },
                {
                    title: 'Thể Thao Điện Tử',
                    link: '/dashboard/e-sport-fake',
                },
                {
                    title: 'Tin Nóng',
                    link: '/dashboard/hot-news-fake',
                },
                {
                    title: 'HOT',
                    children: [
                        {
                            title: 'Thể Thao',
                            link: '/dashboard/sport-fake',
                        },
                        {
                            title: 'Live Stream',
                            link: '/dashboard/live-stream-fake',
                        },
                    ]
                },
                {
                    title: 'Video',
                    link: '/dashboard/video-fake',
                },
                {
                    title: 'Thẻ Trò Chơi',
                    link: '/dashboard/game-card-fake',
                },
            ],
        },
        {
            title: "Quản Lý Bài Viết",
            icon: {icon: 'book-outline', pack: 'eva'},
            children: [
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Danh sách",
                    link: "/dashboard/posts"
                },
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Tạo Bài Viết",
                    link: "/dashboard/post-create"
                },
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Danh sách fake",
                    link: "/dashboard/posts-fake"
                },
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Tạo Bài Viết fake",
                    link: "/dashboard/post-create-fake"
                }
            ]
        },
        {
            title: "Quản Lý Thẻ Game",
            icon: {icon: 'checkmark-outline', pack: 'eva'},
            children: [
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Danh sách",
                    link: "/dashboard/game-cards"
                },
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Tạo Bài Viết",
                    link: "/dashboard/game-card-create"
                },
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Danh sách fake",
                    link: "/dashboard/game-cards-fake"
                },
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Tạo Bài Viết fake",
                    link: "/dashboard/game-card-create-fake"
                }
            ]
        },
        {
            title: "Quản Lý Quảng Cáo",
            icon: {icon: 'radio-button-off-outline', pack: 'eva'},
            children: [
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Danh sách",
                    link: "/dashboard/advertisements"
                },
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Tạo Bài Viết",
                    link: "/dashboard/advertisement-create"
                },
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Danh sách fake",
                    link: "/dashboard/advertisements-fake"
                },
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Tạo Bài Viết fake",
                    link: "/dashboard/advertisement-create-fake"
                }
            ]
        },
        {
            title: "Quản Lý Game Mobile",
            link: 'notify',
            icon: {icon: 'checkmark-outline', pack: 'eva'},
            children: [
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Danh sách",
                    link: "/dashboard/games-mobile"
                },
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Tạo Bài Viết",
                    link: "/dashboard/game-mobile-create"
                },
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Danh sách fake",
                    link: "/dashboard/games-mobile-fake"
                },
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Tạo Bài Viết fake",
                    link: "/dashboard/game-mobile-create-fake"
                }
            ]
        },
        {
            title: "Quản Lý Livestream",
            icon: {icon: 'film-outline', pack: 'eva'},
            children: [
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Danh sách",
                    link: "/dashboard/livestreams"
                },
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Tạo Bài Viết",
                    link: "/dashboard/livestream-create"
                },
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Danh sách fake",
                    link: "/dashboard/livestreams-fake"
                },
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Tạo Bài Viết fake",
                    link: "/dashboard/livestream-create-fake"
                }
            ]
        },
        {
            title: "Quản Lý Thông báo",
            icon: {icon: 'bell-outline', pack: 'eva'},
            children: [
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Danh sách",
                    link: "/dashboard/notifications"
                },
                {
                    icon: {icon: "list-outline", pack: 'eva'},
                    title: "Tạo Bài Viết",
                    link: "/dashboard/notify-create"
                }
            ]
        },
        {
            title: "Cài Đăt",
            icon: {icon: 'settings-outline', pack: 'eva'},
            children: [
                {
                    title: 'Cài Đăt',
                    link: '/dashboard/settings',
                    icon: {icon: 'settings-outline', pack: 'eva'},
                },
            ]
        },
        {
            title: "Quản Lý Tài Khoản",
            link: '/dashboard/account-management',
            icon: {icon: 'people-outline', pack: 'eva'},
        }
    ];

    constructor(private sidebarService: NbSidebarService) {
    }

    ngOnInit(): void {
    }

    toggle() {
        this.sidebarService.toggle(true);
        return false;
    }
}
