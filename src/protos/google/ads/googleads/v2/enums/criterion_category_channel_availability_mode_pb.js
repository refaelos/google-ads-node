var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.CriterionCategoryChannelAvailabilityModeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.CriterionCategoryChannelAvailabilityModeEnum.CriterionCategoryChannelAvailabilityMode",null,global),proto.google.ads.googleads.v2.enums.CriterionCategoryChannelAvailabilityModeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.CriterionCategoryChannelAvailabilityModeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.CriterionCategoryChannelAvailabilityModeEnum.displayName="proto.google.ads.googleads.v2.enums.CriterionCategoryChannelAvailabilityModeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.CriterionCategoryChannelAvailabilityModeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.CriterionCategoryChannelAvailabilityModeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.CriterionCategoryChannelAvailabilityModeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.CriterionCategoryChannelAvailabilityModeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.CriterionCategoryChannelAvailabilityModeEnum;return proto.google.ads.googleads.v2.enums.CriterionCategoryChannelAvailabilityModeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.CriterionCategoryChannelAvailabilityModeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.CriterionCategoryChannelAvailabilityModeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.CriterionCategoryChannelAvailabilityModeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.CriterionCategoryChannelAvailabilityModeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.CriterionCategoryChannelAvailabilityModeEnum.CriterionCategoryChannelAvailabilityMode={UNSPECIFIED:0,UNKNOWN:1,ALL_CHANNELS:2,CHANNEL_TYPE_AND_ALL_SUBTYPES:3,CHANNEL_TYPE_AND_SUBSET_SUBTYPES:4},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);