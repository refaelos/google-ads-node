var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.AgeRangeTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.AgeRangeTypeEnum.AgeRangeType",null,global),proto.google.ads.googleads.v2.enums.AgeRangeTypeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.AgeRangeTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.AgeRangeTypeEnum.displayName="proto.google.ads.googleads.v2.enums.AgeRangeTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.AgeRangeTypeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.AgeRangeTypeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.AgeRangeTypeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.AgeRangeTypeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.AgeRangeTypeEnum;return proto.google.ads.googleads.v2.enums.AgeRangeTypeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.AgeRangeTypeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.AgeRangeTypeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.AgeRangeTypeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.AgeRangeTypeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.AgeRangeTypeEnum.AgeRangeType={UNSPECIFIED:0,UNKNOWN:1,AGE_RANGE_18_24:503001,AGE_RANGE_25_34:503002,AGE_RANGE_35_44:503003,AGE_RANGE_45_54:503004,AGE_RANGE_55_64:503005,AGE_RANGE_65_UP:503006,AGE_RANGE_UNDETERMINED:503999},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);