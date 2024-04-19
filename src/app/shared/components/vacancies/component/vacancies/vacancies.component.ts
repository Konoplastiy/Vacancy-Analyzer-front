import {Component, OnInit} from '@angular/core';
import {SearchBarService} from '../../../../services/search-bar.service';
import {VacancyItem, VacancyService} from "../../../../services/vacancy.service";
import {BehaviorSubject, Observable} from "rxjs";
import {PlatformInfo} from "../../../../services/platform.service";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {

  overlayOpen = this.searchBarService.overlayOpen;
  searchTerm = this.searchBarService.searchTerm;
  vacancies: VacancyItem[] = [];
  currentPage: number = 1;
  totalElements: number = 0;
  isEmpty: boolean = false;
  platformsInfo: PlatformInfo[] = [];
  private platform: BehaviorSubject<'vacancies' | 'platforms'> = new BehaviorSubject<'vacancies' | 'platforms'>('vacancies');


  constructor(private searchBarService: SearchBarService, private vacancyService: VacancyService) {
  }

  async ngOnInit(): Promise<void> {
    this.getAllVacancies();
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

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getAllVacancies();
  }

  getAllVacancies(): void {
    this.vacancyService.getAllVacancies('', this.currentPage - 1).subscribe((data) => {
      this.vacancies = data.content;
      this.totalElements = data.totalElements;
      this.isEmpty = this.vacancies.length === 0;
    });
  }

  get platforms$() {
    return this.platform.asObservable();
  }

  flipToVacancies() {
    this.platform.next("vacancies");
  }

  flipToPlatforms() {
    this.platform.next("platforms");
  }
}
