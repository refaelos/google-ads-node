var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.JobPlaceholderFieldEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.JobPlaceholderFieldEnum.JobPlaceholderField",null,global),proto.google.ads.googleads.v4.enums.JobPlaceholderFieldEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.JobPlaceholderFieldEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.JobPlaceholderFieldEnum.displayName="proto.google.ads.googleads.v4.enums.JobPlaceholderFieldEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.JobPlaceholderFieldEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.JobPlaceholderFieldEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.JobPlaceholderFieldEnum.toObject=function(o,e){var l={};return o&&(l.$jspbMessageInstance=e),l}),proto.google.ads.googleads.v4.enums.JobPlaceholderFieldEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),l=new proto.google.ads.googleads.v4.enums.JobPlaceholderFieldEnum;return proto.google.ads.googleads.v4.enums.JobPlaceholderFieldEnum.deserializeBinaryFromReader(l,e)},proto.google.ads.googleads.v4.enums.JobPlaceholderFieldEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.JobPlaceholderFieldEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.JobPlaceholderFieldEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.JobPlaceholderFieldEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.JobPlaceholderFieldEnum.JobPlaceholderField={UNSPECIFIED:0,UNKNOWN:1,JOB_ID:2,LOCATION_ID:3,TITLE:4,SUBTITLE:5,DESCRIPTION:6,IMAGE_URL:7,CATEGORY:8,CONTEXTUAL_KEYWORDS:9,ADDRESS:10,SALARY:11,FINAL_URLS:12,FINAL_MOBILE_URLS:14,TRACKING_URL:15,ANDROID_APP_LINK:16,SIMILAR_JOB_IDS:17,IOS_APP_LINK:18,IOS_APP_STORE_ID:19},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);