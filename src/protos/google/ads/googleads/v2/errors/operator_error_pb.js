var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.errors.OperatorErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.errors.OperatorErrorEnum.OperatorError",null,global),proto.google.ads.googleads.v2.errors.OperatorErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.errors.OperatorErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.errors.OperatorErrorEnum.displayName="proto.google.ads.googleads.v2.errors.OperatorErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.errors.OperatorErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.errors.OperatorErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.errors.OperatorErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.errors.OperatorErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.errors.OperatorErrorEnum;return proto.google.ads.googleads.v2.errors.OperatorErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.errors.OperatorErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.errors.OperatorErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.errors.OperatorErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.errors.OperatorErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.errors.OperatorErrorEnum.OperatorError={UNSPECIFIED:0,UNKNOWN:1,OPERATOR_NOT_SUPPORTED:2},goog.object.extend(exports,proto.google.ads.googleads.v2.errors);