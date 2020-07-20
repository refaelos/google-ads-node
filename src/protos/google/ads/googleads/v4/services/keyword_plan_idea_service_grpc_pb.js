"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_keyword_plan_idea_service_pb=require("../../../../../google/ads/googleads/v4/services/keyword_plan_idea_service_pb.js"),google_ads_googleads_v4_common_keyword_plan_common_pb=require("../../../../../google/ads/googleads/v4/common/keyword_plan_common_pb.js"),google_ads_googleads_v4_enums_keyword_plan_network_pb=require("../../../../../google/ads/googleads/v4/enums/keyword_plan_network_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v4_services_GenerateKeywordIdeaResponse(e){if(!(e instanceof google_ads_googleads_v4_services_keyword_plan_idea_service_pb.GenerateKeywordIdeaResponse))throw new Error("Expected argument of type google.ads.googleads.v4.services.GenerateKeywordIdeaResponse");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GenerateKeywordIdeaResponse(e){return google_ads_googleads_v4_services_keyword_plan_idea_service_pb.GenerateKeywordIdeaResponse.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GenerateKeywordIdeasRequest(e){if(!(e instanceof google_ads_googleads_v4_services_keyword_plan_idea_service_pb.GenerateKeywordIdeasRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GenerateKeywordIdeasRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GenerateKeywordIdeasRequest(e){return google_ads_googleads_v4_services_keyword_plan_idea_service_pb.GenerateKeywordIdeasRequest.deserializeBinary(new Uint8Array(e))}var KeywordPlanIdeaServiceService=exports.KeywordPlanIdeaServiceService={generateKeywordIdeas:{path:"/google.ads.googleads.v4.services.KeywordPlanIdeaService/GenerateKeywordIdeas",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_keyword_plan_idea_service_pb.GenerateKeywordIdeasRequest,responseType:google_ads_googleads_v4_services_keyword_plan_idea_service_pb.GenerateKeywordIdeaResponse,requestSerialize:serialize_google_ads_googleads_v4_services_GenerateKeywordIdeasRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GenerateKeywordIdeasRequest,responseSerialize:serialize_google_ads_googleads_v4_services_GenerateKeywordIdeaResponse,responseDeserialize:deserialize_google_ads_googleads_v4_services_GenerateKeywordIdeaResponse}};exports.KeywordPlanIdeaServiceClient=grpc.makeGenericClientConstructor(KeywordPlanIdeaServiceService);