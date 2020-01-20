import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iv-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input()
  public label: string = 'Label here';
  @Input()
  public placeholder: string = 'Placeholder here';
  constructor() { }

  ngOnInit(): void { }
}
