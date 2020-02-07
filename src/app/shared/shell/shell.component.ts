import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { treeNodeModel } from './treeNode.model';
import { treeNodeService } from './treeNode.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  otherTheme: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  trees: treeNodeModel[] = []

  constructor(
    private breakpointObserver: BreakpointObserver,
    public afAuth: AngularFireAuth,

    private treeNodeService: treeNodeService
  ) { }

  changeTheme() {
    this.otherTheme = !this.otherTheme;
  }

  ngOnInit() {
    this.trees = this.treeNodeService.getTrees();
    console.log(this.trees);
  }

}
