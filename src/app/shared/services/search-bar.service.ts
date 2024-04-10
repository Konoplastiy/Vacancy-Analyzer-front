import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  overlayOpen = new BehaviorSubject<boolean>(false);
  recentSearches = new BehaviorSubject<string[]>([
    "angular",
    "java",
    "c#",
    "python",
  ]);

  constructor() { }

  search(searchTerm: string) {
    this.overlayOpen.next(false);
    this.addToRecentSearches(searchTerm);
  }

  addToRecentSearches(searchTerm: string) {
    const lowerCaseTerm = searchTerm.toLowerCase();
    this.recentSearches.next([
      lowerCaseTerm,
      ...this.recentSearches.value.filter((s) => s !== lowerCaseTerm),
    ]);
  }
}
