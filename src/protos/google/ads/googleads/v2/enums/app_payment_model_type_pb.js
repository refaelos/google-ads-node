var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.AppPaymentModelTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.AppPaymentModelTypeEnum.AppPaymentModelType",null,global),proto.google.ads.googleads.v2.enums.AppPaymentModelTypeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.AppPaymentModelTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.AppPaymentModelTypeEnum.displayName="proto.google.ads.googleads.v2.enums.AppPaymentModelTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.AppPaymentModelTypeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.AppPaymentModelTypeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.AppPaymentModelTypeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.AppPaymentModelTypeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.AppPaymentModelTypeEnum;return proto.google.ads.googleads.v2.enums.AppPaymentModelTypeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.AppPaymentModelTypeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.AppPaymentModelTypeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.AppPaymentModelTypeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.AppPaymentModelTypeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.AppPaymentModelTypeEnum.AppPaymentModelType={UNSPECIFIED:0,UNKNOWN:1,PAID:30},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);