var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.PricePlaceholderFieldEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.PricePlaceholderFieldEnum.PricePlaceholderField",null,global),proto.google.ads.googleads.v2.enums.PricePlaceholderFieldEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.PricePlaceholderFieldEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.PricePlaceholderFieldEnum.displayName="proto.google.ads.googleads.v2.enums.PricePlaceholderFieldEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.PricePlaceholderFieldEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.PricePlaceholderFieldEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.PricePlaceholderFieldEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.PricePlaceholderFieldEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.PricePlaceholderFieldEnum;return proto.google.ads.googleads.v2.enums.PricePlaceholderFieldEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.PricePlaceholderFieldEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.PricePlaceholderFieldEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.PricePlaceholderFieldEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.PricePlaceholderFieldEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.PricePlaceholderFieldEnum.PricePlaceholderField={UNSPECIFIED:0,UNKNOWN:1,TYPE:2,PRICE_QUALIFIER:3,TRACKING_TEMPLATE:4,LANGUAGE:5,FINAL_URL_SUFFIX:6,ITEM_1_HEADER:100,ITEM_1_DESCRIPTION:101,ITEM_1_PRICE:102,ITEM_1_UNIT:103,ITEM_1_FINAL_URLS:104,ITEM_1_FINAL_MOBILE_URLS:105,ITEM_2_HEADER:200,ITEM_2_DESCRIPTION:201,ITEM_2_PRICE:202,ITEM_2_UNIT:203,ITEM_2_FINAL_URLS:204,ITEM_2_FINAL_MOBILE_URLS:205,ITEM_3_HEADER:300,ITEM_3_DESCRIPTION:301,ITEM_3_PRICE:302,ITEM_3_UNIT:303,ITEM_3_FINAL_URLS:304,ITEM_3_FINAL_MOBILE_URLS:305,ITEM_4_HEADER:400,ITEM_4_DESCRIPTION:401,ITEM_4_PRICE:402,ITEM_4_UNIT:403,ITEM_4_FINAL_URLS:404,ITEM_4_FINAL_MOBILE_URLS:405,ITEM_5_HEADER:500,ITEM_5_DESCRIPTION:501,ITEM_5_PRICE:502,ITEM_5_UNIT:503,ITEM_5_FINAL_URLS:504,ITEM_5_FINAL_MOBILE_URLS:505,ITEM_6_HEADER:600,ITEM_6_DESCRIPTION:601,ITEM_6_PRICE:602,ITEM_6_UNIT:603,ITEM_6_FINAL_URLS:604,ITEM_6_FINAL_MOBILE_URLS:605,ITEM_7_HEADER:700,ITEM_7_DESCRIPTION:701,ITEM_7_PRICE:702,ITEM_7_UNIT:703,ITEM_7_FINAL_URLS:704,ITEM_7_FINAL_MOBILE_URLS:705,ITEM_8_HEADER:800,ITEM_8_DESCRIPTION:801,ITEM_8_PRICE:802,ITEM_8_UNIT:803,ITEM_8_FINAL_URLS:804,ITEM_8_FINAL_MOBILE_URLS:805},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);