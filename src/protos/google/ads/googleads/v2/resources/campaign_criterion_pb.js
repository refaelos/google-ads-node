var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v2_common_criteria_pb=require("../../../../../google/ads/googleads/v2/common/criteria_pb.js"),google_ads_googleads_v2_enums_campaign_criterion_status_pb=require("../../../../../google/ads/googleads/v2/enums/campaign_criterion_status_pb.js"),google_ads_googleads_v2_enums_criterion_type_pb=require("../../../../../google/ads/googleads/v2/enums/criterion_type_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.resources.CampaignCriterion",null,global),proto.google.ads.googleads.v2.resources.CampaignCriterion=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v2.resources.CampaignCriterion,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.resources.CampaignCriterion.displayName="proto.google.ads.googleads.v2.resources.CampaignCriterion"),proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_=[[8,9,10,11,12,13,15,16,17,18,19,22,20,21,23,24,25,26,27,28,29,30,31,32,33,34]],proto.google.ads.googleads.v2.resources.CampaignCriterion.CriterionCase={CRITERION_NOT_SET:0,KEYWORD:8,PLACEMENT:9,MOBILE_APP_CATEGORY:10,MOBILE_APPLICATION:11,LOCATION:12,DEVICE:13,AD_SCHEDULE:15,AGE_RANGE:16,GENDER:17,INCOME_RANGE:18,PARENTAL_STATUS:19,USER_LIST:22,YOUTUBE_VIDEO:20,YOUTUBE_CHANNEL:21,PROXIMITY:23,TOPIC:24,LISTING_SCOPE:25,LANGUAGE:26,IP_BLOCK:27,CONTENT_LABEL:28,CARRIER:29,USER_INTEREST:30,WEBPAGE:31,OPERATING_SYSTEM_VERSION:32,MOBILE_DEVICE:33,LOCATION_GROUP:34},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getCriterionCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.resources.CampaignCriterion.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.resources.CampaignCriterion.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),campaign:(f=msg.getCampaign())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),criterionId:(f=msg.getCriterionId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),bidModifier:(f=msg.getBidModifier())&&google_protobuf_wrappers_pb.FloatValue.toObject(includeInstance,f),negative:(f=msg.getNegative())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f),type:jspb.Message.getFieldWithDefault(msg,6,0),status:jspb.Message.getFieldWithDefault(msg,35,0),keyword:(f=msg.getKeyword())&&google_ads_googleads_v2_common_criteria_pb.KeywordInfo.toObject(includeInstance,f),placement:(f=msg.getPlacement())&&google_ads_googleads_v2_common_criteria_pb.PlacementInfo.toObject(includeInstance,f),mobileAppCategory:(f=msg.getMobileAppCategory())&&google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo.toObject(includeInstance,f),mobileApplication:(f=msg.getMobileApplication())&&google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo.toObject(includeInstance,f),location:(f=msg.getLocation())&&google_ads_googleads_v2_common_criteria_pb.LocationInfo.toObject(includeInstance,f),device:(f=msg.getDevice())&&google_ads_googleads_v2_common_criteria_pb.DeviceInfo.toObject(includeInstance,f),adSchedule:(f=msg.getAdSchedule())&&google_ads_googleads_v2_common_criteria_pb.AdScheduleInfo.toObject(includeInstance,f),ageRange:(f=msg.getAgeRange())&&google_ads_googleads_v2_common_criteria_pb.AgeRangeInfo.toObject(includeInstance,f),gender:(f=msg.getGender())&&google_ads_googleads_v2_common_criteria_pb.GenderInfo.toObject(includeInstance,f),incomeRange:(f=msg.getIncomeRange())&&google_ads_googleads_v2_common_criteria_pb.IncomeRangeInfo.toObject(includeInstance,f),parentalStatus:(f=msg.getParentalStatus())&&google_ads_googleads_v2_common_criteria_pb.ParentalStatusInfo.toObject(includeInstance,f),userList:(f=msg.getUserList())&&google_ads_googleads_v2_common_criteria_pb.UserListInfo.toObject(includeInstance,f),youtubeVideo:(f=msg.getYoutubeVideo())&&google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo.toObject(includeInstance,f),youtubeChannel:(f=msg.getYoutubeChannel())&&google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo.toObject(includeInstance,f),proximity:(f=msg.getProximity())&&google_ads_googleads_v2_common_criteria_pb.ProximityInfo.toObject(includeInstance,f),topic:(f=msg.getTopic())&&google_ads_googleads_v2_common_criteria_pb.TopicInfo.toObject(includeInstance,f),listingScope:(f=msg.getListingScope())&&google_ads_googleads_v2_common_criteria_pb.ListingScopeInfo.toObject(includeInstance,f),language:(f=msg.getLanguage())&&google_ads_googleads_v2_common_criteria_pb.LanguageInfo.toObject(includeInstance,f),ipBlock:(f=msg.getIpBlock())&&google_ads_googleads_v2_common_criteria_pb.IpBlockInfo.toObject(includeInstance,f),contentLabel:(f=msg.getContentLabel())&&google_ads_googleads_v2_common_criteria_pb.ContentLabelInfo.toObject(includeInstance,f),carrier:(f=msg.getCarrier())&&google_ads_googleads_v2_common_criteria_pb.CarrierInfo.toObject(includeInstance,f),userInterest:(f=msg.getUserInterest())&&google_ads_googleads_v2_common_criteria_pb.UserInterestInfo.toObject(includeInstance,f),webpage:(f=msg.getWebpage())&&google_ads_googleads_v2_common_criteria_pb.WebpageInfo.toObject(includeInstance,f),operatingSystemVersion:(f=msg.getOperatingSystemVersion())&&google_ads_googleads_v2_common_criteria_pb.OperatingSystemVersionInfo.toObject(includeInstance,f),mobileDevice:(f=msg.getMobileDevice())&&google_ads_googleads_v2_common_criteria_pb.MobileDeviceInfo.toObject(includeInstance,f),locationGroup:(f=msg.getLocationGroup())&&google_ads_googleads_v2_common_criteria_pb.LocationGroupInfo.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.resources.CampaignCriterion.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.resources.CampaignCriterion;return proto.google.ads.googleads.v2.resources.CampaignCriterion.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.resources.CampaignCriterion.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 4:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setCampaign(value);break;case 5:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setCriterionId(value);break;case 14:value=new google_protobuf_wrappers_pb.FloatValue;reader.readMessage(value,google_protobuf_wrappers_pb.FloatValue.deserializeBinaryFromReader),msg.setBidModifier(value);break;case 7:value=new google_protobuf_wrappers_pb.BoolValue;reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setNegative(value);break;case 6:value=reader.readEnum();msg.setType(value);break;case 35:value=reader.readEnum();msg.setStatus(value);break;case 8:value=new google_ads_googleads_v2_common_criteria_pb.KeywordInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.KeywordInfo.deserializeBinaryFromReader),msg.setKeyword(value);break;case 9:value=new google_ads_googleads_v2_common_criteria_pb.PlacementInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.PlacementInfo.deserializeBinaryFromReader),msg.setPlacement(value);break;case 10:value=new google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo.deserializeBinaryFromReader),msg.setMobileAppCategory(value);break;case 11:value=new google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo.deserializeBinaryFromReader),msg.setMobileApplication(value);break;case 12:value=new google_ads_googleads_v2_common_criteria_pb.LocationInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.LocationInfo.deserializeBinaryFromReader),msg.setLocation(value);break;case 13:value=new google_ads_googleads_v2_common_criteria_pb.DeviceInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.DeviceInfo.deserializeBinaryFromReader),msg.setDevice(value);break;case 15:value=new google_ads_googleads_v2_common_criteria_pb.AdScheduleInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.AdScheduleInfo.deserializeBinaryFromReader),msg.setAdSchedule(value);break;case 16:value=new google_ads_googleads_v2_common_criteria_pb.AgeRangeInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.AgeRangeInfo.deserializeBinaryFromReader),msg.setAgeRange(value);break;case 17:value=new google_ads_googleads_v2_common_criteria_pb.GenderInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.GenderInfo.deserializeBinaryFromReader),msg.setGender(value);break;case 18:value=new google_ads_googleads_v2_common_criteria_pb.IncomeRangeInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.IncomeRangeInfo.deserializeBinaryFromReader),msg.setIncomeRange(value);break;case 19:value=new google_ads_googleads_v2_common_criteria_pb.ParentalStatusInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.ParentalStatusInfo.deserializeBinaryFromReader),msg.setParentalStatus(value);break;case 22:value=new google_ads_googleads_v2_common_criteria_pb.UserListInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.UserListInfo.deserializeBinaryFromReader),msg.setUserList(value);break;case 20:value=new google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo.deserializeBinaryFromReader),msg.setYoutubeVideo(value);break;case 21:value=new google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo.deserializeBinaryFromReader),msg.setYoutubeChannel(value);break;case 23:value=new google_ads_googleads_v2_common_criteria_pb.ProximityInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.ProximityInfo.deserializeBinaryFromReader),msg.setProximity(value);break;case 24:value=new google_ads_googleads_v2_common_criteria_pb.TopicInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.TopicInfo.deserializeBinaryFromReader),msg.setTopic(value);break;case 25:value=new google_ads_googleads_v2_common_criteria_pb.ListingScopeInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.ListingScopeInfo.deserializeBinaryFromReader),msg.setListingScope(value);break;case 26:value=new google_ads_googleads_v2_common_criteria_pb.LanguageInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.LanguageInfo.deserializeBinaryFromReader),msg.setLanguage(value);break;case 27:value=new google_ads_googleads_v2_common_criteria_pb.IpBlockInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.IpBlockInfo.deserializeBinaryFromReader),msg.setIpBlock(value);break;case 28:value=new google_ads_googleads_v2_common_criteria_pb.ContentLabelInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.ContentLabelInfo.deserializeBinaryFromReader),msg.setContentLabel(value);break;case 29:value=new google_ads_googleads_v2_common_criteria_pb.CarrierInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.CarrierInfo.deserializeBinaryFromReader),msg.setCarrier(value);break;case 30:value=new google_ads_googleads_v2_common_criteria_pb.UserInterestInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.UserInterestInfo.deserializeBinaryFromReader),msg.setUserInterest(value);break;case 31:value=new google_ads_googleads_v2_common_criteria_pb.WebpageInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.WebpageInfo.deserializeBinaryFromReader),msg.setWebpage(value);break;case 32:value=new google_ads_googleads_v2_common_criteria_pb.OperatingSystemVersionInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.OperatingSystemVersionInfo.deserializeBinaryFromReader),msg.setOperatingSystemVersion(value);break;case 33:value=new google_ads_googleads_v2_common_criteria_pb.MobileDeviceInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.MobileDeviceInfo.deserializeBinaryFromReader),msg.setMobileDevice(value);break;case 34:value=new google_ads_googleads_v2_common_criteria_pb.LocationGroupInfo;reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.LocationGroupInfo.deserializeBinaryFromReader),msg.setLocationGroup(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.resources.CampaignCriterion.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.resources.CampaignCriterion.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getCampaign())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getCriterionId())&&writer.writeMessage(5,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getBidModifier())&&writer.writeMessage(14,f,google_protobuf_wrappers_pb.FloatValue.serializeBinaryToWriter),null!=(f=message.getNegative())&&writer.writeMessage(7,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),0!==(f=message.getType())&&writer.writeEnum(6,f),0!==(f=message.getStatus())&&writer.writeEnum(35,f),null!=(f=message.getKeyword())&&writer.writeMessage(8,f,google_ads_googleads_v2_common_criteria_pb.KeywordInfo.serializeBinaryToWriter),null!=(f=message.getPlacement())&&writer.writeMessage(9,f,google_ads_googleads_v2_common_criteria_pb.PlacementInfo.serializeBinaryToWriter),null!=(f=message.getMobileAppCategory())&&writer.writeMessage(10,f,google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo.serializeBinaryToWriter),null!=(f=message.getMobileApplication())&&writer.writeMessage(11,f,google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo.serializeBinaryToWriter),null!=(f=message.getLocation())&&writer.writeMessage(12,f,google_ads_googleads_v2_common_criteria_pb.LocationInfo.serializeBinaryToWriter),null!=(f=message.getDevice())&&writer.writeMessage(13,f,google_ads_googleads_v2_common_criteria_pb.DeviceInfo.serializeBinaryToWriter),null!=(f=message.getAdSchedule())&&writer.writeMessage(15,f,google_ads_googleads_v2_common_criteria_pb.AdScheduleInfo.serializeBinaryToWriter),null!=(f=message.getAgeRange())&&writer.writeMessage(16,f,google_ads_googleads_v2_common_criteria_pb.AgeRangeInfo.serializeBinaryToWriter),null!=(f=message.getGender())&&writer.writeMessage(17,f,google_ads_googleads_v2_common_criteria_pb.GenderInfo.serializeBinaryToWriter),null!=(f=message.getIncomeRange())&&writer.writeMessage(18,f,google_ads_googleads_v2_common_criteria_pb.IncomeRangeInfo.serializeBinaryToWriter),null!=(f=message.getParentalStatus())&&writer.writeMessage(19,f,google_ads_googleads_v2_common_criteria_pb.ParentalStatusInfo.serializeBinaryToWriter),null!=(f=message.getUserList())&&writer.writeMessage(22,f,google_ads_googleads_v2_common_criteria_pb.UserListInfo.serializeBinaryToWriter),null!=(f=message.getYoutubeVideo())&&writer.writeMessage(20,f,google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo.serializeBinaryToWriter),null!=(f=message.getYoutubeChannel())&&writer.writeMessage(21,f,google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo.serializeBinaryToWriter),null!=(f=message.getProximity())&&writer.writeMessage(23,f,google_ads_googleads_v2_common_criteria_pb.ProximityInfo.serializeBinaryToWriter),null!=(f=message.getTopic())&&writer.writeMessage(24,f,google_ads_googleads_v2_common_criteria_pb.TopicInfo.serializeBinaryToWriter),null!=(f=message.getListingScope())&&writer.writeMessage(25,f,google_ads_googleads_v2_common_criteria_pb.ListingScopeInfo.serializeBinaryToWriter),null!=(f=message.getLanguage())&&writer.writeMessage(26,f,google_ads_googleads_v2_common_criteria_pb.LanguageInfo.serializeBinaryToWriter),null!=(f=message.getIpBlock())&&writer.writeMessage(27,f,google_ads_googleads_v2_common_criteria_pb.IpBlockInfo.serializeBinaryToWriter),null!=(f=message.getContentLabel())&&writer.writeMessage(28,f,google_ads_googleads_v2_common_criteria_pb.ContentLabelInfo.serializeBinaryToWriter),null!=(f=message.getCarrier())&&writer.writeMessage(29,f,google_ads_googleads_v2_common_criteria_pb.CarrierInfo.serializeBinaryToWriter),null!=(f=message.getUserInterest())&&writer.writeMessage(30,f,google_ads_googleads_v2_common_criteria_pb.UserInterestInfo.serializeBinaryToWriter),null!=(f=message.getWebpage())&&writer.writeMessage(31,f,google_ads_googleads_v2_common_criteria_pb.WebpageInfo.serializeBinaryToWriter),null!=(f=message.getOperatingSystemVersion())&&writer.writeMessage(32,f,google_ads_googleads_v2_common_criteria_pb.OperatingSystemVersionInfo.serializeBinaryToWriter),null!=(f=message.getMobileDevice())&&writer.writeMessage(33,f,google_ads_googleads_v2_common_criteria_pb.MobileDeviceInfo.serializeBinaryToWriter),null!=(f=message.getLocationGroup())&&writer.writeMessage(34,f,google_ads_googleads_v2_common_criteria_pb.LocationGroupInfo.serializeBinaryToWriter)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getCampaign=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setCampaign=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearCampaign=function(){this.setCampaign(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasCampaign=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getCriterionId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,5)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setCriterionId=function(value){jspb.Message.setWrapperField(this,5,value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearCriterionId=function(){this.setCriterionId(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasCriterionId=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getBidModifier=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.FloatValue,14)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setBidModifier=function(value){jspb.Message.setWrapperField(this,14,value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearBidModifier=function(){this.setBidModifier(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasBidModifier=function(){return null!=jspb.Message.getField(this,14)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getNegative=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,7)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setNegative=function(value){jspb.Message.setWrapperField(this,7,value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearNegative=function(){this.setNegative(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasNegative=function(){return null!=jspb.Message.getField(this,7)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,6,0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setType=function(value){jspb.Message.setProto3EnumField(this,6,value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getStatus=function(){return jspb.Message.getFieldWithDefault(this,35,0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setStatus=function(value){jspb.Message.setProto3EnumField(this,35,value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getKeyword=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.KeywordInfo,8)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setKeyword=function(value){jspb.Message.setOneofWrapperField(this,8,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearKeyword=function(){this.setKeyword(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasKeyword=function(){return null!=jspb.Message.getField(this,8)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getPlacement=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.PlacementInfo,9)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setPlacement=function(value){jspb.Message.setOneofWrapperField(this,9,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearPlacement=function(){this.setPlacement(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasPlacement=function(){return null!=jspb.Message.getField(this,9)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getMobileAppCategory=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo,10)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setMobileAppCategory=function(value){jspb.Message.setOneofWrapperField(this,10,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearMobileAppCategory=function(){this.setMobileAppCategory(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasMobileAppCategory=function(){return null!=jspb.Message.getField(this,10)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getMobileApplication=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo,11)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setMobileApplication=function(value){jspb.Message.setOneofWrapperField(this,11,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearMobileApplication=function(){this.setMobileApplication(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasMobileApplication=function(){return null!=jspb.Message.getField(this,11)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getLocation=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.LocationInfo,12)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setLocation=function(value){jspb.Message.setOneofWrapperField(this,12,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearLocation=function(){this.setLocation(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasLocation=function(){return null!=jspb.Message.getField(this,12)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getDevice=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.DeviceInfo,13)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setDevice=function(value){jspb.Message.setOneofWrapperField(this,13,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearDevice=function(){this.setDevice(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasDevice=function(){return null!=jspb.Message.getField(this,13)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getAdSchedule=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.AdScheduleInfo,15)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setAdSchedule=function(value){jspb.Message.setOneofWrapperField(this,15,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearAdSchedule=function(){this.setAdSchedule(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasAdSchedule=function(){return null!=jspb.Message.getField(this,15)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getAgeRange=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.AgeRangeInfo,16)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setAgeRange=function(value){jspb.Message.setOneofWrapperField(this,16,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearAgeRange=function(){this.setAgeRange(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasAgeRange=function(){return null!=jspb.Message.getField(this,16)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getGender=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.GenderInfo,17)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setGender=function(value){jspb.Message.setOneofWrapperField(this,17,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearGender=function(){this.setGender(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasGender=function(){return null!=jspb.Message.getField(this,17)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getIncomeRange=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.IncomeRangeInfo,18)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setIncomeRange=function(value){jspb.Message.setOneofWrapperField(this,18,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearIncomeRange=function(){this.setIncomeRange(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasIncomeRange=function(){return null!=jspb.Message.getField(this,18)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getParentalStatus=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.ParentalStatusInfo,19)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setParentalStatus=function(value){jspb.Message.setOneofWrapperField(this,19,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearParentalStatus=function(){this.setParentalStatus(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasParentalStatus=function(){return null!=jspb.Message.getField(this,19)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getUserList=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.UserListInfo,22)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setUserList=function(value){jspb.Message.setOneofWrapperField(this,22,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearUserList=function(){this.setUserList(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasUserList=function(){return null!=jspb.Message.getField(this,22)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getYoutubeVideo=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo,20)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setYoutubeVideo=function(value){jspb.Message.setOneofWrapperField(this,20,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearYoutubeVideo=function(){this.setYoutubeVideo(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasYoutubeVideo=function(){return null!=jspb.Message.getField(this,20)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getYoutubeChannel=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo,21)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setYoutubeChannel=function(value){jspb.Message.setOneofWrapperField(this,21,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearYoutubeChannel=function(){this.setYoutubeChannel(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasYoutubeChannel=function(){return null!=jspb.Message.getField(this,21)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getProximity=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.ProximityInfo,23)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setProximity=function(value){jspb.Message.setOneofWrapperField(this,23,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearProximity=function(){this.setProximity(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasProximity=function(){return null!=jspb.Message.getField(this,23)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getTopic=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.TopicInfo,24)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setTopic=function(value){jspb.Message.setOneofWrapperField(this,24,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearTopic=function(){this.setTopic(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasTopic=function(){return null!=jspb.Message.getField(this,24)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getListingScope=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.ListingScopeInfo,25)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setListingScope=function(value){jspb.Message.setOneofWrapperField(this,25,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearListingScope=function(){this.setListingScope(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasListingScope=function(){return null!=jspb.Message.getField(this,25)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getLanguage=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.LanguageInfo,26)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setLanguage=function(value){jspb.Message.setOneofWrapperField(this,26,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearLanguage=function(){this.setLanguage(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasLanguage=function(){return null!=jspb.Message.getField(this,26)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getIpBlock=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.IpBlockInfo,27)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setIpBlock=function(value){jspb.Message.setOneofWrapperField(this,27,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearIpBlock=function(){this.setIpBlock(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasIpBlock=function(){return null!=jspb.Message.getField(this,27)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getContentLabel=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.ContentLabelInfo,28)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setContentLabel=function(value){jspb.Message.setOneofWrapperField(this,28,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearContentLabel=function(){this.setContentLabel(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasContentLabel=function(){return null!=jspb.Message.getField(this,28)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getCarrier=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.CarrierInfo,29)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setCarrier=function(value){jspb.Message.setOneofWrapperField(this,29,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearCarrier=function(){this.setCarrier(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasCarrier=function(){return null!=jspb.Message.getField(this,29)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getUserInterest=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.UserInterestInfo,30)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setUserInterest=function(value){jspb.Message.setOneofWrapperField(this,30,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearUserInterest=function(){this.setUserInterest(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasUserInterest=function(){return null!=jspb.Message.getField(this,30)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getWebpage=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.WebpageInfo,31)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setWebpage=function(value){jspb.Message.setOneofWrapperField(this,31,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearWebpage=function(){this.setWebpage(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasWebpage=function(){return null!=jspb.Message.getField(this,31)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getOperatingSystemVersion=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.OperatingSystemVersionInfo,32)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setOperatingSystemVersion=function(value){jspb.Message.setOneofWrapperField(this,32,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearOperatingSystemVersion=function(){this.setOperatingSystemVersion(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasOperatingSystemVersion=function(){return null!=jspb.Message.getField(this,32)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getMobileDevice=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.MobileDeviceInfo,33)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setMobileDevice=function(value){jspb.Message.setOneofWrapperField(this,33,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearMobileDevice=function(){this.setMobileDevice(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasMobileDevice=function(){return null!=jspb.Message.getField(this,33)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.getLocationGroup=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_criteria_pb.LocationGroupInfo,34)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.setLocationGroup=function(value){jspb.Message.setOneofWrapperField(this,34,proto.google.ads.googleads.v2.resources.CampaignCriterion.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.clearLocationGroup=function(){this.setLocationGroup(void 0)},proto.google.ads.googleads.v2.resources.CampaignCriterion.prototype.hasLocationGroup=function(){return null!=jspb.Message.getField(this,34)},goog.object.extend(exports,proto.google.ads.googleads.v2.resources);