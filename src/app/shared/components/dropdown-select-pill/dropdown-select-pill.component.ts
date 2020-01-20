import { Component, OnInit, Input, HostListener } from '@angular/core';
import * as _ from 'lodash';
import { SelectionItem } from 'src/app/models/generic.model';
import { Observable, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'iv-dropdown-select-pill',
  templateUrl: './dropdown-select-pill.component.html',
  styleUrls: ['./dropdown-select-pill.component.scss']
})

export class IvDropdownSelectPillComponent implements OnInit {
  public cars: any[];
  public toggle: boolean = false;
  public selectedItems: SelectionItem[] = [];
  @Input()
  public label: string = 'label';
  @Input()
  public items: SelectionItem[] = [
    {
      label: 'Team One',
      value: 'Team One'
    },
    {
      label: 'Team Two',
      value: 'Team Two'
    },
    {
      label: 'Team Three',
      value: 'Team Three'
    },
    {
      label: 'Team Four',
      value: 'Team Four'
    },
    {
      label: 'Team Five',
      value: 'Team Five'
    }
  ];

  constructor() { }

  ngOnInit() {
    document.body.addEventListener("click", (evt: any) => {
      if (!_.includes(Array.from(evt.target.classList), 'icon-chevron-up')
        && !_.includes(Array.from(evt.target.classList), 'mat-list-item-content')
        && !_.includes(Array.from(evt.target.classList), 'mat-checkbox-label')
        && !_.includes(Array.from(evt.target.classList), 'icon-cross-circle')
        && !_.includes(Array.from(evt.target.classList), 'mat-checkbox-layout')) {
        this.toggle = false;
      }
    });
  }

  public onSelect(item: SelectionItem): void {
    if (!this.selectedItems.includes(item))
      this.selectedItems.push(item);
    else
      _.remove(this.selectedItems, item)
  }
  public onRemove = (item: SelectionItem, classItem: string): void => {
    let cls = document.querySelector(`.${classItem} label`) as any;
    cls.click();
    _.remove(this.selectedItems, item)
  }
  public isChecked(item: SelectionItem): Observable<boolean> {
    return of(this.selectedItems.includes(item)).pipe(debounceTime(300));
  }
}