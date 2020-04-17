var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_resources_feed_item_target_pb=require("../../../../../google/ads/googleads/v3/resources/feed_item_target_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.services.FeedItemTargetOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.GetFeedItemTargetRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse",null,global),proto.google.ads.googleads.v3.services.GetFeedItemTargetRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.GetFeedItemTargetRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.GetFeedItemTargetRequest.displayName="proto.google.ads.googleads.v3.services.GetFeedItemTargetRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.GetFeedItemTargetRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.GetFeedItemTargetRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.GetFeedItemTargetRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.GetFeedItemTargetRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.GetFeedItemTargetRequest;return proto.google.ads.googleads.v3.services.GetFeedItemTargetRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.GetFeedItemTargetRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.GetFeedItemTargetRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.GetFeedItemTargetRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.GetFeedItemTargetRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.GetFeedItemTargetRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.GetFeedItemTargetRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest.displayName="proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest"),proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest.toObject=function(includeInstance,msg){var obj={customerId:jspb.Message.getFieldWithDefault(msg,1,""),operationsList:jspb.Message.toObjectList(msg.getOperationsList(),proto.google.ads.googleads.v3.services.FeedItemTargetOperation.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest;return proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setCustomerId(value);break;case 2:value=new proto.google.ads.googleads.v3.services.FeedItemTargetOperation;reader.readMessage(value,proto.google.ads.googleads.v3.services.FeedItemTargetOperation.deserializeBinaryFromReader),msg.addOperations(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getCustomerId()).length&&writer.writeString(1,f),0<(f=message.getOperationsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.FeedItemTargetOperation.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest.prototype.setCustomerId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.FeedItemTargetOperation,2)},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest.prototype.setOperationsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest.prototype.addOperations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.FeedItemTargetOperation,opt_index)},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsRequest.prototype.clearOperationsList=function(){this.setOperationsList([])},proto.google.ads.googleads.v3.services.FeedItemTargetOperation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v3.services.FeedItemTargetOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v3.services.FeedItemTargetOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.FeedItemTargetOperation.displayName="proto.google.ads.googleads.v3.services.FeedItemTargetOperation"),proto.google.ads.googleads.v3.services.FeedItemTargetOperation.oneofGroups_=[[1,2]],proto.google.ads.googleads.v3.services.FeedItemTargetOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,REMOVE:2},proto.google.ads.googleads.v3.services.FeedItemTargetOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v3.services.FeedItemTargetOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.FeedItemTargetOperation.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.FeedItemTargetOperation.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.FeedItemTargetOperation.toObject=function(includeInstance,msg){var f,obj={create:(f=msg.getCreate())&&google_ads_googleads_v3_resources_feed_item_target_pb.FeedItemTarget.toObject(includeInstance,f),remove:jspb.Message.getFieldWithDefault(msg,2,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.FeedItemTargetOperation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.FeedItemTargetOperation;return proto.google.ads.googleads.v3.services.FeedItemTargetOperation.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.FeedItemTargetOperation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new google_ads_googleads_v3_resources_feed_item_target_pb.FeedItemTarget;reader.readMessage(value,google_ads_googleads_v3_resources_feed_item_target_pb.FeedItemTarget.deserializeBinaryFromReader),msg.setCreate(value);break;case 2:value=reader.readString();msg.setRemove(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.FeedItemTargetOperation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.FeedItemTargetOperation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.FeedItemTargetOperation.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getCreate())&&writer.writeMessage(1,f,google_ads_googleads_v3_resources_feed_item_target_pb.FeedItemTarget.serializeBinaryToWriter),null!=(f=jspb.Message.getField(message,2))&&writer.writeString(2,f)},proto.google.ads.googleads.v3.services.FeedItemTargetOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_resources_feed_item_target_pb.FeedItemTarget,1)},proto.google.ads.googleads.v3.services.FeedItemTargetOperation.prototype.setCreate=function(value){jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v3.services.FeedItemTargetOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.FeedItemTargetOperation.prototype.clearCreate=function(){this.setCreate(void 0)},proto.google.ads.googleads.v3.services.FeedItemTargetOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v3.services.FeedItemTargetOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.ads.googleads.v3.services.FeedItemTargetOperation.prototype.setRemove=function(value){jspb.Message.setOneofField(this,2,proto.google.ads.googleads.v3.services.FeedItemTargetOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v3.services.FeedItemTargetOperation.prototype.clearRemove=function(){jspb.Message.setOneofField(this,2,proto.google.ads.googleads.v3.services.FeedItemTargetOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.services.FeedItemTargetOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse.displayName="proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse"),proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse.toObject=function(includeInstance,msg){var obj={resultsList:jspb.Message.toObjectList(msg.getResultsList(),proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse;return proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 2:var value=new proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult;reader.readMessage(value,proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult.deserializeBinaryFromReader),msg.addResults(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResultsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult,2)},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse.prototype.setResultsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse.prototype.addResults=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult,opt_index)},proto.google.ads.googleads.v3.services.MutateFeedItemTargetsResponse.prototype.clearResultsList=function(){this.setResultsList([])},proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult.displayName="proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult;return proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.MutateFeedItemTargetResult.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v3.services);