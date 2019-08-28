import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { errorRoute, navbarRoute } from './layouts';
import {loginRoute} from './login';
import {DEBUG_INFO_ENABLED} from './app.constants';


const routes: Routes = [navbarRoute, ...errorRoute, loginRoute];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: DEBUG_INFO_ENABLED })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
