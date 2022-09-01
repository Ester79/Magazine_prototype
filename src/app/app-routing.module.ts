import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilterComponent } from './shared/filter/filter.component';
import { LatestComponent } from './latest/latest.component';
import { PopularComponent } from './popular/popular.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { WidgetComponent } from './shared/widget/widget.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { SocialactionsComponent } from './shared/socialactions/socialactions.component';
import { CardNewsComponent } from './shared/card-news/card-news.component';


const routes: Routes = [
  { path: '', redirectTo: 'latest', pathMatch: 'full' },
  {
    path: '', component: SkeletonComponent,
    children: [{
      path: 'latest',
      component: LatestComponent
    }, {
      path: 'popular',
      component: PopularComponent
    }],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
