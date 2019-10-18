import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './component/protect-component/AdviserComponent/dashboard/dashboard.component';
import {LeftsidebarComponent} from './component/left-sidebar/leftsidebar/leftsidebar.component';
import {SubscriptionComponent} from './component/protect-component/AdviserComponent/Subscriptions/subscription/subscription.component';
import {MisComponent} from './component/protect-component/AdviserComponent/backOffice/MIS/mis/mis.component';
import {LoginComponent} from './component/no-protected/login/login.component';
import {CustomerComponent} from './component/protect-component/customers/component/customer/customer.component';
import {UpperSliderComponent} from './component/protect-component/AdviserComponent/Subscriptions/subscription/common-subscription-component/upper-slider/upper-slider.component';

const routes: Routes = [
  {

    path: 'admin', component: LeftsidebarComponent,

    children: [
      {
        path: 'admin',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },

      {
        path: 'subscription',
        component: SubscriptionComponent,
        children: [
          {path: ''},
          {path: 'clients', component: UpperSliderComponent}]
      },
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'mis',
        component: MisComponent
      }

    ]
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  }
  // { path: 'customer-detail', loadChildren: () => import('./component/protect-component/customers/customers.module')
  // .then(m => m.CustomersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
