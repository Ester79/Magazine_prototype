import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FilterComponent } from './shared/filter/filter.component';
import { WidgetComponent } from './shared/widget/widget.component';
import { LatestComponent } from './latest/latest.component';
import { PopularComponent } from './popular/popular.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { NewsService } from './service/news.service';
import { DisplaynewsPipe } from './pipes/displaynews.pipe';
import { DisplayPopularsPipe } from './pipes/display-populars.pipe';
import { SocialactionsComponent } from './shared/socialactions/socialactions.component';
import { CardNewsComponent } from './shared/card-news/card-news.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavigationComponent,
    FilterComponent,
    WidgetComponent,
    LatestComponent,
    PopularComponent,
    SkeletonComponent,
    DisplaynewsPipe,
    DisplayPopularsPipe,
    SocialactionsComponent,
    CardNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
