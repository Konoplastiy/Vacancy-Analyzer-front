import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Filter} from "../models/filter";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  constructor(private httpClient: HttpClient) {}

  public getAllVacancies(filters: Filter, searchText: string = '', page: number = 1): Observable<any> {
    let params = new HttpParams()
      .set('searchText', searchText)
      .set('page', page.toString());

    if (filters.platformName && filters.platformName.length) {
      params = params.set('platformName',  filters.platformName.join(','));
    }
    if (filters.experienceLevel && filters.experienceLevel.length) {
      params = params.set('experienceLevel', filters.experienceLevel.join(','));
    }
    if (filters.salaryFrom) {
      params = params.set('salaryFrom', filters.salaryFrom.toString());
    }
    if (filters.salaryTo) {
      params = params.set('salaryTo', filters.salaryTo.toString());
    }
    if (filters.work && filters.work.length) {
      params = params.set('work', filters.work.join(','));
    }

    return this.httpClient.get(`${environment.apiUrl}/vacancies`, { params });
  }
}

