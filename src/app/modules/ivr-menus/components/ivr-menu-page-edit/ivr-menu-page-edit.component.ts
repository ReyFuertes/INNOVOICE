import { Component, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { IIvrMenu } from '../../models/ivr-menu.model';
import { AddEditState, EntitySave } from 'src/app/models/generic.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { GenericEditPage } from 'src/app/generics/generic-add-edit-page';
import { UpdateIvrMenu } from '../../store/ivr-menu.action';

@Component({
  selector: 'iv-menu-page-edot',
  templateUrl: './ivr-menu-page-edit.component.html',
  styleUrls: ['./ivr-menu-page-edit.component.scss']
})

export class IvrMenuPageEditComponent extends GenericEditPage<IIvrMenu> implements OnInit {
  public extension: IIvrMenu;
  public state = AddEditState.edit;
  constructor(private store: Store<AppState>) {
    super();
  }
  public form: FormGroup;
  public showDialog: boolean = false;

  ngOnInit() { }

  public save = (event: EntitySave<IIvrMenu>): void => {
    const { entity } = event;
    if (event.doSave)
      this.store.dispatch(UpdateIvrMenu({ entity }));
  }
}
