var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.errors.LanguageCodeErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.errors.LanguageCodeErrorEnum.LanguageCodeError",null,global),proto.google.ads.googleads.v2.errors.LanguageCodeErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.errors.LanguageCodeErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.errors.LanguageCodeErrorEnum.displayName="proto.google.ads.googleads.v2.errors.LanguageCodeErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.errors.LanguageCodeErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.errors.LanguageCodeErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.errors.LanguageCodeErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.errors.LanguageCodeErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.errors.LanguageCodeErrorEnum;return proto.google.ads.googleads.v2.errors.LanguageCodeErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.errors.LanguageCodeErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.errors.LanguageCodeErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.errors.LanguageCodeErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.errors.LanguageCodeErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.errors.LanguageCodeErrorEnum.LanguageCodeError={UNSPECIFIED:0,UNKNOWN:1,LANGUAGE_CODE_NOT_FOUND:2,INVALID_LANGUAGE_CODE:3},goog.object.extend(exports,proto.google.ads.googleads.v2.errors);