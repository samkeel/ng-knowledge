import { Component, OnInit, OnDestroy, HostBinding, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BookService } from './book.service';
import { DocModel } from './doc.model';
import { routeSlideStateTrigger } from 'src/app/shared/route-animations';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../dialogs/edit-dialog.component';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-doc-home',
  templateUrl: './doc-home.component.html',
  styleUrls: ['./doc-home.component.scss'],
  animations: [routeSlideStateTrigger]
})
export class DocHomeComponent implements OnInit, OnDestroy {
  @HostBinding('@routeSlideState') routeAnimation = true;
  @Input() document;

  doc: DocModel;  

  documentsList: DocModel[] = [];
  documentsSubscription: Subscription;

  constructor(private bookService: BookService, 
    private db: AngularFirestore, 
    public dialog: MatDialog, 
    public afAuth: AngularFireAuth) { }

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
    this.bookService.deleteDocument(document);
  }

  openEditDialog(document): void {
    //Transfer document object to modal dialog via the Data property 
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '80vw',
      data: { document }
    });

    //Data property is returned as 'Result' when dialog closes.
    //Map result to a document model and make any changes before writing document model back to DB.
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bookService.onUpdate(result);
      }
    });
  }

}