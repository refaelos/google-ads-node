var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.FeedItemTargetStatusEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.FeedItemTargetStatusEnum.FeedItemTargetStatus",null,global),proto.google.ads.googleads.v4.enums.FeedItemTargetStatusEnum=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.FeedItemTargetStatusEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.FeedItemTargetStatusEnum.displayName="proto.google.ads.googleads.v4.enums.FeedItemTargetStatusEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.FeedItemTargetStatusEnum.prototype.toObject=function(e){return proto.google.ads.googleads.v4.enums.FeedItemTargetStatusEnum.toObject(e,this)},proto.google.ads.googleads.v4.enums.FeedItemTargetStatusEnum.toObject=function(e,o){var t={};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.enums.FeedItemTargetStatusEnum.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),t=new proto.google.ads.googleads.v4.enums.FeedItemTargetStatusEnum;return proto.google.ads.googleads.v4.enums.FeedItemTargetStatusEnum.deserializeBinaryFromReader(t,o)},proto.google.ads.googleads.v4.enums.FeedItemTargetStatusEnum.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){o.getFieldNumber();o.skipField()}return e},proto.google.ads.googleads.v4.enums.FeedItemTargetStatusEnum.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.FeedItemTargetStatusEnum.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.enums.FeedItemTargetStatusEnum.serializeBinaryToWriter=function(e,o){},proto.google.ads.googleads.v4.enums.FeedItemTargetStatusEnum.FeedItemTargetStatus={UNSPECIFIED:0,UNKNOWN:1,ENABLED:2,REMOVED:3},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);