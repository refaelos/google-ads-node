"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_ad_group_label_service_pb=require("../../../../../google/ads/googleads/v4/services/ad_group_label_service_pb.js"),google_ads_googleads_v4_resources_ad_group_label_pb=require("../../../../../google/ads/googleads/v4/resources/ad_group_label_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");function serialize_google_ads_googleads_v4_resources_AdGroupLabel(e){if(!(e instanceof google_ads_googleads_v4_resources_ad_group_label_pb.AdGroupLabel))throw new Error("Expected argument of type google.ads.googleads.v4.resources.AdGroupLabel");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_AdGroupLabel(e){return google_ads_googleads_v4_resources_ad_group_label_pb.AdGroupLabel.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetAdGroupLabelRequest(e){if(!(e instanceof google_ads_googleads_v4_services_ad_group_label_service_pb.GetAdGroupLabelRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetAdGroupLabelRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetAdGroupLabelRequest(e){return google_ads_googleads_v4_services_ad_group_label_service_pb.GetAdGroupLabelRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_MutateAdGroupLabelsRequest(e){if(!(e instanceof google_ads_googleads_v4_services_ad_group_label_service_pb.MutateAdGroupLabelsRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.MutateAdGroupLabelsRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_MutateAdGroupLabelsRequest(e){return google_ads_googleads_v4_services_ad_group_label_service_pb.MutateAdGroupLabelsRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_MutateAdGroupLabelsResponse(e){if(!(e instanceof google_ads_googleads_v4_services_ad_group_label_service_pb.MutateAdGroupLabelsResponse))throw new Error("Expected argument of type google.ads.googleads.v4.services.MutateAdGroupLabelsResponse");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_MutateAdGroupLabelsResponse(e){return google_ads_googleads_v4_services_ad_group_label_service_pb.MutateAdGroupLabelsResponse.deserializeBinary(new Uint8Array(e))}var AdGroupLabelServiceService=exports.AdGroupLabelServiceService={getAdGroupLabel:{path:"/google.ads.googleads.v4.services.AdGroupLabelService/GetAdGroupLabel",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_ad_group_label_service_pb.GetAdGroupLabelRequest,responseType:google_ads_googleads_v4_resources_ad_group_label_pb.AdGroupLabel,requestSerialize:serialize_google_ads_googleads_v4_services_GetAdGroupLabelRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetAdGroupLabelRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_AdGroupLabel,responseDeserialize:deserialize_google_ads_googleads_v4_resources_AdGroupLabel},mutateAdGroupLabels:{path:"/google.ads.googleads.v4.services.AdGroupLabelService/MutateAdGroupLabels",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_ad_group_label_service_pb.MutateAdGroupLabelsRequest,responseType:google_ads_googleads_v4_services_ad_group_label_service_pb.MutateAdGroupLabelsResponse,requestSerialize:serialize_google_ads_googleads_v4_services_MutateAdGroupLabelsRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_MutateAdGroupLabelsRequest,responseSerialize:serialize_google_ads_googleads_v4_services_MutateAdGroupLabelsResponse,responseDeserialize:deserialize_google_ads_googleads_v4_services_MutateAdGroupLabelsResponse}};exports.AdGroupLabelServiceClient=grpc.makeGenericClientConstructor(AdGroupLabelServiceService);