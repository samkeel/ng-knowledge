import { Observable, of } from 'rxjs';
import { DOCMODEL } from './mock-books';
import { DocModel } from './doc.model';

export class BookService {
    constructor(){}
    getBooks(): Observable<DocModel[]> {
        return of(DOCMODEL)
    }
}