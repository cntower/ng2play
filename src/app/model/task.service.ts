import { Injectable } from '@angular/core';
import { TASKS } from './test-projects';
import { Task } from './task';
import { TaskGroup } from './taskGroup';

@Injectable()
export class TaskService {
  getTasks(projectId: number | string) {
    if (typeof projectId === 'string') {
      projectId = parseInt(projectId as string, 10);
    }
    return Promise.resolve(TASKS).then(
      tasks => tasks.filter(task => task.project.id === projectId)
        .sort((a, b) => a.created_at.getTime() - b.created_at.getTime())
    );
  }

  getTaskGroups(projectId: number | string) {
    return this.getTasks(projectId).then(
      tasks => tasks.reduce(function (groups: TaskGroup[], task) {
        let dateString = task.created_at.toDateString();
        let group = groups.find(group => group.id === dateString);

        if (group !== undefined) {
          group.tasks.push(task);
        } else {

          let tasks: Task[] = [];
          tasks.push(task);
          group = new TaskGroup(dateString, tasks);
          groups.push(group);
        }
        return groups;
      }, [])
    )
  }

  getTask(id: number | string) {
    if (typeof id === 'string') {
      id = parseInt(id as string, 10);
    }
    return Promise.resolve(TASKS).then(
      tasks => tasks.find(task => task.id === id)
    );
  }

  updateTask(task: Task): Promise<Task> {
    return this.getTask(task.id).then(t => {
      if (!t) {
        throw new Error(`Task ${task.id} not found`);
      }
      return Object.assign(t, task);
    });
  }

}
