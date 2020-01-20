
import { Input } from '@angular/core';
import { CardType } from '../models/generic.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EntityRoutes } from './generic.enum';

export abstract class GenericCardListComponent<T> {
  @Input()
  public type: CardType = CardType.default;
  @Input()
  public item: T;
  public svgImgSrc: string = environment.assetImgPath;
  public items$: Observable<T[]>;
  public assetSvgPath: string = environment.assetSvgPath;
  constructor(public router: Router, private entityRoute: EntityRoutes = null) { }
  public onEdit = (id: string | number) => this.router.navigateByUrl(`dashboard/pages/${this.entityRoute}/${id}/edit`);
}
