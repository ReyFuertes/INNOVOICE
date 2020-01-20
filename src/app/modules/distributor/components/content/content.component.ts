import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DistributorState } from '../../store/distributor.reducer';
import { SetDistributor, AddDistributor } from '../../store/distributor.action';
import { IDistributor } from '../../models/distributor.model';

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
  public item: IDistributor;

  constructor(private store: Store<DistributorState>, private router: Router) {
    
  }

  ngOnInit() { }

  public onFormChange(event: FormGroup): void {
    if (event.value) {
      this.item = event.value as IDistributor;
      this.store.dispatch(SetDistributor({ item: this.item }));
    }
  }

  public onSave(): void {
    if (this.item) {
      this.store.dispatch(AddDistributor({ item: this.item }))
    }
  }

  public redirectTo(): void {
    this.router.navigateByUrl('/dashboard/distributor');
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