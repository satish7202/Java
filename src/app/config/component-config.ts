
  export const appConfig = {
    LOGIN:'secure/login',
    FILE_GET:"/file/list/get",
    RT_FILE_GET:'file/rt/list/get',
    TOTAL_GET_AUM:'asset/clientTotalAum/get',
    GET_MIS_DATA:'asset/mis/get',
    GET_SUBCAT_AUM:'asset/cat/subcat/get',
    GET_SUBCAT_SCHEME:'asset/cat/subcat/scheme',
    GET_SUBCAT_SCHEMENAME:'asset/cat/subcat/scheme',
    GET_TOTAL_SCHEME_AUM:'asset/schemeTotalAum/get',
    GET_TOTAL_AUM_BY_SCHEME:'asset/schemeTotalAum/get',
    GET_CLIENT_WISE_TOTALAUM:'asset/report/client/totalaum/get',
    GET_SIP_COUNT_GET:'asset/sip/count/get',
    GET_AUM_APPLICANT:'asset/aum/applicantWise/totalaum/applicantName/get',
    GET_AUM_APPLICANT_CATEGORY:'asset/aum/applicantWise/totalaum/applicantsAllCategory/get',
    GET_AUM_APPLICANT_SUB_CATEGORY:'asset/aum/applicantWise/totalaum/applicantSubCategory/get',
    GET_AUM_APPLICANT_SCHEME:'asset/aum/applicantWise/totalaum/applicantSchemes/get',
    GET_AUM_CLIENT_TOTALAUM:'asset/aum/client/totalaum/get',
    GET_AUM_CLIENT_SCHEME:'asset/aum/client/schemes',


    ///////////////////////sip api call//////////////////////////////////

     GET_EXPIRING:'asset/sip/expiring/get',
     GET_expired:'asset/sip/expired/get',
     GET_SIP_REJECTION:'asset/sip/sipRejection/get',
     GET_SIP_client_SEARCH:'asset/sip/client/search/get',
     GET_SIP_SCHEME_SEARCH:'asset/sip/scheme/search/get',

     GET_SIP_AMC:'asset/sip/amc/get',
     GET_SIP_AMC_SCHEME:'asset/sip/amc/scheme/get',
     GET_SIP_INVERSTORS:'asset/sip/scheme/investors/get',
     Scheme_Investors_Applicants:'asset/sip/scheme/investors/applicants/get',
     Sip_Schemewise_Get:'asset/sip/schemewise/get',
     Scheme_Wise_Investor_Get:'asset/sip/schemewiseInvestor/get',
     scheme_wise_Applicants_Get:'asset/sip/schemewiseApplicants/get',

 /////////////////////////////back office/////////////////////////////////////////////

      AllClient_get:'asset/allClient/get',
      AllClient_ByName_get:'asset/allClient/ByName/get',
      AllClient_ByTags_get:'asset/allClient/ByTags/get',
      Update_expiryDate:'asset/update/expiryDate',
      Update_Password:'asset/update/password',
      Fileorder_Status_Report_Get:'asset/fileorder/status/report/get',
 
//////////////////////////////subscription////////////////////////////////////////////


    GET_SUBSCRIPTION_INVOICE:'subscriptions/invoice/get',
    //GET_SINGLE_INVOICE:'subscriptions/invoice/get',
    GET_PREFERENCE_BILLER_PROFILE:'subscriptions/setting/billerprofile/get',
    GET_PREFERENCE_INVOICE_QUOTATIONS_SUBSCRIPTION:'subscriptions/setting/prefix/get',
    UPDATE_PREFERENCE_INVOICE_QUOTATIONS_SUBSCRIPTION:'subscriptions/setting/prefix/update',
    SAVE_PREFERENCE_INVOICE_QUOTATIONS_SUBSCRIPTION:'subscriptions/setting/billerprofile/save',
    DASHBOARD_LETS_BEGIN_SUBSCRIPTION:'subscriptions/dashboard/record/payment/add',
    GET_CLIENT_SUBSCRIPTION_LIST:'subscriptions/clients/get',
    GET_CLIENT_SUBSCRIPTION_QUOTATIONS_LIST:'subscriptions/client/quotation/get',
    GET_CLIENT_SUBSCRIPTION_INVOICES_LIST:'subscriptions/client/invoice/get',
    GET_CLIENT_SUBSCRIPTION_SETTING_PROFILE:'subscriptions/client/setting/profile/get',
    GET_SUBSCRIPTION_QUOTATIONS:'subscriptions/quotation/get',
    GET_SUBSCRIPTION_SUBSCRIPTION:'subscriptions/subscription/get',
    GET_SUBSCRIPTION_PLAN_SERVICE:'subscriptions/setting/plan-services/get',
    ADD_SETTING_PLAN_OVERVIEW:'subscriptions/plan/add',
    MAP_SERVICE_TO_PLAN:'subscriptions/setting/plan/mapservice',
    MAP_DOCUMENTS_TO_PLAN:'subscriptions/settings/plan/map/document',
    GET_PLAN_DOCUMENTS_DATA:'subscriptions/setting/plan-document/get',
    GET_DOCUMENT_COUNT_SIGNED:'subscriptions/document/analytics/get',
    GET_CLIENT_WITH_SCRIPTION:'subscriptions/analytics/get',
    GET_INVOICE_TO_BE_REVIEWED:'subscriptions/invoice/review/get',
    GET_SUB_SUMMARY:'subscriptions/dashboard/summary/get',
    DASHBOARD_SUBSCRIPTION_LETS_BEGIN:'subscriptions/lets-begin/get',
    CANCEL_SUBSCRIPTION:'subscriptions/cancelled/subscription/update',
    DELETE_SUBSCRIPTION:'subscriptions/subscription/deleted/update',
    SAVE_BILLER_PROFILE_SETTING:'subscriptions/settings/billerprofile/save',
    UPDATE_BILLER_PROFILE_SETTING:'subscriptions/setting/billerprofile/update',
    GET_SUBSCRIPTION_PLAN_SETTING:'subscriptions/setting/plan/get',
    GET_SUBSCRIPTION_SERVICE_SETTING:'subscriptions/setting/service/get',
    CREATE_SERVICE_SETTING:'subscriptions/service/create',
    DELETE_SUBSCRIPTION_PLAN:'subscriptions/deletePlan/get',
    GET_PLAN_MAPPED_TO_ADVISOR:'subscriptions/plan/mapped-to/advisor/get',
    GET_SUBSCRIPTION_DOCUMENTS_SETTING:'subscriptions/setting/document/get',
    GET_MAP_DOCUMENT_To_SERVICE:'subscriptions/mapped/document/service/get',
    ADD_CLIENT_BILLER_PROFILE:'subscriptions/client/biller/profile/add',
    ADD_SETTING_DOCUMENT:'subscriptions/document/add',
    GET_PLAN_OF_ADVISOR_CLIENT:'subscriptions/plans/of/advisor/get',
    GET_PLAN_INVOICE:'subscriptions/invoice/get',
    CREATE_SUBSCRIPTION:'subscriptions/client/subscriptions/add',
    EDIT_PAYEE_SETTINGS:'subscriptions/client/setting/profile/update',
    MAP_PLAN_TO_SERVICE_SETTING:'subscriptions/map/plan/service',
    CHANGE_PAYEE_SETTING:'subscriptions/client-biller/setting/subscription/update',
    CHANGE_BILLER_SETTING:'subscriptions/change/biller-settings/subscription',
    GET_BASE_64:'api/v1/test/base64/decode'
} 