import { Component, OnInit } from '@angular/core';
import { Doc } from '../doc'

@Component({
  selector: 'app-doc-home',
  templateUrl: './doc-home.component.html',
  styleUrls: ['./doc-home.component.scss']
})
export class DocHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  documents = [
    new Doc('Title1', 'paragraph1'),
    new Doc('Title2', 'paragraph2'),
    new Doc('Title3', 'paragraph3'),
    new Doc('Title4', 'paragraph4'),
    new Doc('Title5', 'paragraph5')
  ];

}
