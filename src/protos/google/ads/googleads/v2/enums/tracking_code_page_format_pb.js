var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum.TrackingCodePageFormat",null,global),proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum.displayName="proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum;return proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum.TrackingCodePageFormat={UNSPECIFIED:0,UNKNOWN:1,HTML:2,AMP:3},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);