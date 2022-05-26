import {Component, OnInit} from '@angular/core';
import {ShareSideBarService} from "../core/services/shareSideBar.service";
import {NbDialogService, NbMenuItem} from "@nebular/theme";
import {AddJobComponent} from "./workspace/dialog/add-job/add-job.component";

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {

  public subSidebar: string = "";
  items: NbMenuItem[] = [
    {
      title: "",
      link: 'workspace',
      icon: {
        icon: "workspace",
        pack: "theme-icon-pack"
      },
    },
    {
      title: "",
      link: 'profile',
      icon: {
        icon: "tasks",
        pack: "theme-icon-pack"
      },
    },
    {
      title: "",
      link: '',
      icon: {
        icon: "messages",
        pack: "theme-icon-pack"
      },
    },
    {
      title: "",
      link: 'notify',
      icon: {
        icon: "notify",
        pack: "theme-icon-pack"
      },
    }
  ];

  constructor(private sideBarService: ShareSideBarService,
              private dialogService: NbDialogService) {
    this.sideBarService.onShowSecondSidebar.subscribe((showing: string) => {
      this.subSidebar = showing
    })
  }

  ngOnInit(): void {
  }

  public addJob() {
    this.dialogService.open(AddJobComponent)
  }

}
