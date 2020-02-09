import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BookService } from './book.service';
import { DocModel } from './doc.model';
import { routeSlideStateTrigger } from 'src/app/shared/route-animations';


@Component({
  selector: 'app-doc-home',
  templateUrl: './doc-home.component.html',
  styleUrls: ['./doc-home.component.scss'],
  animations: [routeSlideStateTrigger]
})
export class DocHomeComponent implements OnInit, OnDestroy {
  @HostBinding('@routeSlideState') routeAnimation = true;

  documentsList: DocModel[] = [];  

  constructor(private bookService: BookService, private db: AngularFirestore) { }

  ngOnInit() {
    this.documentsList = this.bookService.getAvailableDocs();
  }

  ngOnDestroy(){
  }
}
