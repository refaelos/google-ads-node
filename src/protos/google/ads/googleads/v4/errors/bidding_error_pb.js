var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.errors.BiddingErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.errors.BiddingErrorEnum.BiddingError",null,global),proto.google.ads.googleads.v4.errors.BiddingErrorEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.errors.BiddingErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.errors.BiddingErrorEnum.displayName="proto.google.ads.googleads.v4.errors.BiddingErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.errors.BiddingErrorEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.errors.BiddingErrorEnum.toObject(o,this)},proto.google.ads.googleads.v4.errors.BiddingErrorEnum.toObject=function(o,r){var e={};return o&&(e.$jspbMessageInstance=r),e}),proto.google.ads.googleads.v4.errors.BiddingErrorEnum.deserializeBinary=function(o){var r=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.errors.BiddingErrorEnum;return proto.google.ads.googleads.v4.errors.BiddingErrorEnum.deserializeBinaryFromReader(e,r)},proto.google.ads.googleads.v4.errors.BiddingErrorEnum.deserializeBinaryFromReader=function(o,r){for(;r.nextField()&&!r.isEndGroup();){r.getFieldNumber();r.skipField()}return o},proto.google.ads.googleads.v4.errors.BiddingErrorEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.errors.BiddingErrorEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.errors.BiddingErrorEnum.serializeBinaryToWriter=function(o,r){},proto.google.ads.googleads.v4.errors.BiddingErrorEnum.BiddingError={UNSPECIFIED:0,UNKNOWN:1,BIDDING_STRATEGY_TRANSITION_NOT_ALLOWED:2,CANNOT_ATTACH_BIDDING_STRATEGY_TO_CAMPAIGN:7,INVALID_ANONYMOUS_BIDDING_STRATEGY_TYPE:10,INVALID_BIDDING_STRATEGY_TYPE:14,INVALID_BID:17,BIDDING_STRATEGY_NOT_AVAILABLE_FOR_ACCOUNT_TYPE:18,CONVERSION_TRACKING_NOT_ENABLED:19,NOT_ENOUGH_CONVERSIONS:20,CANNOT_CREATE_CAMPAIGN_WITH_BIDDING_STRATEGY:21,CANNOT_TARGET_CONTENT_NETWORK_ONLY_WITH_CAMPAIGN_LEVEL_POP_BIDDING_STRATEGY:23,BIDDING_STRATEGY_NOT_SUPPORTED_WITH_AD_SCHEDULE:24,PAY_PER_CONVERSION_NOT_AVAILABLE_FOR_CUSTOMER:25,PAY_PER_CONVERSION_NOT_ALLOWED_WITH_TARGET_CPA:26,BIDDING_STRATEGY_NOT_ALLOWED_FOR_SEARCH_ONLY_CAMPAIGNS:27,BIDDING_STRATEGY_NOT_SUPPORTED_IN_DRAFTS_OR_EXPERIMENTS:28,BIDDING_STRATEGY_TYPE_DOES_NOT_SUPPORT_PRODUCT_TYPE_ADGROUP_CRITERION:29,BID_TOO_SMALL:30,BID_TOO_BIG:31,BID_TOO_MANY_FRACTIONAL_DIGITS:32,INVALID_DOMAIN_NAME:33,NOT_COMPATIBLE_WITH_PAYMENT_MODE:34,NOT_COMPATIBLE_WITH_BUDGET_TYPE:35,NOT_COMPATIBLE_WITH_BIDDING_STRATEGY_TYPE:36,BIDDING_STRATEGY_TYPE_INCOMPATIBLE_WITH_SHARED_BUDGET:37},goog.object.extend(exports,proto.google.ads.googleads.v4.errors);