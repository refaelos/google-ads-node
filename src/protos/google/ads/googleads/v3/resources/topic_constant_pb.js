var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.resources.TopicConstant",null,global),proto.google.ads.googleads.v3.resources.TopicConstant=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.resources.TopicConstant.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.resources.TopicConstant,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.resources.TopicConstant.displayName="proto.google.ads.googleads.v3.resources.TopicConstant"),proto.google.ads.googleads.v3.resources.TopicConstant.repeatedFields_=[4],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.resources.TopicConstant.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.resources.TopicConstant.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.resources.TopicConstant.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),id:(f=msg.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),topicConstantParent:(f=msg.getTopicConstantParent())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),pathList:jspb.Message.toObjectList(msg.getPathList(),google_protobuf_wrappers_pb.StringValue.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.resources.TopicConstant.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.resources.TopicConstant;return proto.google.ads.googleads.v3.resources.TopicConstant.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.resources.TopicConstant.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setId(value);break;case 3:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setTopicConstantParent(value);break;case 4:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.addPath(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.resources.TopicConstant.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.resources.TopicConstant.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.resources.TopicConstant.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getId())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getTopicConstantParent())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0<(f=message.getPathList()).length&&writer.writeRepeatedMessage(4,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v3.resources.TopicConstant.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.resources.TopicConstant.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.resources.TopicConstant.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v3.resources.TopicConstant.prototype.setId=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v3.resources.TopicConstant.prototype.clearId=function(){this.setId(void 0)},proto.google.ads.googleads.v3.resources.TopicConstant.prototype.hasId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.resources.TopicConstant.prototype.getTopicConstantParent=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v3.resources.TopicConstant.prototype.setTopicConstantParent=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v3.resources.TopicConstant.prototype.clearTopicConstantParent=function(){this.setTopicConstantParent(void 0)},proto.google.ads.googleads.v3.resources.TopicConstant.prototype.hasTopicConstantParent=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.resources.TopicConstant.prototype.getPathList=function(){return jspb.Message.getRepeatedWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v3.resources.TopicConstant.prototype.setPathList=function(value){jspb.Message.setRepeatedWrapperField(this,4,value)},proto.google.ads.googleads.v3.resources.TopicConstant.prototype.addPath=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,4,opt_value,proto.google.protobuf.StringValue,opt_index)},proto.google.ads.googleads.v3.resources.TopicConstant.prototype.clearPathList=function(){this.setPathList([])},goog.object.extend(exports,proto.google.ads.googleads.v3.resources);