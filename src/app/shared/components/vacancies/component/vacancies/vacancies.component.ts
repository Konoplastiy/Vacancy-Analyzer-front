import {Component} from '@angular/core';
import {SearchBarService} from '../../../../services/search-bar.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent {

  overlayOpen = this.searchBarService.overlayOpen;
  searchTerm = this.searchBarService.searchTerm;

  constructor(private searchBarService: SearchBarService) {}

  search(searchTerm: string) {
    if (!searchTerm) return;
    this.searchBarService.search(searchTerm);
  }

  openOverlay() {
    this.searchBarService.overlayOpen.next(true);
  }

  closeOverlay() {
    this.searchBarService.overlayOpen.next(false);
  }
}
