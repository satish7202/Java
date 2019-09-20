import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ModulesComponent>) { }

  ngOnInit() {
  }
  dialogClose(){
    this.dialogRef.close();
  }
}
