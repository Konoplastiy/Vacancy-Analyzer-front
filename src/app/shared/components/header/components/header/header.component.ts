import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentLanguage: string = 'eng';
  showLanguages = false;
  showSubscriptionModal: boolean = false;
  ukrLanguage = {value: 'ukr', name: 'Укр', icon: "assets/icons/ukraine-flag.svg"};
  engLanguage = {value: 'eng', name: 'Eng', icon: "assets/icons/uk-flag.svg"};
  form: FormGroup;

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('eng');
    translate.addLangs(['eng', 'ukr']);
    translate.use('eng');
    this.initializeForm();
  }

  toggleDropdown() {
    this.showLanguages = !this.showLanguages;
  }

  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.showLanguages = false;
    this.translate.use(language);
  }

  get selectedLanguage() {
    return this.currentLanguage === 'ukr' ? this.ukrLanguage : this.engLanguage;
  }

  get languages() {
    return this.currentLanguage === 'ukr' ? [this.engLanguage] : [this.ukrLanguage];
  }

  openSubscriptionModal() {
    this.showSubscriptionModal = true;
  }

  closeSubscriptionModal() {
    this.showSubscriptionModal = false;
    this.form.reset();
  }

  subscribe() {
    if (this.form.valid) {
      this.closeSubscriptionModal();
    }
  }

  initializeForm() {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, this.customeEmailValidator])
    });
  }

  getError(control): string {
    if (control.errors?.required && control.touched)
      return 'This field is required!';
    else if (control.errors?.emailError && control.touched)
      return 'Please enter valid email address!';
    else return '';
  }

  customeEmailValidator(control: AbstractControl) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    const value = control.value;
    if (!pattern.test(value) && control.touched)
      return {
        emailError: true
      }
    else return null;
  }
}
