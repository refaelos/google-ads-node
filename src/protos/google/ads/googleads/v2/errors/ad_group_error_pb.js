var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.errors.AdGroupErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.errors.AdGroupErrorEnum.AdGroupError",null,global),proto.google.ads.googleads.v2.errors.AdGroupErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.errors.AdGroupErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.errors.AdGroupErrorEnum.displayName="proto.google.ads.googleads.v2.errors.AdGroupErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.errors.AdGroupErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.errors.AdGroupErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.errors.AdGroupErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.errors.AdGroupErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.errors.AdGroupErrorEnum;return proto.google.ads.googleads.v2.errors.AdGroupErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.errors.AdGroupErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.errors.AdGroupErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.errors.AdGroupErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.errors.AdGroupErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.errors.AdGroupErrorEnum.AdGroupError={UNSPECIFIED:0,UNKNOWN:1,DUPLICATE_ADGROUP_NAME:2,INVALID_ADGROUP_NAME:3,ADVERTISER_NOT_ON_CONTENT_NETWORK:5,BID_TOO_BIG:6,BID_TYPE_AND_BIDDING_STRATEGY_MISMATCH:7,MISSING_ADGROUP_NAME:8,ADGROUP_LABEL_DOES_NOT_EXIST:9,ADGROUP_LABEL_ALREADY_EXISTS:10,INVALID_CONTENT_BID_CRITERION_TYPE_GROUP:11,AD_GROUP_TYPE_NOT_VALID_FOR_ADVERTISING_CHANNEL_TYPE:12,ADGROUP_TYPE_NOT_SUPPORTED_FOR_CAMPAIGN_SALES_COUNTRY:13,CANNOT_ADD_ADGROUP_OF_TYPE_DSA_TO_CAMPAIGN_WITHOUT_DSA_SETTING:14},goog.object.extend(exports,proto.google.ads.googleads.v2.errors);