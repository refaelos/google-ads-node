var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.FrequencyCapTimeUnitEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.FrequencyCapTimeUnitEnum.FrequencyCapTimeUnit",null,global),proto.google.ads.googleads.v2.enums.FrequencyCapTimeUnitEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.FrequencyCapTimeUnitEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.FrequencyCapTimeUnitEnum.displayName="proto.google.ads.googleads.v2.enums.FrequencyCapTimeUnitEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.FrequencyCapTimeUnitEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.FrequencyCapTimeUnitEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.FrequencyCapTimeUnitEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.FrequencyCapTimeUnitEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.FrequencyCapTimeUnitEnum;return proto.google.ads.googleads.v2.enums.FrequencyCapTimeUnitEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.FrequencyCapTimeUnitEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.FrequencyCapTimeUnitEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.FrequencyCapTimeUnitEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.FrequencyCapTimeUnitEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.FrequencyCapTimeUnitEnum.FrequencyCapTimeUnit={UNSPECIFIED:0,UNKNOWN:1,DAY:2,WEEK:3,MONTH:4},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);