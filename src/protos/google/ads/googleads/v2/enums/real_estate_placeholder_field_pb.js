var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.RealEstatePlaceholderFieldEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.RealEstatePlaceholderFieldEnum.RealEstatePlaceholderField",null,global),proto.google.ads.googleads.v2.enums.RealEstatePlaceholderFieldEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.RealEstatePlaceholderFieldEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.RealEstatePlaceholderFieldEnum.displayName="proto.google.ads.googleads.v2.enums.RealEstatePlaceholderFieldEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.RealEstatePlaceholderFieldEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.RealEstatePlaceholderFieldEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.RealEstatePlaceholderFieldEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.RealEstatePlaceholderFieldEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.RealEstatePlaceholderFieldEnum;return proto.google.ads.googleads.v2.enums.RealEstatePlaceholderFieldEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.RealEstatePlaceholderFieldEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.RealEstatePlaceholderFieldEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.RealEstatePlaceholderFieldEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.RealEstatePlaceholderFieldEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.RealEstatePlaceholderFieldEnum.RealEstatePlaceholderField={UNSPECIFIED:0,UNKNOWN:1,LISTING_ID:2,LISTING_NAME:3,CITY_NAME:4,DESCRIPTION:5,ADDRESS:6,PRICE:7,FORMATTED_PRICE:8,IMAGE_URL:9,PROPERTY_TYPE:10,LISTING_TYPE:11,CONTEXTUAL_KEYWORDS:12,FINAL_URLS:13,FINAL_MOBILE_URLS:14,TRACKING_URL:15,ANDROID_APP_LINK:16,SIMILAR_LISTING_IDS:17,IOS_APP_LINK:18,IOS_APP_STORE_ID:19},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);