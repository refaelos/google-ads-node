var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.errors.PartialFailureErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.errors.PartialFailureErrorEnum.PartialFailureError",null,global),proto.google.ads.googleads.v4.errors.PartialFailureErrorEnum=function(r){jspb.Message.initialize(this,r,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.errors.PartialFailureErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.errors.PartialFailureErrorEnum.displayName="proto.google.ads.googleads.v4.errors.PartialFailureErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.errors.PartialFailureErrorEnum.prototype.toObject=function(r){return proto.google.ads.googleads.v4.errors.PartialFailureErrorEnum.toObject(r,this)},proto.google.ads.googleads.v4.errors.PartialFailureErrorEnum.toObject=function(r,o){var e={};return r&&(e.$jspbMessageInstance=o),e}),proto.google.ads.googleads.v4.errors.PartialFailureErrorEnum.deserializeBinary=function(r){var o=new jspb.BinaryReader(r),e=new proto.google.ads.googleads.v4.errors.PartialFailureErrorEnum;return proto.google.ads.googleads.v4.errors.PartialFailureErrorEnum.deserializeBinaryFromReader(e,o)},proto.google.ads.googleads.v4.errors.PartialFailureErrorEnum.deserializeBinaryFromReader=function(r,o){for(;o.nextField()&&!o.isEndGroup();){o.getFieldNumber();o.skipField()}return r},proto.google.ads.googleads.v4.errors.PartialFailureErrorEnum.prototype.serializeBinary=function(){var r=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.errors.PartialFailureErrorEnum.serializeBinaryToWriter(this,r),r.getResultBuffer()},proto.google.ads.googleads.v4.errors.PartialFailureErrorEnum.serializeBinaryToWriter=function(r,o){},proto.google.ads.googleads.v4.errors.PartialFailureErrorEnum.PartialFailureError={UNSPECIFIED:0,UNKNOWN:1,PARTIAL_FAILURE_MODE_REQUIRED:2},goog.object.extend(exports,proto.google.ads.googleads.v4.errors);