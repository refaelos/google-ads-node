var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.resources.CarrierConstant",null,global),proto.google.ads.googleads.v2.resources.CarrierConstant=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.resources.CarrierConstant,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.resources.CarrierConstant.displayName="proto.google.ads.googleads.v2.resources.CarrierConstant"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.resources.CarrierConstant.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.resources.CarrierConstant.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.resources.CarrierConstant.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),id:(f=msg.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),name:(f=msg.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),countryCode:(f=msg.getCountryCode())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.resources.CarrierConstant.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.resources.CarrierConstant;return proto.google.ads.googleads.v2.resources.CarrierConstant.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.resources.CarrierConstant.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setId(value);break;case 3:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setName(value);break;case 4:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setCountryCode(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v2.resources.CarrierConstant.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.resources.CarrierConstant.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.resources.CarrierConstant.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getId())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getName())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getCountryCode())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v2.resources.CarrierConstant.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v2.resources.CarrierConstant.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v2.resources.CarrierConstant.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v2.resources.CarrierConstant.prototype.setId=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v2.resources.CarrierConstant.prototype.clearId=function(){this.setId(void 0)},proto.google.ads.googleads.v2.resources.CarrierConstant.prototype.hasId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v2.resources.CarrierConstant.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v2.resources.CarrierConstant.prototype.setName=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v2.resources.CarrierConstant.prototype.clearName=function(){this.setName(void 0)},proto.google.ads.googleads.v2.resources.CarrierConstant.prototype.hasName=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v2.resources.CarrierConstant.prototype.getCountryCode=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v2.resources.CarrierConstant.prototype.setCountryCode=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v2.resources.CarrierConstant.prototype.clearCountryCode=function(){this.setCountryCode(void 0)},proto.google.ads.googleads.v2.resources.CarrierConstant.prototype.hasCountryCode=function(){return null!=jspb.Message.getField(this,4)},goog.object.extend(exports,proto.google.ads.googleads.v2.resources);