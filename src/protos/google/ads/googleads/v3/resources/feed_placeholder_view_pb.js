var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_enums_placeholder_type_pb=require("../../../../../google/ads/googleads/v3/enums/placeholder_type_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.resources.FeedPlaceholderView",null,global),proto.google.ads.googleads.v3.resources.FeedPlaceholderView=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.resources.FeedPlaceholderView,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.resources.FeedPlaceholderView.displayName="proto.google.ads.googleads.v3.resources.FeedPlaceholderView"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.resources.FeedPlaceholderView.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.resources.FeedPlaceholderView.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.resources.FeedPlaceholderView.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),placeholderType:jspb.Message.getFieldWithDefault(msg,2,0)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.resources.FeedPlaceholderView.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.resources.FeedPlaceholderView;return proto.google.ads.googleads.v3.resources.FeedPlaceholderView.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.resources.FeedPlaceholderView.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=reader.readEnum();msg.setPlaceholderType(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.resources.FeedPlaceholderView.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.resources.FeedPlaceholderView.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.resources.FeedPlaceholderView.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),0!==(f=message.getPlaceholderType())&&writer.writeEnum(2,f)},proto.google.ads.googleads.v3.resources.FeedPlaceholderView.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.resources.FeedPlaceholderView.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.resources.FeedPlaceholderView.prototype.getPlaceholderType=function(){return jspb.Message.getFieldWithDefault(this,2,0)},proto.google.ads.googleads.v3.resources.FeedPlaceholderView.prototype.setPlaceholderType=function(value){jspb.Message.setProto3EnumField(this,2,value)},goog.object.extend(exports,proto.google.ads.googleads.v3.resources);