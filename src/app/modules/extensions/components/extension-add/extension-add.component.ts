import { Component, OnInit } from '@angular/core';
import { IExtension } from '../../models/extension';
import { GenericAddPage } from 'src/app/generics/generic-add-edit-page';
import { Store } from '@ngrx/store';
import { ExtensionState } from '../../store/extension.reducer';
import { AddExtension } from '../../store/extension.action';
import { AddEditState, EntitySave } from 'src/app/models/generic.model';

@Component({
  selector: 'iv-extension-add',
  templateUrl: './extension-add.component.html',
  styleUrls: ['./extension-add.component.scss']
})

export class ExtensionAddComponent extends GenericAddPage<IExtension> implements OnInit {
  public extension: IExtension;
  public state = AddEditState.add;

  constructor(private store: Store<ExtensionState>) {
    super();
  }

  ngOnInit() { }

  public save = (event: EntitySave<IExtension>): void => {
    if (event.doSave)
      this.store.dispatch(AddExtension({ entity: event.entity }));
  }
}