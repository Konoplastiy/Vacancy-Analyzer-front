import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Filter} from "../models/filter";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterSubject = new BehaviorSubject<Filter | null>(null);

  filter$ = this.filterSubject.asObservable();
  constructor() { }

  updateFilters(filters: Filter) {
    this.filterSubject.next(filters);
  }
}
