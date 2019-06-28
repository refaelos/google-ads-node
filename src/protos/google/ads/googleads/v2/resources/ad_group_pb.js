var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v2_common_custom_parameter_pb=require("../../../../../google/ads/googleads/v2/common/custom_parameter_pb.js"),google_ads_googleads_v2_common_explorer_auto_optimizer_setting_pb=require("../../../../../google/ads/googleads/v2/common/explorer_auto_optimizer_setting_pb.js"),google_ads_googleads_v2_common_targeting_setting_pb=require("../../../../../google/ads/googleads/v2/common/targeting_setting_pb.js"),google_ads_googleads_v2_enums_ad_group_ad_rotation_mode_pb=require("../../../../../google/ads/googleads/v2/enums/ad_group_ad_rotation_mode_pb.js"),google_ads_googleads_v2_enums_ad_group_status_pb=require("../../../../../google/ads/googleads/v2/enums/ad_group_status_pb.js"),google_ads_googleads_v2_enums_ad_group_type_pb=require("../../../../../google/ads/googleads/v2/enums/ad_group_type_pb.js"),google_ads_googleads_v2_enums_bidding_source_pb=require("../../../../../google/ads/googleads/v2/enums/bidding_source_pb.js"),google_ads_googleads_v2_enums_targeting_dimension_pb=require("../../../../../google/ads/googleads/v2/enums/targeting_dimension_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.resources.AdGroup",null,global),proto.google.ads.googleads.v2.resources.AdGroup=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v2.resources.AdGroup.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v2.resources.AdGroup,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.resources.AdGroup.displayName="proto.google.ads.googleads.v2.resources.AdGroup"),proto.google.ads.googleads.v2.resources.AdGroup.repeatedFields_=[6,33],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.resources.AdGroup.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.resources.AdGroup.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.resources.AdGroup.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),id:(f=msg.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),name:(f=msg.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),status:jspb.Message.getFieldWithDefault(msg,5,0),type:jspb.Message.getFieldWithDefault(msg,12,0),adRotationMode:jspb.Message.getFieldWithDefault(msg,22,0),baseAdGroup:(f=msg.getBaseAdGroup())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),trackingUrlTemplate:(f=msg.getTrackingUrlTemplate())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),urlCustomParametersList:jspb.Message.toObjectList(msg.getUrlCustomParametersList(),google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter.toObject,includeInstance),campaign:(f=msg.getCampaign())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),cpcBidMicros:(f=msg.getCpcBidMicros())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),cpmBidMicros:(f=msg.getCpmBidMicros())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),targetCpaMicros:(f=msg.getTargetCpaMicros())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),cpvBidMicros:(f=msg.getCpvBidMicros())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),targetCpmMicros:(f=msg.getTargetCpmMicros())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),targetRoas:(f=msg.getTargetRoas())&&google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance,f),percentCpcBidMicros:(f=msg.getPercentCpcBidMicros())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),explorerAutoOptimizerSetting:(f=msg.getExplorerAutoOptimizerSetting())&&google_ads_googleads_v2_common_explorer_auto_optimizer_setting_pb.ExplorerAutoOptimizerSetting.toObject(includeInstance,f),displayCustomBidDimension:jspb.Message.getFieldWithDefault(msg,23,0),finalUrlSuffix:(f=msg.getFinalUrlSuffix())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),targetingSetting:(f=msg.getTargetingSetting())&&google_ads_googleads_v2_common_targeting_setting_pb.TargetingSetting.toObject(includeInstance,f),effectiveTargetCpaMicros:(f=msg.getEffectiveTargetCpaMicros())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),effectiveTargetCpaSource:jspb.Message.getFieldWithDefault(msg,29,0),effectiveTargetRoas:(f=msg.getEffectiveTargetRoas())&&google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance,f),effectiveTargetRoasSource:jspb.Message.getFieldWithDefault(msg,32,0),labelsList:jspb.Message.toObjectList(msg.getLabelsList(),google_protobuf_wrappers_pb.StringValue.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.resources.AdGroup.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.resources.AdGroup;return proto.google.ads.googleads.v2.resources.AdGroup.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.resources.AdGroup.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 3:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setId(value);break;case 4:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setName(value);break;case 5:value=reader.readEnum();msg.setStatus(value);break;case 12:value=reader.readEnum();msg.setType(value);break;case 22:value=reader.readEnum();msg.setAdRotationMode(value);break;case 18:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setBaseAdGroup(value);break;case 13:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setTrackingUrlTemplate(value);break;case 6:value=new google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter;reader.readMessage(value,google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter.deserializeBinaryFromReader),msg.addUrlCustomParameters(value);break;case 10:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setCampaign(value);break;case 14:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setCpcBidMicros(value);break;case 15:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setCpmBidMicros(value);break;case 27:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setTargetCpaMicros(value);break;case 17:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setCpvBidMicros(value);break;case 26:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setTargetCpmMicros(value);break;case 30:value=new google_protobuf_wrappers_pb.DoubleValue;reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader),msg.setTargetRoas(value);break;case 20:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setPercentCpcBidMicros(value);break;case 21:value=new google_ads_googleads_v2_common_explorer_auto_optimizer_setting_pb.ExplorerAutoOptimizerSetting;reader.readMessage(value,google_ads_googleads_v2_common_explorer_auto_optimizer_setting_pb.ExplorerAutoOptimizerSetting.deserializeBinaryFromReader),msg.setExplorerAutoOptimizerSetting(value);break;case 23:value=reader.readEnum();msg.setDisplayCustomBidDimension(value);break;case 24:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setFinalUrlSuffix(value);break;case 25:value=new google_ads_googleads_v2_common_targeting_setting_pb.TargetingSetting;reader.readMessage(value,google_ads_googleads_v2_common_targeting_setting_pb.TargetingSetting.deserializeBinaryFromReader),msg.setTargetingSetting(value);break;case 28:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setEffectiveTargetCpaMicros(value);break;case 29:value=reader.readEnum();msg.setEffectiveTargetCpaSource(value);break;case 31:value=new google_protobuf_wrappers_pb.DoubleValue;reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader),msg.setEffectiveTargetRoas(value);break;case 32:value=reader.readEnum();msg.setEffectiveTargetRoasSource(value);break;case 33:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.addLabels(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v2.resources.AdGroup.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.resources.AdGroup.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.resources.AdGroup.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getId())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getName())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0!==(f=message.getStatus())&&writer.writeEnum(5,f),0!==(f=message.getType())&&writer.writeEnum(12,f),0!==(f=message.getAdRotationMode())&&writer.writeEnum(22,f),null!=(f=message.getBaseAdGroup())&&writer.writeMessage(18,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getTrackingUrlTemplate())&&writer.writeMessage(13,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0<(f=message.getUrlCustomParametersList()).length&&writer.writeRepeatedMessage(6,f,google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter.serializeBinaryToWriter),null!=(f=message.getCampaign())&&writer.writeMessage(10,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getCpcBidMicros())&&writer.writeMessage(14,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getCpmBidMicros())&&writer.writeMessage(15,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getTargetCpaMicros())&&writer.writeMessage(27,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getCpvBidMicros())&&writer.writeMessage(17,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getTargetCpmMicros())&&writer.writeMessage(26,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getTargetRoas())&&writer.writeMessage(30,f,google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter),null!=(f=message.getPercentCpcBidMicros())&&writer.writeMessage(20,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getExplorerAutoOptimizerSetting())&&writer.writeMessage(21,f,google_ads_googleads_v2_common_explorer_auto_optimizer_setting_pb.ExplorerAutoOptimizerSetting.serializeBinaryToWriter),0!==(f=message.getDisplayCustomBidDimension())&&writer.writeEnum(23,f),null!=(f=message.getFinalUrlSuffix())&&writer.writeMessage(24,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getTargetingSetting())&&writer.writeMessage(25,f,google_ads_googleads_v2_common_targeting_setting_pb.TargetingSetting.serializeBinaryToWriter),null!=(f=message.getEffectiveTargetCpaMicros())&&writer.writeMessage(28,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),0!==(f=message.getEffectiveTargetCpaSource())&&writer.writeEnum(29,f),null!=(f=message.getEffectiveTargetRoas())&&writer.writeMessage(31,f,google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter),0!==(f=message.getEffectiveTargetRoasSource())&&writer.writeEnum(32,f),0<(f=message.getLabelsList()).length&&writer.writeRepeatedMessage(33,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,3)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setId=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.clearId=function(){this.setId(void 0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.hasId=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setName=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.clearName=function(){this.setName(void 0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.hasName=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getStatus=function(){return jspb.Message.getFieldWithDefault(this,5,0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setStatus=function(value){jspb.Message.setProto3EnumField(this,5,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,12,0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setType=function(value){jspb.Message.setProto3EnumField(this,12,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getAdRotationMode=function(){return jspb.Message.getFieldWithDefault(this,22,0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setAdRotationMode=function(value){jspb.Message.setProto3EnumField(this,22,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getBaseAdGroup=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,18)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setBaseAdGroup=function(value){jspb.Message.setWrapperField(this,18,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.clearBaseAdGroup=function(){this.setBaseAdGroup(void 0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.hasBaseAdGroup=function(){return null!=jspb.Message.getField(this,18)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getTrackingUrlTemplate=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,13)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setTrackingUrlTemplate=function(value){jspb.Message.setWrapperField(this,13,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.clearTrackingUrlTemplate=function(){this.setTrackingUrlTemplate(void 0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.hasTrackingUrlTemplate=function(){return null!=jspb.Message.getField(this,13)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getUrlCustomParametersList=function(){return jspb.Message.getRepeatedWrapperField(this,google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter,6)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setUrlCustomParametersList=function(value){jspb.Message.setRepeatedWrapperField(this,6,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.addUrlCustomParameters=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,6,opt_value,proto.google.ads.googleads.v2.common.CustomParameter,opt_index)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.clearUrlCustomParametersList=function(){this.setUrlCustomParametersList([])},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getCampaign=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,10)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setCampaign=function(value){jspb.Message.setWrapperField(this,10,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.clearCampaign=function(){this.setCampaign(void 0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.hasCampaign=function(){return null!=jspb.Message.getField(this,10)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getCpcBidMicros=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,14)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setCpcBidMicros=function(value){jspb.Message.setWrapperField(this,14,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.clearCpcBidMicros=function(){this.setCpcBidMicros(void 0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.hasCpcBidMicros=function(){return null!=jspb.Message.getField(this,14)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getCpmBidMicros=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,15)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setCpmBidMicros=function(value){jspb.Message.setWrapperField(this,15,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.clearCpmBidMicros=function(){this.setCpmBidMicros(void 0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.hasCpmBidMicros=function(){return null!=jspb.Message.getField(this,15)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getTargetCpaMicros=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,27)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setTargetCpaMicros=function(value){jspb.Message.setWrapperField(this,27,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.clearTargetCpaMicros=function(){this.setTargetCpaMicros(void 0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.hasTargetCpaMicros=function(){return null!=jspb.Message.getField(this,27)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getCpvBidMicros=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,17)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setCpvBidMicros=function(value){jspb.Message.setWrapperField(this,17,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.clearCpvBidMicros=function(){this.setCpvBidMicros(void 0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.hasCpvBidMicros=function(){return null!=jspb.Message.getField(this,17)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getTargetCpmMicros=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,26)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setTargetCpmMicros=function(value){jspb.Message.setWrapperField(this,26,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.clearTargetCpmMicros=function(){this.setTargetCpmMicros(void 0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.hasTargetCpmMicros=function(){return null!=jspb.Message.getField(this,26)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getTargetRoas=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.DoubleValue,30)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setTargetRoas=function(value){jspb.Message.setWrapperField(this,30,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.clearTargetRoas=function(){this.setTargetRoas(void 0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.hasTargetRoas=function(){return null!=jspb.Message.getField(this,30)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getPercentCpcBidMicros=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,20)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setPercentCpcBidMicros=function(value){jspb.Message.setWrapperField(this,20,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.clearPercentCpcBidMicros=function(){this.setPercentCpcBidMicros(void 0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.hasPercentCpcBidMicros=function(){return null!=jspb.Message.getField(this,20)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getExplorerAutoOptimizerSetting=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_explorer_auto_optimizer_setting_pb.ExplorerAutoOptimizerSetting,21)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setExplorerAutoOptimizerSetting=function(value){jspb.Message.setWrapperField(this,21,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.clearExplorerAutoOptimizerSetting=function(){this.setExplorerAutoOptimizerSetting(void 0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.hasExplorerAutoOptimizerSetting=function(){return null!=jspb.Message.getField(this,21)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getDisplayCustomBidDimension=function(){return jspb.Message.getFieldWithDefault(this,23,0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setDisplayCustomBidDimension=function(value){jspb.Message.setProto3EnumField(this,23,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getFinalUrlSuffix=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,24)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setFinalUrlSuffix=function(value){jspb.Message.setWrapperField(this,24,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.clearFinalUrlSuffix=function(){this.setFinalUrlSuffix(void 0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.hasFinalUrlSuffix=function(){return null!=jspb.Message.getField(this,24)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getTargetingSetting=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_targeting_setting_pb.TargetingSetting,25)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setTargetingSetting=function(value){jspb.Message.setWrapperField(this,25,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.clearTargetingSetting=function(){this.setTargetingSetting(void 0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.hasTargetingSetting=function(){return null!=jspb.Message.getField(this,25)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getEffectiveTargetCpaMicros=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,28)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setEffectiveTargetCpaMicros=function(value){jspb.Message.setWrapperField(this,28,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.clearEffectiveTargetCpaMicros=function(){this.setEffectiveTargetCpaMicros(void 0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.hasEffectiveTargetCpaMicros=function(){return null!=jspb.Message.getField(this,28)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getEffectiveTargetCpaSource=function(){return jspb.Message.getFieldWithDefault(this,29,0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setEffectiveTargetCpaSource=function(value){jspb.Message.setProto3EnumField(this,29,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getEffectiveTargetRoas=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.DoubleValue,31)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setEffectiveTargetRoas=function(value){jspb.Message.setWrapperField(this,31,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.clearEffectiveTargetRoas=function(){this.setEffectiveTargetRoas(void 0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.hasEffectiveTargetRoas=function(){return null!=jspb.Message.getField(this,31)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getEffectiveTargetRoasSource=function(){return jspb.Message.getFieldWithDefault(this,32,0)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setEffectiveTargetRoasSource=function(value){jspb.Message.setProto3EnumField(this,32,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.getLabelsList=function(){return jspb.Message.getRepeatedWrapperField(this,google_protobuf_wrappers_pb.StringValue,33)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.setLabelsList=function(value){jspb.Message.setRepeatedWrapperField(this,33,value)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.addLabels=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,33,opt_value,proto.google.protobuf.StringValue,opt_index)},proto.google.ads.googleads.v2.resources.AdGroup.prototype.clearLabelsList=function(){this.setLabelsList([])},goog.object.extend(exports,proto.google.ads.googleads.v2.resources);