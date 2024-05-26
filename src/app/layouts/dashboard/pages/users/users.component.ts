import { Component } from '@angular/core';
import { IUser } from './models/index';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'role',
    'createdAt',
    'actions',
  ];

  users: IUser[] = [
    {
      id: 0,
      firstName: 'tizi',
      lastName: 'machado',
      email: 'tizi@test.com',
      role: 'ADMIN',
      createdAt: new Date(),
    },
    {
      id: 1,
      firstName: 'camila',
      lastName: 'machado',
      email: 'camila@test.com',
      role: 'USER',
      createdAt: new Date(),
    },
  ];

  constructor(private matDialog: MatDialog) {}

  openDialog(editingUser?: IUser): void {
    this.matDialog
      .open(UserDialogComponent, {
        data: editingUser,
      })
      .afterClosed()
      .subscribe((result) => {
        if (editingUser) {
          this.users = this.users.map((itemList) =>
            itemList.id === editingUser.id
              ? { ...itemList, ...result }
              : itemList
          );
        } else {
          result.id = this.users.length;
          result.createdAt = new Date();
          this.users = [...this.users, result];
        }
      });
  }
  onDeleteUser(id: number): void {
    this.users = this.users.filter((u) => u.id != id);
  }
}
