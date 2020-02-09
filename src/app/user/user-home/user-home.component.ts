import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { routeSlideStateTrigger } from 'src/app/shared/route-animations';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
  animations: [routeSlideStateTrigger]
})
export class UserHomeComponent implements OnInit {
  @HostBinding('@routeSlideState') routeAnimation = true;

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

}
