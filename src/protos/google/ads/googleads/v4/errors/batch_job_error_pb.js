var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.errors.BatchJobErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.errors.BatchJobErrorEnum.BatchJobError",null,global),proto.google.ads.googleads.v4.errors.BatchJobErrorEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.errors.BatchJobErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.errors.BatchJobErrorEnum.displayName="proto.google.ads.googleads.v4.errors.BatchJobErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.errors.BatchJobErrorEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.errors.BatchJobErrorEnum.toObject(o,this)},proto.google.ads.googleads.v4.errors.BatchJobErrorEnum.toObject=function(o,r){var e={};return o&&(e.$jspbMessageInstance=r),e}),proto.google.ads.googleads.v4.errors.BatchJobErrorEnum.deserializeBinary=function(o){var r=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.errors.BatchJobErrorEnum;return proto.google.ads.googleads.v4.errors.BatchJobErrorEnum.deserializeBinaryFromReader(e,r)},proto.google.ads.googleads.v4.errors.BatchJobErrorEnum.deserializeBinaryFromReader=function(o,r){for(;r.nextField()&&!r.isEndGroup();){r.getFieldNumber();r.skipField()}return o},proto.google.ads.googleads.v4.errors.BatchJobErrorEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.errors.BatchJobErrorEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.errors.BatchJobErrorEnum.serializeBinaryToWriter=function(o,r){},proto.google.ads.googleads.v4.errors.BatchJobErrorEnum.BatchJobError={UNSPECIFIED:0,UNKNOWN:1,CANNOT_MODIFY_JOB_AFTER_JOB_STARTS_RUNNING:2,EMPTY_OPERATIONS:3,INVALID_SEQUENCE_TOKEN:4,RESULTS_NOT_READY:5,INVALID_PAGE_SIZE:6,CAN_ONLY_REMOVE_PENDING_JOB:7},goog.object.extend(exports,proto.google.ads.googleads.v4.errors);