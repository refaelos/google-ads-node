var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.resources.ExpandedLandingPageView",null,global),proto.google.ads.googleads.v3.resources.ExpandedLandingPageView=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.resources.ExpandedLandingPageView,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.resources.ExpandedLandingPageView.displayName="proto.google.ads.googleads.v3.resources.ExpandedLandingPageView"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.resources.ExpandedLandingPageView.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.resources.ExpandedLandingPageView.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.resources.ExpandedLandingPageView.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),expandedFinalUrl:(f=msg.getExpandedFinalUrl())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.resources.ExpandedLandingPageView.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.resources.ExpandedLandingPageView;return proto.google.ads.googleads.v3.resources.ExpandedLandingPageView.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.resources.ExpandedLandingPageView.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setExpandedFinalUrl(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.resources.ExpandedLandingPageView.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.resources.ExpandedLandingPageView.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.resources.ExpandedLandingPageView.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getExpandedFinalUrl())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v3.resources.ExpandedLandingPageView.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.resources.ExpandedLandingPageView.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.resources.ExpandedLandingPageView.prototype.getExpandedFinalUrl=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v3.resources.ExpandedLandingPageView.prototype.setExpandedFinalUrl=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v3.resources.ExpandedLandingPageView.prototype.clearExpandedFinalUrl=function(){this.setExpandedFinalUrl(void 0)},proto.google.ads.googleads.v3.resources.ExpandedLandingPageView.prototype.hasExpandedFinalUrl=function(){return null!=jspb.Message.getField(this,2)},goog.object.extend(exports,proto.google.ads.googleads.v3.resources);