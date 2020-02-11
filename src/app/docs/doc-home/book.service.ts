import { Observable, of } from 'rxjs';
import { DOCMODEL } from './mock-books';
import { DocModel } from './doc.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class BookService {
    constructor(private db: AngularFirestore) { }

    getBooks(): Observable<any[]> {
        return this.db.collection('Docs').valueChanges();
    }
}
