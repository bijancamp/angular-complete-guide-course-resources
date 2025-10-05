import { Component, Input } from '@angular/core';
import { TasksService } from "./tasks.service";
import { type NewTask } from './new-task/new-task.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NewTaskComponent, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(newTask: NewTask) {
    this.isAddingTask = false;

    this.tasksService.addTask(newTask, this.userId);
  }
}
