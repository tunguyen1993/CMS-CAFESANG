import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import {
  NbButtonModule, NbCardModule, NbCheckboxModule,
  NbDatepickerModule,
  NbFormFieldModule,
  NbIconModule, NbInputModule,
  NbLayoutModule, NbOptionModule, NbPopoverModule, NbRadioModule, NbSelectModule,
  NbSidebarModule, NbTagModule
} from "@nebular/theme";
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProjectTabComponent } from './shared/sidebar/project-tab/project-tab.component';
import { MemberTabComponent } from './shared/sidebar/member-tab/member-tab.component';
import { WorkspaceTableItemComponent } from './components/workspace-table-item/workspace-table-item.component';
import { WorkspaceImagesComponent } from './dialog/workspace-images/workspace-images.component';
import { WorkspaceCommentComponent } from './dialog/workspace-comment/workspace-comment.component';
import { AddProjectComponent } from './dialog/add-project/add-project.component';
import { AddMemberComponent } from './dialog/add-member/add-member.component';


@NgModule({
  declarations: [
    WorkspaceComponent,
    SidebarComponent,
    ProjectTabComponent,
    MemberTabComponent,
    WorkspaceTableItemComponent,
    WorkspaceImagesComponent,
    WorkspaceCommentComponent,
    AddProjectComponent,
    AddMemberComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    NbSidebarModule,
    NbLayoutModule,
    NbIconModule,
    NbFormFieldModule,
    NbButtonModule,
    NbDatepickerModule,
    ReactiveFormsModule,
    NbCardModule,
    NbPopoverModule,
    NbCheckboxModule,
    NbRadioModule,
    FormsModule,
    NbInputModule,
    NbOptionModule,
    NbSelectModule,
    NbTagModule
  ]
})
export class WorkspaceModule { }
