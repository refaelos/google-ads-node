var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.ExternalConversionSourceEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.ExternalConversionSourceEnum.ExternalConversionSource",null,global),proto.google.ads.googleads.v4.enums.ExternalConversionSourceEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.ExternalConversionSourceEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.ExternalConversionSourceEnum.displayName="proto.google.ads.googleads.v4.enums.ExternalConversionSourceEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.ExternalConversionSourceEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.ExternalConversionSourceEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.ExternalConversionSourceEnum.toObject=function(o,e){var n={};return o&&(n.$jspbMessageInstance=e),n}),proto.google.ads.googleads.v4.enums.ExternalConversionSourceEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),n=new proto.google.ads.googleads.v4.enums.ExternalConversionSourceEnum;return proto.google.ads.googleads.v4.enums.ExternalConversionSourceEnum.deserializeBinaryFromReader(n,e)},proto.google.ads.googleads.v4.enums.ExternalConversionSourceEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.ExternalConversionSourceEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.ExternalConversionSourceEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.ExternalConversionSourceEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.ExternalConversionSourceEnum.ExternalConversionSource={UNSPECIFIED:0,UNKNOWN:1,WEBPAGE:2,ANALYTICS:3,UPLOAD:4,AD_CALL_METRICS:5,WEBSITE_CALL_METRICS:6,STORE_VISITS:7,ANDROID_IN_APP:8,IOS_IN_APP:9,IOS_FIRST_OPEN:10,APP_UNSPECIFIED:11,ANDROID_FIRST_OPEN:12,UPLOAD_CALLS:13,FIREBASE:14,CLICK_TO_CALL:15,SALESFORCE:16,STORE_SALES_CRM:17,STORE_SALES_PAYMENT_NETWORK:18,GOOGLE_PLAY:19,THIRD_PARTY_APP_ANALYTICS:20,GOOGLE_ATTRIBUTION:21,STORE_SALES_DIRECT_UPLOAD:23,STORE_SALES:24},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);