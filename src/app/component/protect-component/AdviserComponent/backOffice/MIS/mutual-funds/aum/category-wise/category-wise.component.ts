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
  constructor(private backoffice:BackOfficeService,private dataService: EventService,public aum:AumComponent) { }
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
    let equityList = [];
    let debtList = [];
    let othertList = [];
    let hybridList = [];
    let solutionOrientedList =[];
  
    this.category=data.category;
    this.subcategory=data.subcategory;
    this.category.forEach(c => {
      c.active=true;
    });
    this.subcategory.forEach(o => {
      o.active=true;
     if(o.name==null)
     {
       return;
     }
     else{
      if(o.name.substring(0,o.name.indexOf(' '))=='Equity'){
        equityList.push(o);
        return;
    }
      else if(o.name.substring(0,o.name.indexOf(' '))=='Debt'){
        debtList.push(o);
        return;
    }
      else if(o.name.substring(0,o.name.indexOf(' '))=='Hybrid'){
        hybridList.push(o);
        return;
    }
      else if(o.name.substring(0,o.name.indexOf(' '))=='Other'){
        othertList.push(o);
        return;
    }
      else{
        solutionOrientedList.push(o);
        return;
    }
     }
     });
     this.category.forEach(c =>
      {
        if(c.name=="EQUITY")
        {
          c.subcat=equityList;
        }
        else if(c.name=="DEBT")
        {
          c.subcat=debtList;
        }
        else if(c.name=="HYBRID")
        {
          c.subcat=hybridList;
        }
        else if(c.name=="OTHERS")
        {
          c.subcat=othertList;
        }
        else{
          c.subcat=solutionOrientedList;
        }
      })
      console.log(this.category)

  }
  sortBySubCategory(){
    this.showSubCategory = ! this.showSubCategory;
  }
  showMainWrapper() {
    this.categoryshow = false;
    this.showMainWrapperFlag = true;
  }

  categorywise() {
    this.categoryshow = true;
    this.showMainWrapperFlag = false;
  }

  showSubTableList(index,category){

   this.category[index].active=(category)?category=false:category=true;
   this.showMainWrapperFlag = false;
   this.showSubTable =true;
   this.showAddBtn = false;
   this.showRemoveBtn = true;
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


  hideSubTableList(){
    this.showMainWrapperFlag = false;
    this.showSubTable = false;
    this.showAddBtn = true;
    this.showRemoveBtn = false;
  }
  getClientFolioWise(){
    this.backoffice.getClientFolioWise(this.teamMemberId).subscribe(
      data => this.getFileResponseDataForClientFolioWise(data),
     err => this.getFilerrorResponse(err)
    )
  }
  getFileResponseDataForSubSchemeName(data){
      console.log("scheme Name",data)
    }
  getFilerrorResponse(err) {
     this.dataService.openSnackBar(err, 'Dismiss')
   }
   getFileResponseDataForClientFolioWise(data){
    console.log("DataForClientFolioWise",data)
   }
   aumReport()
   {
    this.aum.aumComponent=true;
   }
}
