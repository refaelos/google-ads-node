var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.CustomerClient",null,global),proto.google.ads.googleads.v4.resources.CustomerClient=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.resources.CustomerClient,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.CustomerClient.displayName="proto.google.ads.googleads.v4.resources.CustomerClient"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.CustomerClient.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.CustomerClient.toObject(e,this)},proto.google.ads.googleads.v4.resources.CustomerClient.toObject=function(e,o){var r,t={resourceName:jspb.Message.getFieldWithDefault(o,1,""),clientCustomer:(r=o.getClientCustomer())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),hidden:(r=o.getHidden())&&google_protobuf_wrappers_pb.BoolValue.toObject(e,r),level:(r=o.getLevel())&&google_protobuf_wrappers_pb.Int64Value.toObject(e,r),timeZone:(r=o.getTimeZone())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),testAccount:(r=o.getTestAccount())&&google_protobuf_wrappers_pb.BoolValue.toObject(e,r),manager:(r=o.getManager())&&google_protobuf_wrappers_pb.BoolValue.toObject(e,r),descriptiveName:(r=o.getDescriptiveName())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),currencyCode:(r=o.getCurrencyCode())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),id:(r=o.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(e,r)};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.resources.CustomerClient.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.resources.CustomerClient;return proto.google.ads.googleads.v4.resources.CustomerClient.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.resources.CustomerClient.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setResourceName(r);break;case 3:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setClientCustomer(r);break;case 4:r=new google_protobuf_wrappers_pb.BoolValue;o.readMessage(r,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),e.setHidden(r);break;case 5:r=new google_protobuf_wrappers_pb.Int64Value;o.readMessage(r,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),e.setLevel(r);break;case 6:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setTimeZone(r);break;case 7:r=new google_protobuf_wrappers_pb.BoolValue;o.readMessage(r,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),e.setTestAccount(r);break;case 8:r=new google_protobuf_wrappers_pb.BoolValue;o.readMessage(r,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),e.setManager(r);break;case 9:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setDescriptiveName(r);break;case 10:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setCurrencyCode(r);break;case 11:r=new google_protobuf_wrappers_pb.Int64Value;o.readMessage(r,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),e.setId(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.CustomerClient.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.CustomerClient.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getResourceName()).length&&o.writeString(1,r),null!=(r=e.getClientCustomer())&&o.writeMessage(3,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getHidden())&&o.writeMessage(4,r,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),null!=(r=e.getLevel())&&o.writeMessage(5,r,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(r=e.getTimeZone())&&o.writeMessage(6,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getTestAccount())&&o.writeMessage(7,r,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),null!=(r=e.getManager())&&o.writeMessage(8,r,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),null!=(r=e.getDescriptiveName())&&o.writeMessage(9,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getCurrencyCode())&&o.writeMessage(10,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getId())&&o.writeMessage(11,r,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.getClientCustomer=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.setClientCustomer=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.clearClientCustomer=function(){return this.setClientCustomer(void 0)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.hasClientCustomer=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.getHidden=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,4)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.setHidden=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.clearHidden=function(){return this.setHidden(void 0)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.hasHidden=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.getLevel=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,5)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.setLevel=function(e){return jspb.Message.setWrapperField(this,5,e)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.clearLevel=function(){return this.setLevel(void 0)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.hasLevel=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.getTimeZone=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,6)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.setTimeZone=function(e){return jspb.Message.setWrapperField(this,6,e)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.clearTimeZone=function(){return this.setTimeZone(void 0)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.hasTimeZone=function(){return null!=jspb.Message.getField(this,6)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.getTestAccount=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,7)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.setTestAccount=function(e){return jspb.Message.setWrapperField(this,7,e)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.clearTestAccount=function(){return this.setTestAccount(void 0)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.hasTestAccount=function(){return null!=jspb.Message.getField(this,7)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.getManager=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,8)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.setManager=function(e){return jspb.Message.setWrapperField(this,8,e)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.clearManager=function(){return this.setManager(void 0)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.hasManager=function(){return null!=jspb.Message.getField(this,8)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.getDescriptiveName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,9)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.setDescriptiveName=function(e){return jspb.Message.setWrapperField(this,9,e)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.clearDescriptiveName=function(){return this.setDescriptiveName(void 0)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.hasDescriptiveName=function(){return null!=jspb.Message.getField(this,9)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.getCurrencyCode=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,10)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.setCurrencyCode=function(e){return jspb.Message.setWrapperField(this,10,e)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.clearCurrencyCode=function(){return this.setCurrencyCode(void 0)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.hasCurrencyCode=function(){return null!=jspb.Message.getField(this,10)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,11)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.setId=function(e){return jspb.Message.setWrapperField(this,11,e)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.clearId=function(){return this.setId(void 0)},proto.google.ads.googleads.v4.resources.CustomerClient.prototype.hasId=function(){return null!=jspb.Message.getField(this,11)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);