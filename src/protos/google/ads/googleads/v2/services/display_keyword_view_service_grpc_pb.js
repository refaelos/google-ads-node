"use strict";var grpc=require("grpc"),google_ads_googleads_v2_services_display_keyword_view_service_pb=require("../../../../../google/ads/googleads/v2/services/display_keyword_view_service_pb.js"),google_ads_googleads_v2_resources_display_keyword_view_pb=require("../../../../../google/ads/googleads/v2/resources/display_keyword_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v2_resources_DisplayKeywordView(arg){if(!(arg instanceof google_ads_googleads_v2_resources_display_keyword_view_pb.DisplayKeywordView))throw new Error("Expected argument of type google.ads.googleads.v2.resources.DisplayKeywordView");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_resources_DisplayKeywordView(buffer_arg){return google_ads_googleads_v2_resources_display_keyword_view_pb.DisplayKeywordView.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_GetDisplayKeywordViewRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_display_keyword_view_service_pb.GetDisplayKeywordViewRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.GetDisplayKeywordViewRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_GetDisplayKeywordViewRequest(buffer_arg){return google_ads_googleads_v2_services_display_keyword_view_service_pb.GetDisplayKeywordViewRequest.deserializeBinary(new Uint8Array(buffer_arg))}var DisplayKeywordViewServiceService=exports.DisplayKeywordViewServiceService={getDisplayKeywordView:{path:"/google.ads.googleads.v2.services.DisplayKeywordViewService/GetDisplayKeywordView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_display_keyword_view_service_pb.GetDisplayKeywordViewRequest,responseType:google_ads_googleads_v2_resources_display_keyword_view_pb.DisplayKeywordView,requestSerialize:serialize_google_ads_googleads_v2_services_GetDisplayKeywordViewRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_GetDisplayKeywordViewRequest,responseSerialize:serialize_google_ads_googleads_v2_resources_DisplayKeywordView,responseDeserialize:deserialize_google_ads_googleads_v2_resources_DisplayKeywordView}};exports.DisplayKeywordViewServiceClient=grpc.makeGenericClientConstructor(DisplayKeywordViewServiceService);