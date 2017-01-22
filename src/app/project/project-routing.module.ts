import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProjectListComponent } from './project-list/project-list.component';

import { ProjectNewComponent } from './project-new/project-new.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskShowComponent } from './task-show/task-show.component';


const routes: Routes = [
    {
        path: '',
        component: ProjectListComponent,
        children: [
            {
                path: 'new',
                component: ProjectNewComponent
            }
        ]
    },
    {
        path: ':id',
        component: ProjectListComponent,
        children: [
            {
                path: 'tasks/new',
                component: TaskNewComponent
            },
            {
                path: 'tasks/:id',
                component: TaskShowComponent
            }
        ]
    }];

export const routedComponents = [ProjectListComponent];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule { }