import {Component, OnInit} from '@angular/core';
import {FilterService} from "../../../../services/filter.service";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filterForm: FormGroup;
  platformName = ['ROBOTAUA', 'DJINNI', 'DOU', 'WORKUA'];
  experienceLevels = ['Senior', 'Middle', 'Junior', 'Trainee'];
  workLevels = ['No experience', '1 year', '2 years', '5 years'];

  constructor(private fb: FormBuilder, private filterService: FilterService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.filterForm = this.fb.group({
      platformName: new FormArray(this.platformName.map(() => this.fb.control(false))),
      experienceLevel: new FormArray(this.experienceLevels.map(() => this.fb.control(false))),
      salary: this.fb.group({
        from: '',
        to: ''
      }),
      work: new FormArray(this.workLevels.map(() => this.fb.control(false)))
    });
    console.log(this.filterForm)
  }

  applyFilters() {
    const filterData = this.filterForm.value;
    this.filterService.updateFilters({
      platformName: filterData.platformName.map((checked, index) => checked ? this.platformName[index] : null).filter(value => value !== null),
      experienceLevel: filterData.experienceLevel.map((checked, index) => checked ? this.experienceLevels[index] : null).filter(value => value !== null),
      salaryFrom: filterData.salary.from ? parseInt(filterData.salary.from) : undefined,
      salaryTo: filterData.salary.to ? parseInt(filterData.salary.to) : undefined,
      work: filterData.work.map((checked, index) => checked ? this.workLevels[index] : null).filter(value => value !== null)
    });
  }
}
