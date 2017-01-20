import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Project, ProjectService } from '../../model';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {
  projects: Promise<Project[]>;
  @Input()
  public selectedProject: Project;
  private rightOpened = false;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService) { }


  ngOnInit(): void {
    if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.url["0"].path) {
      //console.log(this.route.snapshot.firstChild.url["0"].path);
      this.rightOpened = true;

    }
    this.route.params
      .switchMap((params: Params) => Observable.fromPromise(this.projectService.getProject(params['id'])))
      .subscribe(project => {
        if (project) { this.selectedProject = project; }
      });

    this.projects = this.projectService.getProdjects();
  }

  onSelect(project: Project) {
    this.selectedProject = project;
    this.router.navigate(['../projects', project.id]);
  }

  onSlaveClose() {
    if (this.selectedProject === undefined || this.selectedProject === null) {
      this.router.navigate(['../projects']);

    } else {
      this.router.navigate(['../projects', this.selectedProject.id]);
    }
  }
}