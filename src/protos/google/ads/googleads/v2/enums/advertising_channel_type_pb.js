var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.AdvertisingChannelTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.AdvertisingChannelTypeEnum.AdvertisingChannelType",null,global),proto.google.ads.googleads.v2.enums.AdvertisingChannelTypeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.AdvertisingChannelTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.AdvertisingChannelTypeEnum.displayName="proto.google.ads.googleads.v2.enums.AdvertisingChannelTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.AdvertisingChannelTypeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.AdvertisingChannelTypeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.AdvertisingChannelTypeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.AdvertisingChannelTypeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.AdvertisingChannelTypeEnum;return proto.google.ads.googleads.v2.enums.AdvertisingChannelTypeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.AdvertisingChannelTypeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.AdvertisingChannelTypeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.AdvertisingChannelTypeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.AdvertisingChannelTypeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.AdvertisingChannelTypeEnum.AdvertisingChannelType={UNSPECIFIED:0,UNKNOWN:1,SEARCH:2,DISPLAY:3,SHOPPING:4,HOTEL:5,VIDEO:6,MULTI_CHANNEL:7},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);