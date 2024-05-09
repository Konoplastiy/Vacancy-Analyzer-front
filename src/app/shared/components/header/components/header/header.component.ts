import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {SubscriberService} from "../../../../services/subscriber.service";
import {SubscriberModel} from "../../../../models/subscriber-model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentLanguage: string = 'eng';
  showLanguages = false;
  showSubscriptionModal = false;
  languages = [
    { value: 'ukr', name: 'Укр', icon: "assets/icons/ukraine-flag.svg" },
    { value: 'eng', name: 'Eng', icon: "assets/icons/uk-flag.svg" }
  ];
  form: FormGroup;

  constructor(public translate: TranslateService, private subscriberService: SubscriberService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initTranslate();
  }

  initTranslate() {
    this.translate.setDefaultLang('eng');
    this.translate.addLangs(this.languages.map(lang => lang.value));
    this.translate.use(this.currentLanguage);
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
    return this.languages.find(lang => lang.value === this.currentLanguage);
  }

  get otherLanguages() {
    return this.languages.filter(lang => lang.value !== this.currentLanguage);
  }

  openSubscriptionModal() {
    this.showSubscriptionModal = true;
  }

  closeSubscriptionModal() {
    this.showSubscriptionModal = false;
    this.form.reset();
  }

  subscribe(): void {
    if (this.form.valid) {
      const email: SubscriberModel = this.form.getRawValue();

      this.subscriberService.createNewsletterSubscriber(email)
        .subscribe({
          next: () => {
            this.snackBar.open('Subscription successful', 'Close', { duration: 3000 });
            this.closeSubscriptionModal();
          },
          error: (error) => {
            this.snackBar.open('Failed to subscribe', 'Retry', { duration: 3000 });
          }
        });
    }
  }

  initializeForm() {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email, this.customeEmailValidator])
    });
  }

  getError(control): string {
    if (control.errors?.required && control.untouched)
      return 'This field is required!';
    else if (control.errors?.emailError && control.untouched)
      return 'Please enter valid email address!';
    else return '';
  }

  customeEmailValidator(control: AbstractControl) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    const value = control.value;
    if (!pattern.test(value) && control.untouched)
      return {
        emailError: true
      }
    else return null;
  }
}
