import { UsersRoutingModule } from './users-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [UsersComponent, UserDialogComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
  exports: [UsersComponent, UserDialogComponent],
})
export class UsersModule {}
