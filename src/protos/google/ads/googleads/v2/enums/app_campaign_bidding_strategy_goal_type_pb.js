var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.AppCampaignBiddingStrategyGoalTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.AppCampaignBiddingStrategyGoalTypeEnum.AppCampaignBiddingStrategyGoalType",null,global),proto.google.ads.googleads.v2.enums.AppCampaignBiddingStrategyGoalTypeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.AppCampaignBiddingStrategyGoalTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.AppCampaignBiddingStrategyGoalTypeEnum.displayName="proto.google.ads.googleads.v2.enums.AppCampaignBiddingStrategyGoalTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.AppCampaignBiddingStrategyGoalTypeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.AppCampaignBiddingStrategyGoalTypeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.AppCampaignBiddingStrategyGoalTypeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.AppCampaignBiddingStrategyGoalTypeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.AppCampaignBiddingStrategyGoalTypeEnum;return proto.google.ads.googleads.v2.enums.AppCampaignBiddingStrategyGoalTypeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.AppCampaignBiddingStrategyGoalTypeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.AppCampaignBiddingStrategyGoalTypeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.AppCampaignBiddingStrategyGoalTypeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.AppCampaignBiddingStrategyGoalTypeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.AppCampaignBiddingStrategyGoalTypeEnum.AppCampaignBiddingStrategyGoalType={UNSPECIFIED:0,UNKNOWN:1,OPTIMIZE_INSTALLS_TARGET_INSTALL_COST:2,OPTIMIZE_IN_APP_CONVERSIONS_TARGET_INSTALL_COST:3,OPTIMIZE_IN_APP_CONVERSIONS_TARGET_CONVERSION_COST:4,OPTIMIZE_RETURN_ON_ADVERTISING_SPEND:5},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);