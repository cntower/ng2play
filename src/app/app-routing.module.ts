import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      //{ path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'about', component: AboutComponent },
      { path: 'projects', loadChildren: 'app/project/project.module#ProjectModule'}
    ])
  ],
  exports: [ RouterModule ] // re-export the module declarations
})
export class AppRoutingModule { };