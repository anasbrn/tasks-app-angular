import {Component, signal} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user-component';
import {DUMMY_USERS} from '../dummy-users';
import {TasksComponent} from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tasks-app');
  users = DUMMY_USERS;
  selectedUserId: string | undefined = 'u1';

  get selectedUser() {
    return this.users.find(u => u.id === this.selectedUserId)!;
  }

  handleSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
