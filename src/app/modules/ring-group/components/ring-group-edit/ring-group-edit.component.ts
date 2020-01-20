import { Component, OnInit } from '@angular/core';
import { GenericEditPage } from 'src/app/generics/generic-add-edit-page';
import { IRingGroup } from '../../models/ring-group.model';
import { AddEditState, EntitySave } from 'src/app/models/generic.model';
import { Store } from '@ngrx/store';
import { RingGroupState } from '../../store/ring-group.reducer';
import { UpdateRingGroup } from '../../store/ring-group.action';

@Component({
  selector: 'iv-ring-group-edit',
  templateUrl: './ring-group-edit.component.html',
  styleUrls: ['./ring-group-edit.component.scss']
})

export class RingGroupEditComponent extends GenericEditPage<IRingGroup> implements OnInit {
  public extension: IRingGroup;
  public state = AddEditState.edit;
  constructor(private store: Store<RingGroupState>) {
    super();
  }

  ngOnInit() { }

  public save = (event: EntitySave<IRingGroup>): void => {
    if (event.doSave)
      this.store.dispatch(UpdateRingGroup({ entity: event.entity }));
  }
}