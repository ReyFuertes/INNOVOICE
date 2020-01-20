import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iv-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

export class UploadComponent implements OnInit {
  @Input()
  public isPos10: boolean = true;
  
  constructor() { }

  ngOnInit() { }
}