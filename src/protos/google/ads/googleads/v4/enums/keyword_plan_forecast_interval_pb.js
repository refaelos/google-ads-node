var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.KeywordPlanForecastIntervalEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.KeywordPlanForecastIntervalEnum.KeywordPlanForecastInterval",null,global),proto.google.ads.googleads.v4.enums.KeywordPlanForecastIntervalEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.KeywordPlanForecastIntervalEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.KeywordPlanForecastIntervalEnum.displayName="proto.google.ads.googleads.v4.enums.KeywordPlanForecastIntervalEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.KeywordPlanForecastIntervalEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.KeywordPlanForecastIntervalEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.KeywordPlanForecastIntervalEnum.toObject=function(o,e){var a={};return o&&(a.$jspbMessageInstance=e),a}),proto.google.ads.googleads.v4.enums.KeywordPlanForecastIntervalEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),a=new proto.google.ads.googleads.v4.enums.KeywordPlanForecastIntervalEnum;return proto.google.ads.googleads.v4.enums.KeywordPlanForecastIntervalEnum.deserializeBinaryFromReader(a,e)},proto.google.ads.googleads.v4.enums.KeywordPlanForecastIntervalEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.KeywordPlanForecastIntervalEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.KeywordPlanForecastIntervalEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.KeywordPlanForecastIntervalEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.KeywordPlanForecastIntervalEnum.KeywordPlanForecastInterval={UNSPECIFIED:0,UNKNOWN:1,NEXT_WEEK:3,NEXT_MONTH:4,NEXT_QUARTER:5},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);