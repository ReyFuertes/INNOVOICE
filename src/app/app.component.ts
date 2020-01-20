import { Component, OnInit, HostListener } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IvMenus, Menu } from './generics/menus.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'InnovoVoice';
  public menus: Menu[] = IvMenus;
  public isMobile: boolean = false;
  public assetImgPath: string = environment.assetImgPath;
  public toggleRightNav: boolean = false;
  public toggleSideNav: boolean = false;

  ngOnInit(): void {
    this.isScreenMobile();
  }

  public toggle(event: boolean): void {
    this.toggleSideNav = event;
  }

  public isScreenMobile(): void {
    if (window.innerWidth <= 414)
      this.isMobile = false;
    else
      this.isMobile = true;
  }

  @HostListener('window:resize')
  public onResize() {
    this.isScreenMobile();
  }
}
