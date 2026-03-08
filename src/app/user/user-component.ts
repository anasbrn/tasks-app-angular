import {Component, EventEmitter, input, Input, Output, signal} from '@angular/core';
import {DUMMY_USERS} from '../../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css',
})
export class UserComponent {
  @Input({required:true}) user!: User
  @Output() select = new EventEmitter<string>();
  // avatar = input.required()
  // name = input.required()

  get imagePath(): string {
    return "../../assets/users/" + this.user?.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user?.id);
  }
}
