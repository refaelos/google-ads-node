var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_resources_ad_schedule_view_pb=require("../../../../../google/ads/googleads/v4/resources/ad_schedule_view_pb.js");goog.object.extend(proto,google_ads_googleads_v4_resources_ad_schedule_view_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb);var google_api_client_pb=require("../../../../../google/api/client_pb.js");goog.object.extend(proto,google_api_client_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb),goog.exportSymbol("proto.google.ads.googleads.v4.services.GetAdScheduleViewRequest",null,global),proto.google.ads.googleads.v4.services.GetAdScheduleViewRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.GetAdScheduleViewRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.GetAdScheduleViewRequest.displayName="proto.google.ads.googleads.v4.services.GetAdScheduleViewRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.GetAdScheduleViewRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.GetAdScheduleViewRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.GetAdScheduleViewRequest.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.GetAdScheduleViewRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.GetAdScheduleViewRequest;return proto.google.ads.googleads.v4.services.GetAdScheduleViewRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.GetAdScheduleViewRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.GetAdScheduleViewRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.GetAdScheduleViewRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.GetAdScheduleViewRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s)},proto.google.ads.googleads.v4.services.GetAdScheduleViewRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.GetAdScheduleViewRequest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},goog.object.extend(exports,proto.google.ads.googleads.v4.services);