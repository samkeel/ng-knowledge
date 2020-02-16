import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DocModel } from '../doc-home/doc.model';
import { BookService } from '../doc-home/book.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-docs-main-form',
  templateUrl: './docs-main-form.component.html',
  styleUrls: ['./docs-main-form.component.scss']
})
export class DocsMainFormComponent implements OnInit {
  addNewForm: FormGroup;
  doc: DocModel;

  constructor(private bookService: BookService, public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.formData();
  }

  formData() {
    this.addNewForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'paragraph': new FormControl(null)
    });
  }

  onSubmit() {
    this.doc = this.addNewForm.value;
    this.addNewForm.reset()
    // Convert first letter in Title input field to uppercase
    const upper = this.doc.title.replace(/^\w/, c => c.toUpperCase());    
    this.doc.title = upper;
    // current users signin email populates author field
    this.doc.author = this.afAuth.auth.currentUser.email;

    this.bookService.onAdd(this.doc);
  }

}
