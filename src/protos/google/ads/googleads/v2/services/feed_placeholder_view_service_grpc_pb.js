"use strict";var grpc=require("grpc"),google_ads_googleads_v2_services_feed_placeholder_view_service_pb=require("../../../../../google/ads/googleads/v2/services/feed_placeholder_view_service_pb.js"),google_ads_googleads_v2_resources_feed_placeholder_view_pb=require("../../../../../google/ads/googleads/v2/resources/feed_placeholder_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v2_resources_FeedPlaceholderView(arg){if(!(arg instanceof google_ads_googleads_v2_resources_feed_placeholder_view_pb.FeedPlaceholderView))throw new Error("Expected argument of type google.ads.googleads.v2.resources.FeedPlaceholderView");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_resources_FeedPlaceholderView(buffer_arg){return google_ads_googleads_v2_resources_feed_placeholder_view_pb.FeedPlaceholderView.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_GetFeedPlaceholderViewRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_feed_placeholder_view_service_pb.GetFeedPlaceholderViewRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.GetFeedPlaceholderViewRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_GetFeedPlaceholderViewRequest(buffer_arg){return google_ads_googleads_v2_services_feed_placeholder_view_service_pb.GetFeedPlaceholderViewRequest.deserializeBinary(new Uint8Array(buffer_arg))}var FeedPlaceholderViewServiceService=exports.FeedPlaceholderViewServiceService={getFeedPlaceholderView:{path:"/google.ads.googleads.v2.services.FeedPlaceholderViewService/GetFeedPlaceholderView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_feed_placeholder_view_service_pb.GetFeedPlaceholderViewRequest,responseType:google_ads_googleads_v2_resources_feed_placeholder_view_pb.FeedPlaceholderView,requestSerialize:serialize_google_ads_googleads_v2_services_GetFeedPlaceholderViewRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_GetFeedPlaceholderViewRequest,responseSerialize:serialize_google_ads_googleads_v2_resources_FeedPlaceholderView,responseDeserialize:deserialize_google_ads_googleads_v2_resources_FeedPlaceholderView}};exports.FeedPlaceholderViewServiceClient=grpc.makeGenericClientConstructor(FeedPlaceholderViewServiceService);