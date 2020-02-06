import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { switchMap, map } from 'rxjs/operators';
import { Page } from './pages.model';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }


  //test 
  getData() {
    const authId = 'dr-seuss';
    return this.db.collection('authors')
      .doc(authId)
      .collection('books').valueChanges({authId: 'id'});
  }

  //test2
  getData2(){
    const authId = 'dr-seuss';
    return new Promise<any>((resolve, reject) => {
      this.db.collection('authors')
        .doc(authId)
        .collection('books')
        .snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots)
        })        
    })
  }

  // test3
  getData3(){
    
  }


  //Creates a new page for the current user
  async createPage(data: Page) {
    const user = await this.afAuth.auth.currentUser;
    return this.db.collection('books').add({
      ...data,
      uid: user.uid,
      paragraph: 'first paragraph'      
    });
  }

  //Delete page
  deletePage(pageId: string) {
    return this.db
      .collection('books')
      .doc(pageId)      
  }

  //Update
  updateChapter(pageId: string, chapterId: string) {}

  //Remove chapter from page
  removeChapter(pageId: string, chapterId: string) {
    return this.db
      .collection('books')
      .doc(pageId);
      //.update logic({})
  }


}
