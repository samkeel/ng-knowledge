import { Component, OnInit, inject, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DocModel } from '../doc-home/doc.model';

@Component({
  selector: 'app-new-dialog',
  template: `    
    <h1 mat-dialog-title>New:</h1>
    <div mat-dialog-content fxLayout="column" fxLayoutAlign=" center" >
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

    <mat-dialog-actions align="end">
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="data" cdkFocusInitial>Create</button>
    </mat-dialog-actions>
  `,
  styles: [
    '.text-area-full-width { width: 100%; }'
  ]
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
