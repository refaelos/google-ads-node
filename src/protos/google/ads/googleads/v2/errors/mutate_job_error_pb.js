var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.errors.MutateJobErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.errors.MutateJobErrorEnum.MutateJobError",null,global),proto.google.ads.googleads.v2.errors.MutateJobErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.errors.MutateJobErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.errors.MutateJobErrorEnum.displayName="proto.google.ads.googleads.v2.errors.MutateJobErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.errors.MutateJobErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.errors.MutateJobErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.errors.MutateJobErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.errors.MutateJobErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.errors.MutateJobErrorEnum;return proto.google.ads.googleads.v2.errors.MutateJobErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.errors.MutateJobErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.errors.MutateJobErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.errors.MutateJobErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.errors.MutateJobErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.errors.MutateJobErrorEnum.MutateJobError={UNSPECIFIED:0,UNKNOWN:1,CANNOT_MODIFY_JOB_AFTER_JOB_STARTS_RUNNING:2,EMPTY_OPERATIONS:3,INVALID_SEQUENCE_TOKEN:4,RESULTS_NOT_READY:5,INVALID_PAGE_SIZE:6},goog.object.extend(exports,proto.google.ads.googleads.v2.errors);