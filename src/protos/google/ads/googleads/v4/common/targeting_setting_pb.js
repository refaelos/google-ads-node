var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_enums_targeting_dimension_pb=require("../../../../../google/ads/googleads/v4/enums/targeting_dimension_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_targeting_dimension_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.common.TargetRestriction",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.common.TargetRestrictionOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.common.TargetRestrictionOperation.Operator",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.common.TargetingSetting",null,global),proto.google.ads.googleads.v4.common.TargetingSetting=function(o){jspb.Message.initialize(this,o,0,-1,proto.google.ads.googleads.v4.common.TargetingSetting.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.common.TargetingSetting,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.common.TargetingSetting.displayName="proto.google.ads.googleads.v4.common.TargetingSetting"),proto.google.ads.googleads.v4.common.TargetRestriction=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.common.TargetRestriction,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.common.TargetRestriction.displayName="proto.google.ads.googleads.v4.common.TargetRestriction"),proto.google.ads.googleads.v4.common.TargetRestrictionOperation=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.common.TargetRestrictionOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.common.TargetRestrictionOperation.displayName="proto.google.ads.googleads.v4.common.TargetRestrictionOperation"),proto.google.ads.googleads.v4.common.TargetingSetting.repeatedFields_=[1,2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.common.TargetingSetting.prototype.toObject=function(o){return proto.google.ads.googleads.v4.common.TargetingSetting.toObject(o,this)},proto.google.ads.googleads.v4.common.TargetingSetting.toObject=function(o,e){var t={targetRestrictionsList:jspb.Message.toObjectList(e.getTargetRestrictionsList(),proto.google.ads.googleads.v4.common.TargetRestriction.toObject,o),targetRestrictionOperationsList:jspb.Message.toObjectList(e.getTargetRestrictionOperationsList(),proto.google.ads.googleads.v4.common.TargetRestrictionOperation.toObject,o)};return o&&(t.$jspbMessageInstance=e),t}),proto.google.ads.googleads.v4.common.TargetingSetting.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),t=new proto.google.ads.googleads.v4.common.TargetingSetting;return proto.google.ads.googleads.v4.common.TargetingSetting.deserializeBinaryFromReader(t,e)},proto.google.ads.googleads.v4.common.TargetingSetting.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var t=new proto.google.ads.googleads.v4.common.TargetRestriction;e.readMessage(t,proto.google.ads.googleads.v4.common.TargetRestriction.deserializeBinaryFromReader),o.addTargetRestrictions(t);break;case 2:t=new proto.google.ads.googleads.v4.common.TargetRestrictionOperation;e.readMessage(t,proto.google.ads.googleads.v4.common.TargetRestrictionOperation.deserializeBinaryFromReader),o.addTargetRestrictionOperations(t);break;default:e.skipField()}}return o},proto.google.ads.googleads.v4.common.TargetingSetting.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.common.TargetingSetting.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.common.TargetingSetting.serializeBinaryToWriter=function(o,e){var t=void 0;0<(t=o.getTargetRestrictionsList()).length&&e.writeRepeatedMessage(1,t,proto.google.ads.googleads.v4.common.TargetRestriction.serializeBinaryToWriter),0<(t=o.getTargetRestrictionOperationsList()).length&&e.writeRepeatedMessage(2,t,proto.google.ads.googleads.v4.common.TargetRestrictionOperation.serializeBinaryToWriter)},proto.google.ads.googleads.v4.common.TargetingSetting.prototype.getTargetRestrictionsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.common.TargetRestriction,1)},proto.google.ads.googleads.v4.common.TargetingSetting.prototype.setTargetRestrictionsList=function(o){return jspb.Message.setRepeatedWrapperField(this,1,o)},proto.google.ads.googleads.v4.common.TargetingSetting.prototype.addTargetRestrictions=function(o,e){return jspb.Message.addToRepeatedWrapperField(this,1,o,proto.google.ads.googleads.v4.common.TargetRestriction,e)},proto.google.ads.googleads.v4.common.TargetingSetting.prototype.clearTargetRestrictionsList=function(){return this.setTargetRestrictionsList([])},proto.google.ads.googleads.v4.common.TargetingSetting.prototype.getTargetRestrictionOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.common.TargetRestrictionOperation,2)},proto.google.ads.googleads.v4.common.TargetingSetting.prototype.setTargetRestrictionOperationsList=function(o){return jspb.Message.setRepeatedWrapperField(this,2,o)},proto.google.ads.googleads.v4.common.TargetingSetting.prototype.addTargetRestrictionOperations=function(o,e){return jspb.Message.addToRepeatedWrapperField(this,2,o,proto.google.ads.googleads.v4.common.TargetRestrictionOperation,e)},proto.google.ads.googleads.v4.common.TargetingSetting.prototype.clearTargetRestrictionOperationsList=function(){return this.setTargetRestrictionOperationsList([])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.common.TargetRestriction.prototype.toObject=function(o){return proto.google.ads.googleads.v4.common.TargetRestriction.toObject(o,this)},proto.google.ads.googleads.v4.common.TargetRestriction.toObject=function(o,e){var t,g={targetingDimension:jspb.Message.getFieldWithDefault(e,1,0),bidOnly:(t=e.getBidOnly())&&google_protobuf_wrappers_pb.BoolValue.toObject(o,t)};return o&&(g.$jspbMessageInstance=e),g}),proto.google.ads.googleads.v4.common.TargetRestriction.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),t=new proto.google.ads.googleads.v4.common.TargetRestriction;return proto.google.ads.googleads.v4.common.TargetRestriction.deserializeBinaryFromReader(t,e)},proto.google.ads.googleads.v4.common.TargetRestriction.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var t=e.readEnum();o.setTargetingDimension(t);break;case 2:t=new google_protobuf_wrappers_pb.BoolValue;e.readMessage(t,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),o.setBidOnly(t);break;default:e.skipField()}}return o},proto.google.ads.googleads.v4.common.TargetRestriction.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.common.TargetRestriction.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.common.TargetRestriction.serializeBinaryToWriter=function(o,e){var t=void 0;0!==(t=o.getTargetingDimension())&&e.writeEnum(1,t),null!=(t=o.getBidOnly())&&e.writeMessage(2,t,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter)},proto.google.ads.googleads.v4.common.TargetRestriction.prototype.getTargetingDimension=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.ads.googleads.v4.common.TargetRestriction.prototype.setTargetingDimension=function(o){return jspb.Message.setProto3EnumField(this,1,o)},proto.google.ads.googleads.v4.common.TargetRestriction.prototype.getBidOnly=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,2)},proto.google.ads.googleads.v4.common.TargetRestriction.prototype.setBidOnly=function(o){return jspb.Message.setWrapperField(this,2,o)},proto.google.ads.googleads.v4.common.TargetRestriction.prototype.clearBidOnly=function(){return this.setBidOnly(void 0)},proto.google.ads.googleads.v4.common.TargetRestriction.prototype.hasBidOnly=function(){return null!=jspb.Message.getField(this,2)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.common.TargetRestrictionOperation.prototype.toObject=function(o){return proto.google.ads.googleads.v4.common.TargetRestrictionOperation.toObject(o,this)},proto.google.ads.googleads.v4.common.TargetRestrictionOperation.toObject=function(o,e){var t,g={operator:jspb.Message.getFieldWithDefault(e,1,0),value:(t=e.getValue())&&proto.google.ads.googleads.v4.common.TargetRestriction.toObject(o,t)};return o&&(g.$jspbMessageInstance=e),g}),proto.google.ads.googleads.v4.common.TargetRestrictionOperation.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),t=new proto.google.ads.googleads.v4.common.TargetRestrictionOperation;return proto.google.ads.googleads.v4.common.TargetRestrictionOperation.deserializeBinaryFromReader(t,e)},proto.google.ads.googleads.v4.common.TargetRestrictionOperation.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var t=e.readEnum();o.setOperator(t);break;case 2:t=new proto.google.ads.googleads.v4.common.TargetRestriction;e.readMessage(t,proto.google.ads.googleads.v4.common.TargetRestriction.deserializeBinaryFromReader),o.setValue(t);break;default:e.skipField()}}return o},proto.google.ads.googleads.v4.common.TargetRestrictionOperation.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.common.TargetRestrictionOperation.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.common.TargetRestrictionOperation.serializeBinaryToWriter=function(o,e){var t=void 0;0!==(t=o.getOperator())&&e.writeEnum(1,t),null!=(t=o.getValue())&&e.writeMessage(2,t,proto.google.ads.googleads.v4.common.TargetRestriction.serializeBinaryToWriter)},proto.google.ads.googleads.v4.common.TargetRestrictionOperation.Operator={UNSPECIFIED:0,UNKNOWN:1,ADD:2,REMOVE:3},proto.google.ads.googleads.v4.common.TargetRestrictionOperation.prototype.getOperator=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.ads.googleads.v4.common.TargetRestrictionOperation.prototype.setOperator=function(o){return jspb.Message.setProto3EnumField(this,1,o)},proto.google.ads.googleads.v4.common.TargetRestrictionOperation.prototype.getValue=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v4.common.TargetRestriction,2)},proto.google.ads.googleads.v4.common.TargetRestrictionOperation.prototype.setValue=function(o){return jspb.Message.setWrapperField(this,2,o)},proto.google.ads.googleads.v4.common.TargetRestrictionOperation.prototype.clearValue=function(){return this.setValue(void 0)},proto.google.ads.googleads.v4.common.TargetRestrictionOperation.prototype.hasValue=function(){return null!=jspb.Message.getField(this,2)},goog.object.extend(exports,proto.google.ads.googleads.v4.common);