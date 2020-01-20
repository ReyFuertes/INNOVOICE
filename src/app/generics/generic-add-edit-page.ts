import { EntitySave } from '../models/generic.model';

export abstract class GenericEditPage<T> {
  public abstract save: (Entity: EntitySave<T>) => void;
}
export abstract class GenericAddPage<T> {
  public abstract save: (Entity: EntitySave<T>) => void;
}