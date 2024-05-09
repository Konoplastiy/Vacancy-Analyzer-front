import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  public getAllBlogs(page: number = 1, size: number = 9): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/blogs?size=${size}&page=${page}`);
  }
}
