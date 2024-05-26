import {Component} from '@angular/core';
import {SearchBarService} from "../../../../services/search-bar.service";

@Component({
  selector: 'app-search-overlay',
  templateUrl: './search-overlay.component.html',
  styleUrls: ['./search-overlay.component.scss']
})
export class SearchOverlayComponent {

  constructor(private searchBarService: SearchBarService) {}

  recentSearches = this.searchBarService.recentSearches;

  deleteRecentSearch(searchTerm: string) {
    this.searchBarService.deleteRecentSearch(searchTerm);
  }

  performSearch(searchTerm: string) {
    this.searchBarService.search(searchTerm)
  }

  shouldDisplayRecentSearches() {
    return this.recentSearches.value !== null && this.recentSearches.value.length > 0;
  }

}
