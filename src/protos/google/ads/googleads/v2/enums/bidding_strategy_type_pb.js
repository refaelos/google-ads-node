var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.BiddingStrategyTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.BiddingStrategyTypeEnum.BiddingStrategyType",null,global),proto.google.ads.googleads.v2.enums.BiddingStrategyTypeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.BiddingStrategyTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.BiddingStrategyTypeEnum.displayName="proto.google.ads.googleads.v2.enums.BiddingStrategyTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.BiddingStrategyTypeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.BiddingStrategyTypeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.BiddingStrategyTypeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.BiddingStrategyTypeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.BiddingStrategyTypeEnum;return proto.google.ads.googleads.v2.enums.BiddingStrategyTypeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.BiddingStrategyTypeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.BiddingStrategyTypeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.BiddingStrategyTypeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.BiddingStrategyTypeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.BiddingStrategyTypeEnum.BiddingStrategyType={UNSPECIFIED:0,UNKNOWN:1,COMMISSION:16,ENHANCED_CPC:2,MANUAL_CPC:3,MANUAL_CPM:4,MANUAL_CPV:13,MAXIMIZE_CONVERSIONS:10,MAXIMIZE_CONVERSION_VALUE:11,PAGE_ONE_PROMOTED:5,PERCENT_CPC:12,TARGET_CPA:6,TARGET_CPM:14,TARGET_IMPRESSION_SHARE:15,TARGET_OUTRANK_SHARE:7,TARGET_ROAS:8,TARGET_SPEND:9},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);