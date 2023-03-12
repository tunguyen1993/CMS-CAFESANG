import {Component, Input, OnInit, Optional} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {NbDialogRef} from "@nebular/theme";
import {AccountsService} from "../accounts/accounts.service";

@Component({
    selector: 'app-accounts-create',
    templateUrl: './accounts-create.component.html',
    styleUrls: ['./accounts-create.component.scss']
})
export class AccountsCreateComponent implements OnInit {

    @Input() user: any

    angForm: FormGroup = new FormGroup({
        email: new FormControl("",),
        full_name: new FormControl(""),
        password: new FormControl(""),
        role: new FormControl("USER"),
    });

    constructor(@Optional() public dialog: NbDialogRef<any>,
                private service: AccountsService,
                ) {
    }

    ngOnInit(): void {
        console.log(this.user)
        if (this.user) {
            this.angForm.patchValue({
                email: this.user.email,
                full_name: this.user.full_name,
                role: this.user.role
            })
        }
    }

    onSubmit() {
        this.service.create(this.angForm.value)
            .subscribe(res => {
                this.close()
            })
    }

    onUpdate() {
        this.service.update(this.user.id, this.angForm.value)
            .subscribe(res => {
                this.close()
            })
    }

    close(returnedObject = null) {
        if (this.dialog) {
            this.dialog.close(returnedObject);
        }
    }
}
