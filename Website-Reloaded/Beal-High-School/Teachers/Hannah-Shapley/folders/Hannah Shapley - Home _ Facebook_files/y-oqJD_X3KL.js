if (self.CavalryLogger) { CavalryLogger.start_js(["rmuYWz9"]); }

__d("AsyncUploadBase",["ArbiterMixin","AsyncRequest","AsyncResponse","BrowserSupport","Form","forEachObject","mixin","removeFromArray"],(function(a,b,c,d,e,f){a=function(a){babelHelpers.inheritsLoose(c,a);c.parseFiles=function(a){var c={};b("forEachObject")(a,function(a,b){if(Array.isArray(a))c[b]=a;else{c[b]=[];if(a instanceof window.FileList)for(var d=0;d<a.length;d++)c[b].push(a.item(d));else(a instanceof window.File||a instanceof window.Blob)&&c[b].push(a)}});return c};function c(b){var c;c=a.call(this)||this;c._allowCrossOrigin=!1;c._allowCrossPageTransition=!1;c._customHeader={};c._inFlight=!1;c._limit=10;c._option={};c._preventDefaultErrorHandler=!1;c._suspended=!1;b&&c.setURI(b);c.setNetworkErrorRetryLimit(0);return c}var d=c.prototype;d.setAllowCrossOrigin=function(a){this._allowCrossOrigin=!!a;return this};d.setAllowCrossPageTransition=function(a){this._allowCrossPageTransition=!!a;return this};d.setCustomHttpHeader=function(a,b){this._customHeader[a]=b;return this};d.setData=function(a){this._data=a;return this};d.setOption=function(a,b){this._option[a]=b;return this};d.setPreventDefaultErrorHandler=function(a){this._preventDefaultErrorHandler=a;return this};d.setLimit=function(a){this._limit=a;return this};d.setNetworkErrorRetryLimit=function(a){this._retryLimit=a;return this};d.setPreprocessHandler=function(a){this._preprocessHandler=a;return this};d.setRelativeTo=function(a){this._relativeTo=a;return this};d.setStatusElement=function(a){this._statusElement=a;return this};d.setURI=function(a){this._uri=a;return this};d.suspend=function(){this._suspended=!0;return this};d.resume=function(){this._suspended=!1;this._processQueue();return this};d.isUploading=function(){return this._inFlight};d._createFileUpload=function(a,b,c){return new g(a,b,c)};d._processQueue=function(){if(this._suspended)return;while(this._pending.length<this._limit){if(!this._waiting.length)break;var a=this._waiting.shift(),b=this._preprocessHandler;b?b(a,this._processUpload.bind(this)):this._processUpload(a);this._pending.push(a)}};d._processUpload=function(a){var c=b("Form").createFormData(a.getData()||this._data);if(a.getFile()){c.append(a.getName(),a.getFile());var d=a.getFile().uploadID;d&&c.append("upload_id",d);a.getAdditionalData().forEach(function(a,b){return c.append(b,a)})}d=new(b("AsyncRequest"))().setAllowCrossOrigin(this._allowCrossOrigin).setAllowCrossPageTransition(this._allowCrossPageTransition).setURI(this._uri).setRawData(c).setStatusElement(this._statusElement).setHandler(this._success.bind(this,a)).setErrorHandler(this._failure.bind(this,a)).setUploadProgressHandler(this._progress.bind(this,a)).setInitialHandler(this._initial.bind(this,a));for(var e in this._option)d.setOption(e,this._option[e]);for(var f in this._customHeader)d.setRequestHeader(f,this._customHeader[f]);this._relativeTo&&d.setRelativeTo(this._relativeTo);d.send();a.setAsyncRequest(d);this._inFlight=!0;a.getRetryCount()||this.inform("start",a)};d._abort=function(a){this._pending.indexOf(a)!==-1&&(b("removeFromArray")(this._pending,a),this._processQueue()),b("removeFromArray")(this._waiting,a),a.abort()};d._initial=function(a){if(a.isAborted())return;this.inform("initial",a)};d._success=function(a,b){if(a.isAborted()){this.inform("success_after_abort",b);return}this._complete(a);this.inform("success",a.handleSuccess(b));this._processQueue()};d._retryUpload=function(a){a.increaseRetryCount(),this._processUpload(a)};d._failure=function(a,c){if(a.isAborted())return;if(c.error===1004&&a.getRetryCount()<(this._retryLimit||0))return this._retryUpload(a);this._complete(a);this.inform("failure",a.handleFailure(c))!==!1&&(this._preventDefaultErrorHandler||b("AsyncResponse").defaultErrorHandler(c));this._processQueue()};d._progress=function(a,b){if(a.isAborted())return;this.inform("progress",a.handleProgress(b))};d._complete=function(a){b("removeFromArray")(this._pending,a),this._pending.length||(this._inFlight=!1)};c.isSupported=function(){return b("BrowserSupport").hasFileAPI()};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a;var g=function(){function a(a,b,c){this._additionalData=new Map(),this._success=null,this._response=null,this._progressEvent=null,this._request=null,this._numRetries=0,this._aborted=!1,this._name=a,this._file=b,this._data=c}var b=a.prototype;b.getName=function(){return this._name};b.getFile=function(){return this._file};b.setFile=function(a){this._file=a};b.getData=function(){return this._data};b.getAdditionalData=function(){return this._additionalData};b.isComplete=function(){return this._success!==null};b.isSuccess=function(){return this._success===!0};b.getResponse=function(){return this._response};b.getProgressEvent=function(){return this._progressEvent};b.setAsyncRequest=function(a){this._request=a;return this};b.increaseRetryCount=function(){this._numRetries++;return this};b.getRetryCount=function(){return this._numRetries};b.isWaiting=function(){return!this._request};b.isAborted=function(){return this._aborted};b.abort=function(){this._request=null,this._aborted=!0};b.handleSuccess=function(a){this._success=!0;this._response=a;this._progressEvent=null;return this};b.handleFailure=function(a){this._success=!1;this._response=a;this._progressEvent=null;return this};b.handleProgress=function(a){this._progressEvent=a;return this};return a}()}),null);
__d("AsyncUploadRequest",["AsyncUploadBase"],(function(a,b,c,d,e,f){a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c._files=null,c._uploads=[],c._fileLessUpload=null,b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.setFiles=function(a){this._files=b("AsyncUploadBase").parseFiles(a);return this};d.setAlwaysReturnResponse=function(a){this._shouldAlwaysReturnResponse=a};d.abort=function(){var a=this;this._uploads.forEach(function(b){return a._abort(b)},this)};d.send=function(){if(this._inFlight)return;this._inFlight=!0;this._uploads=[];for(var a in this._files)this._files[a].forEach(function(b){this._uploads.push(this._createFileUpload(a,b))}.bind(this));this._waiting=this._uploads.slice(0);this._pending=[];this._uploads.length?this._processQueue():(this._fileLessUpload=this._createFileUpload(null,null),this._processUpload(this._fileLessUpload))};d._processQueue=function(){a.prototype._processQueue.call(this);if(!this._pending.length&&!this._waiting.length){var b=this._uploads;b=this._shouldAlwaysReturnResponse?this._fileLessUpload!=null?{response:this._fileLessUpload.getResponse(),uploads:b}:{response:b[0].getResponse(),uploads:b}:b;this.inform("complete",b)}};c.isSupported=function(){return b("AsyncUploadBase").isSupported()};return c}(b("AsyncUploadBase"));e.exports=a}),null);