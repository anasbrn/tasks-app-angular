import { Component } from '@angular/core';
import {DUMMY_USERS} from '../../users';

const RANDOM_INDEX = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[RANDOM_INDEX];

  get imagePath(): string {
    return "../../assets/users/" + this.selectedUser.avatar;
  }

  onSelectUser() {
    const RANDOM_INDEX = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[RANDOM_INDEX];
  }
}
