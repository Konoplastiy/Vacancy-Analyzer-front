import { Injectable } from '@angular/core';

export interface PlatformInfo {
  namePlatform: string;
  senior: number;
  middle: number;
  junior: number;
  others: number;
}

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor() { }
}
