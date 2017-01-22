import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

import { Task, TaskService, ProjectService, UxService } from '../../model';

@Component({
  selector: 'app-task-show',
  templateUrl: './task-show.component.html',
  styleUrls: ['./task-show.component.css']
})
export class TaskShowComponent implements OnInit {
  public task: Task
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private projectService: ProjectService,
    private uxService: UxService
  ) { 
    this.task = new Task();
  }

  ngOnInit() {
    this.route.params
      .switchMap((params) => this.taskService.getTask(params['id'], this.projectService.takenProjectId))
      .subscribe(task => {
        this.task = task;
        this.uxService.setSidenavRightOpened(true);
      })

  }

  save(task: Task) {
    this.taskService.updateTask(task);
  }

}
