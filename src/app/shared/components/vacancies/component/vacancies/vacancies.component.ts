import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchBarService} from '../../../../services/search-bar.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent {

  currentPage = 1;
  totalPages = 300; // Set a static number of total pages
  maxPagesToShow = 5;
  paginationEnabled = true;

  overlayOpen = this.searchBarService.overlayOpen;
  searchTerm = this.searchBarService.searchTerm;

  constructor(private searchBarService: SearchBarService) {
  }

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

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  getPageRange(): number[] {
    const pages: number[] = [];
    const pagesToShow = Math.min(this.totalPages, this.maxPagesToShow);

    if (this.totalPages <= this.maxPagesToShow) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage: number;
      let endPage: number;
      const middlePage = Math.ceil(this.maxPagesToShow / 2);

      if (this.currentPage <= middlePage) {
        startPage = 1;
        endPage = this.maxPagesToShow - 1;
      } else if (this.currentPage >= this.totalPages - middlePage) {
        startPage = this.totalPages - this.maxPagesToShow + 2;
        endPage = this.totalPages;
      } else {
        startPage = this.currentPage - middlePage + 1;
        endPage = this.currentPage + middlePage - 1;
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (startPage > 1) {
        pages.unshift(1);
        pages.splice(1, 0, -1);
      }

      if (endPage < this.totalPages) {
        pages.push(-1);
        pages.push(this.totalPages);
      }
    }

    return pages;
  }
}
