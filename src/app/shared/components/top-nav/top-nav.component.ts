import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'iv-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopnavComponent implements OnInit {
  public assetImgPath: string = environment.assetImgPath;
  constructor() { }

  ngOnInit(): void { }
}
