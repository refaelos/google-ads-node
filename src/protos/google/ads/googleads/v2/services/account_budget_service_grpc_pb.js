"use strict";var grpc=require("grpc"),google_ads_googleads_v2_services_account_budget_service_pb=require("../../../../../google/ads/googleads/v2/services/account_budget_service_pb.js"),google_ads_googleads_v2_resources_account_budget_pb=require("../../../../../google/ads/googleads/v2/resources/account_budget_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v2_resources_AccountBudget(arg){if(!(arg instanceof google_ads_googleads_v2_resources_account_budget_pb.AccountBudget))throw new Error("Expected argument of type google.ads.googleads.v2.resources.AccountBudget");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_resources_AccountBudget(buffer_arg){return google_ads_googleads_v2_resources_account_budget_pb.AccountBudget.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_GetAccountBudgetRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_account_budget_service_pb.GetAccountBudgetRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.GetAccountBudgetRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_GetAccountBudgetRequest(buffer_arg){return google_ads_googleads_v2_services_account_budget_service_pb.GetAccountBudgetRequest.deserializeBinary(new Uint8Array(buffer_arg))}var AccountBudgetServiceService=exports.AccountBudgetServiceService={getAccountBudget:{path:"/google.ads.googleads.v2.services.AccountBudgetService/GetAccountBudget",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_account_budget_service_pb.GetAccountBudgetRequest,responseType:google_ads_googleads_v2_resources_account_budget_pb.AccountBudget,requestSerialize:serialize_google_ads_googleads_v2_services_GetAccountBudgetRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_GetAccountBudgetRequest,responseSerialize:serialize_google_ads_googleads_v2_resources_AccountBudget,responseDeserialize:deserialize_google_ads_googleads_v2_resources_AccountBudget}};exports.AccountBudgetServiceClient=grpc.makeGenericClientConstructor(AccountBudgetServiceService);