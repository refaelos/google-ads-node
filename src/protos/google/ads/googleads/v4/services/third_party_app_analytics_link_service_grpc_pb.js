"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_third_party_app_analytics_link_service_pb=require("../../../../../google/ads/googleads/v4/services/third_party_app_analytics_link_service_pb.js"),google_ads_googleads_v4_resources_third_party_app_analytics_link_pb=require("../../../../../google/ads/googleads/v4/resources/third_party_app_analytics_link_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v4_resources_ThirdPartyAppAnalyticsLink(e){if(!(e instanceof google_ads_googleads_v4_resources_third_party_app_analytics_link_pb.ThirdPartyAppAnalyticsLink))throw new Error("Expected argument of type google.ads.googleads.v4.resources.ThirdPartyAppAnalyticsLink");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_ThirdPartyAppAnalyticsLink(e){return google_ads_googleads_v4_resources_third_party_app_analytics_link_pb.ThirdPartyAppAnalyticsLink.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetThirdPartyAppAnalyticsLinkRequest(e){if(!(e instanceof google_ads_googleads_v4_services_third_party_app_analytics_link_service_pb.GetThirdPartyAppAnalyticsLinkRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetThirdPartyAppAnalyticsLinkRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetThirdPartyAppAnalyticsLinkRequest(e){return google_ads_googleads_v4_services_third_party_app_analytics_link_service_pb.GetThirdPartyAppAnalyticsLinkRequest.deserializeBinary(new Uint8Array(e))}var ThirdPartyAppAnalyticsLinkServiceService=exports.ThirdPartyAppAnalyticsLinkServiceService={getThirdPartyAppAnalyticsLink:{path:"/google.ads.googleads.v4.services.ThirdPartyAppAnalyticsLinkService/GetThirdPartyAppAnalyticsLink",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_third_party_app_analytics_link_service_pb.GetThirdPartyAppAnalyticsLinkRequest,responseType:google_ads_googleads_v4_resources_third_party_app_analytics_link_pb.ThirdPartyAppAnalyticsLink,requestSerialize:serialize_google_ads_googleads_v4_services_GetThirdPartyAppAnalyticsLinkRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetThirdPartyAppAnalyticsLinkRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_ThirdPartyAppAnalyticsLink,responseDeserialize:deserialize_google_ads_googleads_v4_resources_ThirdPartyAppAnalyticsLink}};exports.ThirdPartyAppAnalyticsLinkServiceClient=grpc.makeGenericClientConstructor(ThirdPartyAppAnalyticsLinkServiceService);