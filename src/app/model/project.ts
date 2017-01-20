export class Project {
  constructor(public id = 0, public title = '', public task_count = 0) { }
  clone() { return new Project(this.id, this.title, this.task_count); }
}
