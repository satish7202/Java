import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-delete-subscription',
  templateUrl: './delete-subscription.component.html',
  styleUrls: ['./delete-subscription.component.scss']
})
export class DeleteSubscriptionComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DeleteSubscriptionComponent>,@Inject(MAT_DIALOG_DATA) public fragmentData: any) { }

  ngOnInit() {
    console.log("fragmentData",this.fragmentData);
  }
  
}
