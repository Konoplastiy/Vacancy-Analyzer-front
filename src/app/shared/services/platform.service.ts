import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface PlatformInfo {
  namePlatform: string;
  senior: number;
  middle: number;
  junior: number;
  others: number;
}

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  private apiUrl: string = 'http://localhost:8081/api/v1/';

  constructor(private httpClient: HttpClient) { }

  public getAllPlatformsInfo(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}platforms`);
  }
}
