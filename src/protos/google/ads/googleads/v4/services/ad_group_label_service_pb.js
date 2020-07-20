var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_resources_ad_group_label_pb=require("../../../../../google/ads/googleads/v4/resources/ad_group_label_pb.js");goog.object.extend(proto,google_ads_googleads_v4_resources_ad_group_label_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb);var google_api_client_pb=require("../../../../../google/api/client_pb.js");goog.object.extend(proto,google_api_client_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.object.extend(proto,google_rpc_status_pb),goog.exportSymbol("proto.google.ads.googleads.v4.services.AdGroupLabelOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.AdGroupLabelOperation.OperationCase",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.GetAdGroupLabelRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse",null,global),proto.google.ads.googleads.v4.services.GetAdGroupLabelRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.GetAdGroupLabelRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.GetAdGroupLabelRequest.displayName="proto.google.ads.googleads.v4.services.GetAdGroupLabelRequest"),proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.displayName="proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest"),proto.google.ads.googleads.v4.services.AdGroupLabelOperation=function(e){jspb.Message.initialize(this,e,0,-1,null,proto.google.ads.googleads.v4.services.AdGroupLabelOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v4.services.AdGroupLabelOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.AdGroupLabelOperation.displayName="proto.google.ads.googleads.v4.services.AdGroupLabelOperation"),proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.displayName="proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse"),proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult.displayName="proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.GetAdGroupLabelRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.GetAdGroupLabelRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.GetAdGroupLabelRequest.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.GetAdGroupLabelRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.GetAdGroupLabelRequest;return proto.google.ads.googleads.v4.services.GetAdGroupLabelRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.GetAdGroupLabelRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.GetAdGroupLabelRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.GetAdGroupLabelRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.GetAdGroupLabelRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s)},proto.google.ads.googleads.v4.services.GetAdGroupLabelRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.GetAdGroupLabelRequest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.toObject=function(e,o){var s={customerId:jspb.Message.getFieldWithDefault(o,1,""),operationsList:jspb.Message.toObjectList(o.getOperationsList(),proto.google.ads.googleads.v4.services.AdGroupLabelOperation.toObject,e),partialFailure:jspb.Message.getBooleanFieldWithDefault(o,3,!1),validateOnly:jspb.Message.getBooleanFieldWithDefault(o,4,!1)};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest;return proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setCustomerId(s);break;case 2:s=new proto.google.ads.googleads.v4.services.AdGroupLabelOperation;o.readMessage(s,proto.google.ads.googleads.v4.services.AdGroupLabelOperation.deserializeBinaryFromReader),e.addOperations(s);break;case 3:s=o.readBool();e.setPartialFailure(s);break;case 4:s=o.readBool();e.setValidateOnly(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getCustomerId()).length&&o.writeString(1,s),0<(s=e.getOperationsList()).length&&o.writeRepeatedMessage(2,s,proto.google.ads.googleads.v4.services.AdGroupLabelOperation.serializeBinaryToWriter),(s=e.getPartialFailure())&&o.writeBool(3,s),(s=e.getValidateOnly())&&o.writeBool(4,s)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.prototype.setCustomerId=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.AdGroupLabelOperation,2)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.prototype.setOperationsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.prototype.addOperations=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.AdGroupLabelOperation,o)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.prototype.clearOperationsList=function(){return this.setOperationsList([])},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.prototype.getPartialFailure=function(){return jspb.Message.getBooleanFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.prototype.setPartialFailure=function(e){return jspb.Message.setProto3BooleanField(this,3,e)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.prototype.getValidateOnly=function(){return jspb.Message.getBooleanFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsRequest.prototype.setValidateOnly=function(e){return jspb.Message.setProto3BooleanField(this,4,e)},proto.google.ads.googleads.v4.services.AdGroupLabelOperation.oneofGroups_=[[1,2]],proto.google.ads.googleads.v4.services.AdGroupLabelOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,REMOVE:2},proto.google.ads.googleads.v4.services.AdGroupLabelOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.services.AdGroupLabelOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.AdGroupLabelOperation.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.AdGroupLabelOperation.toObject(e,this)},proto.google.ads.googleads.v4.services.AdGroupLabelOperation.toObject=function(e,o){var s,r={create:(s=o.getCreate())&&google_ads_googleads_v4_resources_ad_group_label_pb.AdGroupLabel.toObject(e,s),remove:jspb.Message.getFieldWithDefault(o,2,"")};return e&&(r.$jspbMessageInstance=o),r}),proto.google.ads.googleads.v4.services.AdGroupLabelOperation.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.AdGroupLabelOperation;return proto.google.ads.googleads.v4.services.AdGroupLabelOperation.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.AdGroupLabelOperation.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=new google_ads_googleads_v4_resources_ad_group_label_pb.AdGroupLabel;o.readMessage(s,google_ads_googleads_v4_resources_ad_group_label_pb.AdGroupLabel.deserializeBinaryFromReader),e.setCreate(s);break;case 2:s=o.readString();e.setRemove(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.AdGroupLabelOperation.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.AdGroupLabelOperation.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.AdGroupLabelOperation.serializeBinaryToWriter=function(e,o){var s=void 0;null!=(s=e.getCreate())&&o.writeMessage(1,s,google_ads_googleads_v4_resources_ad_group_label_pb.AdGroupLabel.serializeBinaryToWriter),null!=(s=jspb.Message.getField(e,2))&&o.writeString(2,s)},proto.google.ads.googleads.v4.services.AdGroupLabelOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_resources_ad_group_label_pb.AdGroupLabel,1)},proto.google.ads.googleads.v4.services.AdGroupLabelOperation.prototype.setCreate=function(e){return jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v4.services.AdGroupLabelOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.AdGroupLabelOperation.prototype.clearCreate=function(){return this.setCreate(void 0)},proto.google.ads.googleads.v4.services.AdGroupLabelOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v4.services.AdGroupLabelOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.ads.googleads.v4.services.AdGroupLabelOperation.prototype.setRemove=function(e){return jspb.Message.setOneofField(this,2,proto.google.ads.googleads.v4.services.AdGroupLabelOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.AdGroupLabelOperation.prototype.clearRemove=function(){return jspb.Message.setOneofField(this,2,proto.google.ads.googleads.v4.services.AdGroupLabelOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v4.services.AdGroupLabelOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.toObject=function(e,o){var s,r={partialFailureError:(s=o.getPartialFailureError())&&google_rpc_status_pb.Status.toObject(e,s),resultsList:jspb.Message.toObjectList(o.getResultsList(),proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult.toObject,e)};return e&&(r.$jspbMessageInstance=o),r}),proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse;return proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 3:var s=new google_rpc_status_pb.Status;o.readMessage(s,google_rpc_status_pb.Status.deserializeBinaryFromReader),e.setPartialFailureError(s);break;case 2:s=new proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult;o.readMessage(s,proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult.deserializeBinaryFromReader),e.addResults(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.serializeBinaryToWriter=function(e,o){var s=void 0;null!=(s=e.getPartialFailureError())&&o.writeMessage(3,s,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(s=e.getResultsList()).length&&o.writeRepeatedMessage(2,s,proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.prototype.getPartialFailureError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.prototype.setPartialFailureError=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.prototype.clearPartialFailureError=function(){return this.setPartialFailureError(void 0)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.prototype.hasPartialFailureError=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult,2)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.prototype.setResultsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.prototype.addResults=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult,o)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelsResponse.prototype.clearResultsList=function(){return this.setResultsList([])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult;return proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s)},proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateAdGroupLabelResult.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},goog.object.extend(exports,proto.google.ads.googleads.v4.services);