var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.ParentalStatusTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.ParentalStatusTypeEnum.ParentalStatusType",null,global),proto.google.ads.googleads.v2.enums.ParentalStatusTypeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.ParentalStatusTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.ParentalStatusTypeEnum.displayName="proto.google.ads.googleads.v2.enums.ParentalStatusTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.ParentalStatusTypeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.ParentalStatusTypeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.ParentalStatusTypeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.ParentalStatusTypeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.ParentalStatusTypeEnum;return proto.google.ads.googleads.v2.enums.ParentalStatusTypeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.ParentalStatusTypeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.ParentalStatusTypeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.ParentalStatusTypeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.ParentalStatusTypeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.ParentalStatusTypeEnum.ParentalStatusType={UNSPECIFIED:0,UNKNOWN:1,PARENT:300,NOT_A_PARENT:301,UNDETERMINED:302},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);