var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_protobuf_any_pb=require("google-protobuf/google/protobuf/any_pb.js");goog.object.extend(proto,google_protobuf_any_pb),goog.exportSymbol("proto.google.rpc.Status",null,global),proto.google.rpc.Status=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.rpc.Status.repeatedFields_,null)},goog.inherits(proto.google.rpc.Status,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.rpc.Status.displayName="proto.google.rpc.Status"),proto.google.rpc.Status.repeatedFields_=[3],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.rpc.Status.prototype.toObject=function(e){return proto.google.rpc.Status.toObject(e,this)},proto.google.rpc.Status.toObject=function(e,t){var o={code:jspb.Message.getFieldWithDefault(t,1,0),message:jspb.Message.getFieldWithDefault(t,2,""),detailsList:jspb.Message.toObjectList(t.getDetailsList(),google_protobuf_any_pb.Any.toObject,e)};return e&&(o.$jspbMessageInstance=t),o}),proto.google.rpc.Status.deserializeBinary=function(e){var t=new jspb.BinaryReader(e),o=new proto.google.rpc.Status;return proto.google.rpc.Status.deserializeBinaryFromReader(o,t)},proto.google.rpc.Status.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readInt32();e.setCode(o);break;case 2:o=t.readString();e.setMessage(o);break;case 3:o=new google_protobuf_any_pb.Any;t.readMessage(o,google_protobuf_any_pb.Any.deserializeBinaryFromReader),e.addDetails(o);break;default:t.skipField()}}return e},proto.google.rpc.Status.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.rpc.Status.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.rpc.Status.serializeBinaryToWriter=function(e,t){var o=void 0;0!==(o=e.getCode())&&t.writeInt32(1,o),0<(o=e.getMessage()).length&&t.writeString(2,o),0<(o=e.getDetailsList()).length&&t.writeRepeatedMessage(3,o,google_protobuf_any_pb.Any.serializeBinaryToWriter)},proto.google.rpc.Status.prototype.getCode=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.rpc.Status.prototype.setCode=function(e){return jspb.Message.setProto3IntField(this,1,e)},proto.google.rpc.Status.prototype.getMessage=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.rpc.Status.prototype.setMessage=function(e){return jspb.Message.setProto3StringField(this,2,e)},proto.google.rpc.Status.prototype.getDetailsList=function(){return jspb.Message.getRepeatedWrapperField(this,google_protobuf_any_pb.Any,3)},proto.google.rpc.Status.prototype.setDetailsList=function(e){return jspb.Message.setRepeatedWrapperField(this,3,e)},proto.google.rpc.Status.prototype.addDetails=function(e,t){return jspb.Message.addToRepeatedWrapperField(this,3,e,proto.google.protobuf.Any,t)},proto.google.rpc.Status.prototype.clearDetailsList=function(){return this.setDetailsList([])},goog.object.extend(exports,proto.google.rpc);