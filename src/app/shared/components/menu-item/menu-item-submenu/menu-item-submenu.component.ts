import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iv-menu-item-submenu',
  templateUrl: './menu-item-submenu.component.html',
  styleUrls: ['./menu-item-submenu.component.scss']
})
export class MenuItemSubmenuComponent implements OnInit {
  @Input()
  public menu: { label: string, icon: string, subMenu?: any[] };
  @Input()
  public toggle: boolean = false;

  public isActive: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  public toggleActive(): void {
    setTimeout(() => {
      if (this.toggle)
        document.querySelector('.mat-menu-panel').classList.add('active');
    });
  }
}

