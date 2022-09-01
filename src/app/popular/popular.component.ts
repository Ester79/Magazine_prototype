import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { Newsreports } from '../interfaces/newsreports.interface';
import { DisplaynewsPipe } from '../pipes/displaynews.pipe';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  hideMenu: boolean = true;
  favouriteFilled: boolean = true;
  favouriteBorder: boolean = false;
  favourite: boolean = false;
  savedFilled: boolean = true;
  savedBorder: boolean = false;
  saved: boolean = false;

  elementsPopular: Newsreports[] = [];


  constructor(private router: Router, private rougintModule: AppRoutingModule, private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadPopular();
  }

  loadPopular(): void {
    this.newsService.getPopularInfo()
      .subscribe(item => this.elementsPopular = item);
  }

  onResize(event: any) {
    this.loadPopular();
  }
}
