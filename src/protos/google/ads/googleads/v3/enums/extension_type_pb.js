var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.ExtensionTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.ExtensionTypeEnum.ExtensionType",null,global),proto.google.ads.googleads.v3.enums.ExtensionTypeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.ExtensionTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.ExtensionTypeEnum.displayName="proto.google.ads.googleads.v3.enums.ExtensionTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.ExtensionTypeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.ExtensionTypeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.ExtensionTypeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.ExtensionTypeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.ExtensionTypeEnum;return proto.google.ads.googleads.v3.enums.ExtensionTypeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.ExtensionTypeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.ExtensionTypeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.ExtensionTypeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.ExtensionTypeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.ExtensionTypeEnum.ExtensionType={UNSPECIFIED:0,UNKNOWN:1,NONE:2,APP:3,CALL:4,CALLOUT:5,MESSAGE:6,PRICE:7,PROMOTION:8,SITELINK:10,STRUCTURED_SNIPPET:11,LOCATION:12,AFFILIATE_LOCATION:13,HOTEL_CALLOUT:15},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);