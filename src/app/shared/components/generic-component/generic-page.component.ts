import { OnInit } from '@angular/core';
import { PageAction } from 'src/app/models/action';
import { ICrumb } from 'src/app/models/generic.model';

export abstract class GenericPageComponent implements OnInit {
  protected abstract GetCrumbs(): ICrumb[];
  protected abstract GetPageAction(): PageAction;

  constructor() { }

  ngOnInit() { }
}