import { Component, OnInit } from '@angular/core';
import { GenericEditPage } from 'src/app/generics/generic-add-edit-page';
import { IExtension } from '../../models/extension';
import { UpdateExtension } from '../../store/extension.action';
import { Store } from '@ngrx/store';
import { ExtensionState } from '../../store/extension.reducer';
import { AddEditState, EntitySave } from 'src/app/models/generic.model';
@Component({
  selector: 'iv-extension-edit',
  templateUrl: './extension-edit.component.html',
  styleUrls: ['./extension-edit.component.scss']
})

export class ExtensionEditComponent extends GenericEditPage<IExtension> implements OnInit {
  public extension: IExtension;
  public state = AddEditState.edit;
  constructor(private store: Store<ExtensionState>) {
    super();
  }

  ngOnInit() { }

  public save = (event: EntitySave<IExtension>): void => {
    if (event.doSave)
      this.store.dispatch(UpdateExtension({ entity: event.entity }));
  }
}