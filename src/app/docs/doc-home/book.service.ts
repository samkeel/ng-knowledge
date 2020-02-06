import { DocModel } from './doc.model';

export class BookService {
    private availableDocs: DocModel[] = [
        {id: 1, author: "flip flop", title: "title 1", paragraph: "paragraph 1"},
        {id: 2, author: "banana", title: "title 2", paragraph: "paragraph 2"},
        {id: 3, author: "monkey fish",title: "title 3", paragraph: "paragraph 3"}
    ];

    getAvailableDocs() {
        return this.availableDocs.slice();
    }
}