import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { ProjectService, TaskService } from './model';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProjectListComponent } from './project/project-list/project-list.component';

import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [ProjectService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
