import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddDocumentComponent>,@Inject(MAT_DIALOG_DATA) public fragmentData: any) { }

  ngOnInit() {
  }
  
}
