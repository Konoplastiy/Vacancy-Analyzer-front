import {Component, OnInit} from '@angular/core';
import {SearchBarService} from '../../../../services/search-bar.service';
import {VacancyItem} from "../../../../models/vacancy-item";
import {BehaviorSubject, switchMap} from "rxjs";
import {PlatformInfoItem} from "../../../../models/platform-info-item";
import {VacancyService} from "../../../../services/vacancy.service";
import {PlatformService} from "../../../../services/platform.service";
import {FilterService} from "../../../../services/filter.service";
import {Filter} from "../../../../models/filter";

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
  platformsInfo: PlatformInfoItem[] = [];
  activeButton: string = 'vacancy';
  private filters: Filter = {platformName: [], experienceLevel: [], work: []};
  private platform: BehaviorSubject<'vacancies' | 'platforms'> = new BehaviorSubject<'vacancies' | 'platforms'>('vacancies');


  constructor(private searchBarService: SearchBarService,
              private vacancyService: VacancyService,
              private platformService: PlatformService,
              private filterService: FilterService) {
  }

  async ngOnInit(): Promise<void> {
    this.getAllVacancies();
    this.getAllPlatformsInfo();
    this.subscribeToFilters();
  }

  search(searchTerm: string) {
    if (!searchTerm) return;
    this.searchBarService.search(searchTerm);
    this.getAllVacancies(searchTerm);
  }

  openOverlay() {
    this.searchBarService.overlayOpen.next(true);
  }

  closeOverlay() {
    this.searchBarService.overlayOpen.next(false);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    window.scrollTo({top: 0, behavior: 'smooth'});
    this.getAllVacancies();
  }

  getAllVacancies(searchTerm: string = ''): void {
    this.vacancyService.getAllVacancies(this.filters, searchTerm, this.currentPage - 1).subscribe((data) => {
      this.vacancies = data.content;
      this.totalElements = data.totalElements;
      this.isEmpty = this.vacancies.length === 0;
    });
  }

  getAllPlatformsInfo(): void {
    this.platformService.getAllPlatformsInfo().subscribe((data) => {
      this.platformsInfo = data;
    });
  }

  subscribeToFilters() {
    this.filterService.filter$
      .pipe(
        switchMap(filters => {
          this.filters = filters || {platformName: [], experienceLevel: [], work: []};
          return this.vacancyService.getAllVacancies(this.filters, "", this.currentPage - 1);
        })
      )
      .subscribe(data => {
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
    this.activeButton = 'vacancy';
  }

  flipToPlatforms() {
    this.platform.next("platforms");
    this.activeButton = 'platform';
  }

}
