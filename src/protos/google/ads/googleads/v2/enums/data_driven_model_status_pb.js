var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.DataDrivenModelStatusEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.DataDrivenModelStatusEnum.DataDrivenModelStatus",null,global),proto.google.ads.googleads.v2.enums.DataDrivenModelStatusEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.DataDrivenModelStatusEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.DataDrivenModelStatusEnum.displayName="proto.google.ads.googleads.v2.enums.DataDrivenModelStatusEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.DataDrivenModelStatusEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.DataDrivenModelStatusEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.DataDrivenModelStatusEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.DataDrivenModelStatusEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.DataDrivenModelStatusEnum;return proto.google.ads.googleads.v2.enums.DataDrivenModelStatusEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.DataDrivenModelStatusEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.DataDrivenModelStatusEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.DataDrivenModelStatusEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.DataDrivenModelStatusEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.DataDrivenModelStatusEnum.DataDrivenModelStatus={UNSPECIFIED:0,UNKNOWN:1,AVAILABLE:2,STALE:3,EXPIRED:4,NEVER_GENERATED:5},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);