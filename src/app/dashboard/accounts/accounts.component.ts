import {Component, OnInit} from '@angular/core';
import {AccountsService} from "./accounts.service";
import {NbDialogService} from "@nebular/theme";
import {AccountsCreateComponent} from "../accounts-create/accounts-create.component";

@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
    users: any = [];

    page: number = 1;
    totalPage: number = 0;
    limit: number = 15;
    totalRecord: number = 0;
    currentPage: number = 1;

    constructor(private service: AccountsService,
                private dialogService: NbDialogService) {

    }

    ngOnInit(): void {
        this.getUser()
    }

    getUser() {
        this.service.getUsers(this.page).subscribe(res => {
            this.users = res.data;
            this.totalPage = res.total_page;
            this.totalRecord = res.totalRecord;
            this.currentPage = res.current_page;
        })
    }

    deActiveUser(userId: number, index: number) {
        this.service.deActiveAccount(userId).subscribe(res => {
            this.users[index] = res
        })
    }

    activeUser(userId: number, index: number) {
        this.service.activeAccount(userId).subscribe(res => {
            this.users[index] = res
        })
    }

    editUser(user) {
        this.dialogService.open(AccountsCreateComponent, {
            closeOnBackdropClick: true, context: {
                user
            }
        })
            .onClose
            .subscribe({
                next: () => {
                    this.getUser()
                },
                error: (err) => console.error(`Observer got an error: ${err}`),
            })
    }

    openPopupCreate() {
        this.dialogService.open(AccountsCreateComponent, {
            closeOnBackdropClick: true, context: {}
        })
            .onClose
            .subscribe({
                next: () => {
                    this.getUser()
                },
                error: (err) => console.error(`Observer got an error: ${err}`),
            })
    }
}
