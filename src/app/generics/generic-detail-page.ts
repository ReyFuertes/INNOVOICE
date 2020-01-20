import { Input, Output, EventEmitter } from '@angular/core';
import { AddEditState, EntitySave } from '../models/generic.model';
import { FormGroup } from '@angular/forms';

export abstract class GenericAddEditDetailComponent<T> {
  @Input()
  public state: AddEditState;
  @Output()
  public doSaveEmitter = new EventEmitter<EntitySave<T>>();

  public entity: T;
  public form: FormGroup;

  public abstract onSubmit: () => void;
}