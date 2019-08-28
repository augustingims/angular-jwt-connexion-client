import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {VERSION} from '../../app.constants';
import {AccountService} from '../../core';
import {LoginService} from '../../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', 'navbar.scss']
})
export class NavbarComponent implements OnInit {

  inProduction: boolean;
  isNavbarCollapsed: boolean;
  languages: any[];
  version: string;

  constructor(
    private loginService: LoginService,
    private accountService: AccountService,
    private router: Router
  ) {
    this.version = VERSION ? 'v' + VERSION : '';
    this.isNavbarCollapsed = true;
  }

  ngOnInit() { }

  collapseNavbar() {
    this.isNavbarCollapsed = true;
  }

  isAuthenticated() {
     return this.accountService.isAuthenticated();
  }

  login() {
    this.router.navigate(['login']);
  }

  logout() {
    this.collapseNavbar();
    this.loginService.logout();
    this.router.navigate(['']);
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  getImageUrl() {
     return this.isAuthenticated() ? this.accountService.getImageUrl() : null;
  }
}
