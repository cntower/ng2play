import { Project } from './project';

export class Task {
    constructor(public project = new Project(), public id = 0, public title = '', public created_at = new Date(), public description = '') {
        if(this.description === ''){
            this.description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
        }
    }
    clone() { return new Task(this.project, this.id, this.title, this.created_at, this.description); }
}
