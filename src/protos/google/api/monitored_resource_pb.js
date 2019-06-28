var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_label_pb=require("../../google/api/label_pb.js"),google_api_launch_stage_pb=require("../../google/api/launch_stage_pb.js"),google_protobuf_struct_pb=require("google-protobuf/google/protobuf/struct_pb.js");goog.exportSymbol("proto.google.api.MonitoredResource",null,global),goog.exportSymbol("proto.google.api.MonitoredResourceDescriptor",null,global),goog.exportSymbol("proto.google.api.MonitoredResourceMetadata",null,global),proto.google.api.MonitoredResourceDescriptor=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.api.MonitoredResourceDescriptor.repeatedFields_,null)},goog.inherits(proto.google.api.MonitoredResourceDescriptor,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.MonitoredResourceDescriptor.displayName="proto.google.api.MonitoredResourceDescriptor"),proto.google.api.MonitoredResourceDescriptor.repeatedFields_=[4],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.MonitoredResourceDescriptor.prototype.toObject=function(opt_includeInstance){return proto.google.api.MonitoredResourceDescriptor.toObject(opt_includeInstance,this)},proto.google.api.MonitoredResourceDescriptor.toObject=function(includeInstance,msg){var obj={name:jspb.Message.getFieldWithDefault(msg,5,""),type:jspb.Message.getFieldWithDefault(msg,1,""),displayName:jspb.Message.getFieldWithDefault(msg,2,""),description:jspb.Message.getFieldWithDefault(msg,3,""),labelsList:jspb.Message.toObjectList(msg.getLabelsList(),google_api_label_pb.LabelDescriptor.toObject,includeInstance),launchStage:jspb.Message.getFieldWithDefault(msg,7,0)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.MonitoredResourceDescriptor.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.MonitoredResourceDescriptor;return proto.google.api.MonitoredResourceDescriptor.deserializeBinaryFromReader(msg,reader)},proto.google.api.MonitoredResourceDescriptor.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 5:var value=reader.readString();msg.setName(value);break;case 1:value=reader.readString();msg.setType(value);break;case 2:value=reader.readString();msg.setDisplayName(value);break;case 3:value=reader.readString();msg.setDescription(value);break;case 4:value=new google_api_label_pb.LabelDescriptor;reader.readMessage(value,google_api_label_pb.LabelDescriptor.deserializeBinaryFromReader),msg.addLabels(value);break;case 7:value=reader.readEnum();msg.setLaunchStage(value);break;default:reader.skipField()}}return msg},proto.google.api.MonitoredResourceDescriptor.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.MonitoredResourceDescriptor.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.MonitoredResourceDescriptor.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getName()).length&&writer.writeString(5,f),0<(f=message.getType()).length&&writer.writeString(1,f),0<(f=message.getDisplayName()).length&&writer.writeString(2,f),0<(f=message.getDescription()).length&&writer.writeString(3,f),0<(f=message.getLabelsList()).length&&writer.writeRepeatedMessage(4,f,google_api_label_pb.LabelDescriptor.serializeBinaryToWriter),0!==(f=message.getLaunchStage())&&writer.writeEnum(7,f)},proto.google.api.MonitoredResourceDescriptor.prototype.getName=function(){return jspb.Message.getFieldWithDefault(this,5,"")},proto.google.api.MonitoredResourceDescriptor.prototype.setName=function(value){jspb.Message.setProto3StringField(this,5,value)},proto.google.api.MonitoredResourceDescriptor.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.api.MonitoredResourceDescriptor.prototype.setType=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.api.MonitoredResourceDescriptor.prototype.getDisplayName=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.api.MonitoredResourceDescriptor.prototype.setDisplayName=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.api.MonitoredResourceDescriptor.prototype.getDescription=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.api.MonitoredResourceDescriptor.prototype.setDescription=function(value){jspb.Message.setProto3StringField(this,3,value)},proto.google.api.MonitoredResourceDescriptor.prototype.getLabelsList=function(){return jspb.Message.getRepeatedWrapperField(this,google_api_label_pb.LabelDescriptor,4)},proto.google.api.MonitoredResourceDescriptor.prototype.setLabelsList=function(value){jspb.Message.setRepeatedWrapperField(this,4,value)},proto.google.api.MonitoredResourceDescriptor.prototype.addLabels=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,4,opt_value,proto.google.api.LabelDescriptor,opt_index)},proto.google.api.MonitoredResourceDescriptor.prototype.clearLabelsList=function(){this.setLabelsList([])},proto.google.api.MonitoredResourceDescriptor.prototype.getLaunchStage=function(){return jspb.Message.getFieldWithDefault(this,7,0)},proto.google.api.MonitoredResourceDescriptor.prototype.setLaunchStage=function(value){jspb.Message.setProto3EnumField(this,7,value)},proto.google.api.MonitoredResource=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.api.MonitoredResource,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.MonitoredResource.displayName="proto.google.api.MonitoredResource"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.MonitoredResource.prototype.toObject=function(opt_includeInstance){return proto.google.api.MonitoredResource.toObject(opt_includeInstance,this)},proto.google.api.MonitoredResource.toObject=function(includeInstance,msg){var f,obj={type:jspb.Message.getFieldWithDefault(msg,1,""),labelsMap:(f=msg.getLabelsMap())?f.toObject(includeInstance,void 0):[]};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.MonitoredResource.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.MonitoredResource;return proto.google.api.MonitoredResource.deserializeBinaryFromReader(msg,reader)},proto.google.api.MonitoredResource.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setType(value);break;case 2:value=msg.getLabelsMap();reader.readMessage(value,function(message,reader){jspb.Map.deserializeBinary(message,reader,jspb.BinaryReader.prototype.readString,jspb.BinaryReader.prototype.readString,null,"")});break;default:reader.skipField()}}return msg},proto.google.api.MonitoredResource.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.MonitoredResource.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.MonitoredResource.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getType()).length&&writer.writeString(1,f),(f=message.getLabelsMap(!0))&&0<f.getLength()&&f.serializeBinary(2,writer,jspb.BinaryWriter.prototype.writeString,jspb.BinaryWriter.prototype.writeString)},proto.google.api.MonitoredResource.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.api.MonitoredResource.prototype.setType=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.api.MonitoredResource.prototype.getLabelsMap=function(opt_noLazyCreate){return jspb.Message.getMapField(this,2,opt_noLazyCreate,null)},proto.google.api.MonitoredResource.prototype.clearLabelsMap=function(){this.getLabelsMap().clear()},proto.google.api.MonitoredResourceMetadata=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.api.MonitoredResourceMetadata,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.MonitoredResourceMetadata.displayName="proto.google.api.MonitoredResourceMetadata"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.MonitoredResourceMetadata.prototype.toObject=function(opt_includeInstance){return proto.google.api.MonitoredResourceMetadata.toObject(opt_includeInstance,this)},proto.google.api.MonitoredResourceMetadata.toObject=function(includeInstance,msg){var f,obj={systemLabels:(f=msg.getSystemLabels())&&google_protobuf_struct_pb.Struct.toObject(includeInstance,f),userLabelsMap:(f=msg.getUserLabelsMap())?f.toObject(includeInstance,void 0):[]};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.MonitoredResourceMetadata.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.MonitoredResourceMetadata;return proto.google.api.MonitoredResourceMetadata.deserializeBinaryFromReader(msg,reader)},proto.google.api.MonitoredResourceMetadata.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_struct_pb.Struct;reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader),msg.setSystemLabels(value);break;case 2:value=msg.getUserLabelsMap();reader.readMessage(value,function(message,reader){jspb.Map.deserializeBinary(message,reader,jspb.BinaryReader.prototype.readString,jspb.BinaryReader.prototype.readString,null,"")});break;default:reader.skipField()}}return msg},proto.google.api.MonitoredResourceMetadata.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.MonitoredResourceMetadata.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.MonitoredResourceMetadata.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getSystemLabels())&&writer.writeMessage(1,f,google_protobuf_struct_pb.Struct.serializeBinaryToWriter),(f=message.getUserLabelsMap(!0))&&0<f.getLength()&&f.serializeBinary(2,writer,jspb.BinaryWriter.prototype.writeString,jspb.BinaryWriter.prototype.writeString)},proto.google.api.MonitoredResourceMetadata.prototype.getSystemLabels=function(){return jspb.Message.getWrapperField(this,google_protobuf_struct_pb.Struct,1)},proto.google.api.MonitoredResourceMetadata.prototype.setSystemLabels=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.api.MonitoredResourceMetadata.prototype.clearSystemLabels=function(){this.setSystemLabels(void 0)},proto.google.api.MonitoredResourceMetadata.prototype.hasSystemLabels=function(){return null!=jspb.Message.getField(this,1)},proto.google.api.MonitoredResourceMetadata.prototype.getUserLabelsMap=function(opt_noLazyCreate){return jspb.Message.getMapField(this,2,opt_noLazyCreate,null)},proto.google.api.MonitoredResourceMetadata.prototype.clearUserLabelsMap=function(){this.getUserLabelsMap().clear()},goog.object.extend(exports,proto.google.api);