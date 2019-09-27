
  export const appConfig = {
    LOGIN:'futurewise/secure/login',
    FILE_GET:"futurewise/file/list/get",
    RT_FILE_GET:'/file/rt/list/get',
    TOTAL_GET_AUM:'futurewise/asset/clientTotalAum/get',
    GET_MIS_DATA:'futurewise/asset/mis/get',
    GET_SUBCAT_AUM:'futurewise/asset/cat/subcat/get',
    GET_SUBCAT_SCHEME:'futurewise/asset/cat/subcat/scheme',
    GET_SUBCAT_SCHEMENAME:'futurewise/asset/cat/subcat/scheme',
    GET_TOTAL_SCHEME_AUM:'futurewise/asset/schemeTotalAum/get',
    GET_TOTAL_AUM_BY_SCHEME:'futurewise/asset/schemeTotalAum/get',
    GET_CLIENT_WISE_TOTALAUM:'futurewise/asset/report/client/totalaum/get',
    GET_SIP_COUNT_GET:'futurewise/asset/sip/count/get',
    GET_AUM_APPLICANT:'futurewise/asset/aum/applicantWise/totalaum/applicantName/get',
    GET_AUM_APPLICANT_CATEGORY:'futurewise/asset/aum/applicantWise/totalaum/applicantsAllCategory/get',
    GET_AUM_APPLICANT_SUB_CATEGORY:'futurewise/asset/aum/applicantWise/totalaum/applicantSubCategory/get',
    GET_AUM_APPLICANT_SCHEME:'futurewise/asset/aum/applicantWise/totalaum/applicantSchemes/get',
    GET_AUM_CLIENT_TOTALAUM:'futurewise/asset/aum/client/totalaum/get',
    GET_AUM_CLIENT_SCHEME:'futurewise/asset/aum/client/schemes',


    ///////////////////////sip api call//////////////////////////////////

     GET_EXPIRING:'futurewise/asset/sip/expiring/get',
     GET_expired:'futurewise/asset/sip/expired/get',
     GET_SIP_REJECTION:'futurewise/asset/sip/sipRejection/get',
     GET_SIP_client_SEARCH:'futurewise/asset/sip/client/search/get',
     GET_SIP_SCHEME_SEARCH:'futurewise/asset/sip/scheme/search/get',

     GET_SIP_AMC:'futurewise/asset/sip/amc/get',
     GET_SIP_AMC_SCHEME:'futurewise/asset/sip/amc/scheme/get',
     GET_SIP_INVERSTORS:'futurewise/asset/sip/scheme/investors/get',
     Scheme_Investors_Applicants:'futurewise/asset/sip/scheme/investors/applicants/get',
     Sip_Schemewise_Get:'futurewise/asset/sip/schemewise/get',
     Scheme_Wise_Investor_Get:'futurewise/asset/sip/schemewiseInvestor/get',
     scheme_wise_Applicants_Get:'futurewise/asset/sip/schemewiseApplicants/get',

 /////////////////////////////back office/////////////////////////////////////////////

      AllClient_get:'futurewise/asset/allClient/get',
      AllClient_ByName_get:'futurewise/asset/allClient/ByName/get',
      AllClient_ByTags_get:'futurewise/asset/allClient/ByTags/get',
      Update_expiryDate:'futurewise/asset/update/expiryDate',
      Update_Password:'futurewise/asset/update/password',
      Fileorder_Status_Report_Get:'futurewise/asset/fileorder/status/report/get',
 
//////////////////////////////subscription////////////////////////////////////////////


    GET_SUBSCRIPTION_INVOICE:'futurewise/subscriptions/invoices/get',
    GET_SINGLE_INVOICE:'futurewise/subscriptions/invoice/get',
    GET_PREFERENCE_BILLER_PROFILE:'futurewise/subscriptions/settings/billerprofile/get',
    GET_PREFERENCE_INVOICE_QUOTATIONS_SUBSCRIPTION:'futurewise/subscriptions/settings/prefix/get',
    UPDATE_PREFERENCE_INVOICE_QUOTATIONS_SUBSCRIPTION:'futurewise/subscriptions/settings/prefix/update',
    SAVE_PREFERENCE_INVOICE_QUOTATIONS_SUBSCRIPTION:'futurewise/subscriptions/settings/billerprofile/save',
    DASHBOARD_LETS_BEGIN_SUBSCRIPTION:'futurewise/subscriptions/dashboard/recordPayment',
    GET_CLIENT_SUBSCRIPTION_LIST:'futurewise/subscriptions/clients/get',
    GET_CLIENT_SUBSCRIPTION_QUOTATIONS_LIST:'futurewise/subscriptions/clients/quotations/get',
    GET_CLIENT_SUBSCRIPTION_INVOICES_LIST:'futurewise/subscriptions/clients/invoices/get',
    GET_CLIENT_SUBSCRIPTION_SETTING_PROFILE:'futurewise/subscriptions/clients/settings/profiles/get',
    GET_SUBSCRIPTION_QUOTATIONS:'futurewise/subscriptions/quotations/get',
    GET_SUBSCRIPTION_SUBSCRIPTION:'futurewise/subscriptions/subscription/get',
    GET_SUBSCRIPTION_PLAN_SERVICE:'futurewise/subscriptions/settings/plan-service/get',
    ADD_SETTING_PLAN_OVERVIEW:'futurewise/subscriptions/addPlan/get',
    MAP_SERVICE_TO_PLAN:'futurewise/subscriptions/settings/plan/mapservice',
    MAP_DOCUMENTS_TO_PLAN:'futurewise/subscriptions/settings/plan/mapdocument',
    GET_PLAN_DOCUMENTS_DATA:'futurewise/subscriptions/settings/plan-document/get',
    DASHBOARD_SUBSCRIPTION_LETS_BEGIN:'futurewise/subscriptions/letsBegin/get',
    CANCEL_SUBSCRIPTION:'futurewise/subscriptions/cancel/subscription/get',
    DELETE_SUBSCRIPTION:'futurewise/subscriptions/delete/subscription',
    SAVE_BILLER_PROFILE_SETTING:'futurewise/subscriptions/settings/billerprofile/save',
    GET_BASE_64:'futurewise/api/v1/test/base64/decode'
}