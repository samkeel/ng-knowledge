import { Component, OnInit, OnDestroy, HostBinding, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BookService } from './book.service';
import { DocModel } from './doc.model';
import { routeSlideStateTrigger } from 'src/app/shared/route-animations';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-doc-home',
  templateUrl: './doc-home.component.html',
  styleUrls: ['./doc-home.component.scss'],
  animations: [routeSlideStateTrigger]
})
export class DocHomeComponent implements OnInit, OnDestroy {
  @HostBinding('@routeSlideState') routeAnimation = true;

  documentsList: DocModel[] = [];
  documentsSubscription: Subscription;

  constructor(private bookService: BookService, private db: AngularFirestore) { }

  ngOnInit() {
    this.getDocs();
  }

  ngOnDestroy() {
    //unsubscribe from subject
    this.documentsSubscription.unsubscribe();
  }

  getDocs() {
    //subscribe to new subject
    this.documentsSubscription = this.bookService.docsChanged.subscribe(
      documentsList => (this.documentsList = documentsList));
    this.bookService.fetchDocs(); 
  }

  //Delete single object by Document ID
  onDelete(document) {
    this.db.doc(`Docs/${document.id}`).delete();
  }

  //Update component
  // onUpdate(document) {
  //   this.db.doc(`Docs/${document.id}`).update();
  // }

  // Add
  // onAdd(){
  //   this.db.collection(`Docs`).add({});
  // }

}