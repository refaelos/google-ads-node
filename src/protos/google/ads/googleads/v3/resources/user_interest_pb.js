var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_common_criterion_category_availability_pb=require("../../../../../google/ads/googleads/v3/common/criterion_category_availability_pb.js"),google_ads_googleads_v3_enums_user_interest_taxonomy_type_pb=require("../../../../../google/ads/googleads/v3/enums/user_interest_taxonomy_type_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.resources.UserInterest",null,global),proto.google.ads.googleads.v3.resources.UserInterest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.resources.UserInterest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.resources.UserInterest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.resources.UserInterest.displayName="proto.google.ads.googleads.v3.resources.UserInterest"),proto.google.ads.googleads.v3.resources.UserInterest.repeatedFields_=[7],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.resources.UserInterest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.resources.UserInterest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.resources.UserInterest.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),taxonomyType:jspb.Message.getFieldWithDefault(msg,2,0),userInterestId:(f=msg.getUserInterestId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),name:(f=msg.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),userInterestParent:(f=msg.getUserInterestParent())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),launchedToAll:(f=msg.getLaunchedToAll())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f),availabilitiesList:jspb.Message.toObjectList(msg.getAvailabilitiesList(),google_ads_googleads_v3_common_criterion_category_availability_pb.CriterionCategoryAvailability.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.resources.UserInterest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.resources.UserInterest;return proto.google.ads.googleads.v3.resources.UserInterest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.resources.UserInterest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=reader.readEnum();msg.setTaxonomyType(value);break;case 3:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setUserInterestId(value);break;case 4:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setName(value);break;case 5:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setUserInterestParent(value);break;case 6:value=new google_protobuf_wrappers_pb.BoolValue;reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setLaunchedToAll(value);break;case 7:value=new google_ads_googleads_v3_common_criterion_category_availability_pb.CriterionCategoryAvailability;reader.readMessage(value,google_ads_googleads_v3_common_criterion_category_availability_pb.CriterionCategoryAvailability.deserializeBinaryFromReader),msg.addAvailabilities(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.resources.UserInterest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.resources.UserInterest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.resources.UserInterest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),0!==(f=message.getTaxonomyType())&&writer.writeEnum(2,f),null!=(f=message.getUserInterestId())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getName())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getUserInterestParent())&&writer.writeMessage(5,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getLaunchedToAll())&&writer.writeMessage(6,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),0<(f=message.getAvailabilitiesList()).length&&writer.writeRepeatedMessage(7,f,google_ads_googleads_v3_common_criterion_category_availability_pb.CriterionCategoryAvailability.serializeBinaryToWriter)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.resources.UserInterest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.getTaxonomyType=function(){return jspb.Message.getFieldWithDefault(this,2,0)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.setTaxonomyType=function(value){jspb.Message.setProto3EnumField(this,2,value)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.getUserInterestId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,3)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.setUserInterestId=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.clearUserInterestId=function(){this.setUserInterestId(void 0)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.hasUserInterestId=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.setName=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.clearName=function(){this.setName(void 0)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.hasName=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.getUserInterestParent=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,5)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.setUserInterestParent=function(value){jspb.Message.setWrapperField(this,5,value)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.clearUserInterestParent=function(){this.setUserInterestParent(void 0)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.hasUserInterestParent=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.getLaunchedToAll=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,6)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.setLaunchedToAll=function(value){jspb.Message.setWrapperField(this,6,value)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.clearLaunchedToAll=function(){this.setLaunchedToAll(void 0)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.hasLaunchedToAll=function(){return null!=jspb.Message.getField(this,6)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.getAvailabilitiesList=function(){return jspb.Message.getRepeatedWrapperField(this,google_ads_googleads_v3_common_criterion_category_availability_pb.CriterionCategoryAvailability,7)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.setAvailabilitiesList=function(value){jspb.Message.setRepeatedWrapperField(this,7,value)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.addAvailabilities=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,7,opt_value,proto.google.ads.googleads.v3.common.CriterionCategoryAvailability,opt_index)},proto.google.ads.googleads.v3.resources.UserInterest.prototype.clearAvailabilitiesList=function(){this.setAvailabilitiesList([])},goog.object.extend(exports,proto.google.ads.googleads.v3.resources);