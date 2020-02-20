import { Observable, of, Subject } from 'rxjs';
import { DocModel } from './doc.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class BookService {
    docsChanged = new Subject<DocModel[]>();
    private availableDocs: DocModel[] = [];
    constructor(private db: AngularFirestore) { }

    fetchDocs() {
        this.db
            .collection('Docs', ref => ref.orderBy('title')) //filter query to order database results
            .snapshotChanges() //snapshotChanges to get the firebase ID field 
            .pipe(
                map(docArray => {
                    return docArray.map(doc => {
                        return { //map the snapshotChanges data to array
                            id: doc.payload.doc.id,
                            author: doc.payload.doc.data()['author'],
                            paragraph: doc.payload.doc.data()['paragraph'],
                            title: doc.payload.doc.data()['title']
                        };
                    });
                }))
            .subscribe((docu: DocModel[]) => {
                this.availableDocs = docu;
                //emit array with spread operator to create a copy of the original array 
                //for immutability reasons
                this.docsChanged.next([...this.availableDocs]);
            });
    }

    //delete document
    deleteDocument(document) {
        this.db.doc(`Docs/${document.id}`).delete();
    }

    // Add
    onAdd(doc: DocModel) {
        this.db.collection('Docs').add(doc);
    }

    // update
    onUpdate(document) {
        const upper = document.document.title.replace(/^\w/, c => c.toUpperCase());

        this.db.doc(`Docs/${document.document.id}`).update({
            title: upper,
            paragraph: document.document.paragraph
        });
    }
}
