import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class ShareSideBarService {
  onShowSecondSidebar: EventEmitter<string> = new EventEmitter();
}
