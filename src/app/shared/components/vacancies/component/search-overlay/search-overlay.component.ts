import {Component, inject} from '@angular/core';
import {SearchBarService} from "../../../../services/search-bar.service";

@Component({
  selector: 'app-search-overlay',
  templateUrl: './search-overlay.component.html',
  styleUrls: ['./search-overlay.component.scss']
})
export class SearchOverlayComponent {

  constructor(private searchBarService: SearchBarService) {}

  recentSearches = this.searchBarService.recentSearches;

  trackSearch(index: number, item: string) {
    return index;
  }

  deleteRecentSearch(searchTerm: string) {
    this.searchBarService.deleteRecentSearch(searchTerm);
  }

  performSearch(searchTerm: string) {
    this.searchBarService.search(searchTerm)
  }

}
