var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_resources_customer_feed_pb=require("../../../../../google/ads/googleads/v4/resources/customer_feed_pb.js");goog.object.extend(proto,google_ads_googleads_v4_resources_customer_feed_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb);var google_api_client_pb=require("../../../../../google/api/client_pb.js");goog.object.extend(proto,google_api_client_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js");goog.object.extend(proto,google_protobuf_field_mask_pb);var google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.object.extend(proto,google_rpc_status_pb),goog.exportSymbol("proto.google.ads.googleads.v4.services.CustomerFeedOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.CustomerFeedOperation.OperationCase",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.GetCustomerFeedRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateCustomerFeedResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse",null,global),proto.google.ads.googleads.v4.services.GetCustomerFeedRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.GetCustomerFeedRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.GetCustomerFeedRequest.displayName="proto.google.ads.googleads.v4.services.GetCustomerFeedRequest"),proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.displayName="proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest"),proto.google.ads.googleads.v4.services.CustomerFeedOperation=function(e){jspb.Message.initialize(this,e,0,-1,null,proto.google.ads.googleads.v4.services.CustomerFeedOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v4.services.CustomerFeedOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.CustomerFeedOperation.displayName="proto.google.ads.googleads.v4.services.CustomerFeedOperation"),proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.displayName="proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse"),proto.google.ads.googleads.v4.services.MutateCustomerFeedResult=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateCustomerFeedResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateCustomerFeedResult.displayName="proto.google.ads.googleads.v4.services.MutateCustomerFeedResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.GetCustomerFeedRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.GetCustomerFeedRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.GetCustomerFeedRequest.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.GetCustomerFeedRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.GetCustomerFeedRequest;return proto.google.ads.googleads.v4.services.GetCustomerFeedRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.GetCustomerFeedRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.GetCustomerFeedRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.GetCustomerFeedRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.GetCustomerFeedRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s)},proto.google.ads.googleads.v4.services.GetCustomerFeedRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.GetCustomerFeedRequest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.toObject=function(e,o){var s={customerId:jspb.Message.getFieldWithDefault(o,1,""),operationsList:jspb.Message.toObjectList(o.getOperationsList(),proto.google.ads.googleads.v4.services.CustomerFeedOperation.toObject,e),partialFailure:jspb.Message.getBooleanFieldWithDefault(o,3,!1),validateOnly:jspb.Message.getBooleanFieldWithDefault(o,4,!1)};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest;return proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setCustomerId(s);break;case 2:s=new proto.google.ads.googleads.v4.services.CustomerFeedOperation;o.readMessage(s,proto.google.ads.googleads.v4.services.CustomerFeedOperation.deserializeBinaryFromReader),e.addOperations(s);break;case 3:s=o.readBool();e.setPartialFailure(s);break;case 4:s=o.readBool();e.setValidateOnly(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getCustomerId()).length&&o.writeString(1,s),0<(s=e.getOperationsList()).length&&o.writeRepeatedMessage(2,s,proto.google.ads.googleads.v4.services.CustomerFeedOperation.serializeBinaryToWriter),(s=e.getPartialFailure())&&o.writeBool(3,s),(s=e.getValidateOnly())&&o.writeBool(4,s)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.prototype.setCustomerId=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.CustomerFeedOperation,2)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.prototype.setOperationsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.prototype.addOperations=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.CustomerFeedOperation,o)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.prototype.clearOperationsList=function(){return this.setOperationsList([])},proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.prototype.getPartialFailure=function(){return jspb.Message.getBooleanFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.prototype.setPartialFailure=function(e){return jspb.Message.setProto3BooleanField(this,3,e)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.prototype.getValidateOnly=function(){return jspb.Message.getBooleanFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsRequest.prototype.setValidateOnly=function(e){return jspb.Message.setProto3BooleanField(this,4,e)},proto.google.ads.googleads.v4.services.CustomerFeedOperation.oneofGroups_=[[1,2,3]],proto.google.ads.googleads.v4.services.CustomerFeedOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,UPDATE:2,REMOVE:3},proto.google.ads.googleads.v4.services.CustomerFeedOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.services.CustomerFeedOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.CustomerFeedOperation.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.CustomerFeedOperation.toObject(e,this)},proto.google.ads.googleads.v4.services.CustomerFeedOperation.toObject=function(e,o){var s,t={updateMask:(s=o.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(e,s),create:(s=o.getCreate())&&google_ads_googleads_v4_resources_customer_feed_pb.CustomerFeed.toObject(e,s),update:(s=o.getUpdate())&&google_ads_googleads_v4_resources_customer_feed_pb.CustomerFeed.toObject(e,s),remove:jspb.Message.getFieldWithDefault(o,3,"")};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.services.CustomerFeedOperation.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.CustomerFeedOperation;return proto.google.ads.googleads.v4.services.CustomerFeedOperation.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.CustomerFeedOperation.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 4:var s=new google_protobuf_field_mask_pb.FieldMask;o.readMessage(s,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),e.setUpdateMask(s);break;case 1:s=new google_ads_googleads_v4_resources_customer_feed_pb.CustomerFeed;o.readMessage(s,google_ads_googleads_v4_resources_customer_feed_pb.CustomerFeed.deserializeBinaryFromReader),e.setCreate(s);break;case 2:s=new google_ads_googleads_v4_resources_customer_feed_pb.CustomerFeed;o.readMessage(s,google_ads_googleads_v4_resources_customer_feed_pb.CustomerFeed.deserializeBinaryFromReader),e.setUpdate(s);break;case 3:s=o.readString();e.setRemove(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.CustomerFeedOperation.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.CustomerFeedOperation.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.CustomerFeedOperation.serializeBinaryToWriter=function(e,o){var s=void 0;null!=(s=e.getUpdateMask())&&o.writeMessage(4,s,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(s=e.getCreate())&&o.writeMessage(1,s,google_ads_googleads_v4_resources_customer_feed_pb.CustomerFeed.serializeBinaryToWriter),null!=(s=e.getUpdate())&&o.writeMessage(2,s,google_ads_googleads_v4_resources_customer_feed_pb.CustomerFeed.serializeBinaryToWriter),null!=(s=jspb.Message.getField(e,3))&&o.writeString(3,s)},proto.google.ads.googleads.v4.services.CustomerFeedOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,4)},proto.google.ads.googleads.v4.services.CustomerFeedOperation.prototype.setUpdateMask=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.services.CustomerFeedOperation.prototype.clearUpdateMask=function(){return this.setUpdateMask(void 0)},proto.google.ads.googleads.v4.services.CustomerFeedOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.services.CustomerFeedOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_resources_customer_feed_pb.CustomerFeed,1)},proto.google.ads.googleads.v4.services.CustomerFeedOperation.prototype.setCreate=function(e){return jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v4.services.CustomerFeedOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.CustomerFeedOperation.prototype.clearCreate=function(){return this.setCreate(void 0)},proto.google.ads.googleads.v4.services.CustomerFeedOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v4.services.CustomerFeedOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_resources_customer_feed_pb.CustomerFeed,2)},proto.google.ads.googleads.v4.services.CustomerFeedOperation.prototype.setUpdate=function(e){return jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v4.services.CustomerFeedOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.CustomerFeedOperation.prototype.clearUpdate=function(){return this.setUpdate(void 0)},proto.google.ads.googleads.v4.services.CustomerFeedOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.services.CustomerFeedOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.ads.googleads.v4.services.CustomerFeedOperation.prototype.setRemove=function(e){return jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v4.services.CustomerFeedOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.CustomerFeedOperation.prototype.clearRemove=function(){return jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v4.services.CustomerFeedOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v4.services.CustomerFeedOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.toObject=function(e,o){var s,t={partialFailureError:(s=o.getPartialFailureError())&&google_rpc_status_pb.Status.toObject(e,s),resultsList:jspb.Message.toObjectList(o.getResultsList(),proto.google.ads.googleads.v4.services.MutateCustomerFeedResult.toObject,e)};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse;return proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 3:var s=new google_rpc_status_pb.Status;o.readMessage(s,google_rpc_status_pb.Status.deserializeBinaryFromReader),e.setPartialFailureError(s);break;case 2:s=new proto.google.ads.googleads.v4.services.MutateCustomerFeedResult;o.readMessage(s,proto.google.ads.googleads.v4.services.MutateCustomerFeedResult.deserializeBinaryFromReader),e.addResults(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.serializeBinaryToWriter=function(e,o){var s=void 0;null!=(s=e.getPartialFailureError())&&o.writeMessage(3,s,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(s=e.getResultsList()).length&&o.writeRepeatedMessage(2,s,proto.google.ads.googleads.v4.services.MutateCustomerFeedResult.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.prototype.getPartialFailureError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.prototype.setPartialFailureError=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.prototype.clearPartialFailureError=function(){return this.setPartialFailureError(void 0)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.prototype.hasPartialFailureError=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.MutateCustomerFeedResult,2)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.prototype.setResultsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.prototype.addResults=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.MutateCustomerFeedResult,o)},proto.google.ads.googleads.v4.services.MutateCustomerFeedsResponse.prototype.clearResultsList=function(){return this.setResultsList([])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateCustomerFeedResult.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateCustomerFeedResult.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateCustomerFeedResult.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.MutateCustomerFeedResult.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateCustomerFeedResult;return proto.google.ads.googleads.v4.services.MutateCustomerFeedResult.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateCustomerFeedResult.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateCustomerFeedResult.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateCustomerFeedResult.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateCustomerFeedResult.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s)},proto.google.ads.googleads.v4.services.MutateCustomerFeedResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateCustomerFeedResult.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},goog.object.extend(exports,proto.google.ads.googleads.v4.services);