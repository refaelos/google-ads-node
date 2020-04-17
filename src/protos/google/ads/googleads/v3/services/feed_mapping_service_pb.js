var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_resources_feed_mapping_pb=require("../../../../../google/ads/googleads/v3/resources/feed_mapping_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.services.FeedMappingOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.GetFeedMappingRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateFeedMappingResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse",null,global),proto.google.ads.googleads.v3.services.GetFeedMappingRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.GetFeedMappingRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.GetFeedMappingRequest.displayName="proto.google.ads.googleads.v3.services.GetFeedMappingRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.GetFeedMappingRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.GetFeedMappingRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.GetFeedMappingRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.GetFeedMappingRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.GetFeedMappingRequest;return proto.google.ads.googleads.v3.services.GetFeedMappingRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.GetFeedMappingRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.GetFeedMappingRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.GetFeedMappingRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.GetFeedMappingRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.GetFeedMappingRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.GetFeedMappingRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.displayName="proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest"),proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.toObject=function(includeInstance,msg){var obj={customerId:jspb.Message.getFieldWithDefault(msg,1,""),operationsList:jspb.Message.toObjectList(msg.getOperationsList(),proto.google.ads.googleads.v3.services.FeedMappingOperation.toObject,includeInstance),partialFailure:jspb.Message.getFieldWithDefault(msg,3,!1),validateOnly:jspb.Message.getFieldWithDefault(msg,4,!1)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest;return proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setCustomerId(value);break;case 2:value=new proto.google.ads.googleads.v3.services.FeedMappingOperation;reader.readMessage(value,proto.google.ads.googleads.v3.services.FeedMappingOperation.deserializeBinaryFromReader),msg.addOperations(value);break;case 3:value=reader.readBool();msg.setPartialFailure(value);break;case 4:value=reader.readBool();msg.setValidateOnly(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getCustomerId()).length&&writer.writeString(1,f),0<(f=message.getOperationsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.FeedMappingOperation.serializeBinaryToWriter),(f=message.getPartialFailure())&&writer.writeBool(3,f),(f=message.getValidateOnly())&&writer.writeBool(4,f)},proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.prototype.setCustomerId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.FeedMappingOperation,2)},proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.prototype.setOperationsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.prototype.addOperations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.FeedMappingOperation,opt_index)},proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.prototype.clearOperationsList=function(){this.setOperationsList([])},proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.prototype.getPartialFailure=function(){return jspb.Message.getFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.prototype.setPartialFailure=function(value){jspb.Message.setProto3BooleanField(this,3,value)},proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.prototype.getValidateOnly=function(){return jspb.Message.getFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v3.services.MutateFeedMappingsRequest.prototype.setValidateOnly=function(value){jspb.Message.setProto3BooleanField(this,4,value)},proto.google.ads.googleads.v3.services.FeedMappingOperation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v3.services.FeedMappingOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v3.services.FeedMappingOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.FeedMappingOperation.displayName="proto.google.ads.googleads.v3.services.FeedMappingOperation"),proto.google.ads.googleads.v3.services.FeedMappingOperation.oneofGroups_=[[1,3]],proto.google.ads.googleads.v3.services.FeedMappingOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,REMOVE:3},proto.google.ads.googleads.v3.services.FeedMappingOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v3.services.FeedMappingOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.FeedMappingOperation.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.FeedMappingOperation.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.FeedMappingOperation.toObject=function(includeInstance,msg){var f,obj={create:(f=msg.getCreate())&&google_ads_googleads_v3_resources_feed_mapping_pb.FeedMapping.toObject(includeInstance,f),remove:jspb.Message.getFieldWithDefault(msg,3,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.FeedMappingOperation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.FeedMappingOperation;return proto.google.ads.googleads.v3.services.FeedMappingOperation.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.FeedMappingOperation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new google_ads_googleads_v3_resources_feed_mapping_pb.FeedMapping;reader.readMessage(value,google_ads_googleads_v3_resources_feed_mapping_pb.FeedMapping.deserializeBinaryFromReader),msg.setCreate(value);break;case 3:value=reader.readString();msg.setRemove(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.FeedMappingOperation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.FeedMappingOperation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.FeedMappingOperation.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getCreate())&&writer.writeMessage(1,f,google_ads_googleads_v3_resources_feed_mapping_pb.FeedMapping.serializeBinaryToWriter),null!=(f=jspb.Message.getField(message,3))&&writer.writeString(3,f)},proto.google.ads.googleads.v3.services.FeedMappingOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_resources_feed_mapping_pb.FeedMapping,1)},proto.google.ads.googleads.v3.services.FeedMappingOperation.prototype.setCreate=function(value){jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v3.services.FeedMappingOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.FeedMappingOperation.prototype.clearCreate=function(){this.setCreate(void 0)},proto.google.ads.googleads.v3.services.FeedMappingOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v3.services.FeedMappingOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.ads.googleads.v3.services.FeedMappingOperation.prototype.setRemove=function(value){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v3.services.FeedMappingOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.FeedMappingOperation.prototype.clearRemove=function(){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v3.services.FeedMappingOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.services.FeedMappingOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.displayName="proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse"),proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.toObject=function(includeInstance,msg){var f,obj={partialFailureError:(f=msg.getPartialFailureError())&&google_rpc_status_pb.Status.toObject(includeInstance,f),resultsList:jspb.Message.toObjectList(msg.getResultsList(),proto.google.ads.googleads.v3.services.MutateFeedMappingResult.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse;return proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 3:var value=new google_rpc_status_pb.Status;reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader),msg.setPartialFailureError(value);break;case 2:value=new proto.google.ads.googleads.v3.services.MutateFeedMappingResult;reader.readMessage(value,proto.google.ads.googleads.v3.services.MutateFeedMappingResult.deserializeBinaryFromReader),msg.addResults(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getPartialFailureError())&&writer.writeMessage(3,f,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(f=message.getResultsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.MutateFeedMappingResult.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.prototype.getPartialFailureError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.prototype.setPartialFailureError=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.prototype.clearPartialFailureError=function(){this.setPartialFailureError(void 0)},proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.prototype.hasPartialFailureError=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.MutateFeedMappingResult,2)},proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.prototype.setResultsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.prototype.addResults=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.MutateFeedMappingResult,opt_index)},proto.google.ads.googleads.v3.services.MutateFeedMappingsResponse.prototype.clearResultsList=function(){this.setResultsList([])},proto.google.ads.googleads.v3.services.MutateFeedMappingResult=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateFeedMappingResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateFeedMappingResult.displayName="proto.google.ads.googleads.v3.services.MutateFeedMappingResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateFeedMappingResult.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateFeedMappingResult.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateFeedMappingResult.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateFeedMappingResult.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateFeedMappingResult;return proto.google.ads.googleads.v3.services.MutateFeedMappingResult.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateFeedMappingResult.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateFeedMappingResult.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateFeedMappingResult.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateFeedMappingResult.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.MutateFeedMappingResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateFeedMappingResult.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v3.services);