import { Component, OnInit, ElementRef } from '@angular/core';
import $ from "jquery";
import { AuthService } from 'src/app/auth-service/authService';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss']
})
export class LeftsidebarComponent implements OnInit {

  showTabs=true;
  showSettings=false;
  arrow=false;

  constructor(private authService:AuthService,private _eref: ElementRef,private userService:UserService) { }

  ngOnInit() {
      this.onResize(); 
  }
   

  showMainNavWrapper(){
    $("#d").addClass("width-230");
    $("#d").removeClass("width-60");
    $('#left').css("margin-left","230px") 
    this.showTabs=true;
    this.arrow=false;
  }

  showsmallNavWrapper(){
    $("#d").removeClass("width-230");
    $('#left').css("margin-left","65px")
    $('#left').css("transition","margin-left 0.3s")
    $('#d').css("transition","width 0.2s")
    this.showTabs=false
    this.arrow=false;
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
  backSections()
  {
    this.arrow=this.arrow?this.arrow=false:this.arrow=true
  }
  logout(){
     this.authService.logout();
  }
}
