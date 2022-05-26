import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorkerComponent} from './worker.component';
import {ProfileComponent} from "./profile/profile.component";
import {WorkspaceComponent} from "./workspace/workspace.component";
import {NotifyComponent} from "./notify/notify.component";

const routes: Routes = [
  {
    path: '',
    component: WorkerComponent,
    children: [{
        path: 'workspace',
        component: WorkspaceComponent
      }, {
        path: 'profile',
        component: ProfileComponent
      }, {
        path: 'notify',
        component: NotifyComponent
      }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkerRoutingModule {
}
