var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_enums_custom_interest_member_type_pb=require("../../../../../google/ads/googleads/v3/enums/custom_interest_member_type_pb.js"),google_ads_googleads_v3_enums_custom_interest_status_pb=require("../../../../../google/ads/googleads/v3/enums/custom_interest_status_pb.js"),google_ads_googleads_v3_enums_custom_interest_type_pb=require("../../../../../google/ads/googleads/v3/enums/custom_interest_type_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.resources.CustomInterest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.resources.CustomInterestMember",null,global),proto.google.ads.googleads.v3.resources.CustomInterest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.resources.CustomInterest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.resources.CustomInterest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.resources.CustomInterest.displayName="proto.google.ads.googleads.v3.resources.CustomInterest"),proto.google.ads.googleads.v3.resources.CustomInterest.repeatedFields_=[7],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.resources.CustomInterest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.resources.CustomInterest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.resources.CustomInterest.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),id:(f=msg.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),status:jspb.Message.getFieldWithDefault(msg,3,0),name:(f=msg.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),type:jspb.Message.getFieldWithDefault(msg,5,0),description:(f=msg.getDescription())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),membersList:jspb.Message.toObjectList(msg.getMembersList(),proto.google.ads.googleads.v3.resources.CustomInterestMember.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.resources.CustomInterest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.resources.CustomInterest;return proto.google.ads.googleads.v3.resources.CustomInterest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.resources.CustomInterest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setId(value);break;case 3:value=reader.readEnum();msg.setStatus(value);break;case 4:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setName(value);break;case 5:value=reader.readEnum();msg.setType(value);break;case 6:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setDescription(value);break;case 7:value=new proto.google.ads.googleads.v3.resources.CustomInterestMember;reader.readMessage(value,proto.google.ads.googleads.v3.resources.CustomInterestMember.deserializeBinaryFromReader),msg.addMembers(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.resources.CustomInterest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.resources.CustomInterest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getId())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),0!==(f=message.getStatus())&&writer.writeEnum(3,f),null!=(f=message.getName())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0!==(f=message.getType())&&writer.writeEnum(5,f),null!=(f=message.getDescription())&&writer.writeMessage(6,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0<(f=message.getMembersList()).length&&writer.writeRepeatedMessage(7,f,proto.google.ads.googleads.v3.resources.CustomInterestMember.serializeBinaryToWriter)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.setId=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.clearId=function(){this.setId(void 0)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.hasId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.getStatus=function(){return jspb.Message.getFieldWithDefault(this,3,0)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.setStatus=function(value){jspb.Message.setProto3EnumField(this,3,value)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.setName=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.clearName=function(){this.setName(void 0)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.hasName=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,5,0)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.setType=function(value){jspb.Message.setProto3EnumField(this,5,value)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.getDescription=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,6)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.setDescription=function(value){jspb.Message.setWrapperField(this,6,value)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.clearDescription=function(){this.setDescription(void 0)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.hasDescription=function(){return null!=jspb.Message.getField(this,6)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.getMembersList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.resources.CustomInterestMember,7)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.setMembersList=function(value){jspb.Message.setRepeatedWrapperField(this,7,value)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.addMembers=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,7,opt_value,proto.google.ads.googleads.v3.resources.CustomInterestMember,opt_index)},proto.google.ads.googleads.v3.resources.CustomInterest.prototype.clearMembersList=function(){this.setMembersList([])},proto.google.ads.googleads.v3.resources.CustomInterestMember=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.resources.CustomInterestMember,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.resources.CustomInterestMember.displayName="proto.google.ads.googleads.v3.resources.CustomInterestMember"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.resources.CustomInterestMember.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.resources.CustomInterestMember.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.resources.CustomInterestMember.toObject=function(includeInstance,msg){var f,obj={memberType:jspb.Message.getFieldWithDefault(msg,1,0),parameter:(f=msg.getParameter())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.resources.CustomInterestMember.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.resources.CustomInterestMember;return proto.google.ads.googleads.v3.resources.CustomInterestMember.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.resources.CustomInterestMember.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readEnum();msg.setMemberType(value);break;case 2:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setParameter(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.resources.CustomInterestMember.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.resources.CustomInterestMember.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.resources.CustomInterestMember.serializeBinaryToWriter=function(message,writer){var f=void 0;0!==(f=message.getMemberType())&&writer.writeEnum(1,f),null!=(f=message.getParameter())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v3.resources.CustomInterestMember.prototype.getMemberType=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.ads.googleads.v3.resources.CustomInterestMember.prototype.setMemberType=function(value){jspb.Message.setProto3EnumField(this,1,value)},proto.google.ads.googleads.v3.resources.CustomInterestMember.prototype.getParameter=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v3.resources.CustomInterestMember.prototype.setParameter=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v3.resources.CustomInterestMember.prototype.clearParameter=function(){this.setParameter(void 0)},proto.google.ads.googleads.v3.resources.CustomInterestMember.prototype.hasParameter=function(){return null!=jspb.Message.getField(this,2)},goog.object.extend(exports,proto.google.ads.googleads.v3.resources);