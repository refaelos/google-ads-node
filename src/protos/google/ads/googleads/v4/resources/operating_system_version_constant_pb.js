var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_enums_operating_system_version_operator_type_pb=require("../../../../../google/ads/googleads/v4/enums/operating_system_version_operator_type_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_operating_system_version_operator_type_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant",null,global),proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.displayName="proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.toObject(e,this)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.toObject=function(e,o){var r,s={resourceName:jspb.Message.getFieldWithDefault(o,1,""),id:(r=o.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(e,r),name:(r=o.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),osMajorVersion:(r=o.getOsMajorVersion())&&google_protobuf_wrappers_pb.Int32Value.toObject(e,r),osMinorVersion:(r=o.getOsMinorVersion())&&google_protobuf_wrappers_pb.Int32Value.toObject(e,r),operatorType:jspb.Message.getFieldWithDefault(o,6,0)};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant;return proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setResourceName(r);break;case 2:r=new google_protobuf_wrappers_pb.Int64Value;o.readMessage(r,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),e.setId(r);break;case 3:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setName(r);break;case 4:r=new google_protobuf_wrappers_pb.Int32Value;o.readMessage(r,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader),e.setOsMajorVersion(r);break;case 5:r=new google_protobuf_wrappers_pb.Int32Value;o.readMessage(r,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader),e.setOsMinorVersion(r);break;case 6:r=o.readEnum();e.setOperatorType(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getResourceName()).length&&o.writeString(1,r),null!=(r=e.getId())&&o.writeMessage(2,r,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(r=e.getName())&&o.writeMessage(3,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getOsMajorVersion())&&o.writeMessage(4,r,google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter),null!=(r=e.getOsMinorVersion())&&o.writeMessage(5,r,google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter),0!==(r=e.getOperatorType())&&o.writeEnum(6,r)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.setId=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.clearId=function(){return this.setId(void 0)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.hasId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.setName=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.clearName=function(){return this.setName(void 0)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.hasName=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.getOsMajorVersion=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int32Value,4)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.setOsMajorVersion=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.clearOsMajorVersion=function(){return this.setOsMajorVersion(void 0)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.hasOsMajorVersion=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.getOsMinorVersion=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int32Value,5)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.setOsMinorVersion=function(e){return jspb.Message.setWrapperField(this,5,e)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.clearOsMinorVersion=function(){return this.setOsMinorVersion(void 0)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.hasOsMinorVersion=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.getOperatorType=function(){return jspb.Message.getFieldWithDefault(this,6,0)},proto.google.ads.googleads.v4.resources.OperatingSystemVersionConstant.prototype.setOperatorType=function(e){return jspb.Message.setProto3EnumField(this,6,e)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);