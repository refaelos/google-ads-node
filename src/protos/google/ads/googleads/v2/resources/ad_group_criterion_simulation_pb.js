var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v2_common_simulation_pb=require("../../../../../google/ads/googleads/v2/common/simulation_pb.js"),google_ads_googleads_v2_enums_simulation_modification_method_pb=require("../../../../../google/ads/googleads/v2/enums/simulation_modification_method_pb.js"),google_ads_googleads_v2_enums_simulation_type_pb=require("../../../../../google/ads/googleads/v2/enums/simulation_type_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation",null,global),proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.displayName="proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation"),proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.oneofGroups_=[[8]],proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.PointListCase={POINT_LIST_NOT_SET:0,CPC_BID_POINT_LIST:8},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.getPointListCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),adGroupId:(f=msg.getAdGroupId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),criterionId:(f=msg.getCriterionId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),type:jspb.Message.getFieldWithDefault(msg,4,0),modificationMethod:jspb.Message.getFieldWithDefault(msg,5,0),startDate:(f=msg.getStartDate())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),endDate:(f=msg.getEndDate())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),cpcBidPointList:(f=msg.getCpcBidPointList())&&google_ads_googleads_v2_common_simulation_pb.CpcBidSimulationPointList.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation;return proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setAdGroupId(value);break;case 3:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setCriterionId(value);break;case 4:value=reader.readEnum();msg.setType(value);break;case 5:value=reader.readEnum();msg.setModificationMethod(value);break;case 6:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setStartDate(value);break;case 7:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setEndDate(value);break;case 8:value=new google_ads_googleads_v2_common_simulation_pb.CpcBidSimulationPointList;reader.readMessage(value,google_ads_googleads_v2_common_simulation_pb.CpcBidSimulationPointList.deserializeBinaryFromReader),msg.setCpcBidPointList(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getAdGroupId())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getCriterionId())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),0!==(f=message.getType())&&writer.writeEnum(4,f),0!==(f=message.getModificationMethod())&&writer.writeEnum(5,f),null!=(f=message.getStartDate())&&writer.writeMessage(6,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getEndDate())&&writer.writeMessage(7,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getCpcBidPointList())&&writer.writeMessage(8,f,google_ads_googleads_v2_common_simulation_pb.CpcBidSimulationPointList.serializeBinaryToWriter)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.getAdGroupId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.setAdGroupId=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.clearAdGroupId=function(){this.setAdGroupId(void 0)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.hasAdGroupId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.getCriterionId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,3)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.setCriterionId=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.clearCriterionId=function(){this.setCriterionId(void 0)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.hasCriterionId=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,4,0)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.setType=function(value){jspb.Message.setProto3EnumField(this,4,value)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.getModificationMethod=function(){return jspb.Message.getFieldWithDefault(this,5,0)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.setModificationMethod=function(value){jspb.Message.setProto3EnumField(this,5,value)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.getStartDate=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,6)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.setStartDate=function(value){jspb.Message.setWrapperField(this,6,value)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.clearStartDate=function(){this.setStartDate(void 0)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.hasStartDate=function(){return null!=jspb.Message.getField(this,6)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.getEndDate=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,7)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.setEndDate=function(value){jspb.Message.setWrapperField(this,7,value)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.clearEndDate=function(){this.setEndDate(void 0)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.hasEndDate=function(){return null!=jspb.Message.getField(this,7)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.getCpcBidPointList=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_simulation_pb.CpcBidSimulationPointList,8)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.setCpcBidPointList=function(value){jspb.Message.setOneofWrapperField(this,8,proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.oneofGroups_[0],value)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.clearCpcBidPointList=function(){this.setCpcBidPointList(void 0)},proto.google.ads.googleads.v2.resources.AdGroupCriterionSimulation.prototype.hasCpcBidPointList=function(){return null!=jspb.Message.getField(this,8)},goog.object.extend(exports,proto.google.ads.googleads.v2.resources);