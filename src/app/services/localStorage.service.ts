import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  private get(str: string): any {
    return JSON.parse(localStorage.getItem(str)) ? JSON.parse(localStorage.getItem(str)) : null;
  }
}
