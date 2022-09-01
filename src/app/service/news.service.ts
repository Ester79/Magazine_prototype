import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Newsreports } from '../interfaces/newsreports.interface';


@Injectable({
  providedIn: 'root'
})
export class NewsService {


  endpointLatest: string = "assets/data/latestData.json";
  endpoinPopular: string = "assets/data/popularData.json";


  constructor(private httpClient: HttpClient) { }

  // Get Latest info
  getLatestInfo(): Observable<Newsreports[]>{
   return this.httpClient.get<Newsreports[]>(this.endpointLatest);
  }

  // Get Popular info
  getPopularInfo(): Observable<Newsreports[]>{
    return this.httpClient.get<Newsreports[]>(this.endpoinPopular);
  }

}
