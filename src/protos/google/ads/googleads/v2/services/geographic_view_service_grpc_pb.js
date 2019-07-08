"use strict";var grpc=require("grpc"),google_ads_googleads_v2_services_geographic_view_service_pb=require("../../../../../google/ads/googleads/v2/services/geographic_view_service_pb.js"),google_ads_googleads_v2_resources_geographic_view_pb=require("../../../../../google/ads/googleads/v2/resources/geographic_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v2_resources_GeographicView(arg){if(!(arg instanceof google_ads_googleads_v2_resources_geographic_view_pb.GeographicView))throw new Error("Expected argument of type google.ads.googleads.v2.resources.GeographicView");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_resources_GeographicView(buffer_arg){return google_ads_googleads_v2_resources_geographic_view_pb.GeographicView.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_GetGeographicViewRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_geographic_view_service_pb.GetGeographicViewRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.GetGeographicViewRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_GetGeographicViewRequest(buffer_arg){return google_ads_googleads_v2_services_geographic_view_service_pb.GetGeographicViewRequest.deserializeBinary(new Uint8Array(buffer_arg))}var GeographicViewServiceService=exports.GeographicViewServiceService={getGeographicView:{path:"/google.ads.googleads.v2.services.GeographicViewService/GetGeographicView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_geographic_view_service_pb.GetGeographicViewRequest,responseType:google_ads_googleads_v2_resources_geographic_view_pb.GeographicView,requestSerialize:serialize_google_ads_googleads_v2_services_GetGeographicViewRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_GetGeographicViewRequest,responseSerialize:serialize_google_ads_googleads_v2_resources_GeographicView,responseDeserialize:deserialize_google_ads_googleads_v2_resources_GeographicView}};exports.GeographicViewServiceClient=grpc.makeGenericClientConstructor(GeographicViewServiceService);