import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IReseller } from '../../models/reseller.model';
import { ResellerState } from '../../store/reseller.reducer';
import { SetReseller, AddReseller } from '../../store/reseller.action';

@Component({
  selector: 'iv-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {
  @Input()
  public steps: Array<{ index: number, text: string }> = [
    {
      index: 1,
      text: 'add details'
    },
    {
      index: 2,
      text: 'summary'
    }
  ];
  public activeIndex: number = 1;
  public item: IReseller;

  constructor(private store: Store<ResellerState>, private router: Router) { }

  ngOnInit() { }

  public onFormChange(event: FormGroup): void {
    if (event.value) {
      this.item = event.value as IReseller;
      this.store.dispatch(SetReseller({ item: this.item }));
    }
  }

  public onSave(): void {
    if(this.item) {
      this.store.dispatch(AddReseller({ item: this.item }))
    }
  }

  public redirectTo(): void {
    this.router.navigateByUrl('/dashboard/reseller');
  }

  public onNext(): void {
    this.activeIndex = this.activeIndex + 1;
  }

  public onPrev(): void {
    this.activeIndex = this.activeIndex - 1;
  }

  public getBarWidth(i: number): string | number {
    return `bar-${(i * 100 / 100)}`;
  }

  public isVisited(i: number): boolean {
    return i < this.activeIndex;
  }

  public showBtn(i: number): boolean {
    return this.steps.length === i;
  }

  public getStepNum(i: number) {
    return i + 1;
  }
}