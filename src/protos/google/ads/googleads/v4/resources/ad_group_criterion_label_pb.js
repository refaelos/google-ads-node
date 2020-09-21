var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel",null,global),proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.displayName="proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.toObject(e,this)},proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.toObject=function(e,o){var r,t={resourceName:jspb.Message.getFieldWithDefault(o,1,""),adGroupCriterion:(r=o.getAdGroupCriterion())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),label:(r=o.getLabel())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r)};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel;return proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setResourceName(r);break;case 2:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setAdGroupCriterion(r);break;case 3:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setLabel(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getResourceName()).length&&o.writeString(1,r),null!=(r=e.getAdGroupCriterion())&&o.writeMessage(2,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getLabel())&&o.writeMessage(3,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.prototype.getAdGroupCriterion=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.prototype.setAdGroupCriterion=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.prototype.clearAdGroupCriterion=function(){return this.setAdGroupCriterion(void 0)},proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.prototype.hasAdGroupCriterion=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.prototype.getLabel=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.prototype.setLabel=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.prototype.clearLabel=function(){return this.setLabel(void 0)},proto.google.ads.googleads.v4.resources.AdGroupCriterionLabel.prototype.hasLabel=function(){return null!=jspb.Message.getField(this,3)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);