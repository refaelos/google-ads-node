var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.PolicyTopicEvidenceDestinationMismatchUrlType",null,global),proto.google.ads.googleads.v4.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.displayName="proto.google.ads.googleads.v4.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.toObject=function(o,e){var i={};return o&&(i.$jspbMessageInstance=e),i}),proto.google.ads.googleads.v4.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),i=new proto.google.ads.googleads.v4.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum;return proto.google.ads.googleads.v4.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.deserializeBinaryFromReader(i,e)},proto.google.ads.googleads.v4.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.PolicyTopicEvidenceDestinationMismatchUrlType={UNSPECIFIED:0,UNKNOWN:1,DISPLAY_URL:2,FINAL_URL:3,FINAL_MOBILE_URL:4,TRACKING_URL:5,MOBILE_TRACKING_URL:6},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);