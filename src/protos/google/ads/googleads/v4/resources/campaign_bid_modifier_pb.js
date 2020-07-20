var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_common_criteria_pb=require("../../../../../google/ads/googleads/v4/common/criteria_pb.js");goog.object.extend(proto,google_ads_googleads_v4_common_criteria_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.CampaignBidModifier",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.resources.CampaignBidModifier.CriterionCase",null,global),proto.google.ads.googleads.v4.resources.CampaignBidModifier=function(e){jspb.Message.initialize(this,e,0,-1,null,proto.google.ads.googleads.v4.resources.CampaignBidModifier.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v4.resources.CampaignBidModifier,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.CampaignBidModifier.displayName="proto.google.ads.googleads.v4.resources.CampaignBidModifier"),proto.google.ads.googleads.v4.resources.CampaignBidModifier.oneofGroups_=[[5]],proto.google.ads.googleads.v4.resources.CampaignBidModifier.CriterionCase={CRITERION_NOT_SET:0,INTERACTION_TYPE:5},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.getCriterionCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.resources.CampaignBidModifier.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.CampaignBidModifier.toObject(e,this)},proto.google.ads.googleads.v4.resources.CampaignBidModifier.toObject=function(e,o){var r,i={resourceName:jspb.Message.getFieldWithDefault(o,1,""),campaign:(r=o.getCampaign())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),criterionId:(r=o.getCriterionId())&&google_protobuf_wrappers_pb.Int64Value.toObject(e,r),bidModifier:(r=o.getBidModifier())&&google_protobuf_wrappers_pb.DoubleValue.toObject(e,r),interactionType:(r=o.getInteractionType())&&google_ads_googleads_v4_common_criteria_pb.InteractionTypeInfo.toObject(e,r)};return e&&(i.$jspbMessageInstance=o),i}),proto.google.ads.googleads.v4.resources.CampaignBidModifier.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.resources.CampaignBidModifier;return proto.google.ads.googleads.v4.resources.CampaignBidModifier.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.resources.CampaignBidModifier.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setResourceName(r);break;case 2:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setCampaign(r);break;case 3:r=new google_protobuf_wrappers_pb.Int64Value;o.readMessage(r,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),e.setCriterionId(r);break;case 4:r=new google_protobuf_wrappers_pb.DoubleValue;o.readMessage(r,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader),e.setBidModifier(r);break;case 5:r=new google_ads_googleads_v4_common_criteria_pb.InteractionTypeInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.InteractionTypeInfo.deserializeBinaryFromReader),e.setInteractionType(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.CampaignBidModifier.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.CampaignBidModifier.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getResourceName()).length&&o.writeString(1,r),null!=(r=e.getCampaign())&&o.writeMessage(2,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getCriterionId())&&o.writeMessage(3,r,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(r=e.getBidModifier())&&o.writeMessage(4,r,google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter),null!=(r=e.getInteractionType())&&o.writeMessage(5,r,google_ads_googleads_v4_common_criteria_pb.InteractionTypeInfo.serializeBinaryToWriter)},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.getCampaign=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.setCampaign=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.clearCampaign=function(){return this.setCampaign(void 0)},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.hasCampaign=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.getCriterionId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,3)},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.setCriterionId=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.clearCriterionId=function(){return this.setCriterionId(void 0)},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.hasCriterionId=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.getBidModifier=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.DoubleValue,4)},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.setBidModifier=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.clearBidModifier=function(){return this.setBidModifier(void 0)},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.hasBidModifier=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.getInteractionType=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.InteractionTypeInfo,5)},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.setInteractionType=function(e){return jspb.Message.setOneofWrapperField(this,5,proto.google.ads.googleads.v4.resources.CampaignBidModifier.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.clearInteractionType=function(){return this.setInteractionType(void 0)},proto.google.ads.googleads.v4.resources.CampaignBidModifier.prototype.hasInteractionType=function(){return null!=jspb.Message.getField(this,5)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);