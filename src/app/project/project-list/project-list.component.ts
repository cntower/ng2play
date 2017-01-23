import { Component, OnInit, ChangeDetectorRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MdSidenav } from '@angular/material';

import { Project, ProjectService, UxService } from '../../model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})

export class ProjectListComponent implements OnInit {
  projects: Promise<Project[]>;
  @Input()
  public selectedProject: Project;
  private rightOpened = false;
  private data: Observable<boolean>

  @ViewChild('sidenavRight')
  sidenavRight: MdSidenav;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private uxService: UxService,
  ) { }

  ngOnInit(): void {
    this.uxService.sidenavRightOpened.subscribe(opened => {
      if (opened) {
        this.sidenavRight.open()
      } else {
        this.sidenavRight.close()
      }
    });

    if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.url["0"].path) {
      this.rightOpened = true;
    }

    this.route.params
      .switchMap((params: Params) => { return this.projectService.getProject(params['id']) })
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