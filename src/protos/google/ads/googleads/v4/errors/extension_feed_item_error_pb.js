var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.errors.ExtensionFeedItemErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.errors.ExtensionFeedItemErrorEnum.ExtensionFeedItemError",null,global),proto.google.ads.googleads.v4.errors.ExtensionFeedItemErrorEnum=function(E){jspb.Message.initialize(this,E,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.errors.ExtensionFeedItemErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.errors.ExtensionFeedItemErrorEnum.displayName="proto.google.ads.googleads.v4.errors.ExtensionFeedItemErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.errors.ExtensionFeedItemErrorEnum.prototype.toObject=function(E){return proto.google.ads.googleads.v4.errors.ExtensionFeedItemErrorEnum.toObject(E,this)},proto.google.ads.googleads.v4.errors.ExtensionFeedItemErrorEnum.toObject=function(E,o){var e={};return E&&(e.$jspbMessageInstance=o),e}),proto.google.ads.googleads.v4.errors.ExtensionFeedItemErrorEnum.deserializeBinary=function(E){var o=new jspb.BinaryReader(E),e=new proto.google.ads.googleads.v4.errors.ExtensionFeedItemErrorEnum;return proto.google.ads.googleads.v4.errors.ExtensionFeedItemErrorEnum.deserializeBinaryFromReader(e,o)},proto.google.ads.googleads.v4.errors.ExtensionFeedItemErrorEnum.deserializeBinaryFromReader=function(E,o){for(;o.nextField()&&!o.isEndGroup();){o.getFieldNumber();o.skipField()}return E},proto.google.ads.googleads.v4.errors.ExtensionFeedItemErrorEnum.prototype.serializeBinary=function(){var E=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.errors.ExtensionFeedItemErrorEnum.serializeBinaryToWriter(this,E),E.getResultBuffer()},proto.google.ads.googleads.v4.errors.ExtensionFeedItemErrorEnum.serializeBinaryToWriter=function(E,o){},proto.google.ads.googleads.v4.errors.ExtensionFeedItemErrorEnum.ExtensionFeedItemError={UNSPECIFIED:0,UNKNOWN:1,VALUE_OUT_OF_RANGE:2,URL_LIST_TOO_LONG:3,CANNOT_HAVE_RESTRICTION_ON_EMPTY_GEO_TARGETING:4,CANNOT_SET_WITH_FINAL_URLS:5,CANNOT_SET_WITHOUT_FINAL_URLS:6,INVALID_PHONE_NUMBER:7,PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY:8,CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED:9,PREMIUM_RATE_NUMBER_NOT_ALLOWED:10,DISALLOWED_NUMBER_TYPE:11,INVALID_DOMESTIC_PHONE_NUMBER_FORMAT:12,VANITY_PHONE_NUMBER_NOT_ALLOWED:13,INVALID_CALL_CONVERSION_ACTION:14,CUSTOMER_NOT_WHITELISTED_FOR_CALLTRACKING:15,CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY:16,CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED:17,INVALID_APP_ID:18,QUOTES_IN_REVIEW_EXTENSION_SNIPPET:19,HYPHENS_IN_REVIEW_EXTENSION_SNIPPET:20,REVIEW_EXTENSION_SOURCE_INELIGIBLE:21,SOURCE_NAME_IN_REVIEW_EXTENSION_TEXT:22,INCONSISTENT_CURRENCY_CODES:23,PRICE_EXTENSION_HAS_DUPLICATED_HEADERS:24,PRICE_ITEM_HAS_DUPLICATED_HEADER_AND_DESCRIPTION:25,PRICE_EXTENSION_HAS_TOO_FEW_ITEMS:26,PRICE_EXTENSION_HAS_TOO_MANY_ITEMS:27,UNSUPPORTED_VALUE:28,UNSUPPORTED_VALUE_IN_SELECTED_LANGUAGE:29,INVALID_DEVICE_PREFERENCE:30,INVALID_SCHEDULE_END:31,DATE_TIME_MUST_BE_IN_ACCOUNT_TIME_ZONE:32,INVALID_SNIPPETS_HEADER:33,CANNOT_OPERATE_ON_REMOVED_FEED_ITEM:34,PHONE_NUMBER_NOT_SUPPORTED_WITH_CALLTRACKING_FOR_COUNTRY:35,CONFLICTING_CALL_CONVERSION_SETTINGS:36,EXTENSION_TYPE_MISMATCH:37,EXTENSION_SUBTYPE_REQUIRED:38,EXTENSION_TYPE_UNSUPPORTED:39,CANNOT_OPERATE_ON_FEED_WITH_MULTIPLE_MAPPINGS:40,CANNOT_OPERATE_ON_FEED_WITH_KEY_ATTRIBUTES:41,INVALID_PRICE_FORMAT:42,PROMOTION_INVALID_TIME:43,TOO_MANY_DECIMAL_PLACES_SPECIFIED:44,CONCRETE_EXTENSION_TYPE_REQUIRED:45,SCHEDULE_END_NOT_AFTER_START:46},goog.object.extend(exports,proto.google.ads.googleads.v4.errors);