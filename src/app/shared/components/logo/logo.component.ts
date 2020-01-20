import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'iv-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;
  @Input()
  public type: 1 | 2 = 1;

  constructor() { }

  ngOnInit(): void { }
}
