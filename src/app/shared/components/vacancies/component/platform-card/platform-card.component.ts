import {Component, Input} from '@angular/core';
import {PlatformInfoItem} from "../../../../models/platform-info-item";

@Component({
  selector: 'app-platform-card',
  templateUrl: './platform-card.component.html',
  styleUrls: ['./platform-card.component.scss']
})
export class PlatformCardComponent {
  @Input() platformInfo: PlatformInfoItem;

  constructor() {}
}
