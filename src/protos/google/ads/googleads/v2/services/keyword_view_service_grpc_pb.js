"use strict";var grpc=require("grpc"),google_ads_googleads_v2_services_keyword_view_service_pb=require("../../../../../google/ads/googleads/v2/services/keyword_view_service_pb.js"),google_ads_googleads_v2_resources_keyword_view_pb=require("../../../../../google/ads/googleads/v2/resources/keyword_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v2_resources_KeywordView(arg){if(!(arg instanceof google_ads_googleads_v2_resources_keyword_view_pb.KeywordView))throw new Error("Expected argument of type google.ads.googleads.v2.resources.KeywordView");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_resources_KeywordView(buffer_arg){return google_ads_googleads_v2_resources_keyword_view_pb.KeywordView.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_GetKeywordViewRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_keyword_view_service_pb.GetKeywordViewRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.GetKeywordViewRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_GetKeywordViewRequest(buffer_arg){return google_ads_googleads_v2_services_keyword_view_service_pb.GetKeywordViewRequest.deserializeBinary(new Uint8Array(buffer_arg))}var KeywordViewServiceService=exports.KeywordViewServiceService={getKeywordView:{path:"/google.ads.googleads.v2.services.KeywordViewService/GetKeywordView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_keyword_view_service_pb.GetKeywordViewRequest,responseType:google_ads_googleads_v2_resources_keyword_view_pb.KeywordView,requestSerialize:serialize_google_ads_googleads_v2_services_GetKeywordViewRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_GetKeywordViewRequest,responseSerialize:serialize_google_ads_googleads_v2_resources_KeywordView,responseDeserialize:deserialize_google_ads_googleads_v2_resources_KeywordView}};exports.KeywordViewServiceClient=grpc.makeGenericClientConstructor(KeywordViewServiceService);