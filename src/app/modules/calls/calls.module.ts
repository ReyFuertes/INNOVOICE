import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CallsContainerComponent } from './container/calls-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {
    path: '',
    component: CallsContainerComponent,
    children: []
  }
];

@NgModule({
  declarations: [
    CallsContainerComponent
  ],
  imports: [ 
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
   ],
  exports: [],
  providers: [],
})
export class CallsModule {}