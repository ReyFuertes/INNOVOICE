import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'iv-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  public assetImgPath: string = environment.assetImgPath;
  @Input()
  public img: string;
  @Input()
  public size: 'small' | 'medium' | 'large' = 'small';

  constructor() { }

  ngOnInit(): void { }
}
