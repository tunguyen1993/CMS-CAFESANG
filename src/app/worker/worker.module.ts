import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WorkerRoutingModule} from './worker-routing.module';
import {WorkerComponent} from './worker.component';
import {
  NbButtonModule, NbCardModule, NbDialogModule,
  NbFormFieldModule,
  NbIconModule, NbInputModule,
  NbLayoutModule,
  NbMenuModule, NbSearchModule, NbSelectModule,
  NbSidebarModule, NbTagModule
} from "@nebular/theme";
import {ShareSideBarService} from "../core/services/shareSideBar.service";
import {WorkspaceModule} from "./workspace/workspace.module";
import {AddJobComponent} from "./workspace/dialog/add-job/add-job.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ProfileModule} from "./profile/profile.module";
import {NotifyModule} from "./notify/notify.module";


@NgModule({
  declarations: [
    WorkerComponent,
    AddJobComponent
  ],
    imports: [
        CommonModule,
        WorkerRoutingModule,
        NbLayoutModule,
        NbSidebarModule,
        NbFormFieldModule,
        NbIconModule,
        NbMenuModule,
        NbButtonModule,
        NbSearchModule,
        NbInputModule,
        WorkspaceModule,
        NbCardModule,
        NbTagModule,
        ReactiveFormsModule,
        NbSelectModule,
        ProfileModule,
        NotifyModule
    ],
  providers: [
    ShareSideBarService
  ]
})
export class WorkerModule {
}
