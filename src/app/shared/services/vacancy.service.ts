import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface VacancyItem {
  vacancyName: string;
  companyName: string;
  shortDescription: string;
  cityName: string;
  date: string;
  urlVacancy: string;
}

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private apiUrl: string = 'http://localhost:8081/api/v1/';

  constructor(private httpClient: HttpClient) { }

  public getAllVacancies(searchText: string = '', page: number = 1): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}vacancies?searchText=${searchText}&page=${page}`);
  }
}
