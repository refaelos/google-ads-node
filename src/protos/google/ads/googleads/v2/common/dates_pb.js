var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.common.DateRange",null,global),proto.google.ads.googleads.v2.common.DateRange=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.common.DateRange,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.common.DateRange.displayName="proto.google.ads.googleads.v2.common.DateRange"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.common.DateRange.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.common.DateRange.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.common.DateRange.toObject=function(includeInstance,msg){var f,obj={startDate:(f=msg.getStartDate())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),endDate:(f=msg.getEndDate())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.common.DateRange.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.common.DateRange;return proto.google.ads.googleads.v2.common.DateRange.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.common.DateRange.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setStartDate(value);break;case 2:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setEndDate(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v2.common.DateRange.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.common.DateRange.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.common.DateRange.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getStartDate())&&writer.writeMessage(1,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getEndDate())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v2.common.DateRange.prototype.getStartDate=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,1)},proto.google.ads.googleads.v2.common.DateRange.prototype.setStartDate=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v2.common.DateRange.prototype.clearStartDate=function(){this.setStartDate(void 0)},proto.google.ads.googleads.v2.common.DateRange.prototype.hasStartDate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v2.common.DateRange.prototype.getEndDate=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v2.common.DateRange.prototype.setEndDate=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v2.common.DateRange.prototype.clearEndDate=function(){this.setEndDate(void 0)},proto.google.ads.googleads.v2.common.DateRange.prototype.hasEndDate=function(){return null!=jspb.Message.getField(this,2)},goog.object.extend(exports,proto.google.ads.googleads.v2.common);