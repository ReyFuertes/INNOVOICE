import { Component, OnInit, ElementRef, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'iv-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {
  @Input()
  public type: 'icon' | 'small' | 'large' = 'small';
  @Input()
  public toggle: boolean = false;
  @Output()
  public keywordEmitter = new EventEmitter<string | null>();

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {

  }

  public onSearch(event: string): void {
    if (event.length > 2)
      this.keywordEmitter.emit(event);
    else if (event.length === 0)
      this.keywordEmitter.emit(null);
  }

  public clear(input: any): void {
    input.value = '';
  }
}
