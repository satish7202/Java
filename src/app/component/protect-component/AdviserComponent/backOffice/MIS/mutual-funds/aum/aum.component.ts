import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Data-service/event.service';

@Component({
  selector: 'app-aum',
  templateUrl: './aum.component.html',
  styleUrls: ['./aum.component.scss']
})
export class AumComponent implements OnInit {
  // showMainWrapperFlag: boolean = true;
  // categoryshow: boolean = false;
  // showSubTable:boolean= false;
  // showAddBtn: boolean = true;
  // showRemoveBtn: boolean;
  // clientTotalAum;
  // amcTotalAum;
  // category;
  // subcategory;
  // MiscData;
  // MiscData1;

  // constructor(private backoffice: BackofficeService,private dataService: EventService) { }
  
  // teamMemberId=2929;
  ngOnInit() {
    // console.log("111111111111111111111222222222222222222222222222")
    // this.getTotalAum();

    // this.getSubCatAum()
    // this.getMisData()
    // this.getSubCatScheme()
    // this.getSubCatSchemeName();
  }


  // showMainWrapper() {
  //   this.categoryshow = false;
  //   this.showMainWrapperFlag = true;
  // }

  // categorywise() {
  //   this.categoryshow = true;
  //   this.showMainWrapperFlag = false;
  // }

  // showSubTableList(){
  // this.showMainWrapperFlag = false;
  //  this.showSubTable =true;
  //  this.showAddBtn = false;
  //  this.showRemoveBtn = true;
  // }


  // hideSubTableList(){
  //   this.showMainWrapperFlag = false;
  //   this.showSubTable = false;
  //   this.showAddBtn = true;
  //   this.showRemoveBtn = false;
  // }
  
  // getTotalAum(){
  //   this.backoffice.getClientTotalAUM(this.teamMemberId).subscribe(
  //    data => this.getFileResponseDataAum(data),
  //    err => this.getFilerrorResponse(err)
  //   )
  //  }
  //  getMisData(){
  //    this.backoffice.getMisData(this.teamMemberId).subscribe(
  //      data => this.getFileResponseDataForMis(data),
  //      err => this.getFilerrorResponse(err)
  //    )
  //  }
  //  getSubCatAum(){
  //    this.backoffice.getSubCatAum(this.teamMemberId).subscribe(
  //     data => this.getFileResponseDataForSub(data),
  //     err => this.getFilerrorResponse(err)
  //   )
  //  }
  //  getSubCatScheme(){
  //    this.backoffice.getSubCatScheme(this.teamMemberId).subscribe(
  //      data => this.getFileResponseDataForSubScheme(data),
  //      err=> this.getFilerrorResponse(err)
  //    )
  //  } 
  //  getSubCatSchemeName()
  //  {
  //   this.backoffice.getSubCatSchemeName(this.teamMemberId).subscribe(
  //     data => this.getFileResponseDataForSubSchemeName(data),
  //     err=> this.getFilerrorResponse(err)
  //   )
  //  }
  //  getTotalAumByScheme()
  //  {
  //   this.backoffice.getTotalByAumScheme(this.teamMemberId).subscribe(
  //     data => this.getFileResponseAumByScheme(data),
  //     err=> this.getFilerrorResponse(err)
  //   )
  //  } 

  //  getFileResponseDataAum(data) {
  //    console.log(data)

  //    this.clientTotalAum=data.payLoad.clientTotalAum;
  //    this.amcTotalAum=data.payLoad.amcTotalAum;
  //  }
  //   getFileResponseDataForMis(data) {
  //     console.log(data)
  //   this.MiscData1=data.payLoad;
  //   }
  //   getFileResponseDataForSub(data) {
  //     this.category=data.payLoad.category;
  //     this.subcategory=data.payLoad.subcategory;

  //   }
  //   getFileResponseDataForSubScheme(data) {
  //     this.MiscData=0;
  //     console.log(data)
  //     this.MiscData=data.payLoad.categories;
  //   }
  //   getFileResponseDataForSubSchemeName(data)
  //   {
  //     console.log("scheme Name",data)
  //   }
  //   getFileResponseAumByScheme(data)
  //   {
  //     console.log("Aum By Name",data)
  //   }
  //   getFilerrorResponse(err) {
  //    this.dataService.openSnackBar(err, 'Dismiss')
  //   }
}

