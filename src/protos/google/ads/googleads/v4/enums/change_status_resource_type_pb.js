var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.ChangeStatusResourceTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.ChangeStatusResourceTypeEnum.ChangeStatusResourceType",null,global),proto.google.ads.googleads.v4.enums.ChangeStatusResourceTypeEnum=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.ChangeStatusResourceTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.ChangeStatusResourceTypeEnum.displayName="proto.google.ads.googleads.v4.enums.ChangeStatusResourceTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.ChangeStatusResourceTypeEnum.prototype.toObject=function(e){return proto.google.ads.googleads.v4.enums.ChangeStatusResourceTypeEnum.toObject(e,this)},proto.google.ads.googleads.v4.enums.ChangeStatusResourceTypeEnum.toObject=function(e,o){var s={};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.enums.ChangeStatusResourceTypeEnum.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.enums.ChangeStatusResourceTypeEnum;return proto.google.ads.googleads.v4.enums.ChangeStatusResourceTypeEnum.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.enums.ChangeStatusResourceTypeEnum.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){o.getFieldNumber();o.skipField()}return e},proto.google.ads.googleads.v4.enums.ChangeStatusResourceTypeEnum.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.ChangeStatusResourceTypeEnum.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.enums.ChangeStatusResourceTypeEnum.serializeBinaryToWriter=function(e,o){},proto.google.ads.googleads.v4.enums.ChangeStatusResourceTypeEnum.ChangeStatusResourceType={UNSPECIFIED:0,UNKNOWN:1,AD_GROUP:3,AD_GROUP_AD:4,AD_GROUP_CRITERION:5,CAMPAIGN:6,CAMPAIGN_CRITERION:7,FEED:9,FEED_ITEM:10,AD_GROUP_FEED:11,CAMPAIGN_FEED:12,AD_GROUP_BID_MODIFIER:13},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);