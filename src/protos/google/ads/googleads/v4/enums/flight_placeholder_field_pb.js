var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.FlightPlaceholderFieldEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.FlightPlaceholderFieldEnum.FlightPlaceholderField",null,global),proto.google.ads.googleads.v4.enums.FlightPlaceholderFieldEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.FlightPlaceholderFieldEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.FlightPlaceholderFieldEnum.displayName="proto.google.ads.googleads.v4.enums.FlightPlaceholderFieldEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.FlightPlaceholderFieldEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.FlightPlaceholderFieldEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.FlightPlaceholderFieldEnum.toObject=function(o,e){var l={};return o&&(l.$jspbMessageInstance=e),l}),proto.google.ads.googleads.v4.enums.FlightPlaceholderFieldEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),l=new proto.google.ads.googleads.v4.enums.FlightPlaceholderFieldEnum;return proto.google.ads.googleads.v4.enums.FlightPlaceholderFieldEnum.deserializeBinaryFromReader(l,e)},proto.google.ads.googleads.v4.enums.FlightPlaceholderFieldEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.FlightPlaceholderFieldEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.FlightPlaceholderFieldEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.FlightPlaceholderFieldEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.FlightPlaceholderFieldEnum.FlightPlaceholderField={UNSPECIFIED:0,UNKNOWN:1,DESTINATION_ID:2,ORIGIN_ID:3,FLIGHT_DESCRIPTION:4,ORIGIN_NAME:5,DESTINATION_NAME:6,FLIGHT_PRICE:7,FORMATTED_PRICE:8,FLIGHT_SALE_PRICE:9,FORMATTED_SALE_PRICE:10,IMAGE_URL:11,FINAL_URLS:12,FINAL_MOBILE_URLS:13,TRACKING_URL:14,ANDROID_APP_LINK:15,SIMILAR_DESTINATION_IDS:16,IOS_APP_LINK:17,IOS_APP_STORE_ID:18},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);