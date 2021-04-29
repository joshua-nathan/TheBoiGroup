if (self.CavalryLogger) { CavalryLogger.start_js(["iD3YTe8"]); }

__d("WebGraphQLLegacyHelper",["invariant"],(function(a,b,c,d,e,f,g){"use strict";f.getURI=a;function a(a){var b=a.controller,c=a.docID,d=a.queryID;a=a.variables;c!=d&&(c||d)!=null||g(0,5819,c,d);b=b.getURIBuilder();d?b.setFBID("query_id",d):b.setFBID("doc_id",c);a&&b.setString("variables",JSON.stringify(a));return b.getURI()}}),null);
__d("XWebGraphQLQueryController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/webgraphql/query/",{query_id:{type:"FBID"},variables:{type:"String"},doc_id:{type:"FBID"}})}),null);
__d("WebGraphQLQueryBase",["invariant","WebGraphQLLegacyHelper","XWebGraphQLQueryController"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(a){this.$1=a}var c=a.prototype;c.__getVariables=function(){return this.$1};c.__getDocID=function(){return this.constructor.__getDocID()};a.__getController=function(){return b("XWebGraphQLQueryController")};a.__getDocID=function(){g(0,1804)};a.getURI=function(a){return b("WebGraphQLLegacyHelper").getURI({controller:this.__getController(),docID:this.__getDocID(),variables:a})};a.getLegacyURI=function(a){return b("WebGraphQLLegacyHelper").getURI({controller:this.__getController(),queryID:this.getQueryID(),variables:a})};a.getQueryID=function(){g(0,5095)};return a}();e.exports=a}),null);
__d("XGraphQLBatchAPIController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/api/graphqlbatch/",{queries:{type:"String"},batch_name:{type:"String"},scheduler:{type:"Enum",enumType:1},shared_params:{type:"String"},fb_api_req_friendly_name:{type:"String"},uft_request_id:{type:"String"}})}),null);
__d("WebGraphQL",["errorCode","ActorURI","AsyncRequest","Deferred","FBLogger","WebGraphQLConfig","XGraphQLBatchAPIController","getAsyncParams"],(function(a,b,c,d,e,f,g){"use strict";var h="for (;;);",i=h.length;function j(a){var c=a.getURIBuilder().getURI(),d={exec:function(a,b){return d.execAll([a],b)[0]},execAll:function(a,d){var e={},f={};a=a.map(function(a,c){c="o"+c;e[c]={doc_id:a.__getDocID(),query_params:a.__getVariables()};a=new(b("Deferred"))();f[c]=a;return a.getPromise()});var g=babelHelpers["extends"]({},b("getAsyncParams")("POST"));d&&d.actorID!=null&&(g[b("ActorURI").PARAMETER_ACTOR]=d.actorID);var j=d&&d.batchName?{batch_name:d.batchName}:{};j=new(b("AsyncRequest"))().setURI(c).setOption("suppressEvaluation",!0).setMethod("POST").setRequestHeader("Content-Type","application/x-www-form-urlencoded").setData(babelHelpers["extends"]({},j,g,{queries:JSON.stringify(e)})).setHandler(function(a){a=a.getPayload();a=a.response;try{if(a.startsWith(h)){var c=a.substring(i);c=JSON.parse(c);if(c.error==1357001){Object.keys(f).forEach(function(a){f[a].isSettled()||f[a].reject({data:{},errors:[{message:"Not logged in.",severity:"CRITICAL",should_end_session:!0}]})});return}}c=a.split("\r\n");c.pop();c=c.map(function(a){return JSON.parse(a)});c.forEach(function(a){return Object.keys(a).forEach(function(b){var c=f[b];if(c){b=a[b];b.errors?c.reject(b):b.data?c.resolve(b.data):c.reject({data:{},errors:[{message:"Unexpected response received from server.",severity:"CRITICAL",response:b}]})}})})}catch(c){b("FBLogger")("webgraphql").catching(c).mustfix("Bad response: ","%s%s",a.substr(0,250),a.length>250?"[truncated]":"")}Object.keys(f).forEach(function(a){f[a].isSettled()||f[a].reject({data:{},errors:[{message:"No response received from server.",severity:"CRITICAL"}]})})}).setTimeoutHandler(b("WebGraphQLConfig").timeout,function(){Object.keys(f).forEach(function(a){f[a].isSettled()||f[a].reject({data:{},errors:[{message:"Request timed out.",severity:"CRITICAL"}]})})}).setErrorHandler(function(a){var b=a.getErrorDescription();Object.keys(f).forEach(function(c){f[c].isSettled()||f[c].reject({data:{},errors:[{message:b,severity:"CRITICAL",error:a.getError()}]})})});d&&d.msgrRegion&&j.setRequestHeader("X-MSGR-Region",d.msgrRegion);j.setAllowCrossPageTransition(!0);j.send();return a},__forController:j};return d}a=j(b("XGraphQLBatchAPIController"));c=a;e.exports=c}),null);