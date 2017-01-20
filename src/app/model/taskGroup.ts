import { Task } from './task';

export class TaskGroup {
    constructor(public id = '', public tasks: Task[]) { }
    getDateCreated(): Date {
        if (this.tasks.length === 0) return new Date();
        return this.tasks[0].created_at;
    }
}
