var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.errors.AdCustomizerErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.errors.AdCustomizerErrorEnum.AdCustomizerError",null,global),proto.google.ads.googleads.v2.errors.AdCustomizerErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.errors.AdCustomizerErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.errors.AdCustomizerErrorEnum.displayName="proto.google.ads.googleads.v2.errors.AdCustomizerErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.errors.AdCustomizerErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.errors.AdCustomizerErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.errors.AdCustomizerErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.errors.AdCustomizerErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.errors.AdCustomizerErrorEnum;return proto.google.ads.googleads.v2.errors.AdCustomizerErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.errors.AdCustomizerErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.errors.AdCustomizerErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.errors.AdCustomizerErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.errors.AdCustomizerErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.errors.AdCustomizerErrorEnum.AdCustomizerError={UNSPECIFIED:0,UNKNOWN:1,COUNTDOWN_INVALID_DATE_FORMAT:2,COUNTDOWN_DATE_IN_PAST:3,COUNTDOWN_INVALID_LOCALE:4,COUNTDOWN_INVALID_START_DAYS_BEFORE:5,UNKNOWN_USER_LIST:6},goog.object.extend(exports,proto.google.ads.googleads.v2.errors);