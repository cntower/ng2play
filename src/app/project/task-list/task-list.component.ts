import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project, TaskService, Task } from '../../model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  //projectTitle: String;
  _project: Project = null;
  tasks: Promise<Task[]>;
  taskGroups: Promise<any[]>;
  selectedTask: Task;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  @Input() set project(project: Project) {
    if (project !== null && project !== undefined) {
      //this.projectTitle = project.title;
      this._project = project;
      //this.tasks = this.taskService.getTasks(project.id);
      this.taskGroups = this.taskService.getTaskGroups(project.id);
    }
  }

  get project(): Project {
    return this._project;
  }

  getDayOfWeek(date: Date): String {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let now = new Date();
    let tomorrow = new Date();

    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === now.toDateString()) {
      return 'Today';
    }
    if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow'
    }
    return days[date.getDay()];

  }

  onSelect(task: Task) {
    this.selectedTask = task;
    this.router.navigate([`../projects/${this.project.id}/tasks`, this.selectedTask.id]);
  }

}
