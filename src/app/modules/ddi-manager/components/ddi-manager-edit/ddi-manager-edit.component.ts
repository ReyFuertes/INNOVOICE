import { Component, OnInit } from '@angular/core';
import { IInboundNumber } from '../../models/inbound.number';
import { GenericEditPage } from 'src/app/generics/generic-add-edit-page';
import { AddEditState, EntitySave } from 'src/app/models/generic.model';
import { Store } from '@ngrx/store';
import { DdiManagerState } from '../../store/ddi-manager.reducer';
import { UpdateDdiManager } from '../../store/ddi-manager.action';

@Component({
  selector: 'iv-ddi-manager-edit',
  templateUrl: './ddi-manager-edit.component.html',
  styleUrls: ['./ddi-manager-edit.component.scss']
})

export class DdiManagerEditComponent extends GenericEditPage<IInboundNumber> implements OnInit {
  public extension: IInboundNumber;
  public state = AddEditState.edit;
  constructor(private store: Store<DdiManagerState>) {
    super();
  }

  ngOnInit() { }

  public save = (event: EntitySave<IInboundNumber>): void => {
    if (event.doSave)
      this.store.dispatch(UpdateDdiManager({ entity: event.entity }));
  }
}