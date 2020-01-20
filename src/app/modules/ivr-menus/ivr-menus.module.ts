import { NgModule } from '@angular/core';
import { IvrMenuContainerComponent } from './container/ivr-menus-container.component';
import { MatCardModule, MatDialogModule, MatExpansionModule, MatMenuModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { IveMenuCardComponent } from './components/ivr-menu-card/ivr-menu-card.component';
import { IvrMenuListComponent } from './components/ivr-menu-list/ivr-menu-list.component';
import { IvrMenuPageEditComponent } from './components/ivr-menu-page-edit/ivr-menu-page-edit.component';
import { IvrMenuPageComponent } from './components/ivr-menu-page/ivr-menu-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { IvrGeneralComponent } from './components/ivr-general/ivr-general.component';
import { IvrGreetingsComponent } from './components/ivr-greetings/ivr-greetings.component';
import { IvrDestinationComponent } from './components/ivr-destination/ivr-destination.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IvrAdvancedComponent } from './components/ivr-advanced/ivr-advanced.component';
import { IvrMenuService } from './ivr-menu.services';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { IvrMenuReducer } from './store/ivr-menu.reducer';
import { IvrMenuEffects } from './store/ivr-menu.effect';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IvrMenuPageDetailComponent } from './components/ivr-menu-page-detail/ivr-menu-page-detail.component';

const primeNgModules = [
  DialogModule,
  MatCheckboxModule,
  MatTooltipModule
];

const materialModules = [
  MatCardModule,
  MatMenuModule,
  MatExpansionModule,
  MatDialogModule
];

const routes: Routes = [
  {
    path: '',
    component: IvrMenuContainerComponent,
    children: [
      {
        path: '',
        component: IvrMenuPageComponent
      },
      {
        path: ':id/edit',
        component: IvrMenuPageEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
    ...primeNgModules,
    RouterModule.forChild(routes),
    StoreModule.forFeature('ivrMenu', IvrMenuReducer),
    EffectsModule.forFeature([IvrMenuEffects])
  ],
  exports: [],
  declarations: [
    IvrMenuContainerComponent,
    IveMenuCardComponent,
    IvrMenuListComponent,
    IvrMenuPageEditComponent,
    IvrMenuPageComponent,
    IvrGeneralComponent,
    IvrGreetingsComponent,
    IvrDestinationComponent,
    IvrAdvancedComponent,
    IvrMenuPageDetailComponent
  ],
  providers: [IvrMenuService],
})
export class IvrMenuModule { }
