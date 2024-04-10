import {Component, inject} from '@angular/core';
import {SearchBarService} from "../../../../services/search-bar.service";

@Component({
  selector: 'app-search-overlay',
  templateUrl: './search-overlay.component.html',
  styleUrls: ['./search-overlay.component.scss']
})
export class SearchOverlayComponent {

  searchBarService = inject(SearchBarService);
  recentSearches = this.searchBarService.recentSearches;
}
