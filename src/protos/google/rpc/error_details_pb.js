var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_protobuf_duration_pb=require("google-protobuf/google/protobuf/duration_pb.js");goog.exportSymbol("proto.google.rpc.BadRequest",null,global),goog.exportSymbol("proto.google.rpc.BadRequest.FieldViolation",null,global),goog.exportSymbol("proto.google.rpc.DebugInfo",null,global),goog.exportSymbol("proto.google.rpc.ErrorInfo",null,global),goog.exportSymbol("proto.google.rpc.Help",null,global),goog.exportSymbol("proto.google.rpc.Help.Link",null,global),goog.exportSymbol("proto.google.rpc.LocalizedMessage",null,global),goog.exportSymbol("proto.google.rpc.PreconditionFailure",null,global),goog.exportSymbol("proto.google.rpc.PreconditionFailure.Violation",null,global),goog.exportSymbol("proto.google.rpc.QuotaFailure",null,global),goog.exportSymbol("proto.google.rpc.QuotaFailure.Violation",null,global),goog.exportSymbol("proto.google.rpc.RequestInfo",null,global),goog.exportSymbol("proto.google.rpc.ResourceInfo",null,global),goog.exportSymbol("proto.google.rpc.RetryInfo",null,global),proto.google.rpc.RetryInfo=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.rpc.RetryInfo,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.rpc.RetryInfo.displayName="proto.google.rpc.RetryInfo"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.rpc.RetryInfo.prototype.toObject=function(opt_includeInstance){return proto.google.rpc.RetryInfo.toObject(opt_includeInstance,this)},proto.google.rpc.RetryInfo.toObject=function(includeInstance,msg){var f,obj={retryDelay:(f=msg.getRetryDelay())&&google_protobuf_duration_pb.Duration.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.rpc.RetryInfo.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.rpc.RetryInfo;return proto.google.rpc.RetryInfo.deserializeBinaryFromReader(msg,reader)},proto.google.rpc.RetryInfo.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_duration_pb.Duration;reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader),msg.setRetryDelay(value);break;default:reader.skipField()}}return msg},proto.google.rpc.RetryInfo.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.rpc.RetryInfo.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.rpc.RetryInfo.serializeBinaryToWriter=function(message,writer){var f;null!=(f=message.getRetryDelay())&&writer.writeMessage(1,f,google_protobuf_duration_pb.Duration.serializeBinaryToWriter)},proto.google.rpc.RetryInfo.prototype.getRetryDelay=function(){return jspb.Message.getWrapperField(this,google_protobuf_duration_pb.Duration,1)},proto.google.rpc.RetryInfo.prototype.setRetryDelay=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.rpc.RetryInfo.prototype.clearRetryDelay=function(){this.setRetryDelay(void 0)},proto.google.rpc.RetryInfo.prototype.hasRetryDelay=function(){return null!=jspb.Message.getField(this,1)},proto.google.rpc.DebugInfo=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.rpc.DebugInfo.repeatedFields_,null)},goog.inherits(proto.google.rpc.DebugInfo,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.rpc.DebugInfo.displayName="proto.google.rpc.DebugInfo"),proto.google.rpc.DebugInfo.repeatedFields_=[1],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.rpc.DebugInfo.prototype.toObject=function(opt_includeInstance){return proto.google.rpc.DebugInfo.toObject(opt_includeInstance,this)},proto.google.rpc.DebugInfo.toObject=function(includeInstance,msg){var obj={stackEntriesList:jspb.Message.getRepeatedField(msg,1),detail:jspb.Message.getFieldWithDefault(msg,2,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.rpc.DebugInfo.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.rpc.DebugInfo;return proto.google.rpc.DebugInfo.deserializeBinaryFromReader(msg,reader)},proto.google.rpc.DebugInfo.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.addStackEntries(value);break;case 2:value=reader.readString();msg.setDetail(value);break;default:reader.skipField()}}return msg},proto.google.rpc.DebugInfo.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.rpc.DebugInfo.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.rpc.DebugInfo.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getStackEntriesList()).length&&writer.writeRepeatedString(1,f),0<(f=message.getDetail()).length&&writer.writeString(2,f)},proto.google.rpc.DebugInfo.prototype.getStackEntriesList=function(){return jspb.Message.getRepeatedField(this,1)},proto.google.rpc.DebugInfo.prototype.setStackEntriesList=function(value){jspb.Message.setField(this,1,value||[])},proto.google.rpc.DebugInfo.prototype.addStackEntries=function(value,opt_index){jspb.Message.addToRepeatedField(this,1,value,opt_index)},proto.google.rpc.DebugInfo.prototype.clearStackEntriesList=function(){this.setStackEntriesList([])},proto.google.rpc.DebugInfo.prototype.getDetail=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.rpc.DebugInfo.prototype.setDetail=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.rpc.QuotaFailure=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.rpc.QuotaFailure.repeatedFields_,null)},goog.inherits(proto.google.rpc.QuotaFailure,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.rpc.QuotaFailure.displayName="proto.google.rpc.QuotaFailure"),proto.google.rpc.QuotaFailure.repeatedFields_=[1],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.rpc.QuotaFailure.prototype.toObject=function(opt_includeInstance){return proto.google.rpc.QuotaFailure.toObject(opt_includeInstance,this)},proto.google.rpc.QuotaFailure.toObject=function(includeInstance,msg){var obj={violationsList:jspb.Message.toObjectList(msg.getViolationsList(),proto.google.rpc.QuotaFailure.Violation.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.rpc.QuotaFailure.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.rpc.QuotaFailure;return proto.google.rpc.QuotaFailure.deserializeBinaryFromReader(msg,reader)},proto.google.rpc.QuotaFailure.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new proto.google.rpc.QuotaFailure.Violation;reader.readMessage(value,proto.google.rpc.QuotaFailure.Violation.deserializeBinaryFromReader),msg.addViolations(value);break;default:reader.skipField()}}return msg},proto.google.rpc.QuotaFailure.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.rpc.QuotaFailure.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.rpc.QuotaFailure.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getViolationsList()).length&&writer.writeRepeatedMessage(1,f,proto.google.rpc.QuotaFailure.Violation.serializeBinaryToWriter)},proto.google.rpc.QuotaFailure.Violation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.rpc.QuotaFailure.Violation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.rpc.QuotaFailure.Violation.displayName="proto.google.rpc.QuotaFailure.Violation"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.rpc.QuotaFailure.Violation.prototype.toObject=function(opt_includeInstance){return proto.google.rpc.QuotaFailure.Violation.toObject(opt_includeInstance,this)},proto.google.rpc.QuotaFailure.Violation.toObject=function(includeInstance,msg){var obj={subject:jspb.Message.getFieldWithDefault(msg,1,""),description:jspb.Message.getFieldWithDefault(msg,2,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.rpc.QuotaFailure.Violation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.rpc.QuotaFailure.Violation;return proto.google.rpc.QuotaFailure.Violation.deserializeBinaryFromReader(msg,reader)},proto.google.rpc.QuotaFailure.Violation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setSubject(value);break;case 2:value=reader.readString();msg.setDescription(value);break;default:reader.skipField()}}return msg},proto.google.rpc.QuotaFailure.Violation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.rpc.QuotaFailure.Violation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.rpc.QuotaFailure.Violation.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getSubject()).length&&writer.writeString(1,f),0<(f=message.getDescription()).length&&writer.writeString(2,f)},proto.google.rpc.QuotaFailure.Violation.prototype.getSubject=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.rpc.QuotaFailure.Violation.prototype.setSubject=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.rpc.QuotaFailure.Violation.prototype.getDescription=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.rpc.QuotaFailure.Violation.prototype.setDescription=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.rpc.QuotaFailure.prototype.getViolationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.rpc.QuotaFailure.Violation,1)},proto.google.rpc.QuotaFailure.prototype.setViolationsList=function(value){jspb.Message.setRepeatedWrapperField(this,1,value)},proto.google.rpc.QuotaFailure.prototype.addViolations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.google.rpc.QuotaFailure.Violation,opt_index)},proto.google.rpc.QuotaFailure.prototype.clearViolationsList=function(){this.setViolationsList([])},proto.google.rpc.ErrorInfo=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.rpc.ErrorInfo,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.rpc.ErrorInfo.displayName="proto.google.rpc.ErrorInfo"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.rpc.ErrorInfo.prototype.toObject=function(opt_includeInstance){return proto.google.rpc.ErrorInfo.toObject(opt_includeInstance,this)},proto.google.rpc.ErrorInfo.toObject=function(includeInstance,msg){var f,obj={type:jspb.Message.getFieldWithDefault(msg,1,""),domain:jspb.Message.getFieldWithDefault(msg,2,""),metadataMap:(f=msg.getMetadataMap())?f.toObject(includeInstance,void 0):[]};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.rpc.ErrorInfo.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.rpc.ErrorInfo;return proto.google.rpc.ErrorInfo.deserializeBinaryFromReader(msg,reader)},proto.google.rpc.ErrorInfo.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setType(value);break;case 2:value=reader.readString();msg.setDomain(value);break;case 3:value=msg.getMetadataMap();reader.readMessage(value,function(message,reader){jspb.Map.deserializeBinary(message,reader,jspb.BinaryReader.prototype.readString,jspb.BinaryReader.prototype.readString,null,"")});break;default:reader.skipField()}}return msg},proto.google.rpc.ErrorInfo.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.rpc.ErrorInfo.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.rpc.ErrorInfo.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getType()).length&&writer.writeString(1,f),0<(f=message.getDomain()).length&&writer.writeString(2,f),(f=message.getMetadataMap(!0))&&0<f.getLength()&&f.serializeBinary(3,writer,jspb.BinaryWriter.prototype.writeString,jspb.BinaryWriter.prototype.writeString)},proto.google.rpc.ErrorInfo.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.rpc.ErrorInfo.prototype.setType=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.rpc.ErrorInfo.prototype.getDomain=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.rpc.ErrorInfo.prototype.setDomain=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.rpc.ErrorInfo.prototype.getMetadataMap=function(opt_noLazyCreate){return jspb.Message.getMapField(this,3,opt_noLazyCreate,null)},proto.google.rpc.ErrorInfo.prototype.clearMetadataMap=function(){this.getMetadataMap().clear()},proto.google.rpc.PreconditionFailure=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.rpc.PreconditionFailure.repeatedFields_,null)},goog.inherits(proto.google.rpc.PreconditionFailure,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.rpc.PreconditionFailure.displayName="proto.google.rpc.PreconditionFailure"),proto.google.rpc.PreconditionFailure.repeatedFields_=[1],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.rpc.PreconditionFailure.prototype.toObject=function(opt_includeInstance){return proto.google.rpc.PreconditionFailure.toObject(opt_includeInstance,this)},proto.google.rpc.PreconditionFailure.toObject=function(includeInstance,msg){var obj={violationsList:jspb.Message.toObjectList(msg.getViolationsList(),proto.google.rpc.PreconditionFailure.Violation.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.rpc.PreconditionFailure.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.rpc.PreconditionFailure;return proto.google.rpc.PreconditionFailure.deserializeBinaryFromReader(msg,reader)},proto.google.rpc.PreconditionFailure.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new proto.google.rpc.PreconditionFailure.Violation;reader.readMessage(value,proto.google.rpc.PreconditionFailure.Violation.deserializeBinaryFromReader),msg.addViolations(value);break;default:reader.skipField()}}return msg},proto.google.rpc.PreconditionFailure.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.rpc.PreconditionFailure.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.rpc.PreconditionFailure.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getViolationsList()).length&&writer.writeRepeatedMessage(1,f,proto.google.rpc.PreconditionFailure.Violation.serializeBinaryToWriter)},proto.google.rpc.PreconditionFailure.Violation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.rpc.PreconditionFailure.Violation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.rpc.PreconditionFailure.Violation.displayName="proto.google.rpc.PreconditionFailure.Violation"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.rpc.PreconditionFailure.Violation.prototype.toObject=function(opt_includeInstance){return proto.google.rpc.PreconditionFailure.Violation.toObject(opt_includeInstance,this)},proto.google.rpc.PreconditionFailure.Violation.toObject=function(includeInstance,msg){var obj={type:jspb.Message.getFieldWithDefault(msg,1,""),subject:jspb.Message.getFieldWithDefault(msg,2,""),description:jspb.Message.getFieldWithDefault(msg,3,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.rpc.PreconditionFailure.Violation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.rpc.PreconditionFailure.Violation;return proto.google.rpc.PreconditionFailure.Violation.deserializeBinaryFromReader(msg,reader)},proto.google.rpc.PreconditionFailure.Violation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setType(value);break;case 2:value=reader.readString();msg.setSubject(value);break;case 3:value=reader.readString();msg.setDescription(value);break;default:reader.skipField()}}return msg},proto.google.rpc.PreconditionFailure.Violation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.rpc.PreconditionFailure.Violation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.rpc.PreconditionFailure.Violation.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getType()).length&&writer.writeString(1,f),0<(f=message.getSubject()).length&&writer.writeString(2,f),0<(f=message.getDescription()).length&&writer.writeString(3,f)},proto.google.rpc.PreconditionFailure.Violation.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.rpc.PreconditionFailure.Violation.prototype.setType=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.rpc.PreconditionFailure.Violation.prototype.getSubject=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.rpc.PreconditionFailure.Violation.prototype.setSubject=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.rpc.PreconditionFailure.Violation.prototype.getDescription=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.rpc.PreconditionFailure.Violation.prototype.setDescription=function(value){jspb.Message.setProto3StringField(this,3,value)},proto.google.rpc.PreconditionFailure.prototype.getViolationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.rpc.PreconditionFailure.Violation,1)},proto.google.rpc.PreconditionFailure.prototype.setViolationsList=function(value){jspb.Message.setRepeatedWrapperField(this,1,value)},proto.google.rpc.PreconditionFailure.prototype.addViolations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.google.rpc.PreconditionFailure.Violation,opt_index)},proto.google.rpc.PreconditionFailure.prototype.clearViolationsList=function(){this.setViolationsList([])},proto.google.rpc.BadRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.rpc.BadRequest.repeatedFields_,null)},goog.inherits(proto.google.rpc.BadRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.rpc.BadRequest.displayName="proto.google.rpc.BadRequest"),proto.google.rpc.BadRequest.repeatedFields_=[1],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.rpc.BadRequest.prototype.toObject=function(opt_includeInstance){return proto.google.rpc.BadRequest.toObject(opt_includeInstance,this)},proto.google.rpc.BadRequest.toObject=function(includeInstance,msg){var obj={fieldViolationsList:jspb.Message.toObjectList(msg.getFieldViolationsList(),proto.google.rpc.BadRequest.FieldViolation.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.rpc.BadRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.rpc.BadRequest;return proto.google.rpc.BadRequest.deserializeBinaryFromReader(msg,reader)},proto.google.rpc.BadRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new proto.google.rpc.BadRequest.FieldViolation;reader.readMessage(value,proto.google.rpc.BadRequest.FieldViolation.deserializeBinaryFromReader),msg.addFieldViolations(value);break;default:reader.skipField()}}return msg},proto.google.rpc.BadRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.rpc.BadRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.rpc.BadRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getFieldViolationsList()).length&&writer.writeRepeatedMessage(1,f,proto.google.rpc.BadRequest.FieldViolation.serializeBinaryToWriter)},proto.google.rpc.BadRequest.FieldViolation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.rpc.BadRequest.FieldViolation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.rpc.BadRequest.FieldViolation.displayName="proto.google.rpc.BadRequest.FieldViolation"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.rpc.BadRequest.FieldViolation.prototype.toObject=function(opt_includeInstance){return proto.google.rpc.BadRequest.FieldViolation.toObject(opt_includeInstance,this)},proto.google.rpc.BadRequest.FieldViolation.toObject=function(includeInstance,msg){var obj={field:jspb.Message.getFieldWithDefault(msg,1,""),description:jspb.Message.getFieldWithDefault(msg,2,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.rpc.BadRequest.FieldViolation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.rpc.BadRequest.FieldViolation;return proto.google.rpc.BadRequest.FieldViolation.deserializeBinaryFromReader(msg,reader)},proto.google.rpc.BadRequest.FieldViolation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setField(value);break;case 2:value=reader.readString();msg.setDescription(value);break;default:reader.skipField()}}return msg},proto.google.rpc.BadRequest.FieldViolation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.rpc.BadRequest.FieldViolation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.rpc.BadRequest.FieldViolation.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getField()).length&&writer.writeString(1,f),0<(f=message.getDescription()).length&&writer.writeString(2,f)},proto.google.rpc.BadRequest.FieldViolation.prototype.getField=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.rpc.BadRequest.FieldViolation.prototype.setField=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.rpc.BadRequest.FieldViolation.prototype.getDescription=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.rpc.BadRequest.FieldViolation.prototype.setDescription=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.rpc.BadRequest.prototype.getFieldViolationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.rpc.BadRequest.FieldViolation,1)},proto.google.rpc.BadRequest.prototype.setFieldViolationsList=function(value){jspb.Message.setRepeatedWrapperField(this,1,value)},proto.google.rpc.BadRequest.prototype.addFieldViolations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.google.rpc.BadRequest.FieldViolation,opt_index)},proto.google.rpc.BadRequest.prototype.clearFieldViolationsList=function(){this.setFieldViolationsList([])},proto.google.rpc.RequestInfo=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.rpc.RequestInfo,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.rpc.RequestInfo.displayName="proto.google.rpc.RequestInfo"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.rpc.RequestInfo.prototype.toObject=function(opt_includeInstance){return proto.google.rpc.RequestInfo.toObject(opt_includeInstance,this)},proto.google.rpc.RequestInfo.toObject=function(includeInstance,msg){var obj={requestId:jspb.Message.getFieldWithDefault(msg,1,""),servingData:jspb.Message.getFieldWithDefault(msg,2,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.rpc.RequestInfo.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.rpc.RequestInfo;return proto.google.rpc.RequestInfo.deserializeBinaryFromReader(msg,reader)},proto.google.rpc.RequestInfo.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setRequestId(value);break;case 2:value=reader.readString();msg.setServingData(value);break;default:reader.skipField()}}return msg},proto.google.rpc.RequestInfo.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.rpc.RequestInfo.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.rpc.RequestInfo.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getRequestId()).length&&writer.writeString(1,f),0<(f=message.getServingData()).length&&writer.writeString(2,f)},proto.google.rpc.RequestInfo.prototype.getRequestId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.rpc.RequestInfo.prototype.setRequestId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.rpc.RequestInfo.prototype.getServingData=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.rpc.RequestInfo.prototype.setServingData=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.rpc.ResourceInfo=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.rpc.ResourceInfo,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.rpc.ResourceInfo.displayName="proto.google.rpc.ResourceInfo"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.rpc.ResourceInfo.prototype.toObject=function(opt_includeInstance){return proto.google.rpc.ResourceInfo.toObject(opt_includeInstance,this)},proto.google.rpc.ResourceInfo.toObject=function(includeInstance,msg){var obj={resourceType:jspb.Message.getFieldWithDefault(msg,1,""),resourceName:jspb.Message.getFieldWithDefault(msg,2,""),owner:jspb.Message.getFieldWithDefault(msg,3,""),description:jspb.Message.getFieldWithDefault(msg,4,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.rpc.ResourceInfo.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.rpc.ResourceInfo;return proto.google.rpc.ResourceInfo.deserializeBinaryFromReader(msg,reader)},proto.google.rpc.ResourceInfo.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceType(value);break;case 2:value=reader.readString();msg.setResourceName(value);break;case 3:value=reader.readString();msg.setOwner(value);break;case 4:value=reader.readString();msg.setDescription(value);break;default:reader.skipField()}}return msg},proto.google.rpc.ResourceInfo.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.rpc.ResourceInfo.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.rpc.ResourceInfo.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceType()).length&&writer.writeString(1,f),0<(f=message.getResourceName()).length&&writer.writeString(2,f),0<(f=message.getOwner()).length&&writer.writeString(3,f),0<(f=message.getDescription()).length&&writer.writeString(4,f)},proto.google.rpc.ResourceInfo.prototype.getResourceType=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.rpc.ResourceInfo.prototype.setResourceType=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.rpc.ResourceInfo.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.rpc.ResourceInfo.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.rpc.ResourceInfo.prototype.getOwner=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.rpc.ResourceInfo.prototype.setOwner=function(value){jspb.Message.setProto3StringField(this,3,value)},proto.google.rpc.ResourceInfo.prototype.getDescription=function(){return jspb.Message.getFieldWithDefault(this,4,"")},proto.google.rpc.ResourceInfo.prototype.setDescription=function(value){jspb.Message.setProto3StringField(this,4,value)},proto.google.rpc.Help=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.rpc.Help.repeatedFields_,null)},goog.inherits(proto.google.rpc.Help,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.rpc.Help.displayName="proto.google.rpc.Help"),proto.google.rpc.Help.repeatedFields_=[1],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.rpc.Help.prototype.toObject=function(opt_includeInstance){return proto.google.rpc.Help.toObject(opt_includeInstance,this)},proto.google.rpc.Help.toObject=function(includeInstance,msg){var obj={linksList:jspb.Message.toObjectList(msg.getLinksList(),proto.google.rpc.Help.Link.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.rpc.Help.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.rpc.Help;return proto.google.rpc.Help.deserializeBinaryFromReader(msg,reader)},proto.google.rpc.Help.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new proto.google.rpc.Help.Link;reader.readMessage(value,proto.google.rpc.Help.Link.deserializeBinaryFromReader),msg.addLinks(value);break;default:reader.skipField()}}return msg},proto.google.rpc.Help.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.rpc.Help.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.rpc.Help.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getLinksList()).length&&writer.writeRepeatedMessage(1,f,proto.google.rpc.Help.Link.serializeBinaryToWriter)},proto.google.rpc.Help.Link=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.rpc.Help.Link,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.rpc.Help.Link.displayName="proto.google.rpc.Help.Link"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.rpc.Help.Link.prototype.toObject=function(opt_includeInstance){return proto.google.rpc.Help.Link.toObject(opt_includeInstance,this)},proto.google.rpc.Help.Link.toObject=function(includeInstance,msg){var obj={description:jspb.Message.getFieldWithDefault(msg,1,""),url:jspb.Message.getFieldWithDefault(msg,2,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.rpc.Help.Link.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.rpc.Help.Link;return proto.google.rpc.Help.Link.deserializeBinaryFromReader(msg,reader)},proto.google.rpc.Help.Link.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setDescription(value);break;case 2:value=reader.readString();msg.setUrl(value);break;default:reader.skipField()}}return msg},proto.google.rpc.Help.Link.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.rpc.Help.Link.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.rpc.Help.Link.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getDescription()).length&&writer.writeString(1,f),0<(f=message.getUrl()).length&&writer.writeString(2,f)},proto.google.rpc.Help.Link.prototype.getDescription=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.rpc.Help.Link.prototype.setDescription=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.rpc.Help.Link.prototype.getUrl=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.rpc.Help.Link.prototype.setUrl=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.rpc.Help.prototype.getLinksList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.rpc.Help.Link,1)},proto.google.rpc.Help.prototype.setLinksList=function(value){jspb.Message.setRepeatedWrapperField(this,1,value)},proto.google.rpc.Help.prototype.addLinks=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.google.rpc.Help.Link,opt_index)},proto.google.rpc.Help.prototype.clearLinksList=function(){this.setLinksList([])},proto.google.rpc.LocalizedMessage=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.rpc.LocalizedMessage,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.rpc.LocalizedMessage.displayName="proto.google.rpc.LocalizedMessage"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.rpc.LocalizedMessage.prototype.toObject=function(opt_includeInstance){return proto.google.rpc.LocalizedMessage.toObject(opt_includeInstance,this)},proto.google.rpc.LocalizedMessage.toObject=function(includeInstance,msg){var obj={locale:jspb.Message.getFieldWithDefault(msg,1,""),message:jspb.Message.getFieldWithDefault(msg,2,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.rpc.LocalizedMessage.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.rpc.LocalizedMessage;return proto.google.rpc.LocalizedMessage.deserializeBinaryFromReader(msg,reader)},proto.google.rpc.LocalizedMessage.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setLocale(value);break;case 2:value=reader.readString();msg.setMessage(value);break;default:reader.skipField()}}return msg},proto.google.rpc.LocalizedMessage.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.rpc.LocalizedMessage.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.rpc.LocalizedMessage.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getLocale()).length&&writer.writeString(1,f),0<(f=message.getMessage()).length&&writer.writeString(2,f)},proto.google.rpc.LocalizedMessage.prototype.getLocale=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.rpc.LocalizedMessage.prototype.setLocale=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.rpc.LocalizedMessage.prototype.getMessage=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.rpc.LocalizedMessage.prototype.setMessage=function(value){jspb.Message.setProto3StringField(this,2,value)},goog.object.extend(exports,proto.google.rpc);