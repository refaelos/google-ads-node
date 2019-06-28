"use strict";var grpc=require("grpc"),google_ads_googleads_v2_services_video_service_pb=require("../../../../../google/ads/googleads/v2/services/video_service_pb.js"),google_ads_googleads_v2_resources_video_pb=require("../../../../../google/ads/googleads/v2/resources/video_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v2_resources_Video(arg){if(!(arg instanceof google_ads_googleads_v2_resources_video_pb.Video))throw new Error("Expected argument of type google.ads.googleads.v2.resources.Video");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_resources_Video(buffer_arg){return google_ads_googleads_v2_resources_video_pb.Video.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_GetVideoRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_video_service_pb.GetVideoRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.GetVideoRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_GetVideoRequest(buffer_arg){return google_ads_googleads_v2_services_video_service_pb.GetVideoRequest.deserializeBinary(new Uint8Array(buffer_arg))}var VideoServiceService=exports.VideoServiceService={getVideo:{path:"/google.ads.googleads.v2.services.VideoService/GetVideo",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_video_service_pb.GetVideoRequest,responseType:google_ads_googleads_v2_resources_video_pb.Video,requestSerialize:serialize_google_ads_googleads_v2_services_GetVideoRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_GetVideoRequest,responseSerialize:serialize_google_ads_googleads_v2_resources_Video,responseDeserialize:deserialize_google_ads_googleads_v2_resources_Video}};exports.VideoServiceClient=grpc.makeGenericClientConstructor(VideoServiceService);