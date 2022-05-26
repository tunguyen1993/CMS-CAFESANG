import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {ShareSideBarService} from "../../core/services/shareSideBar.service";
import { ProfileSidebarComponent } from './shared/sidebar/profile-sidebar/profile-sidebar.component';
import {NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule} from "@nebular/theme";


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileSidebarComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NbIconModule,
    NbFormFieldModule,
    NbInputModule,
    NbSelectModule
  ],
  exports: [
    ProfileSidebarComponent
  ],
  providers: [
    ShareSideBarService
  ]
})
export class ProfileModule { }
