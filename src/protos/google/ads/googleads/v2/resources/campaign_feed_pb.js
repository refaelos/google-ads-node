var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v2_common_matching_function_pb=require("../../../../../google/ads/googleads/v2/common/matching_function_pb.js"),google_ads_googleads_v2_enums_feed_link_status_pb=require("../../../../../google/ads/googleads/v2/enums/feed_link_status_pb.js"),google_ads_googleads_v2_enums_placeholder_type_pb=require("../../../../../google/ads/googleads/v2/enums/placeholder_type_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.resources.CampaignFeed",null,global),proto.google.ads.googleads.v2.resources.CampaignFeed=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v2.resources.CampaignFeed.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v2.resources.CampaignFeed,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.resources.CampaignFeed.displayName="proto.google.ads.googleads.v2.resources.CampaignFeed"),proto.google.ads.googleads.v2.resources.CampaignFeed.repeatedFields_=[4],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.resources.CampaignFeed.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.resources.CampaignFeed.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),feed:(f=msg.getFeed())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),campaign:(f=msg.getCampaign())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),placeholderTypesList:jspb.Message.getRepeatedField(msg,4),matchingFunction:(f=msg.getMatchingFunction())&&google_ads_googleads_v2_common_matching_function_pb.MatchingFunction.toObject(includeInstance,f),status:jspb.Message.getFieldWithDefault(msg,6,0)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.resources.CampaignFeed.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.resources.CampaignFeed;return proto.google.ads.googleads.v2.resources.CampaignFeed.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.resources.CampaignFeed.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setFeed(value);break;case 3:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setCampaign(value);break;case 4:value=reader.readPackedEnum();msg.setPlaceholderTypesList(value);break;case 5:value=new google_ads_googleads_v2_common_matching_function_pb.MatchingFunction;reader.readMessage(value,google_ads_googleads_v2_common_matching_function_pb.MatchingFunction.deserializeBinaryFromReader),msg.setMatchingFunction(value);break;case 6:value=reader.readEnum();msg.setStatus(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.resources.CampaignFeed.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.resources.CampaignFeed.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getFeed())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getCampaign())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0<(f=message.getPlaceholderTypesList()).length&&writer.writePackedEnum(4,f),null!=(f=message.getMatchingFunction())&&writer.writeMessage(5,f,google_ads_googleads_v2_common_matching_function_pb.MatchingFunction.serializeBinaryToWriter),0!==(f=message.getStatus())&&writer.writeEnum(6,f)},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.getFeed=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.setFeed=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.clearFeed=function(){this.setFeed(void 0)},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.hasFeed=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.getCampaign=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.setCampaign=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.clearCampaign=function(){this.setCampaign(void 0)},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.hasCampaign=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.getPlaceholderTypesList=function(){return jspb.Message.getRepeatedField(this,4)},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.setPlaceholderTypesList=function(value){jspb.Message.setField(this,4,value||[])},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.addPlaceholderTypes=function(value,opt_index){jspb.Message.addToRepeatedField(this,4,value,opt_index)},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.clearPlaceholderTypesList=function(){this.setPlaceholderTypesList([])},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.getMatchingFunction=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v2_common_matching_function_pb.MatchingFunction,5)},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.setMatchingFunction=function(value){jspb.Message.setWrapperField(this,5,value)},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.clearMatchingFunction=function(){this.setMatchingFunction(void 0)},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.hasMatchingFunction=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.getStatus=function(){return jspb.Message.getFieldWithDefault(this,6,0)},proto.google.ads.googleads.v2.resources.CampaignFeed.prototype.setStatus=function(value){jspb.Message.setProto3EnumField(this,6,value)},goog.object.extend(exports,proto.google.ads.googleads.v2.resources);