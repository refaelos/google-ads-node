var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_resources_mutate_job_pb=require("../../../../../google/ads/googleads/v3/resources/mutate_job_pb.js"),google_ads_googleads_v3_services_google_ads_service_pb=require("../../../../../google/ads/googleads/v3/services/google_ads_service_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_longrunning_operations_pb=require("../../../../../google/longrunning/operations_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.AddMutateJobOperationsResponse",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.CreateMutateJobRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.CreateMutateJobResponse",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.GetMutateJobRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.MutateJobResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.services.RunMutateJobRequest",null,global),proto.google.ads.googleads.v3.services.CreateMutateJobRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.CreateMutateJobRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.CreateMutateJobRequest.displayName="proto.google.ads.googleads.v3.services.CreateMutateJobRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.CreateMutateJobRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.CreateMutateJobRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.CreateMutateJobRequest.toObject=function(includeInstance,msg){var obj={customerId:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.CreateMutateJobRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.CreateMutateJobRequest;return proto.google.ads.googleads.v3.services.CreateMutateJobRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.CreateMutateJobRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setCustomerId(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.CreateMutateJobRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.CreateMutateJobRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.CreateMutateJobRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getCustomerId()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.CreateMutateJobRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.CreateMutateJobRequest.prototype.setCustomerId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.CreateMutateJobResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.CreateMutateJobResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.CreateMutateJobResponse.displayName="proto.google.ads.googleads.v3.services.CreateMutateJobResponse"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.CreateMutateJobResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.CreateMutateJobResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.CreateMutateJobResponse.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.CreateMutateJobResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.CreateMutateJobResponse;return proto.google.ads.googleads.v3.services.CreateMutateJobResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.CreateMutateJobResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.CreateMutateJobResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.CreateMutateJobResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.CreateMutateJobResponse.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.CreateMutateJobResponse.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.CreateMutateJobResponse.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.GetMutateJobRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.GetMutateJobRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.GetMutateJobRequest.displayName="proto.google.ads.googleads.v3.services.GetMutateJobRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.GetMutateJobRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.GetMutateJobRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.GetMutateJobRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.GetMutateJobRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.GetMutateJobRequest;return proto.google.ads.googleads.v3.services.GetMutateJobRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.GetMutateJobRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.GetMutateJobRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.GetMutateJobRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.GetMutateJobRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.GetMutateJobRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.GetMutateJobRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.RunMutateJobRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.RunMutateJobRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.RunMutateJobRequest.displayName="proto.google.ads.googleads.v3.services.RunMutateJobRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.RunMutateJobRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.RunMutateJobRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.RunMutateJobRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.RunMutateJobRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.RunMutateJobRequest;return proto.google.ads.googleads.v3.services.RunMutateJobRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.RunMutateJobRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.RunMutateJobRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.RunMutateJobRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.RunMutateJobRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.RunMutateJobRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.RunMutateJobRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.displayName="proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest"),proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.repeatedFields_=[3],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),sequenceToken:jspb.Message.getFieldWithDefault(msg,2,""),mutateOperationsList:jspb.Message.toObjectList(msg.getMutateOperationsList(),google_ads_googleads_v3_services_google_ads_service_pb.MutateOperation.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest;return proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=reader.readString();msg.setSequenceToken(value);break;case 3:value=new google_ads_googleads_v3_services_google_ads_service_pb.MutateOperation;reader.readMessage(value,google_ads_googleads_v3_services_google_ads_service_pb.MutateOperation.deserializeBinaryFromReader),msg.addMutateOperations(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),0<(f=message.getSequenceToken()).length&&writer.writeString(2,f),0<(f=message.getMutateOperationsList()).length&&writer.writeRepeatedMessage(3,f,google_ads_googleads_v3_services_google_ads_service_pb.MutateOperation.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.prototype.getSequenceToken=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.prototype.setSequenceToken=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.prototype.getMutateOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,google_ads_googleads_v3_services_google_ads_service_pb.MutateOperation,3)},proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.prototype.setMutateOperationsList=function(value){jspb.Message.setRepeatedWrapperField(this,3,value)},proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.prototype.addMutateOperations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,3,opt_value,proto.google.ads.googleads.v3.services.MutateOperation,opt_index)},proto.google.ads.googleads.v3.services.AddMutateJobOperationsRequest.prototype.clearMutateOperationsList=function(){this.setMutateOperationsList([])},proto.google.ads.googleads.v3.services.AddMutateJobOperationsResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.AddMutateJobOperationsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.AddMutateJobOperationsResponse.displayName="proto.google.ads.googleads.v3.services.AddMutateJobOperationsResponse"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.AddMutateJobOperationsResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.AddMutateJobOperationsResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.AddMutateJobOperationsResponse.toObject=function(includeInstance,msg){var obj={totalOperations:jspb.Message.getFieldWithDefault(msg,1,0),nextSequenceToken:jspb.Message.getFieldWithDefault(msg,2,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.AddMutateJobOperationsResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.AddMutateJobOperationsResponse;return proto.google.ads.googleads.v3.services.AddMutateJobOperationsResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.AddMutateJobOperationsResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readInt64();msg.setTotalOperations(value);break;case 2:value=reader.readString();msg.setNextSequenceToken(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.AddMutateJobOperationsResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.AddMutateJobOperationsResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.AddMutateJobOperationsResponse.serializeBinaryToWriter=function(message,writer){var f=void 0;0!==(f=message.getTotalOperations())&&writer.writeInt64(1,f),0<(f=message.getNextSequenceToken()).length&&writer.writeString(2,f)},proto.google.ads.googleads.v3.services.AddMutateJobOperationsResponse.prototype.getTotalOperations=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.ads.googleads.v3.services.AddMutateJobOperationsResponse.prototype.setTotalOperations=function(value){jspb.Message.setProto3IntField(this,1,value)},proto.google.ads.googleads.v3.services.AddMutateJobOperationsResponse.prototype.getNextSequenceToken=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.ads.googleads.v3.services.AddMutateJobOperationsResponse.prototype.setNextSequenceToken=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest.displayName="proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),pageToken:jspb.Message.getFieldWithDefault(msg,2,""),pageSize:jspb.Message.getFieldWithDefault(msg,3,0)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest;return proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=reader.readString();msg.setPageToken(value);break;case 3:value=reader.readInt32();msg.setPageSize(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),0<(f=message.getPageToken()).length&&writer.writeString(2,f),0!==(f=message.getPageSize())&&writer.writeInt32(3,f)},proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest.prototype.getPageToken=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest.prototype.setPageToken=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest.prototype.getPageSize=function(){return jspb.Message.getFieldWithDefault(this,3,0)},proto.google.ads.googleads.v3.services.ListMutateJobResultsRequest.prototype.setPageSize=function(value){jspb.Message.setProto3IntField(this,3,value)},proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse.displayName="proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse"),proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse.repeatedFields_=[1],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse.toObject=function(includeInstance,msg){var obj={resultsList:jspb.Message.toObjectList(msg.getResultsList(),proto.google.ads.googleads.v3.services.MutateJobResult.toObject,includeInstance),nextPageToken:jspb.Message.getFieldWithDefault(msg,2,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse;return proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new proto.google.ads.googleads.v3.services.MutateJobResult;reader.readMessage(value,proto.google.ads.googleads.v3.services.MutateJobResult.deserializeBinaryFromReader),msg.addResults(value);break;case 2:value=reader.readString();msg.setNextPageToken(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResultsList()).length&&writer.writeRepeatedMessage(1,f,proto.google.ads.googleads.v3.services.MutateJobResult.serializeBinaryToWriter),0<(f=message.getNextPageToken()).length&&writer.writeString(2,f)},proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.services.MutateJobResult,1)},proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse.prototype.setResultsList=function(value){jspb.Message.setRepeatedWrapperField(this,1,value)},proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse.prototype.addResults=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.google.ads.googleads.v3.services.MutateJobResult,opt_index)},proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse.prototype.clearResultsList=function(){this.setResultsList([])},proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse.prototype.getNextPageToken=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.ads.googleads.v3.services.ListMutateJobResultsResponse.prototype.setNextPageToken=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.ads.googleads.v3.services.MutateJobResult=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.MutateJobResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.MutateJobResult.displayName="proto.google.ads.googleads.v3.services.MutateJobResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.MutateJobResult.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.MutateJobResult.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.MutateJobResult.toObject=function(includeInstance,msg){var f,obj={operationIndex:jspb.Message.getFieldWithDefault(msg,1,0),mutateOperationResponse:(f=msg.getMutateOperationResponse())&&google_ads_googleads_v3_services_google_ads_service_pb.MutateOperationResponse.toObject(includeInstance,f),status:(f=msg.getStatus())&&google_rpc_status_pb.Status.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.MutateJobResult.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.MutateJobResult;return proto.google.ads.googleads.v3.services.MutateJobResult.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.MutateJobResult.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readInt64();msg.setOperationIndex(value);break;case 2:value=new google_ads_googleads_v3_services_google_ads_service_pb.MutateOperationResponse;reader.readMessage(value,google_ads_googleads_v3_services_google_ads_service_pb.MutateOperationResponse.deserializeBinaryFromReader),msg.setMutateOperationResponse(value);break;case 3:value=new google_rpc_status_pb.Status;reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader),msg.setStatus(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v3.services.MutateJobResult.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.MutateJobResult.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.MutateJobResult.serializeBinaryToWriter=function(message,writer){var f=void 0;0!==(f=message.getOperationIndex())&&writer.writeInt64(1,f),null!=(f=message.getMutateOperationResponse())&&writer.writeMessage(2,f,google_ads_googleads_v3_services_google_ads_service_pb.MutateOperationResponse.serializeBinaryToWriter),null!=(f=message.getStatus())&&writer.writeMessage(3,f,google_rpc_status_pb.Status.serializeBinaryToWriter)},proto.google.ads.googleads.v3.services.MutateJobResult.prototype.getOperationIndex=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.ads.googleads.v3.services.MutateJobResult.prototype.setOperationIndex=function(value){jspb.Message.setProto3IntField(this,1,value)},proto.google.ads.googleads.v3.services.MutateJobResult.prototype.getMutateOperationResponse=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v3_services_google_ads_service_pb.MutateOperationResponse,2)},proto.google.ads.googleads.v3.services.MutateJobResult.prototype.setMutateOperationResponse=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v3.services.MutateJobResult.prototype.clearMutateOperationResponse=function(){this.setMutateOperationResponse(void 0)},proto.google.ads.googleads.v3.services.MutateJobResult.prototype.hasMutateOperationResponse=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.services.MutateJobResult.prototype.getStatus=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v3.services.MutateJobResult.prototype.setStatus=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v3.services.MutateJobResult.prototype.clearStatus=function(){this.setStatus(void 0)},proto.google.ads.googleads.v3.services.MutateJobResult.prototype.hasStatus=function(){return null!=jspb.Message.getField(this,3)},goog.object.extend(exports,proto.google.ads.googleads.v3.services);