import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { treeNodeModel } from './treeNode.model';
import { treeNodeService } from './treeNode.service';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

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
  
  treeControl = new NestedTreeControl<treeNodeModel>(node => node.children);
  treeDataSource = new MatTreeNestedDataSource<treeNodeModel>();
  
  constructor(
    private breakpointObserver: BreakpointObserver,
    public afAuth: AngularFireAuth,

    private treeNodeService: treeNodeService
    // this.treeDataSource.data
  ) { }

  // changeTheme() {
  //   this.otherTheme = !this.otherTheme;
  // }

  ngOnInit() {
    this.trees = this.treeNodeService.getTrees();
    this.treeDataSource.data = this.trees;
  }

  hasChild = (_: number, node: treeNodeModel) => !!node.children && node.children.length > 0;

}
