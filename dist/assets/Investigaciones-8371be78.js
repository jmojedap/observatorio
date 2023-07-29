import{r as ae,c as De,o as Fe,a as W,b as K,d as r,w as Z,v as Pe,e as oe,t as S,f as ye,F as be,g as xe,n as Ae,h as Le,i as Se}from"./index-fc9222df.js";const Me="/observatorio/images/app/orfeo.png",qe="/observatorio/images/app/logo-dogcc-yellow.png";var je=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ue(ee){return ee&&ee.__esModule&&Object.prototype.hasOwnProperty.call(ee,"default")?ee.default:ee}var ze={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(ee,Te){(function(ve,g){ee.exports=g()})(je,function ve(){var g=typeof self<"u"?self:typeof window<"u"?window:g!==void 0?g:{},te=!g.document&&!!g.postMessage,de=g.IS_PAPA_WORKER||!1,j={},I=0,c={parse:function(t,e){var n=(e=e||{}).dynamicTyping||!1;if(a(n)&&(e.dynamicTypingFunction=n,n={}),e.dynamicTyping=n,e.transform=!!a(e.transform)&&e.transform,e.worker&&c.WORKERS_SUPPORTED){var s=function(){if(!c.WORKERS_SUPPORTED)return!1;var h=(z=g.URL||g.webkitURL||null,E=ve.toString(),c.BLOB_URL||(c.BLOB_URL=z.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",E,")();"],{type:"text/javascript"})))),p=new g.Worker(h),z,E;return p.onmessage=we,p.id=I++,j[p.id]=p}();return s.userStep=e.step,s.userChunk=e.chunk,s.userComplete=e.complete,s.userError=e.error,e.step=a(e.step),e.chunk=a(e.chunk),e.complete=a(e.complete),e.error=a(e.error),delete e.worker,void s.postMessage({input:t,config:e,workerId:s.id})}var o=null;return c.NODE_STREAM_INPUT,typeof t=="string"?(t=function(h){return h.charCodeAt(0)===65279?h.slice(1):h}(t),o=e.download?new he(e):new ne(e)):t.readable===!0&&a(t.read)&&a(t.on)?o=new pe(e):(g.File&&t instanceof File||t instanceof Object)&&(o=new fe(e)),o.stream(t)},unparse:function(t,e){var n=!1,s=!0,o=",",h=`\r
`,p='"',z=p+p,E=!1,l=null,D=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||c.BAD_DELIMITERS.filter(function(i){return e.delimiter.indexOf(i)!==-1}).length||(o=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(n=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(E=e.skipEmptyLines),typeof e.newline=="string"&&(h=e.newline),typeof e.quoteChar=="string"&&(p=e.quoteChar),typeof e.header=="boolean"&&(s=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");l=e.columns}e.escapeChar!==void 0&&(z=e.escapeChar+p),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(D=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var d=new RegExp(le(p),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return V(null,t,E);if(typeof t[0]=="object")return V(l||Object.keys(t[0]),t,E)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||l),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),V(t.fields||[],t.data||[],E);throw new Error("Unable to serialize unrecognized input");function V(i,k,M){var x="";typeof i=="string"&&(i=JSON.parse(i)),typeof k=="string"&&(k=JSON.parse(k));var F=Array.isArray(i)&&0<i.length,A=!Array.isArray(k[0]);if(F&&s){for(var L=0;L<i.length;L++)0<L&&(x+=o),x+=P(i[L],L);0<k.length&&(x+=h)}for(var u=0;u<k.length;u++){var _=F?i.length:k[u].length,w=!1,R=F?Object.keys(k[u]).length===0:k[u].length===0;if(M&&!F&&(w=M==="greedy"?k[u].join("").trim()==="":k[u].length===1&&k[u][0].length===0),M==="greedy"&&F){for(var m=[],q=0;q<_;q++){var O=A?i[q]:q;m.push(k[u][O])}w=m.join("").trim()===""}if(!w){for(var b=0;b<_;b++){0<b&&!R&&(x+=o);var $=F&&A?i[b]:b;x+=P(k[u][$],b)}u<k.length-1&&(!M||0<_&&!R)&&(x+=h)}}return x}function P(i,k){if(i==null)return"";if(i.constructor===Date)return JSON.stringify(i).slice(1,25);var M=!1;D&&typeof i=="string"&&D.test(i)&&(i="'"+i,M=!0);var x=i.toString().replace(d,z);return(M=M||n===!0||typeof n=="function"&&n(i,k)||Array.isArray(n)&&n[k]||function(F,A){for(var L=0;L<A.length;L++)if(-1<F.indexOf(A[L]))return!0;return!1}(x,c.BAD_DELIMITERS)||-1<x.indexOf(o)||x.charAt(0)===" "||x.charAt(x.length-1)===" ")?p+x+p:x}}};if(c.RECORD_SEP=String.fromCharCode(30),c.UNIT_SEP=String.fromCharCode(31),c.BYTE_ORDER_MARK="\uFEFF",c.BAD_DELIMITERS=["\r",`
`,'"',c.BYTE_ORDER_MARK],c.WORKERS_SUPPORTED=!te&&!!g.Worker,c.NODE_STREAM_INPUT=1,c.LocalChunkSize=10485760,c.RemoteChunkSize=5242880,c.DefaultDelimiter=",",c.Parser=_e,c.ParserHandle=ke,c.NetworkStreamer=he,c.FileStreamer=fe,c.StringStreamer=ne,c.ReadableStreamStreamer=pe,g.jQuery){var G=g.jQuery;G.fn.parse=function(t){var e=t.config||{},n=[];return this.each(function(h){if(!(G(this).prop("tagName").toUpperCase()==="INPUT"&&G(this).attr("type").toLowerCase()==="file"&&g.FileReader)||!this.files||this.files.length===0)return!0;for(var p=0;p<this.files.length;p++)n.push({file:this.files[p],inputElem:this,instanceConfig:G.extend({},e)})}),s(),this;function s(){if(n.length!==0){var h,p,z,E,l=n[0];if(a(t.before)){var D=t.before(l.file,l.inputElem);if(typeof D=="object"){if(D.action==="abort")return h="AbortError",p=l.file,z=l.inputElem,E=D.reason,void(a(t.error)&&t.error({name:h},p,z,E));if(D.action==="skip")return void o();typeof D.config=="object"&&(l.instanceConfig=G.extend(l.instanceConfig,D.config))}else if(D==="skip")return void o()}var d=l.instanceConfig.complete;l.instanceConfig.complete=function(V){a(d)&&d(V,l.file,l.inputElem),o()},c.parse(l.file,l.instanceConfig)}else a(t.complete)&&t.complete()}function o(){n.splice(0,1),s()}}}function Q(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var n=y(e);n.chunkSize=parseInt(n.chunkSize),e.step||e.chunk||(n.chunkSize=null),this._handle=new ke(n),(this._handle.streamer=this)._config=n}).call(this,t),this.parseChunk=function(e,n){if(this.isFirstChunk&&a(this._config.beforeFirstChunk)){var s=this._config.beforeFirstChunk(e);s!==void 0&&(e=s)}this.isFirstChunk=!1,this._halted=!1;var o=this._partialLine+e;this._partialLine="";var h=this._handle.parse(o,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var p=h.meta.cursor;this._finished||(this._partialLine=o.substring(p-this._baseIndex),this._baseIndex=p),h&&h.data&&(this._rowCount+=h.data.length);var z=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(de)g.postMessage({results:h,workerId:c.WORKER_ID,finished:z});else if(a(this._config.chunk)&&!n){if(this._config.chunk(h,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);h=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(h.data),this._completeResults.errors=this._completeResults.errors.concat(h.errors),this._completeResults.meta=h.meta),this._completed||!z||!a(this._config.complete)||h&&h.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),z||h&&h.meta.paused||this._nextChunk(),h}this._halted=!0},this._sendError=function(e){a(this._config.error)?this._config.error(e):de&&this._config.error&&g.postMessage({workerId:c.WORKER_ID,error:e,finished:!1})}}function he(t){var e;(t=t||{}).chunkSize||(t.chunkSize=c.RemoteChunkSize),Q.call(this,t),this._nextChunk=te?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(n){this._input=n,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),te||(e.onload=f(this._chunkLoaded,this),e.onerror=f(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!te),this._config.downloadRequestHeaders){var n=this._config.downloadRequestHeaders;for(var s in n)e.setRequestHeader(s,n[s])}if(this._config.chunkSize){var o=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+o)}try{e.send(this._config.downloadRequestBody)}catch(h){this._chunkError(h.message)}te&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(n){var s=n.getResponseHeader("Content-Range");return s===null?-1:parseInt(s.substring(s.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(n){var s=e.statusText||n;this._sendError(new Error(s))}}function fe(t){var e,n;(t=t||{}).chunkSize||(t.chunkSize=c.LocalChunkSize),Q.call(this,t);var s=typeof FileReader<"u";this.stream=function(o){this._input=o,n=o.slice||o.webkitSlice||o.mozSlice,s?((e=new FileReader).onload=f(this._chunkLoaded,this),e.onerror=f(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var o=this._input;if(this._config.chunkSize){var h=Math.min(this._start+this._config.chunkSize,this._input.size);o=n.call(o,this._start,h)}var p=e.readAsText(o,this._config.encoding);s||this._chunkLoaded({target:{result:p}})},this._chunkLoaded=function(o){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(o.target.result)},this._chunkError=function(){this._sendError(e.error)}}function ne(t){var e;Q.call(this,t=t||{}),this.stream=function(n){return e=n,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var n,s=this._config.chunkSize;return s?(n=e.substring(0,s),e=e.substring(s)):(n=e,e=""),this._finished=!e,this.parseChunk(n)}}}function pe(t){Q.call(this,t=t||{});var e=[],n=!0,s=!1;this.pause=function(){Q.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){Q.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(o){this._input=o,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){s&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):n=!0},this._streamData=f(function(o){try{e.push(typeof o=="string"?o:o.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(h){this._streamError(h)}},this),this._streamError=f(function(o){this._streamCleanUp(),this._sendError(o)},this),this._streamEnd=f(function(){this._streamCleanUp(),s=!0,this._streamData("")},this),this._streamCleanUp=f(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function ke(t){var e,n,s,o=Math.pow(2,53),h=-o,p=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,z=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,E=this,l=0,D=0,d=!1,V=!1,P=[],i={data:[],errors:[],meta:{}};if(a(t.step)){var k=t.step;t.step=function(u){if(i=u,F())x();else{if(x(),i.data.length===0)return;l+=u.data.length,t.preview&&l>t.preview?n.abort():(i.data=i.data[0],k(i,E))}}}function M(u){return t.skipEmptyLines==="greedy"?u.join("").trim()==="":u.length===1&&u[0].length===0}function x(){return i&&s&&(L("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+c.DefaultDelimiter+"'"),s=!1),t.skipEmptyLines&&(i.data=i.data.filter(function(u){return!M(u)})),F()&&function(){if(!i)return;function u(w,R){a(t.transformHeader)&&(w=t.transformHeader(w,R)),P.push(w)}if(Array.isArray(i.data[0])){for(var _=0;F()&&_<i.data.length;_++)i.data[_].forEach(u);i.data.splice(0,1)}else i.data.forEach(u)}(),function(){if(!i||!t.header&&!t.dynamicTyping&&!t.transform)return i;function u(w,R){var m,q=t.header?{}:[];for(m=0;m<w.length;m++){var O=m,b=w[m];t.header&&(O=m>=P.length?"__parsed_extra":P[m]),t.transform&&(b=t.transform(b,O)),b=A(O,b),O==="__parsed_extra"?(q[O]=q[O]||[],q[O].push(b)):q[O]=b}return t.header&&(m>P.length?L("FieldMismatch","TooManyFields","Too many fields: expected "+P.length+" fields but parsed "+m,D+R):m<P.length&&L("FieldMismatch","TooFewFields","Too few fields: expected "+P.length+" fields but parsed "+m,D+R)),q}var _=1;return!i.data.length||Array.isArray(i.data[0])?(i.data=i.data.map(u),_=i.data.length):i.data=u(i.data,0),t.header&&i.meta&&(i.meta.fields=P),D+=_,i}()}function F(){return t.header&&P.length===0}function A(u,_){return w=u,t.dynamicTypingFunction&&t.dynamicTyping[w]===void 0&&(t.dynamicTyping[w]=t.dynamicTypingFunction(w)),(t.dynamicTyping[w]||t.dynamicTyping)===!0?_==="true"||_==="TRUE"||_!=="false"&&_!=="FALSE"&&(function(R){if(p.test(R)){var m=parseFloat(R);if(h<m&&m<o)return!0}return!1}(_)?parseFloat(_):z.test(_)?new Date(_):_===""?null:_):_;var w}function L(u,_,w,R){var m={type:u,code:_,message:w};R!==void 0&&(m.row=R),i.errors.push(m)}this.parse=function(u,_,w){var R=t.quoteChar||'"';if(t.newline||(t.newline=function(O,b){O=O.substring(0,1048576);var $=new RegExp(le(b)+"([^]*?)"+le(b),"gm"),U=(O=O.replace($,"")).split("\r"),J=O.split(`
`),X=1<J.length&&J[0].length<U[0].length;if(U.length===1||X)return`
`;for(var N=0,C=0;C<U.length;C++)U[C][0]===`
`&&N++;return N>=U.length/2?`\r
`:"\r"}(u,R)),s=!1,t.delimiter)a(t.delimiter)&&(t.delimiter=t.delimiter(u),i.meta.delimiter=t.delimiter);else{var m=function(O,b,$,U,J){var X,N,C,T;J=J||[",","	","|",";",c.RECORD_SEP,c.UNIT_SEP];for(var ue=0;ue<J.length;ue++){var v=J[ue],ge=0,Y=0,ce=0;C=void 0;for(var re=new _e({comments:U,delimiter:v,newline:b,preview:10}).parse(O),se=0;se<re.data.length;se++)if($&&M(re.data[se]))ce++;else{var ie=re.data[se].length;Y+=ie,C!==void 0?0<ie&&(ge+=Math.abs(ie-C),C=ie):C=ie}0<re.data.length&&(Y/=re.data.length-ce),(N===void 0||ge<=N)&&(T===void 0||T<Y)&&1.99<Y&&(N=ge,X=v,T=Y)}return{successful:!!(t.delimiter=X),bestDelimiter:X}}(u,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);m.successful?t.delimiter=m.bestDelimiter:(s=!0,t.delimiter=c.DefaultDelimiter),i.meta.delimiter=t.delimiter}var q=y(t);return t.preview&&t.header&&q.preview++,e=u,n=new _e(q),i=n.parse(e,_,w),x(),d?{meta:{paused:!0}}:i||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,n.abort(),e=a(t.chunk)?"":e.substring(n.getCharIndex())},this.resume=function(){E.streamer._halted?(d=!1,E.streamer.parseChunk(e,!0)):setTimeout(E.resume,3)},this.aborted=function(){return V},this.abort=function(){V=!0,n.abort(),i.meta.aborted=!0,a(t.complete)&&t.complete(i),e=""}}function le(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function _e(t){var e,n=(t=t||{}).delimiter,s=t.newline,o=t.comments,h=t.step,p=t.preview,z=t.fastMode,E=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(E=t.escapeChar),(typeof n!="string"||-1<c.BAD_DELIMITERS.indexOf(n))&&(n=","),o===n)throw new Error("Comment character same as delimiter");o===!0?o="#":(typeof o!="string"||-1<c.BAD_DELIMITERS.indexOf(o))&&(o=!1),s!==`
`&&s!=="\r"&&s!==`\r
`&&(s=`
`);var l=0,D=!1;this.parse=function(d,V,P){if(typeof d!="string")throw new Error("Input must be a string");var i=d.length,k=n.length,M=s.length,x=o.length,F=a(h),A=[],L=[],u=[],_=l=0;if(!d)return B();if(t.header&&!V){var w=d.split(s)[0].split(n),R=[],m={},q=!1;for(var O in w){var b=w[O];a(t.transformHeader)&&(b=t.transformHeader(b,O));var $=b,U=m[b]||0;for(0<U&&(q=!0,$=b+"_"+U),m[b]=U+1;R.includes($);)$=$+"_"+U;R.push($)}if(q){var J=d.split(s);J[0]=R.join(n),d=J.join(s)}}if(z||z!==!1&&d.indexOf(e)===-1){for(var X=d.split(s),N=0;N<X.length;N++){if(u=X[N],l+=u.length,N!==X.length-1)l+=s.length;else if(P)return B();if(!o||u.substring(0,x)!==o){if(F){if(A=[],ce(u.split(n)),Ee(),D)return B()}else ce(u.split(n));if(p&&p<=N)return A=A.slice(0,p),B(!0)}}return B()}for(var C=d.indexOf(n,l),T=d.indexOf(s,l),ue=new RegExp(le(E)+le(e),"g"),v=d.indexOf(e,l);;)if(d[l]!==e)if(o&&u.length===0&&d.substring(l,l+x)===o){if(T===-1)return B();l=T+M,T=d.indexOf(s,l),C=d.indexOf(n,l)}else if(C!==-1&&(C<T||T===-1))u.push(d.substring(l,C)),l=C+k,C=d.indexOf(n,l);else{if(T===-1)break;if(u.push(d.substring(l,T)),ie(T+M),F&&(Ee(),D))return B();if(p&&A.length>=p)return B(!0)}else for(v=l,l++;;){if((v=d.indexOf(e,v+1))===-1)return P||L.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:A.length,index:l}),se();if(v===i-1)return se(d.substring(l,v).replace(ue,e));if(e!==E||d[v+1]!==E){if(e===E||v===0||d[v-1]!==E){C!==-1&&C<v+1&&(C=d.indexOf(n,v+1)),T!==-1&&T<v+1&&(T=d.indexOf(s,v+1));var ge=re(T===-1?C:Math.min(C,T));if(d.substr(v+1+ge,k)===n){u.push(d.substring(l,v).replace(ue,e)),d[l=v+1+ge+k]!==e&&(v=d.indexOf(e,l)),C=d.indexOf(n,l),T=d.indexOf(s,l);break}var Y=re(T);if(d.substring(v+1+Y,v+1+Y+M)===s){if(u.push(d.substring(l,v).replace(ue,e)),ie(v+1+Y+M),C=d.indexOf(n,l),v=d.indexOf(e,l),F&&(Ee(),D))return B();if(p&&A.length>=p)return B(!0);break}L.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:A.length,index:l}),v++}}else v++}return se();function ce(H){A.push(H),_=l}function re(H){var Re=0;if(H!==-1){var Ie=d.substring(v+1,H);Ie&&Ie.trim()===""&&(Re=Ie.length)}return Re}function se(H){return P||(H===void 0&&(H=d.substring(l)),u.push(H),l=i,ce(u),F&&Ee()),B()}function ie(H){l=H,ce(u),u=[],T=d.indexOf(s,l)}function B(H){return{data:A,errors:L,meta:{delimiter:n,linebreak:s,aborted:D,truncated:!!H,cursor:_+(V||0)}}}function Ee(){h(B()),A=[],L=[]}},this.abort=function(){D=!0},this.getCharIndex=function(){return l}}function we(t){var e=t.data,n=j[e.workerId],s=!1;if(e.error)n.userError(e.error,e.file);else if(e.results&&e.results.data){var o={abort:function(){s=!0,Ce(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:me,resume:me};if(a(n.userStep)){for(var h=0;h<e.results.data.length&&(n.userStep({data:e.results.data[h],errors:e.results.errors,meta:e.results.meta},o),!s);h++);delete e.results}else a(n.userChunk)&&(n.userChunk(e.results,o,e.file),delete e.results)}e.finished&&!s&&Ce(e.workerId,e.results)}function Ce(t,e){var n=j[t];a(n.userComplete)&&n.userComplete(e),n.terminate(),delete j[t]}function me(){throw new Error("Not implemented.")}function y(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var n in t)e[n]=y(t[n]);return e}function f(t,e){return function(){t.apply(e,arguments)}}function a(t){return typeof t=="function"}return de&&(g.onmessage=function(t){var e=t.data;if(c.WORKER_ID===void 0&&e&&(c.WORKER_ID=e.workerId),typeof e.input=="string")g.postMessage({workerId:c.WORKER_ID,results:c.parse(e.input,e.config),finished:!0});else if(g.File&&e.input instanceof File||e.input instanceof Object){var n=c.parse(e.input,e.config);n&&g.postMessage({workerId:c.WORKER_ID,results:n,finished:!0})}}),(he.prototype=Object.create(Q.prototype)).constructor=he,(fe.prototype=Object.create(Q.prototype)).constructor=fe,(ne.prototype=Object.create(ne.prototype)).constructor=ne,(pe.prototype=Object.create(Q.prototype)).constructor=pe,c})})(ze);var Ne=ze.exports;const Oe=Ue(Ne);const Be={key:0,class:"text-center"},He=r("div",{class:"spinner-border text-secondary",role:"status"},[r("span",{class:"visually-hidden"},"Loading...")],-1),We=[He],Ke={key:1,class:"container"},Qe=r("h1",{class:"text-center"},"Plan Anual de Investigaciones 2023",-1),Ve={class:"mb-2 d-flex justify-content-center"},$e={class:"input-group me-2",style:{"max-width":"320px"}},Je=r("i",{class:"fas fa-times"},null,-1),Ge=[Je],Xe={class:"text-center my-2"},Ye={class:"text-primary"},Ze={class:"text-center my-2"},et={class:"text-primary"},tt={class:"d-flex mb-2 justify-content-center"},nt={class:""},rt=["onClick","title"],st={class:"table bg-white"},it=r("thead",null,[r("tr",null,[r("th",null,"Núm"),r("th",{class:"only-lg"},"Solicitante"),r("th",null,"Investigación")])],-1),at={class:"text-center"},ot={class:"only-lg"},lt=r("br",null,null,-1),ut=["onClick"],ct=r("br",null,null,-1),dt={class:"only-lg"},ht={class:"progress d-none",style:{height:"2px"}},ft=r("i",{class:"fa-solid fa-arrow-left"},null,-1),pt={class:"center_box_800"},_t={class:"progress mb-2"},gt={class:"ficha shadow mb-3"},vt={class:"ficha-header d-flex justify-content-between"},mt={style:{"border-left":"3em solid #ffb80c","margin-left":"3em"},class:"p-2"},yt=r("img",{class:"logo-orfeo",src:Me,alt:"Logo Orfeo"},null,-1),bt=r("strong",null,"Orfeo",-1),kt=r("br",null,null,-1),wt={title:"Expediente documental en Orfeo"},Ct=r("div",{class:"p-2 only-lg"},[r("img",{class:"logo-dogcc",src:qe,alt:"Logo Observatorio de Cultura"})],-1),Et={class:"ficha-body"},xt={class:"row"},It={class:"col-md-6"},Dt={class:"title"},Ot={class:"col-md-6"},Tt={key:0},Rt={width:"65px",class:"text-center"},At=["title"],Lt=["href"],St=["innerHTML"],zt=["href"],Ft=r("br",null,null,-1),Pt=r("td",null,null,-1),Mt={key:0,class:"center_box_800"},qt=r("h3",{class:"text-center"},"Datos clave",-1),jt=r("p",{class:"text-center"},"Hallazgos destacados como resultado de la investigación",-1),Ut={class:"table bg-white"},Nt={class:"hallazgo-number"},Bt="1mTpRd2lgxaY_FJj9XDcXHfMHEOfg2c6rxmUE-zR68WA",Wt={__name:"Investigaciones",setup(ee){const Te={investigaciones:"1186279524",productos:"1226549997",hallazgos:"987529212"},ve=ae(!0),g=ae([]),te=ae([]),de=ae([]),j=ae("table");ae(0);const I=ae({ID:-1,Código:"-",Título:"-",Descripción:"-"}),c=ae({q:"",entidad:""}),G=y=>"https://docs.google.com/spreadsheets/d/"+Bt+"/export?format=csv&gid="+Te[y],Q=()=>{Oe.parse(G("investigaciones"),{download:!0,header:!0,complete:y=>{g.value=y.data}})},he=()=>{Oe.parse(G("productos"),{download:!0,header:!0,complete:y=>{te.value=y.data}})},fe=()=>{Oe.parse(G("hallazgos"),{download:!0,header:!0,complete:y=>{de.value=y.data,ve.value=!1}})},ne=y=>{I.value=g.value.find(f=>f.ID==y),j.value="details"},pe=()=>{j.value="table"},ke=()=>{j.value="table"},le=y=>{let f=[];return f["Informe final"]="fa-solid fa-file-lines producto-pdf",f["Informe cuantitativo"]="fa-solid fa-file-lines producto-cuantitativo",f["Base de datos"]="fa-solid fa-table producto-db",f.Presentación="fa-solid fa-display producto-presentacion",f.Anexo="fa-solid fa-file producto-general",f["Visualización/Infografía"]="fa-solid fa-chart-simple producto-dataviz",f.Audiovisual="fa-solid fa-circle-play producto-audiovisual",'<i class="'+f[y]+'"></i>'},_e=y=>{let f="status-nd";return y.Estado=="Sin iniciar"&&(f="status-sin-iniciar"),y.Estado=="En espera"&&(f="status-en-espera"),y.Estado=="En ejecución"&&(f="status-en-ejecucion"),y.Estado=="Finalizada"&&(f="status-finalizada"),y.ID==I.value.ID&&(f+=" active"),f},we=De(()=>g.value.filter(f=>{const a=f.Código.toLowerCase().includes(c.value.q.toLowerCase()),t=f.Título.toLowerCase().includes(c.value.q.toLowerCase()),e=f.Descripción.toLowerCase().includes(c.value.q.toLowerCase());return a||t||e})),Ce=De(()=>(console.log("Filtrando",I.value.ID),te.value.filter(f=>f["ID Investigación"]==I.value.ID&&f.Orden>0))),me=De(()=>(console.log("Filtrando",I.value.ID),de.value.filter(f=>f["ID Investigación"]==I.value.ID)));return Fe(()=>{Q(),he(),fe()}),(y,f)=>ve.value?(W(),K("div",Be,We)):(W(),K("div",Ke,[Qe,r("div",Ve,[r("div",$e,[Z(r("input",{type:"text",name:"q","onUpdate:modelValue":f[0]||(f[0]=a=>c.value.q=a),class:"form-control",placeholder:"Buscar",autofocus:"",onChange:ke},null,544),[[Pe,c.value.q]])]),r("button",{class:"btn-delete-search",type:"button",onClick:f[1]||(f[1]=a=>c.value.q="")},Ge)]),Z(r("div",Xe,[r("span",Ye,S(we.value.length),1),ye(" de "+S(g.value.length),1)],512),[[oe,j.value=="table"]]),Z(r("div",Ze,[ye(" ID Investigación · "),r("strong",et,S(I.value.ID),1)],512),[[oe,j.value=="details"]]),r("div",tt,[r("div",nt,[(W(!0),K(be,null,xe(g.value,(a,t)=>(W(),K("button",{type:"button",class:Se(["investigacion-sqr me-1",_e(a)]),key:t,onClick:e=>ne(a.ID),title:a.Código},null,10,rt))),128))])]),Z(r("table",st,[it,r("tbody",null,[(W(!0),K(be,null,xe(we.value,(a,t)=>(W(),K("tr",{key:t},[r("td",at,S(a.ID),1),r("td",ot,[ye(S(a.ENTIDAD)+" ",1),lt,ye(" "+S(a["Dirección/Dependencia"]),1)]),r("td",null,[r("a",{type:"button",class:"investigacion-title",onClick:e=>ne(a.ID)},S(a.Código),9,ut),ct,r("span",{class:Se(["badge",_e(a)])},S(a.Estado),3),r("p",dt,S(a["Objetivo de la investigación"]),1),r("div",ht,[r("div",{class:"progress-bar",role:"progressbar",style:Ae("width: "+a["Porcentaje de avance"]),"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},null,4)])])]))),128))])],512),[[oe,j.value=="table"]]),Z(r("div",null,[r("button",{type:"button",class:"btn btn-light mb-2",onClick:pe},[ft,ye(" Tabla ")]),r("div",pt,[r("div",_t,[r("div",{class:"progress-bar",role:"progressbar",style:Ae("width: "+I.value["Porcentaje de avance"]),"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},S(I.value["Porcentaje de avance"]),5)])]),r("div",gt,[r("div",vt,[r("div",mt,[yt,bt,kt,r("span",wt,S(I.value.EXPEDIENTE),1)]),Ct]),r("div",Et,[r("div",xt,[r("div",It,[r("h3",Dt,[Z(r("span",null,S(I.value.Código),513),[[oe,I.value.Título.length==0]]),Z(r("span",null,S(I.value.Título),513),[[oe,I.value.Título.length>0]])]),Z(r("p",null,S(I.value["Objetivo de la investigación"]),513),[[oe,I.value.Descripción.length==0]]),Z(r("p",null,S(I.value.Descripción),513),[[oe,I.value.Descripción.length>0]])]),r("div",Ot,[r("table",null,[r("tbody",null,[(W(!0),K(be,null,xe(Ce.value,(a,t)=>(W(),K(be,{key:t},[I.value.ID==a["ID Investigación"]?(W(),K("tr",Tt,[r("td",Rt,[r("div",{class:"icon-container",title:a["Tipo producto"]},[r("a",{href:a["Link para ficha"],target:"_blank"},[r("span",{innerHTML:le(a["Tipo producto"])},null,8,St)],8,Lt)],8,At)]),r("td",null,[r("a",{href:a["Link para ficha"],target:"_blank"},S(a.Título),9,zt),Ft]),Pt])):Le("",!0)],64))),128))])])])])])]),me.value.length>0?(W(),K("div",Mt,[qt,jt,r("table",Ut,[r("tbody",null,[(W(!0),K(be,null,xe(me.value,(a,t)=>(W(),K("tr",{key:t},[r("td",Nt,S(t+1),1),r("td",null,S(a["Texto hallazgo"]),1)]))),128))])])])):Le("",!0)],512),[[oe,j.value=="details"]])]))}};export{Wt as default};
