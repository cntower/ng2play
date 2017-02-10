import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { ProjectService, TaskService } from './model';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProjectListComponent } from './project/project-list/project-list.component';

import { AboutComponent } from './about/about.component';

import { ElementsModule } from './elements/elements.module'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    ElementsModule
  ],
  providers: [ProjectService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
