import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  overlayOpen = new BehaviorSubject<boolean>(false);
  recentSearches = new BehaviorSubject<string[]>(JSON.parse(window.localStorage.getItem('recentSearches') ?? '[]'));
  searchTerm = new BehaviorSubject<string>('');

  constructor() {}

  search(searchTerm: string) {
    this.searchTerm.next(searchTerm);
    this.overlayOpen.next(false);
    this.addToRecentSearches(searchTerm);
  }

  addToRecentSearches(searchTerm: string) {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const updatedSearches = [
      lowerCaseTerm,
      ...this.recentSearches.value.filter((s) => s !== lowerCaseTerm),
    ];
    this.recentSearches.next(updatedSearches);
    window.localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  }

  deleteRecentSearch(searchTerm: string) {
    const updatedSearches = this.recentSearches.value.filter(s => s !== searchTerm);
    this.recentSearches.next(updatedSearches);
    window.localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  }
}
