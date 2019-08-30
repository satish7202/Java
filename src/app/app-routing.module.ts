import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/protect-component/AdviserComponent/dashboard/dashboard.component';
import { LeftsidebarComponent } from './component/left-sidebar/leftsidebar/leftsidebar.component';
import { SubscriptionComponent } from './component/protect-component/AdviserComponent/Subscriptions/subscription/subscription.component';


const routes: Routes = [
  {
    path: 'admin', component: LeftsidebarComponent,
    
    children: [
     
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'subscription',
        component:SubscriptionComponent
      },
      {
        path:'',
        component:DashboardComponent
      }
     ]
  },
  {
    path:'',
    component:LeftsidebarComponent
  },



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
