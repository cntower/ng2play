import { Injectable } from '@angular/core';
import { Http, Headers, Jsonp, URLSearchParams } from '@angular/http';
import { Project } from './project';
import { PROJECTS } from './test-projects';
import 'rxjs/add/operator/map';

@Injectable()
//Dummy ProjectService. Pretend it makes real http requests
export class ProjectService {

  constructor(private http: Http, private jsonp: Jsonp) { }

  public takenProjectId: number;

  getProdjects() {
    return Promise.resolve(PROJECTS);
  }

  getP() {
    let wikiUrl = 'http://en.wikipedia.org/w/api.php';
    let params = new URLSearchParams();
    params.set('search', 'te'); // the user's search value
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    // TODO: Add error handling
    return this.jsonp
      .get(wikiUrl, { search: params })
      .map(response => <string[]>response.json()[1]);
  }

  getP2() {
    let wikiUrl = 'https://jsonplaceholder.typicode.com';
    return this.http
      .get(wikiUrl + '/posts/1', {})
      .map(response => response.json());
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
