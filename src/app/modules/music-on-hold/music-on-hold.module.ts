import { NgModule } from '@angular/core';
import { MusicOnHoldContainerComponent } from './container/music-on-hold-container.component';
import { MatCardModule, MatButtonToggleModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { MusicOnHoldListComponent } from './components/music-on-hold-list/music-on-hold-list.component';
import { MusicOnHoldCardComponent } from './components/music-on-hold-card/music-on-hold-card.component';
import { MusicOnHoldService } from './services/music-on-hold.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MusicOnHoldReducer } from './store/music-on-hold.reducer';
import { MusicOnHoldEffects } from './store/music-on-hold.effect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MusicOnHoldPageComponent } from './components/music-on-hold-page/music-on-hold-page.component';

const materialModules = [
  MatCardModule,
  MatButtonToggleModule
];

const routes: Routes = [
  {
    path: '',
    component: MusicOnHoldContainerComponent,
    children: [
      {
        path: '',
        component: MusicOnHoldPageComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    MusicOnHoldContainerComponent,
    MusicOnHoldPageComponent,
    MusicOnHoldListComponent,
    MusicOnHoldCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    ...materialModules,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('musicOnHold', MusicOnHoldReducer),
    EffectsModule.forFeature([MusicOnHoldEffects])
  ],
  exports: [],
  providers: [MusicOnHoldService],
})
export class MusicOnHold { }
