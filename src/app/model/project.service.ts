import { Injectable } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from './test-projects';

@Injectable()
//Dummy ProjectService. Pretend it makes real http requests
export class ProjectService {

  public takenProjectId: number;

  getProdjects() {
    return Promise.resolve(PROJECTS);
  }

  getProject(id: number | string): Promise<Project> {
    if (typeof id === 'string') {
      id = parseInt(id as string, 10);
    }
    
    this.takenProjectId = id;

    return this.getProdjects().then(
      heroes => heroes.find(hero => hero.id === id)
    );
  }

  updateProject(project: Project): Promise<Project> {
    return this.getProject(project.id).then(p => {
      if (!p) {
        throw new Error(`Project ${project.id} not found`);
      }
      return Object.assign(p, project);
    });
  }

}
