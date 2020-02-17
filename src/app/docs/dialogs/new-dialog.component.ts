import { Component, OnInit, inject, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DocModel } from '../doc-home/doc.model';

@Component({
  selector: 'app-new-dialog',
  template: `    
    <div mat-dialog-content>
      <mat-form-field appearance="outline" class="text-area-full-width">
        <mat-label>Chapter Title</mat-label>
        <input matInput placeholder="Title" [(ngModel)]="data.title">
      </mat-form-field>    

      <mat-form-field appearance="outline" class="text-area-full-width">
        <mat-label>Paragraph</mat-label>
        <textarea matInput placeholder="Paragraph" [(ngModel)]="data.paragraph"
          cdkTextareaAutosize #autosize="cdkTextareaAutosize" cdkAutosizeMinRows="5" cdkAutosizeMaxRows="15"></textarea>
      </mat-form-field>
    </div>

    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="data" cdkFocusInitial>Create</button>
    </div>
  `,
  styles: []
})
export class NewDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
