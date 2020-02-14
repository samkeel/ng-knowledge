import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DocModel } from '../doc-home/doc.model';
import { BookService } from '../doc-home/book.service';

@Component({
  selector: 'app-docs-main-form',
  templateUrl: './docs-main-form.component.html',
  styleUrls: ['./docs-main-form.component.scss']
})
export class DocsMainFormComponent implements OnInit {
  addNewForm: FormGroup;
  doc: DocModel;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.formData();
  }

  formData() {
    this.addNewForm = new FormGroup({
      '_id': new FormControl(null, Validators.required),
      'author': new FormControl(null),
      'title': new FormControl(null, Validators.required),
      'paragraph': new FormControl(null)
    });
  }

  onSubmit() {
    this.doc = this.addNewForm.value;
    // console.log(this.doc);
    this.addNewForm.reset()
    this.bookService.onAdd(this.doc);    
  }

}
