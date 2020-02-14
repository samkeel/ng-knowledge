import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { DocHomeComponent } from './doc-home/doc-home.component';
import { BookService } from './doc-home/book.service';
import { DocsMainFormComponent } from './docs-main-form/docs-main-form.component';


@NgModule({
  declarations: [DocHomeComponent, DocsMainFormComponent],
  imports: [
    CommonModule,
    DocsRoutingModule,
    SharedModule,
    FormsModule,
    MatDialogModule,
    MatButtonToggleModule,
    ReactiveFormsModule
  ],
  providers: [BookService]
})
export class DocsModule { }
