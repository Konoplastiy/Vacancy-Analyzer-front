import {Component, Input} from '@angular/core';
import {PlatformInfo} from "../../../../services/platform.service";

@Component({
  selector: 'app-platform-card',
  templateUrl: './platform-card.component.html',
  styleUrls: ['./platform-card.component.scss']
})
export class PlatformCardComponent {
  @Input() platformInfo: PlatformInfo;

  constructor() {}
}
