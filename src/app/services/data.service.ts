import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {
  url = 'https://newsapi.org/v2';
  apiKey = 'YOURKEY';

  totalPosts = null;
  pages: any;

  constructor(private http: HttpClient) {}

  getTopNews(cat) {
    return this.http.get(
      `${this.url}/top-headlines?category=${cat}&country=us&apiKey=${
        this.apiKey
      }`
    ).pipe(map(res => res['articles']));
  }

  getSportSources() {
    return this.http
      .get(
        `${this.url}/sources?category=sports&language=en&apiKey=${this.apiKey}`
      )
      .pipe(map(res => res['sources']));
  }

  getRandomUser() {
    return this.http
    .get(
      `https://randomuser.me/api?results=20`
    )
    .pipe(map(res => res['results']));
  }
}
