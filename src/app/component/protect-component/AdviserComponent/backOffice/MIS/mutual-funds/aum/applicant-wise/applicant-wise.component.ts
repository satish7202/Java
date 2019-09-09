import { Component, OnInit } from '@angular/core';
import { AumComponent } from '../aum.component';
import { BackOfficeService } from '../../../../back-office.service';

@Component({
  selector: 'app-applicant-wise',
  templateUrl: './applicant-wise.component.html',
  styleUrls: ['./applicant-wise.component.scss']
})
export class ApplicantWiseComponent implements OnInit {

  constructor(private aum:AumComponent,private backoffice:BackOfficeService) { }
  teamMemberId=2929;
  applicantName;
  showLoader=true;
  clientId;
  ngOnInit() {
    this.aumApplicantWiseTotalaumApplicantNameGet();
  }
  aumApplicantWiseTotalaumApplicantNameGet()
  {
    this.backoffice.getAumApplicantWiseTotalaumApplicantName(this.teamMemberId).subscribe(
      data => this.applicantNameGet(data)
    )
  }
  applicantNameGet(data)
  {
    this.applicantName=data;
    this.showLoader=false;
  }
  
  category(name,index,show)
  {
    let obj=
    {
      'clientId':name.id,
      'clientTotalAum':0,
      'teamMemberId':this.teamMemberId
    }
    this.clientId=name.id;
    if(show==false)
    {
    this.backoffice.getAumApplicantCategory(obj).subscribe(
      data => this.sortCategoryApplicant(data,index,show,name)
    )
    }
    else
    {
      this.applicantName[index].show=false;
    }
  }
  sortCategoryApplicant(data,index,show,name)
  {
    console.log("fasdfkasdf",data); 
    name.category=data;
    this.applicantName[index].show=(show)?show=false:show=true;

  }
  subCategory(category,showCategory,index)
  {
    let obj=
    {
      'categoryId':category.id,
      'categoryTotalAum':category.totalAum,
      'clientId':this.clientId,
      'teamMemberId':this.teamMemberId
    }
    this.backoffice.getAumApplicantSubCategory(obj).subscribe(
      data =>this.getResponseSubCategoryData(data,category,showCategory,index)
    )
  }
  getResponseSubCategoryData(data,category,showCategory,index)
  {  
    category.subCategoryList=data;
    
    category.subCategoryList[index].showSubCategory=(showCategory)?showCategory=false:showCategory=true;
  }
  aumReport()
  {
   this.aum.aumComponent=true;
  }

}
