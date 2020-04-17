var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_resources_customer_extension_setting_pb=require("../../../../../google/ads/googleads/v3/resources/customer_extension_setting_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.GetCustomerExtensionSettingRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse",null,global),proto.google.ads.googleads.v3.services.GetCustomerExtensionSettingRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.GetCustomerExtensionSettingRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.GetCustomerExtensionSettingRequest.displayName="proto.google.ads.googleads.v3.services.GetCustomerExtensionSettingRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.GetCustomerExtensionSettingRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.GetCustomerExtensionSettingRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.GetCustomerExtensionSettingRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.GetCustomerExtensionSettingRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.GetCustomerExtensionSettingRequest;return proto.google.ads.googleads.v3.services.GetCustomerExtensionSettingRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.GetCustomerExtensionSettingRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.GetCustomerExtensionSettingRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.GetCustomerExtensionSettingRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.GetCustomerExtensionSettingRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.GetCustomerExtensionSettingRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.GetCustomerExtensionSettingRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.displayName="proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest"),proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.toObject=function(includeInstance,msg){var obj={customerId:jspb.Message.getFieldWithDefault(msg,1,""),operationsList:jspb.Message.toObjectList(msg.getOperationsList(),proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.toObject,includeInstance),partialFailure:jspb.Message.getFieldWithDefault(msg,3,!1),validateOnly:jspb.Message.getFieldWithDefault(msg,4,!1)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest;return proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setCustomerId(value);break;case 2:value=new proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation;reader.readMessage(value,proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.deserializeBinaryFromReader),msg.addOperations(value);break;case 3:value=reader.readBool();msg.setPartialFailure(value);break;case 4:value=reader.readBool();msg.setValidateOnly(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getCustomerId()).length&&writer.writeString(1,f),0<(f=message.getOperationsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.serializeBinaryToWriter),(f=message.getPartialFailure())&&writer.writeBool(3,f),(f=message.getValidateOnly())&&writer.writeBool(4,f)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.prototype.setCustomerId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation,2)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.prototype.setOperationsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.prototype.addOperations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation,opt_index)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.prototype.clearOperationsList=function(){this.setOperationsList([])},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.prototype.getPartialFailure=function(){return jspb.Message.getFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.prototype.setPartialFailure=function(value){jspb.Message.setProto3BooleanField(this,3,value)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.prototype.getValidateOnly=function(){return jspb.Message.getFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsRequest.prototype.setValidateOnly=function(value){jspb.Message.setProto3BooleanField(this,4,value)},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.displayName="proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation"),proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.oneofGroups_=[[1,2,3]],proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,UPDATE:2,REMOVE:3},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.toObject=function(includeInstance,msg){var f,obj={updateMask:(f=msg.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance,f),create:(f=msg.getCreate())&&google_ads_googleads_v3_resources_customer_extension_setting_pb.CustomerExtensionSetting.toObject(includeInstance,f),update:(f=msg.getUpdate())&&google_ads_googleads_v3_resources_customer_extension_setting_pb.CustomerExtensionSetting.toObject(includeInstance,f),remove:jspb.Message.getFieldWithDefault(msg,3,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation;return proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 4:var value=new google_protobuf_field_mask_pb.FieldMask;reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),msg.setUpdateMask(value);break;case 1:value=new google_ads_googleads_v3_resources_customer_extension_setting_pb.CustomerExtensionSetting;reader.readMessage(value,google_ads_googleads_v3_resources_customer_extension_setting_pb.CustomerExtensionSetting.deserializeBinaryFromReader),msg.setCreate(value);break;case 2:value=new google_ads_googleads_v3_resources_customer_extension_setting_pb.CustomerExtensionSetting;reader.readMessage(value,google_ads_googleads_v3_resources_customer_extension_setting_pb.CustomerExtensionSetting.deserializeBinaryFromReader),msg.setUpdate(value);break;case 3:value=reader.readString();msg.setRemove(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getUpdateMask())&&writer.writeMessage(4,f,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(f=message.getCreate())&&writer.writeMessage(1,f,google_ads_googleads_v3_resources_customer_extension_setting_pb.CustomerExtensionSetting.serializeBinaryToWriter),null!=(f=message.getUpdate())&&writer.writeMessage(2,f,google_ads_googleads_v3_resources_customer_extension_setting_pb.CustomerExtensionSetting.serializeBinaryToWriter),null!=(f=jspb.Message.getField(message,3))&&writer.writeString(3,f)},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,4)},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.prototype.setUpdateMask=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.prototype.clearUpdateMask=function(){this.setUpdateMask(void 0)},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_resources_customer_extension_setting_pb.CustomerExtensionSetting,1)},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.prototype.setCreate=function(value){jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.prototype.clearCreate=function(){this.setCreate(void 0)},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_resources_customer_extension_setting_pb.CustomerExtensionSetting,2)},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.prototype.setUpdate=function(value){jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.prototype.clearUpdate=function(){this.setUpdate(void 0)},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.prototype.setRemove=function(value){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.prototype.clearRemove=function(){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.services.CustomerExtensionSettingOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.displayName="proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse"),proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.toObject=function(includeInstance,msg){var f,obj={partialFailureError:(f=msg.getPartialFailureError())&&google_rpc_status_pb.Status.toObject(includeInstance,f),resultsList:jspb.Message.toObjectList(msg.getResultsList(),proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse;return proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 3:var value=new google_rpc_status_pb.Status;reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader),msg.setPartialFailureError(value);break;case 2:value=new proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult;reader.readMessage(value,proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult.deserializeBinaryFromReader),msg.addResults(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getPartialFailureError())&&writer.writeMessage(3,f,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(f=message.getResultsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.prototype.getPartialFailureError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.prototype.setPartialFailureError=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.prototype.clearPartialFailureError=function(){this.setPartialFailureError(void 0)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.prototype.hasPartialFailureError=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult,2)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.prototype.setResultsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.prototype.addResults=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult,opt_index)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingsResponse.prototype.clearResultsList=function(){this.setResultsList([])},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult.displayName="proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult;return proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateCustomerExtensionSettingResult.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v3.services);