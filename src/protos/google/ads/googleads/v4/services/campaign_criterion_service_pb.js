var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_resources_campaign_criterion_pb=require("../../../../../google/ads/googleads/v4/resources/campaign_criterion_pb.js");goog.object.extend(proto,google_ads_googleads_v4_resources_campaign_criterion_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb);var google_api_client_pb=require("../../../../../google/api/client_pb.js");goog.object.extend(proto,google_api_client_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js");goog.object.extend(proto,google_protobuf_field_mask_pb);var google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.object.extend(proto,google_rpc_status_pb),goog.exportSymbol("proto.google.ads.googleads.v4.services.CampaignCriterionOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.CampaignCriterionOperation.OperationCase",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.GetCampaignCriterionRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult",null,global),proto.google.ads.googleads.v4.services.GetCampaignCriterionRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.GetCampaignCriterionRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.GetCampaignCriterionRequest.displayName="proto.google.ads.googleads.v4.services.GetCampaignCriterionRequest"),proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.displayName="proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest"),proto.google.ads.googleads.v4.services.CampaignCriterionOperation=function(e){jspb.Message.initialize(this,e,0,-1,null,proto.google.ads.googleads.v4.services.CampaignCriterionOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v4.services.CampaignCriterionOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.CampaignCriterionOperation.displayName="proto.google.ads.googleads.v4.services.CampaignCriterionOperation"),proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.displayName="proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse"),proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult.displayName="proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.GetCampaignCriterionRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.GetCampaignCriterionRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.GetCampaignCriterionRequest.toObject=function(e,o){var r={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(r.$jspbMessageInstance=o),r}),proto.google.ads.googleads.v4.services.GetCampaignCriterionRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.services.GetCampaignCriterionRequest;return proto.google.ads.googleads.v4.services.GetCampaignCriterionRequest.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.services.GetCampaignCriterionRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setResourceName(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.GetCampaignCriterionRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.GetCampaignCriterionRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.GetCampaignCriterionRequest.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getResourceName()).length&&o.writeString(1,r)},proto.google.ads.googleads.v4.services.GetCampaignCriterionRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.GetCampaignCriterionRequest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.toObject=function(e,o){var r={customerId:jspb.Message.getFieldWithDefault(o,1,""),operationsList:jspb.Message.toObjectList(o.getOperationsList(),proto.google.ads.googleads.v4.services.CampaignCriterionOperation.toObject,e),partialFailure:jspb.Message.getBooleanFieldWithDefault(o,3,!1),validateOnly:jspb.Message.getBooleanFieldWithDefault(o,4,!1)};return e&&(r.$jspbMessageInstance=o),r}),proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest;return proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setCustomerId(r);break;case 2:r=new proto.google.ads.googleads.v4.services.CampaignCriterionOperation;o.readMessage(r,proto.google.ads.googleads.v4.services.CampaignCriterionOperation.deserializeBinaryFromReader),e.addOperations(r);break;case 3:r=o.readBool();e.setPartialFailure(r);break;case 4:r=o.readBool();e.setValidateOnly(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getCustomerId()).length&&o.writeString(1,r),0<(r=e.getOperationsList()).length&&o.writeRepeatedMessage(2,r,proto.google.ads.googleads.v4.services.CampaignCriterionOperation.serializeBinaryToWriter),(r=e.getPartialFailure())&&o.writeBool(3,r),(r=e.getValidateOnly())&&o.writeBool(4,r)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.prototype.setCustomerId=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.CampaignCriterionOperation,2)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.prototype.setOperationsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.prototype.addOperations=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.CampaignCriterionOperation,o)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.prototype.clearOperationsList=function(){return this.setOperationsList([])},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.prototype.getPartialFailure=function(){return jspb.Message.getBooleanFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.prototype.setPartialFailure=function(e){return jspb.Message.setProto3BooleanField(this,3,e)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.prototype.getValidateOnly=function(){return jspb.Message.getBooleanFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaRequest.prototype.setValidateOnly=function(e){return jspb.Message.setProto3BooleanField(this,4,e)},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.oneofGroups_=[[1,2,3]],proto.google.ads.googleads.v4.services.CampaignCriterionOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,UPDATE:2,REMOVE:3},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.services.CampaignCriterionOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.CampaignCriterionOperation.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.CampaignCriterionOperation.toObject(e,this)},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.toObject=function(e,o){var r,a={updateMask:(r=o.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(e,r),create:(r=o.getCreate())&&google_ads_googleads_v4_resources_campaign_criterion_pb.CampaignCriterion.toObject(e,r),update:(r=o.getUpdate())&&google_ads_googleads_v4_resources_campaign_criterion_pb.CampaignCriterion.toObject(e,r),remove:jspb.Message.getFieldWithDefault(o,3,"")};return e&&(a.$jspbMessageInstance=o),a}),proto.google.ads.googleads.v4.services.CampaignCriterionOperation.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.services.CampaignCriterionOperation;return proto.google.ads.googleads.v4.services.CampaignCriterionOperation.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 4:var r=new google_protobuf_field_mask_pb.FieldMask;o.readMessage(r,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),e.setUpdateMask(r);break;case 1:r=new google_ads_googleads_v4_resources_campaign_criterion_pb.CampaignCriterion;o.readMessage(r,google_ads_googleads_v4_resources_campaign_criterion_pb.CampaignCriterion.deserializeBinaryFromReader),e.setCreate(r);break;case 2:r=new google_ads_googleads_v4_resources_campaign_criterion_pb.CampaignCriterion;o.readMessage(r,google_ads_googleads_v4_resources_campaign_criterion_pb.CampaignCriterion.deserializeBinaryFromReader),e.setUpdate(r);break;case 3:r=o.readString();e.setRemove(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.CampaignCriterionOperation.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.serializeBinaryToWriter=function(e,o){var r=void 0;null!=(r=e.getUpdateMask())&&o.writeMessage(4,r,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(r=e.getCreate())&&o.writeMessage(1,r,google_ads_googleads_v4_resources_campaign_criterion_pb.CampaignCriterion.serializeBinaryToWriter),null!=(r=e.getUpdate())&&o.writeMessage(2,r,google_ads_googleads_v4_resources_campaign_criterion_pb.CampaignCriterion.serializeBinaryToWriter),null!=(r=jspb.Message.getField(e,3))&&o.writeString(3,r)},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,4)},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.prototype.setUpdateMask=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.prototype.clearUpdateMask=function(){return this.setUpdateMask(void 0)},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_resources_campaign_criterion_pb.CampaignCriterion,1)},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.prototype.setCreate=function(e){return jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v4.services.CampaignCriterionOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.prototype.clearCreate=function(){return this.setCreate(void 0)},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_resources_campaign_criterion_pb.CampaignCriterion,2)},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.prototype.setUpdate=function(e){return jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v4.services.CampaignCriterionOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.prototype.clearUpdate=function(){return this.setUpdate(void 0)},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.prototype.setRemove=function(e){return jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v4.services.CampaignCriterionOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.prototype.clearRemove=function(){return jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v4.services.CampaignCriterionOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v4.services.CampaignCriterionOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.toObject=function(e,o){var r,a={partialFailureError:(r=o.getPartialFailureError())&&google_rpc_status_pb.Status.toObject(e,r),resultsList:jspb.Message.toObjectList(o.getResultsList(),proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult.toObject,e)};return e&&(a.$jspbMessageInstance=o),a}),proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse;return proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 3:var r=new google_rpc_status_pb.Status;o.readMessage(r,google_rpc_status_pb.Status.deserializeBinaryFromReader),e.setPartialFailureError(r);break;case 2:r=new proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult;o.readMessage(r,proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult.deserializeBinaryFromReader),e.addResults(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.serializeBinaryToWriter=function(e,o){var r=void 0;null!=(r=e.getPartialFailureError())&&o.writeMessage(3,r,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(r=e.getResultsList()).length&&o.writeRepeatedMessage(2,r,proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.prototype.getPartialFailureError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.prototype.setPartialFailureError=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.prototype.clearPartialFailureError=function(){return this.setPartialFailureError(void 0)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.prototype.hasPartialFailureError=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult,2)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.prototype.setResultsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.prototype.addResults=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult,o)},proto.google.ads.googleads.v4.services.MutateCampaignCriteriaResponse.prototype.clearResultsList=function(){return this.setResultsList([])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult.toObject=function(e,o){var r={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(r.$jspbMessageInstance=o),r}),proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult;return proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setResourceName(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getResourceName()).length&&o.writeString(1,r)},proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateCampaignCriterionResult.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},goog.object.extend(exports,proto.google.ads.googleads.v4.services);