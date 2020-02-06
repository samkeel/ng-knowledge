import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BookService } from './book.service';
import { DocModel } from './doc.model';


@Component({
  selector: 'app-doc-home',
  templateUrl: './doc-home.component.html',
  styleUrls: ['./doc-home.component.scss']
})
export class DocHomeComponent implements OnInit, OnDestroy {
  documentsList: DocModel[] = [];


  constructor(private bookService: BookService, private db: AngularFirestore) { }

  ngOnInit() {
    this.documentsList = this.bookService.getAvailableDocs();
  }

  ngOnDestroy(){
  }
}
