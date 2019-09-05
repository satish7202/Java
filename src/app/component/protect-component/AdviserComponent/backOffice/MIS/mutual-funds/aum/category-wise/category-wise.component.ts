import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';
import * as $ from 'jquery';
import { BackOfficeService } from '../../../../back-office.service';
import { EventService } from 'src/app/Data-service/event.service';
import { AumComponent } from '../aum.component';

@Component({
  selector: 'app-category-wise',
  templateUrl: './category-wise.component.html',
  styleUrls: ['./category-wise.component.scss']
})
export class CategoryWiseComponent implements OnInit {
  category;
  subcategory;
  Equity;
  sort;
  Debt;
  equityList;
  showSubCategory =  false;
  categoryshow: boolean;
  showMainWrapperFlag: boolean;
  showAddBtn: boolean =true;
  showRemoveBtn: boolean = false;
  showSubTable: boolean = false;
  debtList: any[];
  subcategoryList: any;
  Hybrid: any;
  Other: any;
  hybridList: any[];
  otherList: any[];
  SolutionOriented: any;
  solutionOrientedList: any[];
  constructor(private backoffice:BackOfficeService,private dataService: EventService,private aum:AumComponent) { }
  teamMemberId=2929;
  ngOnInit() {
    this.getSubCatSchemeName();
    this.getSubCatAum();
    // this.getClientFolioWise();
  }

  getSubCatSchemeName()
  {
   this.backoffice.getSubCatSchemeName(this.teamMemberId).subscribe(
     data => this.getFileResponseDataForSubSchemeName(data),
     err=> this.getFilerrorResponse(err)
   )
  }
  getSubCatAum(){
    this.backoffice.getSubCatAum(this.teamMemberId).subscribe(
     data => this.getFileResponseDataForSub(data),
     err => this.getFilerrorResponse(err)
   
   )
  }
  getFileResponseDataForSub(data) {

    this.category=data.category;
    this.subcategory=data.subcategory;
    this.category.forEach(c => {
      c.active=true;
      c.subcat=[];
      this.subcategory.forEach(o => {
        o.active=true;
        let subcat;
        if(o.name===null)
        {
          return;
        }
        else{
          subcat=o.name.substring(0,o.name.indexOf(' '));
        }
        if(subcat == 'Equity'){
         c.subcat.push(o);       
      }  
        else if(subcat =='Dept'){
          c.subcat.push(o); 
      }
       else if(subcat=='Hybrid'){
          c.subcat.push(o); 
      }
 
       else if(subcat=='Other'){
          c.subcat.push(o); 
      }
      else{
        c.subcat.push(o);
      }
      });
    });
  
    console.log("category",this.category)
  }

  showSubTableList(index,value){
    let flag=(value)?value=false:value=true;
    this.category[index].active=flag;
    if(index == 0){
      this.subcategoryList = this.equityList
    }else if(index == 1){
      this.subcategoryList = this.debtList
    }else if(index == 2){
      this.subcategoryList = this.hybridList
    }else if(index == 3){
      this.subcategoryList = this.otherList
    }else{
      this.subcategoryList = this.solutionOrientedList
    }
  }
  // getClientFolioWise(){
  //   this.backoffice.getClientFolioWise(this.teamMemberId).subscribe(
  //     data => this.getFileResponseDataForClientFolioWise(data),
  //    err => this.getFilerrorResponse(err)
  //   )
  // }
  getFileResponseDataForSubSchemeName(data){
      console.log("scheme Name",data)
    }
  //  getFileResponseDataForClientFolioWise(data){
  //   console.log("DataForClientFolioWise",data)
  //  }
   getFilerrorResponse(err) {
    this.dataService.openSnackBar(err, 'Dismiss')
  }
   aumReport()
   {
    this.aum.aumComponent=true;
   }
}
