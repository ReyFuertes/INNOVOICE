import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TenantState } from '../../store/tenant.reducer';
import { ITenant } from '../../models/tenant.model';
import { SetTenant, AddTenant } from '../../store/tenant.action';

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
  public item: ITenant;

  constructor(private store: Store<TenantState>, private router: Router) { }

  ngOnInit() { }

  public onFormChange(event: FormGroup): void {
    if (event.value) {
      this.item = event.value as ITenant;
      this.store.dispatch(SetTenant({ item: this.item }));
    }
  }

  public onSave(): void {
    if(this.item) {
      this.store.dispatch(AddTenant({ item: this.item }))
    }
  }

  public redirectTo(): void {
    this.router.navigateByUrl('/dashboard/tenant');
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