var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.common.DateRange",null,global),proto.google.ads.googleads.v4.common.DateRange=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.common.DateRange,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.common.DateRange.displayName="proto.google.ads.googleads.v4.common.DateRange"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.common.DateRange.prototype.toObject=function(o){return proto.google.ads.googleads.v4.common.DateRange.toObject(o,this)},proto.google.ads.googleads.v4.common.DateRange.toObject=function(o,e){var t,a={startDate:(t=e.getStartDate())&&google_protobuf_wrappers_pb.StringValue.toObject(o,t),endDate:(t=e.getEndDate())&&google_protobuf_wrappers_pb.StringValue.toObject(o,t)};return o&&(a.$jspbMessageInstance=e),a}),proto.google.ads.googleads.v4.common.DateRange.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),t=new proto.google.ads.googleads.v4.common.DateRange;return proto.google.ads.googleads.v4.common.DateRange.deserializeBinaryFromReader(t,e)},proto.google.ads.googleads.v4.common.DateRange.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var t=new google_protobuf_wrappers_pb.StringValue;e.readMessage(t,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),o.setStartDate(t);break;case 2:t=new google_protobuf_wrappers_pb.StringValue;e.readMessage(t,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),o.setEndDate(t);break;default:e.skipField()}}return o},proto.google.ads.googleads.v4.common.DateRange.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.common.DateRange.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.common.DateRange.serializeBinaryToWriter=function(o,e){var t=void 0;null!=(t=o.getStartDate())&&e.writeMessage(1,t,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(t=o.getEndDate())&&e.writeMessage(2,t,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v4.common.DateRange.prototype.getStartDate=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,1)},proto.google.ads.googleads.v4.common.DateRange.prototype.setStartDate=function(o){return jspb.Message.setWrapperField(this,1,o)},proto.google.ads.googleads.v4.common.DateRange.prototype.clearStartDate=function(){return this.setStartDate(void 0)},proto.google.ads.googleads.v4.common.DateRange.prototype.hasStartDate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v4.common.DateRange.prototype.getEndDate=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v4.common.DateRange.prototype.setEndDate=function(o){return jspb.Message.setWrapperField(this,2,o)},proto.google.ads.googleads.v4.common.DateRange.prototype.clearEndDate=function(){return this.setEndDate(void 0)},proto.google.ads.googleads.v4.common.DateRange.prototype.hasEndDate=function(){return null!=jspb.Message.getField(this,2)},goog.object.extend(exports,proto.google.ads.googleads.v4.common);