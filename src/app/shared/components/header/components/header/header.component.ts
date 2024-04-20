import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentLanguage: string = 'eng';
  showLanguages = false;
  showSubscriptionModal: boolean = false;
  email: string = '';
  ukrLanguage = {value: 'ukr', name: 'Укр', icon: "assets/icons/ukraine-flag.svg"};
  engLanguage = {value: 'eng', name: 'Eng', icon: "assets/icons/uk-flag.svg"};

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('eng');
    translate.addLangs(['eng', 'ukr']);
    translate.use('eng');
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
    this.email = '';
  }

  subscribe() {
    this.closeSubscriptionModal();
  }

}
