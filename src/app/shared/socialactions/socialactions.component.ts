import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socialactions',
  templateUrl: './socialactions.component.html',
  styleUrls: ['./socialactions.component.css']
})
export class SocialactionsComponent implements OnInit {

  liked: boolean = false;
  beforeClickLike: boolean = false;
  afterClickLike: boolean = true;
  saved: boolean = false;
  beforeClickSave: boolean = false;
  afterClickSave: boolean = true;
  menuClosed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  togleLike() {
    if (this.liked === false) {
      this.beforeClickLike = true;
      this.afterClickLike = false;
      this.liked = true;
    } else {
      this.beforeClickLike = false;
      this.afterClickLike = true;
      this.liked = false;
    }
  }

  togleSave() {
    if (this.saved === false) {
      this.beforeClickSave = true;
      this.afterClickSave = false;
      this.saved = true;
    } else {
      this.beforeClickSave = false;
      this.afterClickSave = true;
      this.saved = false;
    }
  }

  openMenu() {
    this.menuClosed = false;
  }

  closeMenu() {
    this.menuClosed = true;
  }

}
