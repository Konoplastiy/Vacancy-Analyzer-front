import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private httpClient: HttpClient) { }

  // public getAllVacancies(): Observable<any> {
  //   return this.httpClient.get<//Model>(environment.apiUrl, {});
  // }
}