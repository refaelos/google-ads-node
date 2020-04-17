var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_resources_custom_interest_pb=require("../../../../../google/ads/googleads/v3/resources/custom_interest_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.services.CustomInterestOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.GetCustomInterestRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateCustomInterestResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse",null,global),proto.google.ads.googleads.v3.services.GetCustomInterestRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.GetCustomInterestRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.GetCustomInterestRequest.displayName="proto.google.ads.googleads.v3.services.GetCustomInterestRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.GetCustomInterestRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.GetCustomInterestRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.GetCustomInterestRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.GetCustomInterestRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.GetCustomInterestRequest;return proto.google.ads.googleads.v3.services.GetCustomInterestRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.GetCustomInterestRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.GetCustomInterestRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.GetCustomInterestRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.GetCustomInterestRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.GetCustomInterestRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.GetCustomInterestRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.displayName="proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest"),proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.toObject=function(includeInstance,msg){var obj={customerId:jspb.Message.getFieldWithDefault(msg,1,""),operationsList:jspb.Message.toObjectList(msg.getOperationsList(),proto.google.ads.googleads.v3.services.CustomInterestOperation.toObject,includeInstance),validateOnly:jspb.Message.getFieldWithDefault(msg,4,!1)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest;return proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setCustomerId(value);break;case 2:value=new proto.google.ads.googleads.v3.services.CustomInterestOperation;reader.readMessage(value,proto.google.ads.googleads.v3.services.CustomInterestOperation.deserializeBinaryFromReader),msg.addOperations(value);break;case 4:value=reader.readBool();msg.setValidateOnly(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getCustomerId()).length&&writer.writeString(1,f),0<(f=message.getOperationsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.CustomInterestOperation.serializeBinaryToWriter),(f=message.getValidateOnly())&&writer.writeBool(4,f)},proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.prototype.setCustomerId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.CustomInterestOperation,2)},proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.prototype.setOperationsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.prototype.addOperations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.CustomInterestOperation,opt_index)},proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.prototype.clearOperationsList=function(){this.setOperationsList([])},proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.prototype.getValidateOnly=function(){return jspb.Message.getFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v3.services.MutateCustomInterestsRequest.prototype.setValidateOnly=function(value){jspb.Message.setProto3BooleanField(this,4,value)},proto.google.ads.googleads.v3.services.CustomInterestOperation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v3.services.CustomInterestOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v3.services.CustomInterestOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.CustomInterestOperation.displayName="proto.google.ads.googleads.v3.services.CustomInterestOperation"),proto.google.ads.googleads.v3.services.CustomInterestOperation.oneofGroups_=[[1,2]],proto.google.ads.googleads.v3.services.CustomInterestOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,UPDATE:2},proto.google.ads.googleads.v3.services.CustomInterestOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v3.services.CustomInterestOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.CustomInterestOperation.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.CustomInterestOperation.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.CustomInterestOperation.toObject=function(includeInstance,msg){var f,obj={updateMask:(f=msg.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance,f),create:(f=msg.getCreate())&&google_ads_googleads_v3_resources_custom_interest_pb.CustomInterest.toObject(includeInstance,f),update:(f=msg.getUpdate())&&google_ads_googleads_v3_resources_custom_interest_pb.CustomInterest.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.CustomInterestOperation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.CustomInterestOperation;return proto.google.ads.googleads.v3.services.CustomInterestOperation.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.CustomInterestOperation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 4:var value=new google_protobuf_field_mask_pb.FieldMask;reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),msg.setUpdateMask(value);break;case 1:value=new google_ads_googleads_v3_resources_custom_interest_pb.CustomInterest;reader.readMessage(value,google_ads_googleads_v3_resources_custom_interest_pb.CustomInterest.deserializeBinaryFromReader),msg.setCreate(value);break;case 2:value=new google_ads_googleads_v3_resources_custom_interest_pb.CustomInterest;reader.readMessage(value,google_ads_googleads_v3_resources_custom_interest_pb.CustomInterest.deserializeBinaryFromReader),msg.setUpdate(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.CustomInterestOperation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.CustomInterestOperation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.CustomInterestOperation.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getUpdateMask())&&writer.writeMessage(4,f,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(f=message.getCreate())&&writer.writeMessage(1,f,google_ads_googleads_v3_resources_custom_interest_pb.CustomInterest.serializeBinaryToWriter),null!=(f=message.getUpdate())&&writer.writeMessage(2,f,google_ads_googleads_v3_resources_custom_interest_pb.CustomInterest.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.CustomInterestOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,4)},proto.google.ads.googleads.v3.services.CustomInterestOperation.prototype.setUpdateMask=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v3.services.CustomInterestOperation.prototype.clearUpdateMask=function(){this.setUpdateMask(void 0)},proto.google.ads.googleads.v3.services.CustomInterestOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v3.services.CustomInterestOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_resources_custom_interest_pb.CustomInterest,1)},proto.google.ads.googleads.v3.services.CustomInterestOperation.prototype.setCreate=function(value){jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v3.services.CustomInterestOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.CustomInterestOperation.prototype.clearCreate=function(){this.setCreate(void 0)},proto.google.ads.googleads.v3.services.CustomInterestOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v3.services.CustomInterestOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_resources_custom_interest_pb.CustomInterest,2)},proto.google.ads.googleads.v3.services.CustomInterestOperation.prototype.setUpdate=function(value){jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v3.services.CustomInterestOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.CustomInterestOperation.prototype.clearUpdate=function(){this.setUpdate(void 0)},proto.google.ads.googleads.v3.services.CustomInterestOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse.displayName="proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse"),proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse.toObject=function(includeInstance,msg){var obj={resultsList:jspb.Message.toObjectList(msg.getResultsList(),proto.google.ads.googleads.v3.services.MutateCustomInterestResult.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse;return proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 2:var value=new proto.google.ads.googleads.v3.services.MutateCustomInterestResult;reader.readMessage(value,proto.google.ads.googleads.v3.services.MutateCustomInterestResult.deserializeBinaryFromReader),msg.addResults(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResultsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.MutateCustomInterestResult.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.MutateCustomInterestResult,2)},proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse.prototype.setResultsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse.prototype.addResults=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.MutateCustomInterestResult,opt_index)},proto.google.ads.googleads.v3.services.MutateCustomInterestsResponse.prototype.clearResultsList=function(){this.setResultsList([])},proto.google.ads.googleads.v3.services.MutateCustomInterestResult=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateCustomInterestResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateCustomInterestResult.displayName="proto.google.ads.googleads.v3.services.MutateCustomInterestResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateCustomInterestResult.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateCustomInterestResult.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateCustomInterestResult.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateCustomInterestResult.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateCustomInterestResult;return proto.google.ads.googleads.v3.services.MutateCustomInterestResult.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateCustomInterestResult.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateCustomInterestResult.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateCustomInterestResult.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateCustomInterestResult.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.MutateCustomInterestResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateCustomInterestResult.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v3.services);