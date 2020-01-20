import { Component, OnInit, Input } from '@angular/core';
import { IExtension } from '../../models/extension';
import { Router } from '@angular/router';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { EntityRoutes } from 'src/app/generics/generic.enum';

@Component({
  selector: 'iv-card-extension',
  templateUrl: './extension-card.component.html',
  styleUrls: ['./extension-card.component.scss']
})
export class ExtensionCardComponent extends GenericCardListComponent<IExtension> implements OnInit {
  constructor(public router: Router) {
    super(router, EntityRoutes.Extensions);
   }

  ngOnInit() { }
}

