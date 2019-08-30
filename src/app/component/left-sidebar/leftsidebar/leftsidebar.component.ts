import { Component, OnInit, ElementRef } from '@angular/core';
import $ from "jquery";
import { AuthService } from 'src/app/auth-service/authService';
@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss']
})
export class LeftsidebarComponent implements OnInit {

  showTabs;
  showMainNavBar=true;
  smallNavWrapper;
  update;
  showSettings=false;

  constructor(private authService:AuthService,private _eref: ElementRef ) { }

  ngOnInit() {
      this.showTabs=true;
      this.onResize(); 
  }
   

  showMainNavWrapper(){
    $("#d").addClass("width-230");
    $("#d").removeClass("width-60");
    $('#left').css("margin-left","232px")
    $("#left").css("transition","0.2s")
    $("#d").css("transition","0.0s")
    this.showMainNavBar = false;
    this.smallNavWrapper =true;
    this.showTabs=true;
  }

  showsmallNavWrapper(){
    $("#d").removeClass("width-230");
    $("#left").css("transition","0.2s")
    $('#left').css("margin-left","65px")
    $("#d").css("transition","0s")
  
    this.showMainNavBar = true;
    this.smallNavWrapper =false;
    this.showTabs=false
  }

  onResize()
  {
    if(window.innerHeight>=670 || window.innerHeight==670)
    {
      this.showSettings=false;
    }
    if(window.innerWidth <= 600)
    {
      this.showTabs=false;
      $('#left').css("margin-left","65px");
      $("#d").addClass("width,60px");
      $("#d").removeClass("width-230");
    }
    else{
      if(this.showTabs==false)
      {
         this.showTabs=false;
      }
      else{
        this.showTabs=true;
        $("#d").addClass("width-230");
        $("#d").removeClass("width-60");
      }
    }
  }
  openSettings()
  {
    if(this.showSettings==false)
    {
      $("#showSettings").css("transition","0.5s")
      this.showSettings=true;
    }
    else{
      this.showSettings=false;
    }   
  }
  logout(){
     this.authService.logout();
  }
}
