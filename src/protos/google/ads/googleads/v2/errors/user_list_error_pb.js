var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.errors.UserListErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.errors.UserListErrorEnum.UserListError",null,global),proto.google.ads.googleads.v2.errors.UserListErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.errors.UserListErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.errors.UserListErrorEnum.displayName="proto.google.ads.googleads.v2.errors.UserListErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.errors.UserListErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.errors.UserListErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.errors.UserListErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.errors.UserListErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.errors.UserListErrorEnum;return proto.google.ads.googleads.v2.errors.UserListErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.errors.UserListErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.errors.UserListErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.errors.UserListErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.errors.UserListErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.errors.UserListErrorEnum.UserListError={UNSPECIFIED:0,UNKNOWN:1,EXTERNAL_REMARKETING_USER_LIST_MUTATE_NOT_SUPPORTED:2,CONCRETE_TYPE_REQUIRED:3,CONVERSION_TYPE_ID_REQUIRED:4,DUPLICATE_CONVERSION_TYPES:5,INVALID_CONVERSION_TYPE:6,INVALID_DESCRIPTION:7,INVALID_NAME:8,INVALID_TYPE:9,CAN_NOT_ADD_LOGICAL_LIST_AS_LOGICAL_LIST_OPERAND:10,INVALID_USER_LIST_LOGICAL_RULE_OPERAND:11,NAME_ALREADY_USED:12,NEW_CONVERSION_TYPE_NAME_REQUIRED:13,CONVERSION_TYPE_NAME_ALREADY_USED:14,OWNERSHIP_REQUIRED_FOR_SET:15,USER_LIST_MUTATE_NOT_SUPPORTED:16,INVALID_RULE:17,INVALID_DATE_RANGE:27,CAN_NOT_MUTATE_SENSITIVE_USERLIST:28,MAX_NUM_RULEBASED_USERLISTS:29,CANNOT_MODIFY_BILLABLE_RECORD_COUNT:30,APP_ID_NOT_SET:31,USERLIST_NAME_IS_RESERVED_FOR_SYSTEM_LIST:32,ADVERTISER_NOT_WHITELISTED_FOR_USING_UPLOADED_DATA:33,RULE_TYPE_IS_NOT_SUPPORTED:34,CAN_NOT_ADD_A_SIMILAR_USERLIST_AS_LOGICAL_LIST_OPERAND:35,CAN_NOT_MIX_CRM_BASED_IN_LOGICAL_LIST_WITH_OTHER_LISTS:36},goog.object.extend(exports,proto.google.ads.googleads.v2.errors);