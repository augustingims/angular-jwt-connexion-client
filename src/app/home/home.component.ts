import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';

import {AccountService, Account, EventManager} from '../core';
import {PNotifyService} from '../shared/service/pnotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit {
  account: Account;

  constructor(private accountService: AccountService, private eventManager: EventManager, private router: Router, private pnotifyService: PNotifyService) {
    //pnotifyService.getPNotify().alert('Notice me, senpai!');
  }

  ngOnInit() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });
    this.registerAuthenticationSuccess();
  }

  registerAuthenticationSuccess() {
    this.eventManager.subscribe('authenticationSuccess', message => {
      this.accountService.identity().then(account => {
        this.account = account;
      });
    });
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  login() {
    this.router.navigate(['/login']);
  }
}
