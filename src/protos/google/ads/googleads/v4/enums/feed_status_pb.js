var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.FeedStatusEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.FeedStatusEnum.FeedStatus",null,global),proto.google.ads.googleads.v4.enums.FeedStatusEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.FeedStatusEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.FeedStatusEnum.displayName="proto.google.ads.googleads.v4.enums.FeedStatusEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.FeedStatusEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.FeedStatusEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.FeedStatusEnum.toObject=function(o,e){var s={};return o&&(s.$jspbMessageInstance=e),s}),proto.google.ads.googleads.v4.enums.FeedStatusEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),s=new proto.google.ads.googleads.v4.enums.FeedStatusEnum;return proto.google.ads.googleads.v4.enums.FeedStatusEnum.deserializeBinaryFromReader(s,e)},proto.google.ads.googleads.v4.enums.FeedStatusEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.FeedStatusEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.FeedStatusEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.FeedStatusEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.FeedStatusEnum.FeedStatus={UNSPECIFIED:0,UNKNOWN:1,ENABLED:2,REMOVED:3},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);