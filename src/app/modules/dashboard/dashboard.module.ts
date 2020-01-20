import { NgModule } from '@angular/core';

import { DashboardContainerComponent } from './container/dashboard-container.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatButtonToggleModule, MatMenuModule, MatExpansionModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserGuard } from 'src/app/services/user.guard';

const materialModules = [
  MatCardModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatExpansionModule
];

const routes: Routes = [
  {
    path: '',
    component: DashboardContainerComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...materialModules,
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [DashboardContainerComponent],
  providers: [UserGuard],
})
export class DashboardModule { }
