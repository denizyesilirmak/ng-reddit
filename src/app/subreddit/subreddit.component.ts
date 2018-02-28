import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css']
})
export class SubredditComponent implements OnInit {

  constructor(private _http: HttpClient) { }
  posts:any;

  getPosts(){
    this._http.get("https://www.reddit.com/r/pictures.json").subscribe(data => {
      this.posts = data["data"]["children"];
      console.log(this.posts);
    })
  }

  ngOnInit() {
    this.getPosts();
  }

}
