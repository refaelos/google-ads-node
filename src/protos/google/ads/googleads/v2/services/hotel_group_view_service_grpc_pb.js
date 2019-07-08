"use strict";var grpc=require("grpc"),google_ads_googleads_v2_services_hotel_group_view_service_pb=require("../../../../../google/ads/googleads/v2/services/hotel_group_view_service_pb.js"),google_ads_googleads_v2_resources_hotel_group_view_pb=require("../../../../../google/ads/googleads/v2/resources/hotel_group_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v2_resources_HotelGroupView(arg){if(!(arg instanceof google_ads_googleads_v2_resources_hotel_group_view_pb.HotelGroupView))throw new Error("Expected argument of type google.ads.googleads.v2.resources.HotelGroupView");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_resources_HotelGroupView(buffer_arg){return google_ads_googleads_v2_resources_hotel_group_view_pb.HotelGroupView.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_GetHotelGroupViewRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_hotel_group_view_service_pb.GetHotelGroupViewRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.GetHotelGroupViewRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_GetHotelGroupViewRequest(buffer_arg){return google_ads_googleads_v2_services_hotel_group_view_service_pb.GetHotelGroupViewRequest.deserializeBinary(new Uint8Array(buffer_arg))}var HotelGroupViewServiceService=exports.HotelGroupViewServiceService={getHotelGroupView:{path:"/google.ads.googleads.v2.services.HotelGroupViewService/GetHotelGroupView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_hotel_group_view_service_pb.GetHotelGroupViewRequest,responseType:google_ads_googleads_v2_resources_hotel_group_view_pb.HotelGroupView,requestSerialize:serialize_google_ads_googleads_v2_services_GetHotelGroupViewRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_GetHotelGroupViewRequest,responseSerialize:serialize_google_ads_googleads_v2_resources_HotelGroupView,responseDeserialize:deserialize_google_ads_googleads_v2_resources_HotelGroupView}};exports.HotelGroupViewServiceClient=grpc.makeGenericClientConstructor(HotelGroupViewServiceService);