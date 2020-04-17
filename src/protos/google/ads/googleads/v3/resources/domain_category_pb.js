var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.resources.DomainCategory",null,global),proto.google.ads.googleads.v3.resources.DomainCategory=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.resources.DomainCategory,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.resources.DomainCategory.displayName="proto.google.ads.googleads.v3.resources.DomainCategory"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.resources.DomainCategory.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.resources.DomainCategory.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.resources.DomainCategory.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),campaign:(f=msg.getCampaign())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),category:(f=msg.getCategory())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),languageCode:(f=msg.getLanguageCode())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),domain:(f=msg.getDomain())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),coverageFraction:(f=msg.getCoverageFraction())&&google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance,f),categoryRank:(f=msg.getCategoryRank())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),hasChildren:(f=msg.getHasChildren())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f),recommendedCpcBidMicros:(f=msg.getRecommendedCpcBidMicros())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.resources.DomainCategory.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.resources.DomainCategory;return proto.google.ads.googleads.v3.resources.DomainCategory.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.resources.DomainCategory.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setCampaign(value);break;case 3:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setCategory(value);break;case 4:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setLanguageCode(value);break;case 5:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setDomain(value);break;case 6:value=new google_protobuf_wrappers_pb.DoubleValue;reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader),msg.setCoverageFraction(value);break;case 7:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setCategoryRank(value);break;case 8:value=new google_protobuf_wrappers_pb.BoolValue;reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setHasChildren(value);break;case 9:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setRecommendedCpcBidMicros(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.resources.DomainCategory.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.resources.DomainCategory.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getCampaign())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getCategory())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getLanguageCode())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getDomain())&&writer.writeMessage(5,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getCoverageFraction())&&writer.writeMessage(6,f,google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter),null!=(f=message.getCategoryRank())&&writer.writeMessage(7,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getHasChildren())&&writer.writeMessage(8,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),null!=(f=message.getRecommendedCpcBidMicros())&&writer.writeMessage(9,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.getCampaign=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.setCampaign=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.clearCampaign=function(){this.setCampaign(void 0)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.hasCampaign=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.getCategory=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.setCategory=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.clearCategory=function(){this.setCategory(void 0)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.hasCategory=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.getLanguageCode=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.setLanguageCode=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.clearLanguageCode=function(){this.setLanguageCode(void 0)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.hasLanguageCode=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.getDomain=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,5)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.setDomain=function(value){jspb.Message.setWrapperField(this,5,value)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.clearDomain=function(){this.setDomain(void 0)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.hasDomain=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.getCoverageFraction=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.DoubleValue,6)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.setCoverageFraction=function(value){jspb.Message.setWrapperField(this,6,value)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.clearCoverageFraction=function(){this.setCoverageFraction(void 0)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.hasCoverageFraction=function(){return null!=jspb.Message.getField(this,6)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.getCategoryRank=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,7)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.setCategoryRank=function(value){jspb.Message.setWrapperField(this,7,value)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.clearCategoryRank=function(){this.setCategoryRank(void 0)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.hasCategoryRank=function(){return null!=jspb.Message.getField(this,7)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.getHasChildren=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,8)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.setHasChildren=function(value){jspb.Message.setWrapperField(this,8,value)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.clearHasChildren=function(){this.setHasChildren(void 0)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.hasHasChildren=function(){return null!=jspb.Message.getField(this,8)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.getRecommendedCpcBidMicros=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,9)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.setRecommendedCpcBidMicros=function(value){jspb.Message.setWrapperField(this,9,value)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.clearRecommendedCpcBidMicros=function(){this.setRecommendedCpcBidMicros(void 0)},proto.google.ads.googleads.v3.resources.DomainCategory.prototype.hasRecommendedCpcBidMicros=function(){return null!=jspb.Message.getField(this,9)},goog.object.extend(exports,proto.google.ads.googleads.v3.resources);