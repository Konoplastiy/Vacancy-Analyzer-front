import {Component, inject, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {SearchBarService} from "../../../../services/search-bar.service";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {
  // control = new FormControl('');
  // languages: string[] = ['JavaScript', 'Python', 'Java', 'C#'];
  // filteredLanguages: Observable<string[]> = of([]);
  //
  // ngOnInit() {
  //   this.filteredLanguages = this.control.valueChanges.pipe(
  //     startWith(''),
  //     map(value => this._filter(value || '')),
  //   );
  // }
  //
  // private _filter(value: string): string[] {
  //   const filterValue = this._normalizeValue(value);
  //   return this.languages.filter(street => this._normalizeValue(street).includes(filterValue));
  // }
  //
  // private _normalizeValue(value: string): string {
  //   return value.toLowerCase().replace(/\s/g, '');
  // }

  searchBarService = inject(SearchBarService);
  overlayOpen = this.searchBarService.overlayOpen;

  ngOnInit(): void {
  }

  search(searchTerm: string) {
    if (!searchTerm) return;

    this.searchBarService.search(searchTerm)
  }

}
