import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpService } from 'src/app/http-service/http-service';
import { apiConfig } from 'src/app/config/main-config';
import { appConfig } from 'src/app/config/component-config';
class CacheItem<T> {
  url: string;
  timestampCached: number;
  data: T;
}
@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(public https:HttpClient,public http:HttpService) { }
  
  cache: CacheItem<any>[] = [];
  MAX_CACHE_AGE = 200000;
   
  getInvoiceData(data)
  {
    let httpParams=new HttpParams().set('advisorBillerProfileId',data);
    return this.http.get(apiConfig.MAIN_URL + appConfig.GET_SUBSCRIPTION_INVOICE,httpParams);
  }
  getSingleInvoiceData(data)
  {
    let httpParams=new HttpParams().set('invoiceId',data)
    return this.http.get(apiConfig.MAIN_URL + appConfig.GET_SINGLE_INVOICE,httpParams);
  }
  getPreferenceBillerProfile(data)
  {
    let httpParams=new HttpParams().set('advisorId',data);
    return this.http.get(apiConfig.MAIN_URL +appConfig.GET_PREFERENCE_BILLER_PROFILE,httpParams);
  }
  getPreferenceInvoiceQuotations(data)
  {
    let httpParams=new HttpParams().set('advisorId',data.advisorId).set('type',data.type);
    return this.http.get(apiConfig.MAIN_URL + appConfig.GET_PREFERENCE_INVOICE_QUOTATIONS_SUBSCRIPTION,httpParams);
  }
  getSubscriptionCompleteStages(data)
  { 
    let httpParams=new HttpParams().set('advisorId',data.advisorId).set('type',data.type);
    return this.http.post(apiConfig.MAIN_URL + appConfig.DASHBOARD_LETS_BEGIN_SUBSCRIPTION,data)
  }
  getSubscriptionClientsList(data)
  {
    let httpParams=new HttpParams();
     return this.http.get(apiConfig.MAIN_URL + appConfig.GET_CLIENT_SUBSCRIPTION_LIST,data)
  }
  base_64Data(data) {
    return this.http.getEncoded(apiConfig.MAIN_URL + appConfig.GET_BASE_64, data,10000)
  }
}

