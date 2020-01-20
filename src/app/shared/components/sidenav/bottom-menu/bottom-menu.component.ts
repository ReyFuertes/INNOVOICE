import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'iv-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss']
})
export class BottomMenuComponent implements OnInit {
  @Input()
  public navbarOpen: boolean = false;
  @Input()
  public isMobile: boolean = false;

  public assetImgPath: string = environment.assetImgPath;

  constructor() { }

  ngOnInit(): void { }
}
