import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotifyRoutingModule } from './notify-routing.module';
import { NotifyComponent } from './notify.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import {NbTabsetModule} from "@nebular/theme";
import { NotifyItemComponent } from './component/notify-item/notify-item.component';


@NgModule({
    declarations: [
        NotifyComponent,
        SidebarComponent,
        NotifyItemComponent
    ],
    exports: [
        SidebarComponent
    ],
  imports: [
    CommonModule,
    NotifyRoutingModule,
    NbTabsetModule
  ]
})
export class NotifyModule { }
