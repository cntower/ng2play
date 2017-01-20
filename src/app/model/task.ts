import { Project } from './project';

export class Task {
    constructor(public project = new Project(), public id = 0, public title = '', public created_at = new Date()) { }
    clone() { return new Task(this.project, this.id, this.title, this.created_at); }
}
