var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.MerchantCenterLinkStatusEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.MerchantCenterLinkStatusEnum.MerchantCenterLinkStatus",null,global),proto.google.ads.googleads.v2.enums.MerchantCenterLinkStatusEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.MerchantCenterLinkStatusEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.MerchantCenterLinkStatusEnum.displayName="proto.google.ads.googleads.v2.enums.MerchantCenterLinkStatusEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.MerchantCenterLinkStatusEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.MerchantCenterLinkStatusEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.MerchantCenterLinkStatusEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.MerchantCenterLinkStatusEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.MerchantCenterLinkStatusEnum;return proto.google.ads.googleads.v2.enums.MerchantCenterLinkStatusEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.MerchantCenterLinkStatusEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.MerchantCenterLinkStatusEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.MerchantCenterLinkStatusEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.MerchantCenterLinkStatusEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.MerchantCenterLinkStatusEnum.MerchantCenterLinkStatus={UNSPECIFIED:0,UNKNOWN:1,ENABLED:2,PENDING:3},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);