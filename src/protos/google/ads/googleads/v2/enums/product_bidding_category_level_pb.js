var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.ProductBiddingCategoryLevelEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.ProductBiddingCategoryLevelEnum.ProductBiddingCategoryLevel",null,global),proto.google.ads.googleads.v2.enums.ProductBiddingCategoryLevelEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.ProductBiddingCategoryLevelEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.ProductBiddingCategoryLevelEnum.displayName="proto.google.ads.googleads.v2.enums.ProductBiddingCategoryLevelEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.ProductBiddingCategoryLevelEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.ProductBiddingCategoryLevelEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.ProductBiddingCategoryLevelEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.ProductBiddingCategoryLevelEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.ProductBiddingCategoryLevelEnum;return proto.google.ads.googleads.v2.enums.ProductBiddingCategoryLevelEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.ProductBiddingCategoryLevelEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.ProductBiddingCategoryLevelEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.ProductBiddingCategoryLevelEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.ProductBiddingCategoryLevelEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.ProductBiddingCategoryLevelEnum.ProductBiddingCategoryLevel={UNSPECIFIED:0,UNKNOWN:1,LEVEL1:2,LEVEL2:3,LEVEL3:4,LEVEL4:5,LEVEL5:6},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);