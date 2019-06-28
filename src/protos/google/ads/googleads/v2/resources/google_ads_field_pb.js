var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v2_enums_google_ads_field_category_pb=require("../../../../../google/ads/googleads/v2/enums/google_ads_field_category_pb.js"),google_ads_googleads_v2_enums_google_ads_field_data_type_pb=require("../../../../../google/ads/googleads/v2/enums/google_ads_field_data_type_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.resources.GoogleAdsField",null,global),proto.google.ads.googleads.v2.resources.GoogleAdsField=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v2.resources.GoogleAdsField.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v2.resources.GoogleAdsField,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.resources.GoogleAdsField.displayName="proto.google.ads.googleads.v2.resources.GoogleAdsField"),proto.google.ads.googleads.v2.resources.GoogleAdsField.repeatedFields_=[7,8,9,10,11],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.resources.GoogleAdsField.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.resources.GoogleAdsField.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),name:(f=msg.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),category:jspb.Message.getFieldWithDefault(msg,3,0),selectable:(f=msg.getSelectable())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f),filterable:(f=msg.getFilterable())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f),sortable:(f=msg.getSortable())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f),selectableWithList:jspb.Message.toObjectList(msg.getSelectableWithList(),google_protobuf_wrappers_pb.StringValue.toObject,includeInstance),attributeResourcesList:jspb.Message.toObjectList(msg.getAttributeResourcesList(),google_protobuf_wrappers_pb.StringValue.toObject,includeInstance),metricsList:jspb.Message.toObjectList(msg.getMetricsList(),google_protobuf_wrappers_pb.StringValue.toObject,includeInstance),segmentsList:jspb.Message.toObjectList(msg.getSegmentsList(),google_protobuf_wrappers_pb.StringValue.toObject,includeInstance),enumValuesList:jspb.Message.toObjectList(msg.getEnumValuesList(),google_protobuf_wrappers_pb.StringValue.toObject,includeInstance),dataType:jspb.Message.getFieldWithDefault(msg,12,0),typeUrl:(f=msg.getTypeUrl())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),isRepeated:(f=msg.getIsRepeated())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.resources.GoogleAdsField.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.resources.GoogleAdsField;return proto.google.ads.googleads.v2.resources.GoogleAdsField.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.resources.GoogleAdsField.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setName(value);break;case 3:value=reader.readEnum();msg.setCategory(value);break;case 4:value=new google_protobuf_wrappers_pb.BoolValue;reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setSelectable(value);break;case 5:value=new google_protobuf_wrappers_pb.BoolValue;reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setFilterable(value);break;case 6:value=new google_protobuf_wrappers_pb.BoolValue;reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setSortable(value);break;case 7:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.addSelectableWith(value);break;case 8:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.addAttributeResources(value);break;case 9:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.addMetrics(value);break;case 10:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.addSegments(value);break;case 11:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.addEnumValues(value);break;case 12:value=reader.readEnum();msg.setDataType(value);break;case 13:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setTypeUrl(value);break;case 14:value=new google_protobuf_wrappers_pb.BoolValue;reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setIsRepeated(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.resources.GoogleAdsField.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.resources.GoogleAdsField.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getName())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0!==(f=message.getCategory())&&writer.writeEnum(3,f),null!=(f=message.getSelectable())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),null!=(f=message.getFilterable())&&writer.writeMessage(5,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),null!=(f=message.getSortable())&&writer.writeMessage(6,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),0<(f=message.getSelectableWithList()).length&&writer.writeRepeatedMessage(7,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0<(f=message.getAttributeResourcesList()).length&&writer.writeRepeatedMessage(8,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0<(f=message.getMetricsList()).length&&writer.writeRepeatedMessage(9,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0<(f=message.getSegmentsList()).length&&writer.writeRepeatedMessage(10,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0<(f=message.getEnumValuesList()).length&&writer.writeRepeatedMessage(11,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0!==(f=message.getDataType())&&writer.writeEnum(12,f),null!=(f=message.getTypeUrl())&&writer.writeMessage(13,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getIsRepeated())&&writer.writeMessage(14,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.setName=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.clearName=function(){this.setName(void 0)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.hasName=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.getCategory=function(){return jspb.Message.getFieldWithDefault(this,3,0)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.setCategory=function(value){jspb.Message.setProto3EnumField(this,3,value)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.getSelectable=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,4)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.setSelectable=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.clearSelectable=function(){this.setSelectable(void 0)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.hasSelectable=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.getFilterable=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,5)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.setFilterable=function(value){jspb.Message.setWrapperField(this,5,value)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.clearFilterable=function(){this.setFilterable(void 0)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.hasFilterable=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.getSortable=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,6)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.setSortable=function(value){jspb.Message.setWrapperField(this,6,value)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.clearSortable=function(){this.setSortable(void 0)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.hasSortable=function(){return null!=jspb.Message.getField(this,6)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.getSelectableWithList=function(){return jspb.Message.getRepeatedWrapperField(this,google_protobuf_wrappers_pb.StringValue,7)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.setSelectableWithList=function(value){jspb.Message.setRepeatedWrapperField(this,7,value)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.addSelectableWith=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,7,opt_value,proto.google.protobuf.StringValue,opt_index)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.clearSelectableWithList=function(){this.setSelectableWithList([])},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.getAttributeResourcesList=function(){return jspb.Message.getRepeatedWrapperField(this,google_protobuf_wrappers_pb.StringValue,8)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.setAttributeResourcesList=function(value){jspb.Message.setRepeatedWrapperField(this,8,value)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.addAttributeResources=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,8,opt_value,proto.google.protobuf.StringValue,opt_index)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.clearAttributeResourcesList=function(){this.setAttributeResourcesList([])},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.getMetricsList=function(){return jspb.Message.getRepeatedWrapperField(this,google_protobuf_wrappers_pb.StringValue,9)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.setMetricsList=function(value){jspb.Message.setRepeatedWrapperField(this,9,value)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.addMetrics=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,9,opt_value,proto.google.protobuf.StringValue,opt_index)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.clearMetricsList=function(){this.setMetricsList([])},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.getSegmentsList=function(){return jspb.Message.getRepeatedWrapperField(this,google_protobuf_wrappers_pb.StringValue,10)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.setSegmentsList=function(value){jspb.Message.setRepeatedWrapperField(this,10,value)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.addSegments=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,10,opt_value,proto.google.protobuf.StringValue,opt_index)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.clearSegmentsList=function(){this.setSegmentsList([])},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.getEnumValuesList=function(){return jspb.Message.getRepeatedWrapperField(this,google_protobuf_wrappers_pb.StringValue,11)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.setEnumValuesList=function(value){jspb.Message.setRepeatedWrapperField(this,11,value)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.addEnumValues=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,11,opt_value,proto.google.protobuf.StringValue,opt_index)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.clearEnumValuesList=function(){this.setEnumValuesList([])},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.getDataType=function(){return jspb.Message.getFieldWithDefault(this,12,0)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.setDataType=function(value){jspb.Message.setProto3EnumField(this,12,value)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.getTypeUrl=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,13)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.setTypeUrl=function(value){jspb.Message.setWrapperField(this,13,value)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.clearTypeUrl=function(){this.setTypeUrl(void 0)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.hasTypeUrl=function(){return null!=jspb.Message.getField(this,13)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.getIsRepeated=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,14)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.setIsRepeated=function(value){jspb.Message.setWrapperField(this,14,value)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.clearIsRepeated=function(){this.setIsRepeated(void 0)},proto.google.ads.googleads.v2.resources.GoogleAdsField.prototype.hasIsRepeated=function(){return null!=jspb.Message.getField(this,14)},goog.object.extend(exports,proto.google.ads.googleads.v2.resources);