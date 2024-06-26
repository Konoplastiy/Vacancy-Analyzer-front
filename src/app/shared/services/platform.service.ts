import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(private httpClient: HttpClient) { }

  public getAllPlatformsInfo(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/platforms`);
  }
}
