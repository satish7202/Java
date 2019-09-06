import { Component } from "@angular/core";  
import { SlimLoadingBarService } from "ng2-slim-loading-bar";  
import {  
  NavigationStart,  
  NavigationEnd,  
  Event,  
  Router  
} from "@angular/router";  
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(  
    private lBar: SlimLoadingBarService,  
    private _router: Router  
  ) {  
    this._router.events.subscribe((event: Event) =>{  
      // console.log(event);  
      this.loadingBarInterceptor(event);  
    });  
  }  
  
  private loadingBarInterceptor(event: Event) {  
    if (event instanceof NavigationStart) {  
      this.lBar.start();  
    }  
    if (event instanceof NavigationEnd) {  
      this.lBar.complete();  
    }      
  }  


}  
