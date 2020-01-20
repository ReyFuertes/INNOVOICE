
export interface EntitySave<T> {
  entity: T;
  doSave: boolean
}

export enum AddEditState {
  add = 1,
  edit = 2
}

export interface SelectionItem {
  label?: string;
  value?: string;
}

export interface Pill {}

export enum TableView {
  card = 1,
  list = 2
}

export interface ICrumb {
  text: string;
  path: string;
  queryParams?: any;
}

export enum PillType {
  default = 'default',
  primary = 'primary',
  green = 'pill-green',
  cyan = 'pill-cyan',
  violet = 'pill-violet',
  disabled = 'disabled'
}

export enum CardType {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success', 
  info = 'info', 
  purple = 'purple', 
  default = 'default'
}
