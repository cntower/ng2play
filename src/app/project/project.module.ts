import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { routedComponents, ProjectRoutingModule } from './project-routing.module';

import { ProjectNewComponent } from './project-new/project-new.component';
import { TaskListComponent } from './task-list/task-list.component';

import { TaskNewComponent } from './task-new/task-new.component';
import { TaskShowComponent } from './task-show/task-show.component';
import { UxService } from './../model';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MaterialModule.forRoot(),
    FormsModule
  ],
  declarations: [
    routedComponents,
    ProjectNewComponent,
    TaskListComponent,
    TaskNewComponent,
    TaskShowComponent,
  ],
  providers: [
    UxService
  ]
})
export class ProjectModule { }