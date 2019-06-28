var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.resources.AdParameter",null,global),proto.google.ads.googleads.v2.resources.AdParameter=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.resources.AdParameter,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.resources.AdParameter.displayName="proto.google.ads.googleads.v2.resources.AdParameter"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.resources.AdParameter.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.resources.AdParameter.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.resources.AdParameter.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),adGroupCriterion:(f=msg.getAdGroupCriterion())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),parameterIndex:(f=msg.getParameterIndex())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),insertionText:(f=msg.getInsertionText())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.resources.AdParameter.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.resources.AdParameter;return proto.google.ads.googleads.v2.resources.AdParameter.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.resources.AdParameter.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setAdGroupCriterion(value);break;case 3:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setParameterIndex(value);break;case 4:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setInsertionText(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v2.resources.AdParameter.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.resources.AdParameter.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.resources.AdParameter.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getAdGroupCriterion())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getParameterIndex())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getInsertionText())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v2.resources.AdParameter.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v2.resources.AdParameter.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v2.resources.AdParameter.prototype.getAdGroupCriterion=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v2.resources.AdParameter.prototype.setAdGroupCriterion=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v2.resources.AdParameter.prototype.clearAdGroupCriterion=function(){this.setAdGroupCriterion(void 0)},proto.google.ads.googleads.v2.resources.AdParameter.prototype.hasAdGroupCriterion=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v2.resources.AdParameter.prototype.getParameterIndex=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,3)},proto.google.ads.googleads.v2.resources.AdParameter.prototype.setParameterIndex=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v2.resources.AdParameter.prototype.clearParameterIndex=function(){this.setParameterIndex(void 0)},proto.google.ads.googleads.v2.resources.AdParameter.prototype.hasParameterIndex=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v2.resources.AdParameter.prototype.getInsertionText=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v2.resources.AdParameter.prototype.setInsertionText=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v2.resources.AdParameter.prototype.clearInsertionText=function(){this.setInsertionText(void 0)},proto.google.ads.googleads.v2.resources.AdParameter.prototype.hasInsertionText=function(){return null!=jspb.Message.getField(this,4)},goog.object.extend(exports,proto.google.ads.googleads.v2.resources);