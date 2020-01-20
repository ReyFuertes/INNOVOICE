import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CardType } from 'src/app/models/generic.model';
import { IExtension } from '../../models/extension';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { Router } from '@angular/router';
import { EntityRoutes } from 'src/app/generics/generic.enum';

@Component({
  selector: 'iv-list-extension',
  templateUrl: './extension-list.component.html',
  styleUrls: ['./extension-list.component.scss']
})

export class ExtensionListComponent extends GenericCardListComponent<IExtension> implements OnInit {
  constructor(public router: Router) { 
    super(router, EntityRoutes.Extensions);
  }

  ngOnInit() { }
}