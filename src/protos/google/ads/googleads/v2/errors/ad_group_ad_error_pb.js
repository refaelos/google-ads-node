var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.errors.AdGroupAdErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.errors.AdGroupAdErrorEnum.AdGroupAdError",null,global),proto.google.ads.googleads.v2.errors.AdGroupAdErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.errors.AdGroupAdErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.errors.AdGroupAdErrorEnum.displayName="proto.google.ads.googleads.v2.errors.AdGroupAdErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.errors.AdGroupAdErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.errors.AdGroupAdErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.errors.AdGroupAdErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.errors.AdGroupAdErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.errors.AdGroupAdErrorEnum;return proto.google.ads.googleads.v2.errors.AdGroupAdErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.errors.AdGroupAdErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.errors.AdGroupAdErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.errors.AdGroupAdErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.errors.AdGroupAdErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.errors.AdGroupAdErrorEnum.AdGroupAdError={UNSPECIFIED:0,UNKNOWN:1,AD_GROUP_AD_LABEL_DOES_NOT_EXIST:2,AD_GROUP_AD_LABEL_ALREADY_EXISTS:3,AD_NOT_UNDER_ADGROUP:4,CANNOT_OPERATE_ON_REMOVED_ADGROUPAD:5,CANNOT_CREATE_DEPRECATED_ADS:6,CANNOT_CREATE_TEXT_ADS:7,EMPTY_FIELD:8,RESOURCE_REFERENCED_IN_MULTIPLE_OPS:9},goog.object.extend(exports,proto.google.ads.googleads.v2.errors);