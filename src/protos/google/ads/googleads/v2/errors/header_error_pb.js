var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.errors.HeaderErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.errors.HeaderErrorEnum.HeaderError",null,global),proto.google.ads.googleads.v2.errors.HeaderErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.errors.HeaderErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.errors.HeaderErrorEnum.displayName="proto.google.ads.googleads.v2.errors.HeaderErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.errors.HeaderErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.errors.HeaderErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.errors.HeaderErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.errors.HeaderErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.errors.HeaderErrorEnum;return proto.google.ads.googleads.v2.errors.HeaderErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.errors.HeaderErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.errors.HeaderErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.errors.HeaderErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.errors.HeaderErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.errors.HeaderErrorEnum.HeaderError={UNSPECIFIED:0,UNKNOWN:1,INVALID_LOGIN_CUSTOMER_ID:3},goog.object.extend(exports,proto.google.ads.googleads.v2.errors);