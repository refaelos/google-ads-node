var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v2_enums_tracking_code_page_format_pb=require("../../../../../google/ads/googleads/v2/enums/tracking_code_page_format_pb.js"),google_ads_googleads_v2_enums_tracking_code_type_pb=require("../../../../../google/ads/googleads/v2/enums/tracking_code_type_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.common.TagSnippet",null,global),proto.google.ads.googleads.v2.common.TagSnippet=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.common.TagSnippet,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.common.TagSnippet.displayName="proto.google.ads.googleads.v2.common.TagSnippet"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.common.TagSnippet.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.common.TagSnippet.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.common.TagSnippet.toObject=function(includeInstance,msg){var f,obj={type:jspb.Message.getFieldWithDefault(msg,1,0),pageFormat:jspb.Message.getFieldWithDefault(msg,2,0),globalSiteTag:(f=msg.getGlobalSiteTag())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),eventSnippet:(f=msg.getEventSnippet())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.common.TagSnippet.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.common.TagSnippet;return proto.google.ads.googleads.v2.common.TagSnippet.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.common.TagSnippet.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readEnum();msg.setType(value);break;case 2:value=reader.readEnum();msg.setPageFormat(value);break;case 3:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setGlobalSiteTag(value);break;case 4:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setEventSnippet(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v2.common.TagSnippet.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.common.TagSnippet.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.common.TagSnippet.serializeBinaryToWriter=function(message,writer){var f=void 0;0!==(f=message.getType())&&writer.writeEnum(1,f),0!==(f=message.getPageFormat())&&writer.writeEnum(2,f),null!=(f=message.getGlobalSiteTag())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getEventSnippet())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v2.common.TagSnippet.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.ads.googleads.v2.common.TagSnippet.prototype.setType=function(value){jspb.Message.setProto3EnumField(this,1,value)},proto.google.ads.googleads.v2.common.TagSnippet.prototype.getPageFormat=function(){return jspb.Message.getFieldWithDefault(this,2,0)},proto.google.ads.googleads.v2.common.TagSnippet.prototype.setPageFormat=function(value){jspb.Message.setProto3EnumField(this,2,value)},proto.google.ads.googleads.v2.common.TagSnippet.prototype.getGlobalSiteTag=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v2.common.TagSnippet.prototype.setGlobalSiteTag=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v2.common.TagSnippet.prototype.clearGlobalSiteTag=function(){this.setGlobalSiteTag(void 0)},proto.google.ads.googleads.v2.common.TagSnippet.prototype.hasGlobalSiteTag=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v2.common.TagSnippet.prototype.getEventSnippet=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v2.common.TagSnippet.prototype.setEventSnippet=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v2.common.TagSnippet.prototype.clearEventSnippet=function(){this.setEventSnippet(void 0)},proto.google.ads.googleads.v2.common.TagSnippet.prototype.hasEventSnippet=function(){return null!=jspb.Message.getField(this,4)},goog.object.extend(exports,proto.google.ads.googleads.v2.common);