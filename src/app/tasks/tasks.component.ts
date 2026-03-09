import {Component, Input} from '@angular/core';
import {TaskItemComponent} from './task-item/task-item.component';
import {DUMMY_TASKS} from '../../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskItemComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({required: true}) name!: string | undefined;
  @Input({required: true}) userId!: string | undefined;
  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  handleOnCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
