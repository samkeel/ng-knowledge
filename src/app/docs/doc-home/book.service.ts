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

    getBooks(): Observable<any[]> {
        return this.db.collection('Docs', ref => ref.orderBy('_id')).valueChanges();
    }

    fetchDocs() {
        this.db
            .collection('Docs', ref => ref.orderBy('_id'))
            .snapshotChanges().pipe(
                map(docArray => {
                    return docArray.map(doc => {
                        return {
                            id: doc.payload.doc.id,
                            _id: doc.payload.doc.data()['_id'],
                            author: doc.payload.doc.data()['author'],
                            paragraph: doc.payload.doc.data()['paragraph'],
                            title: doc.payload.doc.data()['title']
                        };
                    });
                }))
            .subscribe((docu: DocModel[]) => {
                this.availableDocs = docu;
                this.docsChanged.next([...this.availableDocs]);
            });
    }

}
