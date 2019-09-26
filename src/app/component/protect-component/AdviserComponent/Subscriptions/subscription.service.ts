import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpService } from 'src/app/http-service/http-service';
import { apiConfig } from 'src/app/config/main-config';
import { appConfig } from 'src/app/config/component-config';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
    let httpParams=new HttpParams().set('advisorId',data.advisorId);
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
  updatePreferenceInvoiceQuotationsSubscription(data)
  { 
    let httpParams=new HttpParams().set('advisorId',data.advisorId).set('id',data.id).set('nextNumber',data.nextNumber).set('prefix',data.prefix).set('type',data.type);
    return this.http.put(apiConfig.MAIN_URL + appConfig.UPDATE_PREFERENCE_INVOICE_QUOTATIONS_SUBSCRIPTION,httpParams)
  }
  savePreferenceInvoiceQuotationsSubscription(data)
  {
   let httpParams=new HttpParams().set('advisorId',data.advisorId).set('id',data.id).set('nextNumber',data.nextNumber).set('prefix',data.prefix).set('type',data.type);
  }
  getSubscriptionCompleteStages(data)
  { 
    let httpParams=new HttpParams().set('advisorId',data.advisorId).set('type',data.type);
    return this.http.post(apiConfig.MAIN_URL + appConfig.DASHBOARD_LETS_BEGIN_SUBSCRIPTION,data)
  }
  getDashboardSubscriptionResponse(data)
  {
    let httpParams=new HttpParams().set('advisorId',data);
    return this.http.get(apiConfig.MAIN_URL + appConfig.DASHBOARD_SUBSCRIPTION_LETS_BEGIN,httpParams);
  }
  getSubscriptionClientsList(data)
  {
    let httpParams=new HttpParams().set('id',data.id);
     return this.http.get(apiConfig.MAIN_URL + appConfig.GET_CLIENT_SUBSCRIPTION_LIST,httpParams)
  }
  getSubscriptionClientsQuotations(data)
  {
    let httpParams=new HttpParams().set('clientId',data.clientId);
    return this.http.get(apiConfig.MAIN_URL + appConfig.GET_CLIENT_SUBSCRIPTION_QUOTATIONS_LIST,httpParams);
  }
  getSubscriptionClientsInvoices(data)
  { 
    let httpParams=new HttpParams().set('clientId',data.clientId);
    return this.http.get(apiConfig.MAIN_URL + appConfig.GET_CLIENT_SUBSCRIPTION_INVOICES_LIST,httpParams)
  }
  getSubscriptionClientsSettingProfile(data)
  {
    let httpParams=new HttpParams().set('clientId',data.clientId);
    return this.http.get(apiConfig.MAIN_URL + appConfig.GET_CLIENT_SUBSCRIPTION_SETTING_PROFILE,httpParams)
  }
  getSubscriptionQuotationData(data)
  {
    let httpParams=new HttpParams().set('advisorId',data.advisorId)
    return this.http.get(apiConfig.MAIN_URL + appConfig.GET_SUBSCRIPTION_QUOTATIONS,httpParams)
  }
  getSubscriptionSubscriptionData(data)
  {
    let httpParams=new HttpParams().set('advisorId',data.advisorId).set('dateType',data.dateType).set('order',data.order);
    return this.http.get(apiConfig.MAIN_URL + appConfig.GET_SUBSCRIPTION_SUBSCRIPTION,httpParams)
  }
  getSettingPlanServiceData(data)
  { 
    let httpParams=new HttpParams().set('advisorId',data.advisorId).set('planId',data.planId)
    return this.http.get(apiConfig.MAIN_URL + appConfig.GET_SUBSCRIPTION_PLAN_SERVICE,httpParams)
  }
  addSettingPlanOverviewData(data)
  {
    let httpParams=new HttpParams().set('advisorId',data.advisorId).set('createdDate',data.createdDate).set('description',data.description).set('id',data.id).set('isActive',data.isActive).set('isPublic',data.isPublic).set('lastUpdatedDate',data.lastUpdatedDate).set('logoUrl',data.logoUrl).set('name',data.name).set('planRepoId',data.planRepoId);
    return this.http.post(apiConfig.MAIN_URL +appConfig.ADD_SETTING_PLAN_OVERVIEW,httpParams)
  }
  mapServiceToPlanData(data)
  { 
    return this.http.post(apiConfig.MAIN_URL + appConfig.MAP_SERVICE_TO_PLAN,data)
  }
  getPlanDocumentsData(data)
  {
    let httpParams=new HttpParams().set('advisorId',data.advisorId).set('planId',data.planId);
    return this.http.get(apiConfig.MAIN_URL + appConfig.GET_PLAN_DOCUMENTS_DATA,httpParams)
  }
  cancelSubscriptionData(data)
  {
    let httpParams=new HttpParams().set('advisorId',data);
    return this.http.put(apiConfig.MAIN_URL + appConfig.CANCEL_SUBSCRIPTION,httpParams);
  }
  deleteSubscriptionData(data)
  {
    let httpParams=new HttpParams().set('advisorId',data);
    return this.http.put(apiConfig.MAIN_URL + appConfig.DELETE_SUBSCRIPTION,httpParams);
  }
  base_64Data(data) {
    return this.http.getEncoded(apiConfig.MAIN_URL + appConfig.GET_BASE_64, data,10000)
  }
}
