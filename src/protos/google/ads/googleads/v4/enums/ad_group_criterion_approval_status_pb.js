var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.AdGroupCriterionApprovalStatusEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.AdGroupCriterionApprovalStatusEnum.AdGroupCriterionApprovalStatus",null,global),proto.google.ads.googleads.v4.enums.AdGroupCriterionApprovalStatusEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.AdGroupCriterionApprovalStatusEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.AdGroupCriterionApprovalStatusEnum.displayName="proto.google.ads.googleads.v4.enums.AdGroupCriterionApprovalStatusEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.AdGroupCriterionApprovalStatusEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.AdGroupCriterionApprovalStatusEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.AdGroupCriterionApprovalStatusEnum.toObject=function(o,r){var e={};return o&&(e.$jspbMessageInstance=r),e}),proto.google.ads.googleads.v4.enums.AdGroupCriterionApprovalStatusEnum.deserializeBinary=function(o){var r=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.enums.AdGroupCriterionApprovalStatusEnum;return proto.google.ads.googleads.v4.enums.AdGroupCriterionApprovalStatusEnum.deserializeBinaryFromReader(e,r)},proto.google.ads.googleads.v4.enums.AdGroupCriterionApprovalStatusEnum.deserializeBinaryFromReader=function(o,r){for(;r.nextField()&&!r.isEndGroup();){r.getFieldNumber();r.skipField()}return o},proto.google.ads.googleads.v4.enums.AdGroupCriterionApprovalStatusEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.AdGroupCriterionApprovalStatusEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.AdGroupCriterionApprovalStatusEnum.serializeBinaryToWriter=function(o,r){},proto.google.ads.googleads.v4.enums.AdGroupCriterionApprovalStatusEnum.AdGroupCriterionApprovalStatus={UNSPECIFIED:0,UNKNOWN:1,APPROVED:2,DISAPPROVED:3,PENDING_REVIEW:4,UNDER_REVIEW:5},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);