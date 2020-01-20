import { Component, OnInit, ViewChild, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MenuItemSubmenuComponent } from '../menu-item/menu-item-submenu/menu-item-submenu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'iv-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public assetImgPath: string = environment.assetImgPath;
  public navbarOpen: boolean = false;
  @Input()
  public menus: Array<{ label: string, icon: string, route?: string, subMenu?: any[] }>;
  @Output()
  public sidenavChange = new EventEmitter<boolean>();

  @ViewChild('subMenu', { static: false }) subMenu: MenuItemSubmenuComponent;

  constructor(private router: Router ) { }

  ngOnInit(): void { }

  public showSubmenu: boolean = false;
  public noMenu: boolean = false;
  public subMenus: Array<{ label: string, icon: string, route?: string }>
  public getSubmenu(subMenu: Array<{ label: string, icon: string, route?: string }>): void {
    if (subMenu) {
      this.showSubmenu = true;
      this.subMenus = subMenu;
      this.noMenu = false;
    }
  }
  public routeTo(menu: any): void {
    this.showSubmenu = false; 
    this.router.navigateByUrl(menu.route);
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: any) {
    if (this.noMenu) {
      this.showSubmenu = false; 
      return;
    }
    const classList = Array.from(event.target.classList);
    if (classList.includes('mat-list-item-content') || classList.includes('iv-uc')) {
    } else {
      this.showSubmenu = false;
    }
  }
}

