import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Vacancy} from "../models/vacancy.model";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private httpClient: HttpClient) { }

  public getAllVacancies(): Observable<any> {
    return this.httpClient.get<Vacancy>(environment.apiUrl + "vacancies", {});
  }
}
