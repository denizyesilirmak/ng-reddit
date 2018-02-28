import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubredditComponent } from './subreddit/subreddit.component';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  { path: 'r/:subreddit', component: SubredditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SubredditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
