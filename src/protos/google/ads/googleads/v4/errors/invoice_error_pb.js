var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.errors.InvoiceErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.errors.InvoiceErrorEnum.InvoiceError",null,global),proto.google.ads.googleads.v4.errors.InvoiceErrorEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.errors.InvoiceErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.errors.InvoiceErrorEnum.displayName="proto.google.ads.googleads.v4.errors.InvoiceErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.errors.InvoiceErrorEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.errors.InvoiceErrorEnum.toObject(o,this)},proto.google.ads.googleads.v4.errors.InvoiceErrorEnum.toObject=function(o,r){var e={};return o&&(e.$jspbMessageInstance=r),e}),proto.google.ads.googleads.v4.errors.InvoiceErrorEnum.deserializeBinary=function(o){var r=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.errors.InvoiceErrorEnum;return proto.google.ads.googleads.v4.errors.InvoiceErrorEnum.deserializeBinaryFromReader(e,r)},proto.google.ads.googleads.v4.errors.InvoiceErrorEnum.deserializeBinaryFromReader=function(o,r){for(;r.nextField()&&!r.isEndGroup();){r.getFieldNumber();r.skipField()}return o},proto.google.ads.googleads.v4.errors.InvoiceErrorEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.errors.InvoiceErrorEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.errors.InvoiceErrorEnum.serializeBinaryToWriter=function(o,r){},proto.google.ads.googleads.v4.errors.InvoiceErrorEnum.InvoiceError={UNSPECIFIED:0,UNKNOWN:1,YEAR_MONTH_TOO_OLD:2,NOT_INVOICED_CUSTOMER:3},goog.object.extend(exports,proto.google.ads.googleads.v4.errors);