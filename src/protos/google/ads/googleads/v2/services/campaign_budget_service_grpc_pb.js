"use strict";var grpc=require("grpc"),google_ads_googleads_v2_services_campaign_budget_service_pb=require("../../../../../google/ads/googleads/v2/services/campaign_budget_service_pb.js"),google_ads_googleads_v2_resources_campaign_budget_pb=require("../../../../../google/ads/googleads/v2/resources/campaign_budget_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v2_resources_CampaignBudget(arg){if(!(arg instanceof google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget))throw new Error("Expected argument of type google.ads.googleads.v2.resources.CampaignBudget");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_resources_CampaignBudget(buffer_arg){return google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_GetCampaignBudgetRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_campaign_budget_service_pb.GetCampaignBudgetRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.GetCampaignBudgetRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_GetCampaignBudgetRequest(buffer_arg){return google_ads_googleads_v2_services_campaign_budget_service_pb.GetCampaignBudgetRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_MutateCampaignBudgetsRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetsRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.MutateCampaignBudgetsRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_MutateCampaignBudgetsRequest(buffer_arg){return google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetsRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_MutateCampaignBudgetsResponse(arg){if(!(arg instanceof google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetsResponse))throw new Error("Expected argument of type google.ads.googleads.v2.services.MutateCampaignBudgetsResponse");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_MutateCampaignBudgetsResponse(buffer_arg){return google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetsResponse.deserializeBinary(new Uint8Array(buffer_arg))}var CampaignBudgetServiceService=exports.CampaignBudgetServiceService={getCampaignBudget:{path:"/google.ads.googleads.v2.services.CampaignBudgetService/GetCampaignBudget",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_campaign_budget_service_pb.GetCampaignBudgetRequest,responseType:google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget,requestSerialize:serialize_google_ads_googleads_v2_services_GetCampaignBudgetRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_GetCampaignBudgetRequest,responseSerialize:serialize_google_ads_googleads_v2_resources_CampaignBudget,responseDeserialize:deserialize_google_ads_googleads_v2_resources_CampaignBudget},mutateCampaignBudgets:{path:"/google.ads.googleads.v2.services.CampaignBudgetService/MutateCampaignBudgets",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetsRequest,responseType:google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetsResponse,requestSerialize:serialize_google_ads_googleads_v2_services_MutateCampaignBudgetsRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_MutateCampaignBudgetsRequest,responseSerialize:serialize_google_ads_googleads_v2_services_MutateCampaignBudgetsResponse,responseDeserialize:deserialize_google_ads_googleads_v2_services_MutateCampaignBudgetsResponse}};exports.CampaignBudgetServiceClient=grpc.makeGenericClientConstructor(CampaignBudgetServiceService);