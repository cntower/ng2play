import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { AutoCompliteComponent } from './auto-complite/auto-complite.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AutoCompliteComponent],
  exports: [AutoCompliteComponent]
})
export class ElementsModule { }
