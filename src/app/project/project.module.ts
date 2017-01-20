import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { routedComponents, ProjectRoutingModule } from './project-routing.module';

import { ProjectNewComponent } from './project-new/project-new.component';
import { TaskListComponent } from './task-list/task-list.component';

import { TaskNewComponent } from './task-new/task-new.component';
import { TaskShowComponent } from './task-show/task-show.component';


@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MaterialModule.forRoot()

  ],
  declarations: [
    routedComponents, 
    ProjectNewComponent, 
    TaskListComponent,
    TaskNewComponent,
    TaskShowComponent,
    ]
})
export class ProjectModule { }


/**
 * import { NgModule }     from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routedComponents, HeroRoutingModule } from './hero-routing.module';

@NgModule({
  imports:      [ SharedModule, HeroRoutingModule ],
  declarations: [ routedComponents ]
})
export class HeroModule { }
 */