import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'iv-ring-group-destination',
  templateUrl: './ring-group-destination.component.html',
  styleUrls: ['./ring-group-destination.component.scss']
})

export class RingGroupDestinationComponent implements OnInit {
  public assetSvgPath: string = environment.assetSvgPath;
  constructor() { }

  ngOnInit() { }
}