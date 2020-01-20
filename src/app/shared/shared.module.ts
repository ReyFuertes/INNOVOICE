import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvatarComponent } from './components/avatar/avatar.component';
import { CardComponent } from './components/card/card.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { NavComponent } from './components/nav/nav.component';
import { PillComponent } from './components/pill/pill.component';
import { SearchComponent } from './components/search/search.component';
import { SelectComponent } from './components/select/select.component';
import { TableComponent } from './components/table/table.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { InputComponent } from './components/input/input.component';
import { TextareaComponent } from './components/textarea/textarea.component';

import {
  MatCardModule,
  MatSlideToggleModule,
  MatInputModule,
  MatMenuModule,
  MatButtonModule,
  MatSelectModule,
  MatTableModule,
  MatCheckboxModule,
  MatListModule,
  MatChipsModule,
  MatButtonToggleModule
} from '@angular/material';
import { ButtonComponent } from './components/button/button.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuItemSubmenuComponent } from './components/menu-item/menu-item-submenu/menu-item-submenu.component';
import { RouterModule } from '@angular/router';
import { TopnavComponent } from './components/top-nav/top-nav.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { BottomMenuComponent } from './components/sidenav/bottom-menu/bottom-menu.component';
import { RightNavComponent } from './components/right-nav/right-nav.component';
import { LogoComponent } from './components/logo/logo.component';
import { CardStatisticComponent } from './components/card-statistic/card-statistic.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { TopNavActions } from './components/top-nav-actions/top-nav-actions.component';
import { LinkComponent } from './components/link/link.component';
import { IconComponent } from './components/icon/icon.component';
import { PageActionComponent } from './components/page-action/page-action.component';
import { ImportExportComponent } from './components/import-export/import-export.component';
import { BackComponent } from './components/back/back.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { IvDropdownSelectPillComponent } from './components/dropdown-select-pill/dropdown-select-pill.component';
import { FooterActionsComponent } from './components/footer-actions/footer-actions.component';
import { UploadComponent } from './components/upload/upload.component';

const primengModules = [
  MultiSelectModule
];

const materialModules = [
  MatCardModule,
  MatSlideToggleModule,
  MatInputModule,
  MatMenuModule,
  MatButtonModule,
  MatSelectModule,
  MatTableModule,
  MatCheckboxModule,
  MatListModule,
  MatChipsModule,
  MatButtonToggleModule
]
@NgModule({
  declarations: [
    AvatarComponent,
    CardComponent,
    CardComponent,
    DropdownMenuComponent,
    NavComponent,
    PillComponent,
    SearchComponent,
    SelectComponent,
    TableComponent,
    ToggleComponent,
    InputComponent,
    TextareaComponent,
    ButtonComponent,
    SidenavComponent,
    MenuItemComponent,
    MenuItemSubmenuComponent,
    TopnavComponent,
    LeftNavComponent,
    BottomMenuComponent,
    RightNavComponent,
    LogoComponent,
    CardStatisticComponent,
    ButtonToggleComponent,
    TopNavActions,
    LinkComponent,
    IconComponent,
    PageActionComponent,
    ImportExportComponent,
    BackComponent,
    CheckboxComponent,
    IvDropdownSelectPillComponent,
    FooterActionsComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule,
    ...materialModules,
    ...primengModules
  ],
  exports: [
    AvatarComponent,
    CardComponent,
    CardComponent,
    DropdownMenuComponent,
    NavComponent,
    PillComponent,
    SearchComponent,
    SelectComponent,
    TableComponent,
    ToggleComponent,
    InputComponent,
    TextareaComponent,
    ButtonComponent,
    SidenavComponent,
    MenuItemComponent,
    MenuItemSubmenuComponent,
    TopnavComponent,
    LeftNavComponent,
    BottomMenuComponent,
    RightNavComponent,
    LogoComponent,
    CardStatisticComponent,
    ButtonToggleComponent,
    TopNavActions,
    LinkComponent,
    IconComponent,
    PageActionComponent,
    ImportExportComponent,
    BackComponent,
    CheckboxComponent,
    IvDropdownSelectPillComponent,
    FooterActionsComponent,
    UploadComponent
  ],
  providers: [],
})
export class SharedModule { }