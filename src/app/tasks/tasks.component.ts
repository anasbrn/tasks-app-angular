import {Component, Input} from '@angular/core';
import {TaskItemComponent} from './task-item/task-item.component';
import {DUMMY_TASKS} from '../../dummy-tasks';
import {NewTaskComponent} from './new-task/new-task.component';
import {NewTaskData} from '../../interfaces/task';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskItemComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({required: true}) name!: string | undefined;
  @Input({required: true}) userId!: string;
  isAddingTask = false;
  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  handleOnCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  handleAddingTask() {
    this.isAddingTask = true;
  }

  handleCloseModalTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.push({
      id: uuidv4(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    this.isAddingTask = false;
  }
}
