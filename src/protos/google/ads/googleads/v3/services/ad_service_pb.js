var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_resources_ad_pb=require("../../../../../google/ads/googleads/v3/resources/ad_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.services.AdOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.GetAdRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateAdResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateAdsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateAdsResponse",null,global),proto.google.ads.googleads.v3.services.GetAdRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.GetAdRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.GetAdRequest.displayName="proto.google.ads.googleads.v3.services.GetAdRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.GetAdRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.GetAdRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.GetAdRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.GetAdRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.GetAdRequest;return proto.google.ads.googleads.v3.services.GetAdRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.GetAdRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.GetAdRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.GetAdRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.GetAdRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.GetAdRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.GetAdRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateAdsRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateAdsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateAdsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateAdsRequest.displayName="proto.google.ads.googleads.v3.services.MutateAdsRequest"),proto.google.ads.googleads.v3.services.MutateAdsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateAdsRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateAdsRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateAdsRequest.toObject=function(includeInstance,msg){var obj={customerId:jspb.Message.getFieldWithDefault(msg,1,""),operationsList:jspb.Message.toObjectList(msg.getOperationsList(),proto.google.ads.googleads.v3.services.AdOperation.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateAdsRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateAdsRequest;return proto.google.ads.googleads.v3.services.MutateAdsRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateAdsRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setCustomerId(value);break;case 2:value=new proto.google.ads.googleads.v3.services.AdOperation;reader.readMessage(value,proto.google.ads.googleads.v3.services.AdOperation.deserializeBinaryFromReader),msg.addOperations(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateAdsRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateAdsRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateAdsRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getCustomerId()).length&&writer.writeString(1,f),0<(f=message.getOperationsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.AdOperation.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.MutateAdsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateAdsRequest.prototype.setCustomerId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateAdsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.AdOperation,2)},proto.google.ads.googleads.v3.services.MutateAdsRequest.prototype.setOperationsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateAdsRequest.prototype.addOperations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.AdOperation,opt_index)},proto.google.ads.googleads.v3.services.MutateAdsRequest.prototype.clearOperationsList=function(){this.setOperationsList([])},proto.google.ads.googleads.v3.services.AdOperation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v3.services.AdOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v3.services.AdOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.AdOperation.displayName="proto.google.ads.googleads.v3.services.AdOperation"),proto.google.ads.googleads.v3.services.AdOperation.oneofGroups_=[[1]],proto.google.ads.googleads.v3.services.AdOperation.OperationCase={OPERATION_NOT_SET:0,UPDATE:1},proto.google.ads.googleads.v3.services.AdOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v3.services.AdOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.AdOperation.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.AdOperation.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.AdOperation.toObject=function(includeInstance,msg){var f,obj={updateMask:(f=msg.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance,f),update:(f=msg.getUpdate())&&google_ads_googleads_v3_resources_ad_pb.Ad.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.AdOperation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.AdOperation;return proto.google.ads.googleads.v3.services.AdOperation.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.AdOperation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 2:var value=new google_protobuf_field_mask_pb.FieldMask;reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),msg.setUpdateMask(value);break;case 1:value=new google_ads_googleads_v3_resources_ad_pb.Ad;reader.readMessage(value,google_ads_googleads_v3_resources_ad_pb.Ad.deserializeBinaryFromReader),msg.setUpdate(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.AdOperation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.AdOperation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.AdOperation.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getUpdateMask())&&writer.writeMessage(2,f,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(f=message.getUpdate())&&writer.writeMessage(1,f,google_ads_googleads_v3_resources_ad_pb.Ad.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.AdOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,2)},proto.google.ads.googleads.v3.services.AdOperation.prototype.setUpdateMask=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.AdOperation.prototype.clearUpdateMask=function(){this.setUpdateMask(void 0)},proto.google.ads.googleads.v3.services.AdOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.services.AdOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_resources_ad_pb.Ad,1)},proto.google.ads.googleads.v3.services.AdOperation.prototype.setUpdate=function(value){jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v3.services.AdOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.AdOperation.prototype.clearUpdate=function(){this.setUpdate(void 0)},proto.google.ads.googleads.v3.services.AdOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v3.services.MutateAdsResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateAdsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateAdsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateAdsResponse.displayName="proto.google.ads.googleads.v3.services.MutateAdsResponse"),proto.google.ads.googleads.v3.services.MutateAdsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateAdsResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateAdsResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateAdsResponse.toObject=function(includeInstance,msg){var obj={resultsList:jspb.Message.toObjectList(msg.getResultsList(),proto.google.ads.googleads.v3.services.MutateAdResult.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateAdsResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateAdsResponse;return proto.google.ads.googleads.v3.services.MutateAdsResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateAdsResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 2:var value=new proto.google.ads.googleads.v3.services.MutateAdResult;reader.readMessage(value,proto.google.ads.googleads.v3.services.MutateAdResult.deserializeBinaryFromReader),msg.addResults(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateAdsResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateAdsResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateAdsResponse.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResultsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.MutateAdResult.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.MutateAdsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.MutateAdResult,2)},proto.google.ads.googleads.v3.services.MutateAdsResponse.prototype.setResultsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateAdsResponse.prototype.addResults=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.MutateAdResult,opt_index)},proto.google.ads.googleads.v3.services.MutateAdsResponse.prototype.clearResultsList=function(){this.setResultsList([])},proto.google.ads.googleads.v3.services.MutateAdResult=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateAdResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateAdResult.displayName="proto.google.ads.googleads.v3.services.MutateAdResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateAdResult.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateAdResult.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateAdResult.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateAdResult.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateAdResult;return proto.google.ads.googleads.v3.services.MutateAdResult.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateAdResult.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateAdResult.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateAdResult.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateAdResult.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.MutateAdResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateAdResult.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v3.services);