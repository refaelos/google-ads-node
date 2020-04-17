var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_resources_customer_client_link_pb=require("../../../../../google/ads/googleads/v3/resources/customer_client_link_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.services.CustomerClientLinkOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.GetCustomerClientLinkRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResponse",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult",null,global),proto.google.ads.googleads.v3.services.GetCustomerClientLinkRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.GetCustomerClientLinkRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.GetCustomerClientLinkRequest.displayName="proto.google.ads.googleads.v3.services.GetCustomerClientLinkRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.GetCustomerClientLinkRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.GetCustomerClientLinkRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.GetCustomerClientLinkRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.GetCustomerClientLinkRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.GetCustomerClientLinkRequest;return proto.google.ads.googleads.v3.services.GetCustomerClientLinkRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.GetCustomerClientLinkRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.GetCustomerClientLinkRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.GetCustomerClientLinkRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.GetCustomerClientLinkRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.GetCustomerClientLinkRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.GetCustomerClientLinkRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest.displayName="proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest.toObject=function(includeInstance,msg){var f,obj={customerId:jspb.Message.getFieldWithDefault(msg,1,""),operation:(f=msg.getOperation())&&proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest;return proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setCustomerId(value);break;case 2:value=new proto.google.ads.googleads.v3.services.CustomerClientLinkOperation;reader.readMessage(value,proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.deserializeBinaryFromReader),msg.setOperation(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getCustomerId()).length&&writer.writeString(1,f),null!=(f=message.getOperation())&&writer.writeMessage(2,f,proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest.prototype.setCustomerId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest.prototype.getOperation=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v3.services.CustomerClientLinkOperation,2)},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest.prototype.setOperation=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest.prototype.clearOperation=function(){this.setOperation(void 0)},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkRequest.prototype.hasOperation=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.services.CustomerClientLinkOperation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v3.services.CustomerClientLinkOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.displayName="proto.google.ads.googleads.v3.services.CustomerClientLinkOperation"),proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.oneofGroups_=[[1,2]],proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,UPDATE:2},proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.toObject=function(includeInstance,msg){var f,obj={updateMask:(f=msg.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance,f),create:(f=msg.getCreate())&&google_ads_googleads_v3_resources_customer_client_link_pb.CustomerClientLink.toObject(includeInstance,f),update:(f=msg.getUpdate())&&google_ads_googleads_v3_resources_customer_client_link_pb.CustomerClientLink.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.CustomerClientLinkOperation;return proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 4:var value=new google_protobuf_field_mask_pb.FieldMask;reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),msg.setUpdateMask(value);break;case 1:value=new google_ads_googleads_v3_resources_customer_client_link_pb.CustomerClientLink;reader.readMessage(value,google_ads_googleads_v3_resources_customer_client_link_pb.CustomerClientLink.deserializeBinaryFromReader),msg.setCreate(value);break;case 2:value=new google_ads_googleads_v3_resources_customer_client_link_pb.CustomerClientLink;reader.readMessage(value,google_ads_googleads_v3_resources_customer_client_link_pb.CustomerClientLink.deserializeBinaryFromReader),msg.setUpdate(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getUpdateMask())&&writer.writeMessage(4,f,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(f=message.getCreate())&&writer.writeMessage(1,f,google_ads_googleads_v3_resources_customer_client_link_pb.CustomerClientLink.serializeBinaryToWriter),null!=(f=message.getUpdate())&&writer.writeMessage(2,f,google_ads_googleads_v3_resources_customer_client_link_pb.CustomerClientLink.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,4)},proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.prototype.setUpdateMask=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.prototype.clearUpdateMask=function(){this.setUpdateMask(void 0)},proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_resources_customer_client_link_pb.CustomerClientLink,1)},proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.prototype.setCreate=function(value){jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.prototype.clearCreate=function(){this.setCreate(void 0)},proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_resources_customer_client_link_pb.CustomerClientLink,2)},proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.prototype.setUpdate=function(value){jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.prototype.clearUpdate=function(){this.setUpdate(void 0)},proto.google.ads.googleads.v3.services.CustomerClientLinkOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResponse.displayName="proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResponse"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResponse.toObject=function(includeInstance,msg){var f,obj={result:(f=msg.getResult())&&proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResponse;return proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult;reader.readMessage(value,proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult.deserializeBinaryFromReader),msg.setResult(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResponse.serializeBinaryToWriter=function(message,writer){var f;null!=(f=message.getResult())&&writer.writeMessage(1,f,proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResponse.prototype.getResult=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult,1)},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResponse.prototype.setResult=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResponse.prototype.clearResult=function(){this.setResult(void 0)},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResponse.prototype.hasResult=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult.displayName="proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult;return proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateCustomerClientLinkResult.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v3.services);