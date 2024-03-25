import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentLanguage: string = 'Eng';
  showLanguages: boolean = false;
  languages: string[] = ['Eng', 'Ukr']

  toggleLanguages() {
    this.showLanguages = !this.showLanguages;
  }

  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.showLanguages = false;
  }
}
