import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { Newsreports } from '../interfaces/newsreports.interface';


@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  elementsLatest: Newsreports[] = [];
  hideMenu: boolean = true;
  favouriteFilled: boolean = true;
  favouriteBorder: boolean = false;
  favourite: boolean = false;
  savedFilled: boolean = true;
  savedBorder: boolean = false;
  saved: boolean = false;


  constructor(private router: Router, private rougintModule: AppRoutingModule, private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadLatest();
  }

  loadLatest(): void {
    this.newsService.getLatestInfo()
      .subscribe(item => this.elementsLatest = item);
  }

  onResize(event: any) {
    this.loadLatest();
  }
}
