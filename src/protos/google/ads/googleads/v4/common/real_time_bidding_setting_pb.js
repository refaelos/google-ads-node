var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.common.RealTimeBiddingSetting",null,global),proto.google.ads.googleads.v4.common.RealTimeBiddingSetting=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.common.RealTimeBiddingSetting,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.common.RealTimeBiddingSetting.displayName="proto.google.ads.googleads.v4.common.RealTimeBiddingSetting"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.common.RealTimeBiddingSetting.prototype.toObject=function(o){return proto.google.ads.googleads.v4.common.RealTimeBiddingSetting.toObject(o,this)},proto.google.ads.googleads.v4.common.RealTimeBiddingSetting.toObject=function(o,e){var g,t={optIn:(g=e.getOptIn())&&google_protobuf_wrappers_pb.BoolValue.toObject(o,g)};return o&&(t.$jspbMessageInstance=e),t}),proto.google.ads.googleads.v4.common.RealTimeBiddingSetting.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),g=new proto.google.ads.googleads.v4.common.RealTimeBiddingSetting;return proto.google.ads.googleads.v4.common.RealTimeBiddingSetting.deserializeBinaryFromReader(g,e)},proto.google.ads.googleads.v4.common.RealTimeBiddingSetting.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var g=new google_protobuf_wrappers_pb.BoolValue;e.readMessage(g,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),o.setOptIn(g);break;default:e.skipField()}}return o},proto.google.ads.googleads.v4.common.RealTimeBiddingSetting.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.common.RealTimeBiddingSetting.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.common.RealTimeBiddingSetting.serializeBinaryToWriter=function(o,e){var g=void 0;null!=(g=o.getOptIn())&&e.writeMessage(1,g,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter)},proto.google.ads.googleads.v4.common.RealTimeBiddingSetting.prototype.getOptIn=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,1)},proto.google.ads.googleads.v4.common.RealTimeBiddingSetting.prototype.setOptIn=function(o){return jspb.Message.setWrapperField(this,1,o)},proto.google.ads.googleads.v4.common.RealTimeBiddingSetting.prototype.clearOptIn=function(){return this.setOptIn(void 0)},proto.google.ads.googleads.v4.common.RealTimeBiddingSetting.prototype.hasOptIn=function(){return null!=jspb.Message.getField(this,1)},goog.object.extend(exports,proto.google.ads.googleads.v4.common);