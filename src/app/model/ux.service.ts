import { Injectable } from '@angular/core';
import { Observable, AsyncSubject } from 'rxjs/Rx';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class UxService {

  public sidenavRightOpened: ReplaySubject<any> = new ReplaySubject(1);

  constructor() { }

  setSidenavRightOpened(opened: boolean) {
    this.sidenavRightOpened.next(opened);
  }

}
