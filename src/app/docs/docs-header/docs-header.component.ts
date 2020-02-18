import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewDialogComponent } from '../dialogs/new-dialog.component';
import { BookService } from '../doc-home/book.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { DocModel } from '../doc-home/doc.model';

@Component({
  selector: 'app-docs-header',
  templateUrl: './docs-header.component.html',
  styleUrls: ['./docs-header.component.scss']
})
export class DocsHeaderComponent implements OnInit {
  // title: string;
  doc: DocModel;


  constructor(private bookService: BookService, public afAuth: AngularFireAuth, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewDocDialog(): void {
    const dialogRef = this.dialog.open(NewDialogComponent, {
      width: '80vw',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.doc = result;
        const upper = this.doc.title.replace(/^\w/, c => c.toUpperCase());
        this.doc.title = upper;
        this.doc.author = this.afAuth.auth.currentUser.email;
        this.bookService.onAdd(this.doc);
      }
    });
  }
}
