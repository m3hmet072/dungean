(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Mx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var $h={exports:{}},hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function xM(){if(Y_)return hl;Y_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return hl.Fragment=t,hl.jsx=i,hl.jsxs=i,hl}var W_;function yM(){return W_||(W_=1,$h.exports=xM()),$h.exports}var xt=yM(),td={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function SM(){if(q_)return re;q_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function M(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,S={};function v(I,Q,vt){this.props=I,this.context=Q,this.refs=S,this.updater=vt||A}v.prototype.isReactComponent={},v.prototype.setState=function(I,Q){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Q,"setState")},v.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function T(){}T.prototype=v.prototype;function L(I,Q,vt){this.props=I,this.context=Q,this.refs=S,this.updater=vt||A}var U=L.prototype=new T;U.constructor=L,R(U,v.prototype),U.isPureReactComponent=!0;var F=Array.isArray;function w(){}var O={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function N(I,Q,vt){var Et=vt.ref;return{$$typeof:r,type:I,key:Q,ref:Et!==void 0?Et:null,props:vt}}function G(I,Q){return N(I.type,Q,I.props)}function H(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function k(I){var Q={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(vt){return Q[vt]})}var rt=/\/+/g;function ot(I,Q){return typeof I=="object"&&I!==null&&I.key!=null?k(""+I.key):Q.toString(36)}function Y(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(w,w):(I.status="pending",I.then(function(Q){I.status==="pending"&&(I.status="fulfilled",I.value=Q)},function(Q){I.status==="pending"&&(I.status="rejected",I.reason=Q)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function z(I,Q,vt,Et,Rt){var lt=typeof I;(lt==="undefined"||lt==="boolean")&&(I=null);var St=!1;if(I===null)St=!0;else switch(lt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(I.$$typeof){case r:case t:St=!0;break;case _:return St=I._init,z(St(I._payload),Q,vt,Et,Rt)}}if(St)return Rt=Rt(I),St=Et===""?"."+ot(I,0):Et,F(Rt)?(vt="",St!=null&&(vt=St.replace(rt,"$&/")+"/"),z(Rt,Q,vt,"",function(ee){return ee})):Rt!=null&&(H(Rt)&&(Rt=G(Rt,vt+(Rt.key==null||I&&I.key===Rt.key?"":(""+Rt.key).replace(rt,"$&/")+"/")+St)),Q.push(Rt)),1;St=0;var Tt=Et===""?".":Et+":";if(F(I))for(var Gt=0;Gt<I.length;Gt++)Et=I[Gt],lt=Tt+ot(Et,Gt),St+=z(Et,Q,vt,lt,Rt);else if(Gt=M(I),typeof Gt=="function")for(I=Gt.call(I),Gt=0;!(Et=I.next()).done;)Et=Et.value,lt=Tt+ot(Et,Gt++),St+=z(Et,Q,vt,lt,Rt);else if(lt==="object"){if(typeof I.then=="function")return z(Y(I),Q,vt,Et,Rt);throw Q=String(I),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return St}function B(I,Q,vt){if(I==null)return I;var Et=[],Rt=0;return z(I,Et,"","",function(lt){return Q.call(vt,lt,Rt++)}),Et}function $(I){if(I._status===-1){var Q=I._result;Q=Q(),Q.then(function(vt){(I._status===0||I._status===-1)&&(I._status=1,I._result=vt)},function(vt){(I._status===0||I._status===-1)&&(I._status=2,I._result=vt)}),I._status===-1&&(I._status=0,I._result=Q)}if(I._status===1)return I._result.default;throw I._result}var ct=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},mt={map:B,forEach:function(I,Q,vt){B(I,function(){Q.apply(this,arguments)},vt)},count:function(I){var Q=0;return B(I,function(){Q++}),Q},toArray:function(I){return B(I,function(Q){return Q})||[]},only:function(I){if(!H(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return re.Activity=x,re.Children=mt,re.Component=v,re.Fragment=i,re.Profiler=l,re.PureComponent=L,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,re.__COMPILER_RUNTIME={__proto__:null,c:function(I){return O.H.useMemoCache(I)}},re.cache=function(I){return function(){return I.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(I,Q,vt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Et=R({},I.props),Rt=I.key;if(Q!=null)for(lt in Q.key!==void 0&&(Rt=""+Q.key),Q)!b.call(Q,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&Q.ref===void 0||(Et[lt]=Q[lt]);var lt=arguments.length-2;if(lt===1)Et.children=vt;else if(1<lt){for(var St=Array(lt),Tt=0;Tt<lt;Tt++)St[Tt]=arguments[Tt+2];Et.children=St}return N(I.type,Rt,Et)},re.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},re.createElement=function(I,Q,vt){var Et,Rt={},lt=null;if(Q!=null)for(Et in Q.key!==void 0&&(lt=""+Q.key),Q)b.call(Q,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Rt[Et]=Q[Et]);var St=arguments.length-2;if(St===1)Rt.children=vt;else if(1<St){for(var Tt=Array(St),Gt=0;Gt<St;Gt++)Tt[Gt]=arguments[Gt+2];Rt.children=Tt}if(I&&I.defaultProps)for(Et in St=I.defaultProps,St)Rt[Et]===void 0&&(Rt[Et]=St[Et]);return N(I,lt,Rt)},re.createRef=function(){return{current:null}},re.forwardRef=function(I){return{$$typeof:d,render:I}},re.isValidElement=H,re.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:$}},re.memo=function(I,Q){return{$$typeof:p,type:I,compare:Q===void 0?null:Q}},re.startTransition=function(I){var Q=O.T,vt={};O.T=vt;try{var Et=I(),Rt=O.S;Rt!==null&&Rt(vt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(w,ct)}catch(lt){ct(lt)}finally{Q!==null&&vt.types!==null&&(Q.types=vt.types),O.T=Q}},re.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},re.use=function(I){return O.H.use(I)},re.useActionState=function(I,Q,vt){return O.H.useActionState(I,Q,vt)},re.useCallback=function(I,Q){return O.H.useCallback(I,Q)},re.useContext=function(I){return O.H.useContext(I)},re.useDebugValue=function(){},re.useDeferredValue=function(I,Q){return O.H.useDeferredValue(I,Q)},re.useEffect=function(I,Q){return O.H.useEffect(I,Q)},re.useEffectEvent=function(I){return O.H.useEffectEvent(I)},re.useId=function(){return O.H.useId()},re.useImperativeHandle=function(I,Q,vt){return O.H.useImperativeHandle(I,Q,vt)},re.useInsertionEffect=function(I,Q){return O.H.useInsertionEffect(I,Q)},re.useLayoutEffect=function(I,Q){return O.H.useLayoutEffect(I,Q)},re.useMemo=function(I,Q){return O.H.useMemo(I,Q)},re.useOptimistic=function(I,Q){return O.H.useOptimistic(I,Q)},re.useReducer=function(I,Q,vt){return O.H.useReducer(I,Q,vt)},re.useRef=function(I){return O.H.useRef(I)},re.useState=function(I){return O.H.useState(I)},re.useSyncExternalStore=function(I,Q,vt){return O.H.useSyncExternalStore(I,Q,vt)},re.useTransition=function(){return O.H.useTransition()},re.version="19.2.7",re}var j_;function Fp(){return j_||(j_=1,td.exports=SM()),td.exports}var Me=Fp();const MM=Mx(Me);var ed={exports:{}},dl={},nd={exports:{}},id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function bM(){return Z_||(Z_=1,(function(r){function t(z,B){var $=z.length;z.push(B);t:for(;0<$;){var ct=$-1>>>1,mt=z[ct];if(0<l(mt,B))z[ct]=B,z[$]=mt,$=ct;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var B=z[0],$=z.pop();if($!==B){z[0]=$;t:for(var ct=0,mt=z.length,I=mt>>>1;ct<I;){var Q=2*(ct+1)-1,vt=z[Q],Et=Q+1,Rt=z[Et];if(0>l(vt,$))Et<mt&&0>l(Rt,vt)?(z[ct]=Rt,z[Et]=$,ct=Et):(z[ct]=vt,z[Q]=$,ct=Q);else if(Et<mt&&0>l(Rt,$))z[ct]=Rt,z[Et]=$,ct=Et;else break t}}return B}function l(z,B){var $=z.sortIndex-B.sortIndex;return $!==0?$:z.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,x=null,g=3,M=!1,A=!1,R=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(z){for(var B=i(p);B!==null;){if(B.callback===null)s(p);else if(B.startTime<=z)s(p),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(p)}}function F(z){if(R=!1,U(z),!A)if(i(m)!==null)A=!0,w||(w=!0,k());else{var B=i(p);B!==null&&Y(F,B.startTime-z)}}var w=!1,O=-1,b=5,N=-1;function G(){return S?!0:!(r.unstable_now()-N<b)}function H(){if(S=!1,w){var z=r.unstable_now();N=z;var B=!0;try{t:{A=!1,R&&(R=!1,T(O),O=-1),M=!0;var $=g;try{e:{for(U(z),x=i(m);x!==null&&!(x.expirationTime>z&&G());){var ct=x.callback;if(typeof ct=="function"){x.callback=null,g=x.priorityLevel;var mt=ct(x.expirationTime<=z);if(z=r.unstable_now(),typeof mt=="function"){x.callback=mt,U(z),B=!0;break e}x===i(m)&&s(m),U(z)}else s(m);x=i(m)}if(x!==null)B=!0;else{var I=i(p);I!==null&&Y(F,I.startTime-z),B=!1}}break t}finally{x=null,g=$,M=!1}B=void 0}}finally{B?k():w=!1}}}var k;if(typeof L=="function")k=function(){L(H)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ot=rt.port2;rt.port1.onmessage=H,k=function(){ot.postMessage(null)}}else k=function(){v(H,0)};function Y(z,B){O=v(function(){z(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(z){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var $=g;g=B;try{return z()}finally{g=$}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(z,B){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=g;g=z;try{return B()}finally{g=$}},r.unstable_scheduleCallback=function(z,B,$){var ct=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ct+$:ct):$=ct,z){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=$+mt,z={id:_++,callback:B,priorityLevel:z,startTime:$,expirationTime:mt,sortIndex:-1},$>ct?(z.sortIndex=$,t(p,z),i(m)===null&&z===i(p)&&(R?(T(O),O=-1):R=!0,Y(F,$-ct))):(z.sortIndex=mt,t(m,z),A||M||(A=!0,w||(w=!0,k()))),z},r.unstable_shouldYield=G,r.unstable_wrapCallback=function(z){var B=g;return function(){var $=g;g=B;try{return z.apply(this,arguments)}finally{g=$}}}})(id)),id}var K_;function EM(){return K_||(K_=1,nd.exports=bM()),nd.exports}var ad={exports:{}},Yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function TM(){if(Q_)return Yn;Q_=1;var r=Fp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Yn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Yn.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},Yn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Yn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Yn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Yn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Yn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Yn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Yn.requestFormReset=function(m){s.d.r(m)},Yn.unstable_batchedUpdates=function(m,p){return m(p)},Yn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Yn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Yn.version="19.2.7",Yn}var J_;function AM(){if(J_)return ad.exports;J_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ad.exports=TM(),ad.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function wM(){if($_)return dl;$_=1;var r=EM(),t=Fp(),i=AM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var y=!1,D=u.child;D;){if(D===a){y=!0,a=u,o=h;break}if(D===o){y=!0,o=u,a=h;break}D=D.sibling}if(!y){for(D=h.child;D;){if(D===a){y=!0,a=h,o=u;break}if(D===o){y=!0,o=h,a=u;break}D=D.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),w=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),G=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case F:return"Suspense";case w:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case L:return e.displayName||"Context";case T:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:ot(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return ot(e(n))}catch{}}return null}var Y=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ct=[],mt=-1;function I(e){return{current:e}}function Q(e){0>mt||(e.current=ct[mt],ct[mt]=null,mt--)}function vt(e,n){mt++,ct[mt]=e.current,e.current=n}var Et=I(null),Rt=I(null),lt=I(null),St=I(null);function Tt(e,n){switch(vt(lt,n),vt(Rt,e),vt(Et,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?p_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=p_(n),e=m_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(Et),vt(Et,e)}function Gt(){Q(Et),Q(Rt),Q(lt)}function ee(e){e.memoizedState!==null&&vt(St,e);var n=Et.current,a=m_(n,e.type);n!==a&&(vt(Rt,e),vt(Et,a))}function Jt(e){Rt.current===e&&(Q(Et),Q(Rt)),St.current===e&&(Q(St),ll._currentValue=$)}var Ze,pe;function be(e){if(Ze===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ze=n&&n[1]||"",pe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ze+e+pe}var Ie=!1;function ue(e,n){if(!e||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ut){var st=ut}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ut){st=ut}e.call(yt.prototype)}}else{try{throw Error()}catch(ut){st=ut}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ut){if(ut&&st&&typeof ut.stack=="string")return[ut.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],D=h[1];if(y&&D){var V=y.split(`
`),et=D.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===et.length)for(o=V.length-1,u=et.length-1;1<=o&&0<=u&&V[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==et[u]){var dt=`
`+V[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?be(a):""}function mn(e,n){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be("Lazy");case 13:return e.child!==n&&n!==null?be("Suspense Fallback"):be("Suspense");case 19:return be("SuspenseList");case 0:case 15:return ue(e.type,!1);case 11:return ue(e.type.render,!1);case 1:return ue(e.type,!0);case 31:return be("Activity");default:return""}}function $e(e){try{var n="",a=null;do n+=mn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var On=Object.prototype.hasOwnProperty,j=r.unstable_scheduleCallback,un=r.unstable_cancelCallback,ge=r.unstable_shouldYield,ke=r.unstable_requestPaint,wt=r.unstable_now,sn=r.unstable_getCurrentPriorityLevel,P=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,J=r.unstable_NormalPriority,_t=r.unstable_LowPriority,bt=r.unstable_IdlePriority,Ct=r.log,Nt=r.unstable_setDisableYieldValue,ft=null,ht=null;function Ot(e){if(typeof Ct=="function"&&Nt(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(ft,e)}catch{}}var It=Math.clz32?Math.clz32:ae,Ut=Math.log,Dt=Math.LN2;function ae(e){return e>>>=0,e===0?32:31-(Ut(e)/Dt|0)|0}var se=256,ve=262144,W=4194304;function At(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var D=o&134217727;return D!==0?(o=D&~h,o!==0?u=At(o):(y&=D,y!==0?u=At(y):a||(a=D&~e,a!==0&&(u=At(a))))):(D=o&~h,D!==0?u=At(D):y!==0?u=At(y):a||(a=o&~e,a!==0&&(u=At(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Bt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Lt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mt(){var e=W;return W<<=1,(W&62914560)===0&&(W=4194304),e}function qt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ne(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fn(e,n,a,o,u,h){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var D=e.entanglements,V=e.expirationTimes,et=e.hiddenUpdates;for(a=y&~a;0<a;){var dt=31-It(a),yt=1<<dt;D[dt]=0,V[dt]=-1;var st=et[dt];if(st!==null)for(et[dt]=null,dt=0;dt<st.length;dt++){var ut=st[dt];ut!==null&&(ut.lane&=-536870913)}a&=~yt}o!==0&&Ne(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(y&~n))}function Ne(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-It(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Mi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-It(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function li(e,n){var a=n&-n;return a=(a&42)!==0?1:Cs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Cs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function yo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function So(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:F_(e.type))}function Mo(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var kn=Math.random().toString(36).slice(2),gn="__reactFiber$"+kn,In="__reactProps$"+kn,ra="__reactContainer$"+kn,Fa="__reactEvents$"+kn,Bl="__reactListeners$"+kn,cr="__reactHandles$"+kn,bo="__reactResources$"+kn,Ba="__reactMarker$"+kn;function Eo(e){delete e[gn],delete e[In],delete e[Fa],delete e[Bl],delete e[cr]}function Ha(e){var n=e[gn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ra]||a[gn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=M_(e);e!==null;){if(a=e[gn])return a;e=M_(e)}return n}e=a,a=e.parentNode}return null}function Ga(e){if(e=e[gn]||e[ra]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ds(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Va(e){var n=e[bo];return n||(n=e[bo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function yn(e){e[Ba]=!0}var Hl=new Set,C={};function Z(e,n){at(e,n),at(e+"Capture",n)}function at(e,n){for(C[e]=n,e=0;e<n.length;e++)Hl.add(n[e])}var nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},Ft={};function kt(e){return On.call(Ft,e)?!0:On.call(it,e)?!1:nt.test(e)?Ft[e]=!0:(it[e]=!0,!1)}function zt(e,n,a){if(kt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Yt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Xt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function le(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,h.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ce(e){if(!e._valueTracker){var n=le(e)?"checked":"value";e._valueTracker=Zt(e,n,""+e[n])}}function rn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=le(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Ke(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ze=/[\n"\\]/g;function Fe(e){return e.replace(ze,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Vt(e,n,a,o,u,h,y,D){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Kt(n)):e.value!==""+Kt(n)&&(e.value=""+Kt(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?xe(e,y,Kt(n)):a!=null?xe(e,y,Kt(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?e.name=""+Kt(D):e.removeAttribute("name")}function Xn(e,n,a,o,u,h,y,D){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Ce(e);return}a=a!=null?""+Kt(a):"",n=n!=null?""+Kt(n):a,D||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=D?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Ce(e)}function xe(e,n,a){n==="number"&&Ke(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function An(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Kt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ci(e,n,a){if(n!=null&&(n=""+Kt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Kt(a):""}function Ni(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Y(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Kt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ce(e)}function ui(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Be=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function on(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Be.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Pi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&on(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&on(e,h,n[h])}function Oe(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ki=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ka=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Us(e){return ka.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function oa(){}var Zu=null;function Ku(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ur=null,fr=null;function dm(e){var n=Ga(e);if(n&&(e=n.stateNode)){var a=e[In]||null;t:switch(e=n.stateNode,n.type){case"input":if(Vt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Fe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[In]||null;if(!u)throw Error(s(90));Vt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&rn(o)}break t;case"textarea":ci(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&An(e,!!a.multiple,n,!1)}}}var Qu=!1;function pm(e,n,a){if(Qu)return e(n,a);Qu=!0;try{var o=e(n);return o}finally{if(Qu=!1,(ur!==null||fr!==null)&&(wc(),ur&&(n=ur,e=fr,fr=ur=null,dm(n),e)))for(n=0;n<e.length;n++)dm(e[n])}}function To(e,n){var a=e.stateNode;if(a===null)return null;var o=a[In]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=!1;if(la)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{Ju=!1}var Xa=null,$u=null,Gl=null;function mm(){if(Gl)return Gl;var e,n=$u,a=n.length,o,u="value"in Xa?Xa.value:Xa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[h-o];o++);return Gl=u.slice(e,1<o?1-o:void 0)}function Vl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function kl(){return!0}function gm(){return!1}function ti(e){function n(a,o,u,h,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(a=e[D],this[D]=a?a(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?kl:gm,this.isPropagationStopped=gm,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=kl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=kl)},persist:function(){},isPersistent:kl}),n}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=ti(Ls),wo=x({},Ls,{view:0,detail:0}),_y=ti(wo),tf,ef,Ro,Yl=x({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ro&&(Ro&&e.type==="mousemove"?(tf=e.screenX-Ro.screenX,ef=e.screenY-Ro.screenY):ef=tf=0,Ro=e),tf)},movementY:function(e){return"movementY"in e?e.movementY:ef}}),_m=ti(Yl),vy=x({},Yl,{dataTransfer:0}),xy=ti(vy),yy=x({},wo,{relatedTarget:0}),nf=ti(yy),Sy=x({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),My=ti(Sy),by=x({},Ls,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ey=ti(by),Ty=x({},Ls,{data:0}),vm=ti(Ty),Ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ry[e])?!!n[e]:!1}function af(){return Cy}var Dy=x({},wo,{key:function(e){if(e.key){var n=Ay[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(e){return e.type==="keypress"?Vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uy=ti(Dy),Ly=x({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xm=ti(Ly),Ny=x({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),Py=ti(Ny),Oy=x({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iy=ti(Oy),zy=x({},Yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fy=ti(zy),By=x({},Ls,{newState:0,oldState:0}),Hy=ti(By),Gy=[9,13,27,32],sf=la&&"CompositionEvent"in window,Co=null;la&&"documentMode"in document&&(Co=document.documentMode);var Vy=la&&"TextEvent"in window&&!Co,ym=la&&(!sf||Co&&8<Co&&11>=Co),Sm=" ",Mm=!1;function bm(e,n){switch(e){case"keyup":return Gy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Em(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function ky(e,n){switch(e){case"compositionend":return Em(n);case"keypress":return n.which!==32?null:(Mm=!0,Sm);case"textInput":return e=n.data,e===Sm&&Mm?null:e;default:return null}}function Xy(e,n){if(hr)return e==="compositionend"||!sf&&bm(e,n)?(e=mm(),Gl=$u=Xa=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ym&&n.locale!=="ko"?null:n.data;default:return null}}var Yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Yy[e.type]:n==="textarea"}function Am(e,n,a,o){ur?fr?fr.push(o):fr=[o]:ur=o,n=Pc(n,"onChange"),0<n.length&&(a=new Xl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Do=null,Uo=null;function Wy(e){l_(e,0)}function Wl(e){var n=Ds(e);if(rn(n))return e}function wm(e,n){if(e==="change")return n}var Rm=!1;if(la){var rf;if(la){var of="oninput"in document;if(!of){var Cm=document.createElement("div");Cm.setAttribute("oninput","return;"),of=typeof Cm.oninput=="function"}rf=of}else rf=!1;Rm=rf&&(!document.documentMode||9<document.documentMode)}function Dm(){Do&&(Do.detachEvent("onpropertychange",Um),Uo=Do=null)}function Um(e){if(e.propertyName==="value"&&Wl(Uo)){var n=[];Am(n,Uo,e,Ku(e)),pm(Wy,n)}}function qy(e,n,a){e==="focusin"?(Dm(),Do=n,Uo=a,Do.attachEvent("onpropertychange",Um)):e==="focusout"&&Dm()}function jy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wl(Uo)}function Zy(e,n){if(e==="click")return Wl(n)}function Ky(e,n){if(e==="input"||e==="change")return Wl(n)}function Qy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var fi=typeof Object.is=="function"?Object.is:Qy;function Lo(e,n){if(fi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!On.call(n,u)||!fi(e[u],n[u]))return!1}return!0}function Lm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nm(e,n){var a=Lm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Lm(a)}}function Pm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Pm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Om(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ke(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ke(e.document)}return n}function lf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Jy=la&&"documentMode"in document&&11>=document.documentMode,dr=null,cf=null,No=null,uf=!1;function Im(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uf||dr==null||dr!==Ke(o)||(o=dr,"selectionStart"in o&&lf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),No&&Lo(No,o)||(No=o,o=Pc(cf,"onSelect"),0<o.length&&(n=new Xl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=dr)))}function Ns(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var pr={animationend:Ns("Animation","AnimationEnd"),animationiteration:Ns("Animation","AnimationIteration"),animationstart:Ns("Animation","AnimationStart"),transitionrun:Ns("Transition","TransitionRun"),transitionstart:Ns("Transition","TransitionStart"),transitioncancel:Ns("Transition","TransitionCancel"),transitionend:Ns("Transition","TransitionEnd")},ff={},zm={};la&&(zm=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function Ps(e){if(ff[e])return ff[e];if(!pr[e])return e;var n=pr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in zm)return ff[e]=n[a];return e}var Fm=Ps("animationend"),Bm=Ps("animationiteration"),Hm=Ps("animationstart"),$y=Ps("transitionrun"),tS=Ps("transitionstart"),eS=Ps("transitioncancel"),Gm=Ps("transitionend"),Vm=new Map,hf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hf.push("scrollEnd");function Oi(e,n){Vm.set(e,n),Z(n,[e])}var ql=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bi=[],mr=0,df=0;function jl(){for(var e=mr,n=df=mr=0;n<e;){var a=bi[n];bi[n++]=null;var o=bi[n];bi[n++]=null;var u=bi[n];bi[n++]=null;var h=bi[n];if(bi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}h!==0&&km(a,u,h)}}function Zl(e,n,a,o){bi[mr++]=e,bi[mr++]=n,bi[mr++]=a,bi[mr++]=o,df|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function pf(e,n,a,o){return Zl(e,n,a,o),Kl(e)}function Os(e,n){return Zl(e,null,null,n),Kl(e)}function km(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-It(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Kl(e){if(50<el)throw el=0,bh=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var gr={};function nS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,n,a,o){return new nS(e,n,a,o)}function mf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,n){var a=e.alternate;return a===null?(a=hi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Xm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ql(e,n,a,o,u,h){var y=0;if(o=e,typeof e=="function")mf(e)&&(y=1);else if(typeof e=="string")y=oM(e,a,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=hi(31,a,n,u),e.elementType=N,e.lanes=h,e;case R:return Is(a.children,u,h,n);case S:y=8,u|=24;break;case v:return e=hi(12,a,n,u|2),e.elementType=v,e.lanes=h,e;case F:return e=hi(13,a,n,u),e.elementType=F,e.lanes=h,e;case w:return e=hi(19,a,n,u),e.elementType=w,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:y=10;break t;case T:y=9;break t;case U:y=11;break t;case O:y=14;break t;case b:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=hi(y,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function Is(e,n,a,o){return e=hi(7,e,o,n),e.lanes=a,e}function gf(e,n,a){return e=hi(6,e,null,n),e.lanes=a,e}function Ym(e){var n=hi(18,null,null,0);return n.stateNode=e,n}function _f(e,n,a){return n=hi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Wm=new WeakMap;function Ei(e,n){if(typeof e=="object"&&e!==null){var a=Wm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:$e(n)},Wm.set(e,n),n)}return{value:e,source:n,stack:$e(n)}}var _r=[],vr=0,Jl=null,Po=0,Ti=[],Ai=0,Ya=null,Xi=1,Yi="";function ua(e,n){_r[vr++]=Po,_r[vr++]=Jl,Jl=e,Po=n}function qm(e,n,a){Ti[Ai++]=Xi,Ti[Ai++]=Yi,Ti[Ai++]=Ya,Ya=e;var o=Xi;e=Yi;var u=32-It(o)-1;o&=~(1<<u),a+=1;var h=32-It(n)+u;if(30<h){var y=u-u%5;h=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Xi=1<<32-It(n)+u|a<<u|o,Yi=h+e}else Xi=1<<h|a<<u|o,Yi=e}function vf(e){e.return!==null&&(ua(e,1),qm(e,1,0))}function xf(e){for(;e===Jl;)Jl=_r[--vr],_r[vr]=null,Po=_r[--vr],_r[vr]=null;for(;e===Ya;)Ya=Ti[--Ai],Ti[Ai]=null,Yi=Ti[--Ai],Ti[Ai]=null,Xi=Ti[--Ai],Ti[Ai]=null}function jm(e,n){Ti[Ai++]=Xi,Ti[Ai++]=Yi,Ti[Ai++]=Ya,Xi=n.id,Yi=n.overflow,Ya=e}var zn=null,tn=null,Ae=!1,Wa=null,wi=!1,yf=Error(s(519));function qa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Oo(Ei(n,e)),yf}function Zm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[gn]=e,n[In]=o,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<il.length;a++)Se(il[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),Xn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),Ni(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||h_(n.textContent,a)?(o.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),o.onScroll!=null&&Se("scroll",n),o.onScrollEnd!=null&&Se("scrollend",n),o.onClick!=null&&(n.onclick=oa),n=!0):n=!1,n||qa(e,!0)}function Km(e){for(zn=e.return;zn;)switch(zn.tag){case 5:case 31:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:zn=zn.return}}function xr(e){if(e!==zn)return!1;if(!Ae)return Km(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Fh(e.type,e.memoizedProps)),a=!a),a&&tn&&qa(e),Km(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));tn=S_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));tn=S_(e)}else n===27?(n=tn,os(e.type)?(e=kh,kh=null,tn=e):tn=n):tn=zn?Ci(e.stateNode.nextSibling):null;return!0}function zs(){tn=zn=null,Ae=!1}function Sf(){var e=Wa;return e!==null&&(ai===null?ai=e:ai.push.apply(ai,e),Wa=null),e}function Oo(e){Wa===null?Wa=[e]:Wa.push(e)}var Mf=I(null),Fs=null,fa=null;function ja(e,n,a){vt(Mf,n._currentValue),n._currentValue=a}function ha(e){e._currentValue=Mf.current,Q(Mf)}function bf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Ef(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var y=u.child;h=h.firstContext;t:for(;h!==null;){var D=h;h=u;for(var V=0;V<n.length;V++)if(D.context===n[V]){h.lanes|=a,D=h.alternate,D!==null&&(D.lanes|=a),bf(h.return,a,e),o||(y=null);break t}h=D.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,h=y.alternate,h!==null&&(h.lanes|=a),bf(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function yr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var D=u.type;fi(u.pendingProps.value,y.value)||(e!==null?e.push(D):e=[D])}}else if(u===St.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(ll):e=[ll])}u=u.return}e!==null&&Ef(n,e,a,o),n.flags|=262144}function $l(e){for(e=e.firstContext;e!==null;){if(!fi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Bs(e){Fs=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fn(e){return Qm(Fs,e)}function tc(e,n){return Fs===null&&Bs(e),Qm(e,n)}function Qm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},fa===null){if(e===null)throw Error(s(308));fa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else fa=fa.next=n;return a}var iS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},aS=r.unstable_scheduleCallback,sS=r.unstable_NormalPriority,Sn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tf(){return{controller:new iS,data:new Map,refCount:0}}function Io(e){e.refCount--,e.refCount===0&&aS(sS,function(){e.controller.abort()})}var zo=null,Af=0,Sr=0,Mr=null;function rS(e,n){if(zo===null){var a=zo=[];Af=0,Sr=Ch(),Mr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Af++,n.then(Jm,Jm),n}function Jm(){if(--Af===0&&zo!==null){Mr!==null&&(Mr.status="fulfilled");var e=zo;zo=null,Sr=0,Mr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function oS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var $m=z.S;z.S=function(e,n){Ig=wt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&rS(e,n),$m!==null&&$m(e,n)};var Hs=I(null);function wf(){var e=Hs.current;return e!==null?e:Qe.pooledCache}function ec(e,n){n===null?vt(Hs,Hs.current):vt(Hs,n.pool)}function t0(){var e=wf();return e===null?null:{parent:Sn._currentValue,pool:e}}var br=Error(s(460)),Rf=Error(s(474)),nc=Error(s(542)),ic={then:function(){}};function e0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function n0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(oa,oa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,a0(e),e;default:if(typeof n.status=="string")n.then(oa,oa);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,a0(e),e}throw Vs=n,br}}function Gs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Vs=a,br):a}}var Vs=null;function i0(){if(Vs===null)throw Error(s(459));var e=Vs;return Vs=null,e}function a0(e){if(e===br||e===nc)throw Error(s(483))}var Er=null,Fo=0;function ac(e){var n=Fo;return Fo+=1,Er===null&&(Er=[]),n0(Er,e,n)}function Bo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function sc(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function s0(e){function n(K,q){if(e){var tt=K.deletions;tt===null?(K.deletions=[q],K.flags|=16):tt.push(q)}}function a(K,q){if(!e)return null;for(;q!==null;)n(K,q),q=q.sibling;return null}function o(K){for(var q=new Map;K!==null;)K.key!==null?q.set(K.key,K):q.set(K.index,K),K=K.sibling;return q}function u(K,q){return K=ca(K,q),K.index=0,K.sibling=null,K}function h(K,q,tt){return K.index=tt,e?(tt=K.alternate,tt!==null?(tt=tt.index,tt<q?(K.flags|=67108866,q):tt):(K.flags|=67108866,q)):(K.flags|=1048576,q)}function y(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function D(K,q,tt,gt){return q===null||q.tag!==6?(q=gf(tt,K.mode,gt),q.return=K,q):(q=u(q,tt),q.return=K,q)}function V(K,q,tt,gt){var Qt=tt.type;return Qt===R?dt(K,q,tt.props.children,gt,tt.key):q!==null&&(q.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===b&&Gs(Qt)===q.type)?(q=u(q,tt.props),Bo(q,tt),q.return=K,q):(q=Ql(tt.type,tt.key,tt.props,null,K.mode,gt),Bo(q,tt),q.return=K,q)}function et(K,q,tt,gt){return q===null||q.tag!==4||q.stateNode.containerInfo!==tt.containerInfo||q.stateNode.implementation!==tt.implementation?(q=_f(tt,K.mode,gt),q.return=K,q):(q=u(q,tt.children||[]),q.return=K,q)}function dt(K,q,tt,gt,Qt){return q===null||q.tag!==7?(q=Is(tt,K.mode,gt,Qt),q.return=K,q):(q=u(q,tt),q.return=K,q)}function yt(K,q,tt){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=gf(""+q,K.mode,tt),q.return=K,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case M:return tt=Ql(q.type,q.key,q.props,null,K.mode,tt),Bo(tt,q),tt.return=K,tt;case A:return q=_f(q,K.mode,tt),q.return=K,q;case b:return q=Gs(q),yt(K,q,tt)}if(Y(q)||k(q))return q=Is(q,K.mode,tt,null),q.return=K,q;if(typeof q.then=="function")return yt(K,ac(q),tt);if(q.$$typeof===L)return yt(K,tc(K,q),tt);sc(K,q)}return null}function st(K,q,tt,gt){var Qt=q!==null?q.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Qt!==null?null:D(K,q,""+tt,gt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:return tt.key===Qt?V(K,q,tt,gt):null;case A:return tt.key===Qt?et(K,q,tt,gt):null;case b:return tt=Gs(tt),st(K,q,tt,gt)}if(Y(tt)||k(tt))return Qt!==null?null:dt(K,q,tt,gt,null);if(typeof tt.then=="function")return st(K,q,ac(tt),gt);if(tt.$$typeof===L)return st(K,q,tc(K,tt),gt);sc(K,tt)}return null}function ut(K,q,tt,gt,Qt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return K=K.get(tt)||null,D(q,K,""+gt,Qt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case M:return K=K.get(gt.key===null?tt:gt.key)||null,V(q,K,gt,Qt);case A:return K=K.get(gt.key===null?tt:gt.key)||null,et(q,K,gt,Qt);case b:return gt=Gs(gt),ut(K,q,tt,gt,Qt)}if(Y(gt)||k(gt))return K=K.get(tt)||null,dt(q,K,gt,Qt,null);if(typeof gt.then=="function")return ut(K,q,tt,ac(gt),Qt);if(gt.$$typeof===L)return ut(K,q,tt,tc(q,gt),Qt);sc(q,gt)}return null}function Wt(K,q,tt,gt){for(var Qt=null,De=null,jt=q,fe=q=0,Te=null;jt!==null&&fe<tt.length;fe++){jt.index>fe?(Te=jt,jt=null):Te=jt.sibling;var Ue=st(K,jt,tt[fe],gt);if(Ue===null){jt===null&&(jt=Te);break}e&&jt&&Ue.alternate===null&&n(K,jt),q=h(Ue,q,fe),De===null?Qt=Ue:De.sibling=Ue,De=Ue,jt=Te}if(fe===tt.length)return a(K,jt),Ae&&ua(K,fe),Qt;if(jt===null){for(;fe<tt.length;fe++)jt=yt(K,tt[fe],gt),jt!==null&&(q=h(jt,q,fe),De===null?Qt=jt:De.sibling=jt,De=jt);return Ae&&ua(K,fe),Qt}for(jt=o(jt);fe<tt.length;fe++)Te=ut(jt,K,fe,tt[fe],gt),Te!==null&&(e&&Te.alternate!==null&&jt.delete(Te.key===null?fe:Te.key),q=h(Te,q,fe),De===null?Qt=Te:De.sibling=Te,De=Te);return e&&jt.forEach(function(hs){return n(K,hs)}),Ae&&ua(K,fe),Qt}function $t(K,q,tt,gt){if(tt==null)throw Error(s(151));for(var Qt=null,De=null,jt=q,fe=q=0,Te=null,Ue=tt.next();jt!==null&&!Ue.done;fe++,Ue=tt.next()){jt.index>fe?(Te=jt,jt=null):Te=jt.sibling;var hs=st(K,jt,Ue.value,gt);if(hs===null){jt===null&&(jt=Te);break}e&&jt&&hs.alternate===null&&n(K,jt),q=h(hs,q,fe),De===null?Qt=hs:De.sibling=hs,De=hs,jt=Te}if(Ue.done)return a(K,jt),Ae&&ua(K,fe),Qt;if(jt===null){for(;!Ue.done;fe++,Ue=tt.next())Ue=yt(K,Ue.value,gt),Ue!==null&&(q=h(Ue,q,fe),De===null?Qt=Ue:De.sibling=Ue,De=Ue);return Ae&&ua(K,fe),Qt}for(jt=o(jt);!Ue.done;fe++,Ue=tt.next())Ue=ut(jt,K,fe,Ue.value,gt),Ue!==null&&(e&&Ue.alternate!==null&&jt.delete(Ue.key===null?fe:Ue.key),q=h(Ue,q,fe),De===null?Qt=Ue:De.sibling=Ue,De=Ue);return e&&jt.forEach(function(vM){return n(K,vM)}),Ae&&ua(K,fe),Qt}function We(K,q,tt,gt){if(typeof tt=="object"&&tt!==null&&tt.type===R&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:t:{for(var Qt=tt.key;q!==null;){if(q.key===Qt){if(Qt=tt.type,Qt===R){if(q.tag===7){a(K,q.sibling),gt=u(q,tt.props.children),gt.return=K,K=gt;break t}}else if(q.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===b&&Gs(Qt)===q.type){a(K,q.sibling),gt=u(q,tt.props),Bo(gt,tt),gt.return=K,K=gt;break t}a(K,q);break}else n(K,q);q=q.sibling}tt.type===R?(gt=Is(tt.props.children,K.mode,gt,tt.key),gt.return=K,K=gt):(gt=Ql(tt.type,tt.key,tt.props,null,K.mode,gt),Bo(gt,tt),gt.return=K,K=gt)}return y(K);case A:t:{for(Qt=tt.key;q!==null;){if(q.key===Qt)if(q.tag===4&&q.stateNode.containerInfo===tt.containerInfo&&q.stateNode.implementation===tt.implementation){a(K,q.sibling),gt=u(q,tt.children||[]),gt.return=K,K=gt;break t}else{a(K,q);break}else n(K,q);q=q.sibling}gt=_f(tt,K.mode,gt),gt.return=K,K=gt}return y(K);case b:return tt=Gs(tt),We(K,q,tt,gt)}if(Y(tt))return Wt(K,q,tt,gt);if(k(tt)){if(Qt=k(tt),typeof Qt!="function")throw Error(s(150));return tt=Qt.call(tt),$t(K,q,tt,gt)}if(typeof tt.then=="function")return We(K,q,ac(tt),gt);if(tt.$$typeof===L)return We(K,q,tc(K,tt),gt);sc(K,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,q!==null&&q.tag===6?(a(K,q.sibling),gt=u(q,tt),gt.return=K,K=gt):(a(K,q),gt=gf(tt,K.mode,gt),gt.return=K,K=gt),y(K)):a(K,q)}return function(K,q,tt,gt){try{Fo=0;var Qt=We(K,q,tt,gt);return Er=null,Qt}catch(jt){if(jt===br||jt===nc)throw jt;var De=hi(29,jt,null,K.mode);return De.lanes=gt,De.return=K,De}finally{}}}var ks=s0(!0),r0=s0(!1),Za=!1;function Cf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Df(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Qa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Kl(e),km(e,null,a),n}return Zl(e,o,n,a),Kl(e)}function Ho(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Mi(e,a)}}function Uf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=y:h=h.next=y,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Lf=!1;function Go(){if(Lf){var e=Mr;if(e!==null)throw e}}function Vo(e,n,a,o){Lf=!1;var u=e.updateQueue;Za=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var V=D,et=V.next;V.next=null,y===null?h=et:y.next=et,y=V;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,D=dt.lastBaseUpdate,D!==y&&(D===null?dt.firstBaseUpdate=et:D.next=et,dt.lastBaseUpdate=V))}if(h!==null){var yt=u.baseState;y=0,dt=et=V=null,D=h;do{var st=D.lane&-536870913,ut=st!==D.lane;if(ut?(Ee&st)===st:(o&st)===st){st!==0&&st===Sr&&(Lf=!0),dt!==null&&(dt=dt.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});t:{var Wt=e,$t=D;st=n;var We=a;switch($t.tag){case 1:if(Wt=$t.payload,typeof Wt=="function"){yt=Wt.call(We,yt,st);break t}yt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=$t.payload,st=typeof Wt=="function"?Wt.call(We,yt,st):Wt,st==null)break t;yt=x({},yt,st);break t;case 2:Za=!0}}st=D.callback,st!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[st]:ut.push(st))}else ut={lane:st,tag:D.tag,payload:D.payload,callback:D.callback,next:null},dt===null?(et=dt=ut,V=yt):dt=dt.next=ut,y|=st;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;ut=D,D=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);dt===null&&(V=yt),u.baseState=V,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,h===null&&(u.shared.lanes=0),ns|=y,e.lanes=y,e.memoizedState=yt}}function o0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function l0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)o0(a[e],n)}var Tr=I(null),rc=I(0);function c0(e,n){e=Sa,vt(rc,e),vt(Tr,n),Sa=e|n.baseLanes}function Nf(){vt(rc,Sa),vt(Tr,Tr.current)}function Pf(){Sa=rc.current,Q(Tr),Q(rc)}var di=I(null),Ri=null;function Ja(e){var n=e.alternate;vt(_n,_n.current&1),vt(di,e),Ri===null&&(n===null||Tr.current!==null||n.memoizedState!==null)&&(Ri=e)}function Of(e){vt(_n,_n.current),vt(di,e),Ri===null&&(Ri=e)}function u0(e){e.tag===22?(vt(_n,_n.current),vt(di,e),Ri===null&&(Ri=e)):$a()}function $a(){vt(_n,_n.current),vt(di,di.current)}function pi(e){Q(di),Ri===e&&(Ri=null),Q(_n)}var _n=I(0);function oc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Gh(a)||Vh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var da=0,ce=null,Xe=null,Mn=null,lc=!1,Ar=!1,Xs=!1,cc=0,ko=0,wr=null,lS=0;function hn(){throw Error(s(321))}function If(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!fi(e[a],n[a]))return!1;return!0}function zf(e,n,a,o,u,h){return da=h,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?q0:Jf,Xs=!1,h=a(o,u),Xs=!1,Ar&&(h=h0(n,a,o,u)),f0(e),h}function f0(e){z.H=Wo;var n=Xe!==null&&Xe.next!==null;if(da=0,Mn=Xe=ce=null,lc=!1,ko=0,wr=null,n)throw Error(s(300));e===null||bn||(e=e.dependencies,e!==null&&$l(e)&&(bn=!0))}function h0(e,n,a,o){ce=e;var u=0;do{if(Ar&&(wr=null),ko=0,Ar=!1,25<=u)throw Error(s(301));if(u+=1,Mn=Xe=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}z.H=j0,h=n(a,o)}while(Ar);return h}function cS(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?Xo(n):n,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(ce.flags|=1024),n}function Ff(){var e=cc!==0;return cc=0,e}function Bf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Hf(e){if(lc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}lc=!1}da=0,Mn=Xe=ce=null,Ar=!1,ko=cc=0,wr=null}function Kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?ce.memoizedState=Mn=e:Mn=Mn.next=e,Mn}function vn(){if(Xe===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var n=Mn===null?ce.memoizedState:Mn.next;if(n!==null)Mn=n,Xe=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},Mn===null?ce.memoizedState=Mn=e:Mn=Mn.next=e}return Mn}function uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xo(e){var n=ko;return ko+=1,wr===null&&(wr=[]),e=n0(wr,e,n),n=ce,(Mn===null?n.memoizedState:Mn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?q0:Jf),e}function fc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xo(e);if(e.$$typeof===L)return Fn(e)}throw Error(s(438,String(e)))}function Gf(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=uc(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=G;return n.index++,a}function pa(e,n){return typeof n=="function"?n(e):n}function hc(e){var n=vn();return Vf(n,Xe,e)}function Vf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var D=y=null,V=null,et=n,dt=!1;do{var yt=et.lane&-536870913;if(yt!==et.lane?(Ee&yt)===yt:(da&yt)===yt){var st=et.revertLane;if(st===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),yt===Sr&&(dt=!0);else if((da&st)===st){et=et.next,st===Sr&&(dt=!0);continue}else yt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},V===null?(D=V=yt,y=h):V=V.next=yt,ce.lanes|=st,ns|=st;yt=et.action,Xs&&a(h,yt),h=et.hasEagerState?et.eagerState:a(h,yt)}else st={lane:yt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},V===null?(D=V=st,y=h):V=V.next=st,ce.lanes|=yt,ns|=yt;et=et.next}while(et!==null&&et!==n);if(V===null?y=h:V.next=D,!fi(h,e.memoizedState)&&(bn=!0,dt&&(a=Mr,a!==null)))throw a;e.memoizedState=h,e.baseState=y,e.baseQueue=V,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function kf(e){var n=vn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do h=e(h,y.action),y=y.next;while(y!==u);fi(h,n.memoizedState)||(bn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function d0(e,n,a){var o=ce,u=vn(),h=Ae;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!fi((Xe||u).memoizedState,a);if(y&&(u.memoizedState=a,bn=!0),u=u.queue,Wf(g0.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||Mn!==null&&Mn.memoizedState.tag&1){if(o.flags|=2048,Rr(9,{destroy:void 0},m0.bind(null,o,u,a,n),null),Qe===null)throw Error(s(349));h||(da&127)!==0||p0(o,n,a)}return a}function p0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=uc(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function m0(e,n,a,o){n.value=a,n.getSnapshot=o,_0(n)&&v0(e)}function g0(e,n,a){return a(function(){_0(n)&&v0(e)})}function _0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!fi(e,a)}catch{return!0}}function v0(e){var n=Os(e,2);n!==null&&si(n,e,2)}function Xf(e){var n=Kn();if(typeof e=="function"){var a=e;if(e=a(),Xs){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},n}function x0(e,n,a,o){return e.baseState=a,Vf(e,Xe,typeof o=="function"?o:pa)}function uS(e,n,a,o,u){if(mc(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};z.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,y0(n,h)):(h.next=a.next,n.pending=a.next=h)}}function y0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=z.T,y={};z.T=y;try{var D=a(u,o),V=z.S;V!==null&&V(y,D),S0(e,n,D)}catch(et){Yf(e,n,et)}finally{h!==null&&y.types!==null&&(h.types=y.types),z.T=h}}else try{h=a(u,o),S0(e,n,h)}catch(et){Yf(e,n,et)}}function S0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){M0(e,n,o)},function(o){return Yf(e,n,o)}):M0(e,n,a)}function M0(e,n,a){n.status="fulfilled",n.value=a,b0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,y0(e,a)))}function Yf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,b0(n),n=n.next;while(n!==o)}e.action=null}function b0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function E0(e,n){return n}function T0(e,n){if(Ae){var a=Qe.formState;if(a!==null){t:{var o=ce;if(Ae){if(tn){e:{for(var u=tn,h=wi;u.nodeType!==8;){if(!h){u=null;break e}if(u=Ci(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){tn=Ci(u.nextSibling),o=u.data==="F!";break t}}qa(o)}o=!1}o&&(n=a[0])}}return a=Kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:E0,lastRenderedState:n},a.queue=o,a=X0.bind(null,ce,o),o.dispatch=a,o=Xf(!1),h=Qf.bind(null,ce,!1,o.queue),o=Kn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=uS.bind(null,ce,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function A0(e){var n=vn();return w0(n,Xe,e)}function w0(e,n,a){if(n=Vf(e,n,E0)[0],e=hc(pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Xo(n)}catch(y){throw y===br?nc:y}else o=n;n=vn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,Rr(9,{destroy:void 0},fS.bind(null,u,a),null)),[o,h,e]}function fS(e,n){e.action=n}function R0(e){var n=vn(),a=Xe;if(a!==null)return w0(n,a,e);vn(),n=n.memoizedState,a=vn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Rr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ce.updateQueue,n===null&&(n=uc(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function C0(){return vn().memoizedState}function dc(e,n,a,o){var u=Kn();ce.flags|=e,u.memoizedState=Rr(1|n,{destroy:void 0},a,o===void 0?null:o)}function pc(e,n,a,o){var u=vn();o=o===void 0?null:o;var h=u.memoizedState.inst;Xe!==null&&o!==null&&If(o,Xe.memoizedState.deps)?u.memoizedState=Rr(n,h,a,o):(ce.flags|=e,u.memoizedState=Rr(1|n,h,a,o))}function D0(e,n){dc(8390656,8,e,n)}function Wf(e,n){pc(2048,8,e,n)}function hS(e){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=uc(),ce.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function U0(e){var n=vn().memoizedState;return hS({ref:n,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function L0(e,n){return pc(4,2,e,n)}function N0(e,n){return pc(4,4,e,n)}function P0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function O0(e,n,a){a=a!=null?a.concat([e]):null,pc(4,4,P0.bind(null,n,e),a)}function qf(){}function I0(e,n){var a=vn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&If(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function z0(e,n){var a=vn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&If(n,o[1]))return o[0];if(o=e(),Xs){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[o,n],o}function jf(e,n,a){return a===void 0||(da&1073741824)!==0&&(Ee&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Fg(),ce.lanes|=e,ns|=e,a)}function F0(e,n,a,o){return fi(a,n)?a:Tr.current!==null?(e=jf(e,a,o),fi(e,n)||(bn=!0),e):(da&42)===0||(da&1073741824)!==0&&(Ee&261930)===0?(bn=!0,e.memoizedState=a):(e=Fg(),ce.lanes|=e,ns|=e,n)}function B0(e,n,a,o,u){var h=B.p;B.p=h!==0&&8>h?h:8;var y=z.T,D={};z.T=D,Qf(e,!1,n,a);try{var V=u(),et=z.S;if(et!==null&&et(D,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var dt=oS(V,o);Yo(e,n,dt,_i(e))}else Yo(e,n,o,_i(e))}catch(yt){Yo(e,n,{then:function(){},status:"rejected",reason:yt},_i())}finally{B.p=h,y!==null&&D.types!==null&&(y.types=D.types),z.T=y}}function dS(){}function Zf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=H0(e).queue;B0(e,u,n,$,a===null?dS:function(){return G0(e),a(o)})}function H0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function G0(e){var n=H0(e);n.next===null&&(n=e.alternate.memoizedState),Yo(e,n.next.queue,{},_i())}function Kf(){return Fn(ll)}function V0(){return vn().memoizedState}function k0(){return vn().memoizedState}function pS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=_i();e=Ka(a);var o=Qa(n,e,a);o!==null&&(si(o,n,a),Ho(o,n,a)),n={cache:Tf()},e.payload=n;return}n=n.return}}function mS(e,n,a){var o=_i();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},mc(e)?Y0(n,a):(a=pf(e,n,a,o),a!==null&&(si(a,e,o),W0(a,n,o)))}function X0(e,n,a){var o=_i();Yo(e,n,a,o)}function Yo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(mc(e))Y0(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,D=h(y,a);if(u.hasEagerState=!0,u.eagerState=D,fi(D,y))return Zl(e,n,u,0),Qe===null&&jl(),!1}catch{}finally{}if(a=pf(e,n,u,o),a!==null)return si(a,e,o),W0(a,n,o),!0}return!1}function Qf(e,n,a,o){if(o={lane:2,revertLane:Ch(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},mc(e)){if(n)throw Error(s(479))}else n=pf(e,a,o,2),n!==null&&si(n,e,2)}function mc(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function Y0(e,n){Ar=lc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function W0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Mi(e,a)}}var Wo={readContext:Fn,use:fc,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useLayoutEffect:hn,useInsertionEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useSyncExternalStore:hn,useId:hn,useHostTransitionStatus:hn,useFormState:hn,useActionState:hn,useOptimistic:hn,useMemoCache:hn,useCacheRefresh:hn};Wo.useEffectEvent=hn;var q0={readContext:Fn,use:fc,useCallback:function(e,n){return Kn().memoizedState=[e,n===void 0?null:n],e},useContext:Fn,useEffect:D0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,dc(4194308,4,P0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return dc(4194308,4,e,n)},useInsertionEffect:function(e,n){dc(4,2,e,n)},useMemo:function(e,n){var a=Kn();n=n===void 0?null:n;var o=e();if(Xs){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Kn();if(a!==void 0){var u=a(n);if(Xs){Ot(!0);try{a(n)}finally{Ot(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=mS.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var n=Kn();return e={current:e},n.memoizedState=e},useState:function(e){e=Xf(e);var n=e.queue,a=X0.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:qf,useDeferredValue:function(e,n){var a=Kn();return jf(a,e,n)},useTransition:function(){var e=Xf(!1);return e=B0.bind(null,ce,e.queue,!0,!1),Kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ce,u=Kn();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qe===null)throw Error(s(349));(Ee&127)!==0||p0(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,D0(g0.bind(null,o,h,e),[e]),o.flags|=2048,Rr(9,{destroy:void 0},m0.bind(null,o,h,a,n),null),a},useId:function(){var e=Kn(),n=Qe.identifierPrefix;if(Ae){var a=Yi,o=Xi;a=(o&~(1<<32-It(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=cc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=lS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Kf,useFormState:T0,useActionState:T0,useOptimistic:function(e){var n=Kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Qf.bind(null,ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:Gf,useCacheRefresh:function(){return Kn().memoizedState=pS.bind(null,ce)},useEffectEvent:function(e){var n=Kn(),a={impl:e};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Jf={readContext:Fn,use:fc,useCallback:I0,useContext:Fn,useEffect:Wf,useImperativeHandle:O0,useInsertionEffect:L0,useLayoutEffect:N0,useMemo:z0,useReducer:hc,useRef:C0,useState:function(){return hc(pa)},useDebugValue:qf,useDeferredValue:function(e,n){var a=vn();return F0(a,Xe.memoizedState,e,n)},useTransition:function(){var e=hc(pa)[0],n=vn().memoizedState;return[typeof e=="boolean"?e:Xo(e),n]},useSyncExternalStore:d0,useId:V0,useHostTransitionStatus:Kf,useFormState:A0,useActionState:A0,useOptimistic:function(e,n){var a=vn();return x0(a,Xe,e,n)},useMemoCache:Gf,useCacheRefresh:k0};Jf.useEffectEvent=U0;var j0={readContext:Fn,use:fc,useCallback:I0,useContext:Fn,useEffect:Wf,useImperativeHandle:O0,useInsertionEffect:L0,useLayoutEffect:N0,useMemo:z0,useReducer:kf,useRef:C0,useState:function(){return kf(pa)},useDebugValue:qf,useDeferredValue:function(e,n){var a=vn();return Xe===null?jf(a,e,n):F0(a,Xe.memoizedState,e,n)},useTransition:function(){var e=kf(pa)[0],n=vn().memoizedState;return[typeof e=="boolean"?e:Xo(e),n]},useSyncExternalStore:d0,useId:V0,useHostTransitionStatus:Kf,useFormState:R0,useActionState:R0,useOptimistic:function(e,n){var a=vn();return Xe!==null?x0(a,Xe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Gf,useCacheRefresh:k0};j0.useEffectEvent=U0;function $f(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var th={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=_i(),u=Ka(o);u.payload=n,a!=null&&(u.callback=a),n=Qa(e,u,o),n!==null&&(si(n,e,o),Ho(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=_i(),u=Ka(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Qa(e,u,o),n!==null&&(si(n,e,o),Ho(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=_i(),o=Ka(a);o.tag=2,n!=null&&(o.callback=n),n=Qa(e,o,a),n!==null&&(si(n,e,a),Ho(n,e,a))}};function Z0(e,n,a,o,u,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,y):n.prototype&&n.prototype.isPureReactComponent?!Lo(a,o)||!Lo(u,h):!0}function K0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&th.enqueueReplaceState(n,n.state,null)}function Ys(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Q0(e){ql(e)}function J0(e){console.error(e)}function $0(e){ql(e)}function gc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function tg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function eh(e,n,a){return a=Ka(a),a.tag=3,a.payload={element:null},a.callback=function(){gc(e,n)},a}function eg(e){return e=Ka(e),e.tag=3,e}function ng(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){tg(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){tg(n,a,o),typeof u!="function"&&(is===null?is=new Set([this]):is.add(this));var D=o.stack;this.componentDidCatch(o.value,{componentStack:D!==null?D:""})})}function gS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&yr(n,a,u,!0),a=di.current,a!==null){switch(a.tag){case 31:case 13:return Ri===null?Rc():a.alternate===null&&dn===0&&(dn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===ic?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ah(e,o,u)),!1;case 22:return a.flags|=65536,o===ic?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ah(e,o,u)),!1}throw Error(s(435,a.tag))}return Ah(e,o,u),Rc(),!1}if(Ae)return n=di.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==yf&&(e=Error(s(422),{cause:o}),Oo(Ei(e,a)))):(o!==yf&&(n=Error(s(423),{cause:o}),Oo(Ei(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Ei(o,a),u=eh(e.stateNode,o,u),Uf(e,u),dn!==4&&(dn=2)),!1;var h=Error(s(520),{cause:o});if(h=Ei(h,a),tl===null?tl=[h]:tl.push(h),dn!==4&&(dn=2),n===null)return!0;o=Ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=eh(a.stateNode,o,e),Uf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(is===null||!is.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=eg(u),ng(u,e,a,o),Uf(a,u),!1}a=a.return}while(a!==null);return!1}var nh=Error(s(461)),bn=!1;function Bn(e,n,a,o){n.child=e===null?r0(n,null,a,o):ks(n,e.child,a,o)}function ig(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var y={};for(var D in o)D!=="ref"&&(y[D]=o[D])}else y=o;return Bs(n),o=zf(e,n,a,y,h,u),D=Ff(),e!==null&&!bn?(Bf(e,n,u),ma(e,n,u)):(Ae&&D&&vf(n),n.flags|=1,Bn(e,n,o,u),n.child)}function ag(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!mf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,sg(e,n,h,o,u)):(e=Ql(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!uh(e,u)){var y=h.memoizedProps;if(a=a.compare,a=a!==null?a:Lo,a(y,o)&&e.ref===n.ref)return ma(e,n,u)}return n.flags|=1,e=ca(h,o),e.ref=n.ref,e.return=n,n.child=e}function sg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Lo(h,o)&&e.ref===n.ref)if(bn=!1,n.pendingProps=o=h,uh(e,u))(e.flags&131072)!==0&&(bn=!0);else return n.lanes=e.lanes,ma(e,n,u)}return ih(e,n,a,o,u)}function rg(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return og(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ec(n,h!==null?h.cachePool:null),h!==null?c0(n,h):Nf(),u0(n);else return o=n.lanes=536870912,og(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(ec(n,h.cachePool),c0(n,h),$a(),n.memoizedState=null):(e!==null&&ec(n,null),Nf(),$a());return Bn(e,n,u,a),n.child}function qo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function og(e,n,a,o,u){var h=wf();return h=h===null?null:{parent:Sn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&ec(n,null),Nf(),u0(n),e!==null&&yr(e,n,o,!0),n.childLanes=u,null}function _c(e,n){return n=xc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function lg(e,n,a){return ks(n,e.child,null,a),e=_c(n,n.pendingProps),e.flags|=2,pi(n),n.memoizedState=null,e}function _S(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(o.mode==="hidden")return e=_c(n,o),n.lanes=536870912,qo(null,e);if(Of(n),(e=tn)?(e=y_(e,wi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:Xi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=Ym(e),a.return=n,n.child=a,zn=n,tn=null)):e=null,e===null)throw qa(n);return n.lanes=536870912,null}return _c(n,o)}var h=e.memoizedState;if(h!==null){var y=h.dehydrated;if(Of(n),u)if(n.flags&256)n.flags&=-257,n=lg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(bn||yr(e,n,a,!1),u=(a&e.childLanes)!==0,bn||u){if(o=Qe,o!==null&&(y=li(o,a),y!==0&&y!==h.retryLane))throw h.retryLane=y,Os(e,y),si(o,e,y),nh;Rc(),n=lg(e,n,a)}else e=h.treeContext,tn=Ci(y.nextSibling),zn=n,Ae=!0,Wa=null,wi=!1,e!==null&&jm(n,e),n=_c(n,o),n.flags|=4096;return n}return e=ca(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function vc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ih(e,n,a,o,u){return Bs(n),a=zf(e,n,a,o,void 0,u),o=Ff(),e!==null&&!bn?(Bf(e,n,u),ma(e,n,u)):(Ae&&o&&vf(n),n.flags|=1,Bn(e,n,a,u),n.child)}function cg(e,n,a,o,u,h){return Bs(n),n.updateQueue=null,a=h0(n,o,a,u),f0(e),o=Ff(),e!==null&&!bn?(Bf(e,n,h),ma(e,n,h)):(Ae&&o&&vf(n),n.flags|=1,Bn(e,n,a,h),n.child)}function ug(e,n,a,o,u){if(Bs(n),n.stateNode===null){var h=gr,y=a.contextType;typeof y=="object"&&y!==null&&(h=Fn(y)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=th,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Cf(n),y=a.contextType,h.context=typeof y=="object"&&y!==null?Fn(y):gr,h.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&($f(n,a,y,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&th.enqueueReplaceState(h,h.state,null),Vo(n,o,h,u),Go(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var D=n.memoizedProps,V=Ys(a,D);h.props=V;var et=h.context,dt=a.contextType;y=gr,typeof dt=="object"&&dt!==null&&(y=Fn(dt));var yt=a.getDerivedStateFromProps;dt=typeof yt=="function"||typeof h.getSnapshotBeforeUpdate=="function",D=n.pendingProps!==D,dt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(D||et!==y)&&K0(n,h,o,y),Za=!1;var st=n.memoizedState;h.state=st,Vo(n,o,h,u),Go(),et=n.memoizedState,D||st!==et||Za?(typeof yt=="function"&&($f(n,a,yt,o),et=n.memoizedState),(V=Za||Z0(n,a,V,o,st,et,y))?(dt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),h.props=o,h.state=et,h.context=y,o=V):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Df(e,n),y=n.memoizedProps,dt=Ys(a,y),h.props=dt,yt=n.pendingProps,st=h.context,et=a.contextType,V=gr,typeof et=="object"&&et!==null&&(V=Fn(et)),D=a.getDerivedStateFromProps,(et=typeof D=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==yt||st!==V)&&K0(n,h,o,V),Za=!1,st=n.memoizedState,h.state=st,Vo(n,o,h,u),Go();var ut=n.memoizedState;y!==yt||st!==ut||Za||e!==null&&e.dependencies!==null&&$l(e.dependencies)?(typeof D=="function"&&($f(n,a,D,o),ut=n.memoizedState),(dt=Za||Z0(n,a,dt,o,st,ut,V)||e!==null&&e.dependencies!==null&&$l(e.dependencies))?(et||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ut,V),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ut,V)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),h.props=o,h.state=ut,h.context=V,o=dt):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,vc(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=ks(n,e.child,null,u),n.child=ks(n,null,a,u)):Bn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=ma(e,n,u),e}function fg(e,n,a,o){return zs(),n.flags|=256,Bn(e,n,a,o),n.child}var ah={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sh(e){return{baseLanes:e,cachePool:t0()}}function rh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=gi),e}function hg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(_n.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(u?Ja(n):$a(),(e=tn)?(e=y_(e,wi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:Xi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=Ym(e),a.return=n,n.child=a,zn=n,tn=null)):e=null,e===null)throw qa(n);return Vh(e)?n.lanes=32:n.lanes=536870912,null}var D=o.children;return o=o.fallback,u?($a(),u=n.mode,D=xc({mode:"hidden",children:D},u),o=Is(o,u,a,null),D.return=n,o.return=n,D.sibling=o,n.child=D,o=n.child,o.memoizedState=sh(a),o.childLanes=rh(e,y,a),n.memoizedState=ah,qo(null,o)):(Ja(n),oh(n,D))}var V=e.memoizedState;if(V!==null&&(D=V.dehydrated,D!==null)){if(h)n.flags&256?(Ja(n),n.flags&=-257,n=lh(e,n,a)):n.memoizedState!==null?($a(),n.child=e.child,n.flags|=128,n=null):($a(),D=o.fallback,u=n.mode,o=xc({mode:"visible",children:o.children},u),D=Is(D,u,a,null),D.flags|=2,o.return=n,D.return=n,o.sibling=D,n.child=o,ks(n,e.child,null,a),o=n.child,o.memoizedState=sh(a),o.childLanes=rh(e,y,a),n.memoizedState=ah,n=qo(null,o));else if(Ja(n),Vh(D)){if(y=D.nextSibling&&D.nextSibling.dataset,y)var et=y.dgst;y=et,o=Error(s(419)),o.stack="",o.digest=y,Oo({value:o,source:null,stack:null}),n=lh(e,n,a)}else if(bn||yr(e,n,a,!1),y=(a&e.childLanes)!==0,bn||y){if(y=Qe,y!==null&&(o=li(y,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,Os(e,o),si(y,e,o),nh;Gh(D)||Rc(),n=lh(e,n,a)}else Gh(D)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,tn=Ci(D.nextSibling),zn=n,Ae=!0,Wa=null,wi=!1,e!==null&&jm(n,e),n=oh(n,o.children),n.flags|=4096);return n}return u?($a(),D=o.fallback,u=n.mode,V=e.child,et=V.sibling,o=ca(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,et!==null?D=ca(et,D):(D=Is(D,u,a,null),D.flags|=2),D.return=n,o.return=n,o.sibling=D,n.child=o,qo(null,o),o=n.child,D=e.child.memoizedState,D===null?D=sh(a):(u=D.cachePool,u!==null?(V=Sn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=t0(),D={baseLanes:D.baseLanes|a,cachePool:u}),o.memoizedState=D,o.childLanes=rh(e,y,a),n.memoizedState=ah,qo(e.child,o)):(Ja(n),a=e.child,e=a.sibling,a=ca(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function oh(e,n){return n=xc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function xc(e,n){return e=hi(22,e,null,n),e.lanes=0,e}function lh(e,n,a){return ks(n,e.child,null,a),e=oh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function dg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),bf(e.return,n,a)}function ch(e,n,a,o,u,h){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=h)}function pg(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var y=_n.current,D=(y&2)!==0;if(D?(y=y&1|2,n.flags|=128):y&=1,vt(_n,y),Bn(e,n,o,a),o=Ae?Po:0,!D&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dg(e,a,n);else if(e.tag===19)dg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&oc(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),ch(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&oc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}ch(n,!0,a,null,h,o);break;case"together":ch(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ma(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ns|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(yr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ca(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ca(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function uh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&$l(e)))}function vS(e,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),ja(n,Sn,e.memoizedState.cache),zs();break;case 27:case 5:ee(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:ja(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Of(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ja(n),n.flags|=128,null):(a&n.child.childLanes)!==0?hg(e,n,a):(Ja(n),e=ma(e,n,a),e!==null?e.sibling:null);Ja(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(yr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return pg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),vt(_n,_n.current),o)break;return null;case 22:return n.lanes=0,rg(e,n,a,n.pendingProps);case 24:ja(n,Sn,e.memoizedState.cache)}return ma(e,n,a)}function mg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)bn=!0;else{if(!uh(e,a)&&(n.flags&128)===0)return bn=!1,vS(e,n,a);bn=(e.flags&131072)!==0}else bn=!1,Ae&&(n.flags&1048576)!==0&&qm(n,Po,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Gs(n.elementType),n.type=e,typeof e=="function")mf(e)?(o=Ys(e,o),n.tag=1,n=ug(null,n,e,o,a)):(n.tag=0,n=ih(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=ig(null,n,e,o,a);break t}else if(u===O){n.tag=14,n=ag(null,n,e,o,a);break t}}throw n=ot(e)||e,Error(s(306,n,""))}}return n;case 0:return ih(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ys(o,n.pendingProps),ug(e,n,o,u,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Df(e,n),Vo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,ja(n,Sn,o),o!==h.cache&&Ef(n,[Sn],a,!0),Go(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=fg(e,n,o,a);break t}else if(o!==u){u=Ei(Error(s(424)),n),Oo(u),n=fg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=Ci(e.firstChild),zn=n,Ae=!0,Wa=null,wi=!0,a=r0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(zs(),o===u){n=ma(e,n,a);break t}Bn(e,n,o,a)}n=n.child}return n;case 26:return vc(e,n),e===null?(a=A_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=Oc(lt.current).createElement(a),o[gn]=n,o[In]=e,Hn(o,a,e),yn(o),n.stateNode=o):n.memoizedState=A_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ee(n),e===null&&Ae&&(o=n.stateNode=b_(n.type,n.pendingProps,lt.current),zn=n,wi=!0,u=tn,os(n.type)?(kh=u,tn=Ci(o.firstChild)):tn=u),Bn(e,n,n.pendingProps.children,a),vc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((u=o=tn)&&(o=jS(o,n.type,n.pendingProps,wi),o!==null?(n.stateNode=o,zn=n,tn=Ci(o.firstChild),wi=!1,u=!0):u=!1),u||qa(n)),ee(n),u=n.type,h=n.pendingProps,y=e!==null?e.memoizedProps:null,o=h.children,Fh(u,h)?o=null:y!==null&&Fh(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=zf(e,n,cS,null,null,a),ll._currentValue=u),vc(e,n),Bn(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=tn)&&(a=ZS(a,n.pendingProps,wi),a!==null?(n.stateNode=a,zn=n,tn=null,e=!0):e=!1),e||qa(n)),null;case 13:return hg(e,n,a);case 4:return Tt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ks(n,null,o,a):Bn(e,n,o,a),n.child;case 11:return ig(e,n,n.type,n.pendingProps,a);case 7:return Bn(e,n,n.pendingProps,a),n.child;case 8:return Bn(e,n,n.pendingProps.children,a),n.child;case 12:return Bn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ja(n,n.type,o.value),Bn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Bs(n),u=Fn(u),o=o(u),n.flags|=1,Bn(e,n,o,a),n.child;case 14:return ag(e,n,n.type,n.pendingProps,a);case 15:return sg(e,n,n.type,n.pendingProps,a);case 19:return pg(e,n,a);case 31:return _S(e,n,a);case 22:return rg(e,n,a,n.pendingProps);case 24:return Bs(n),o=Fn(Sn),e===null?(u=wf(),u===null&&(u=Qe,h=Tf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Cf(n),ja(n,Sn,u)):((e.lanes&a)!==0&&(Df(e,n),Vo(n,null,null,a),Go()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ja(n,Sn,o)):(o=h.cache,ja(n,Sn,o),o!==u.cache&&Ef(n,[Sn],a,!0))),Bn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ga(e){e.flags|=4}function fh(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Vg())e.flags|=8192;else throw Vs=ic,Rf}else e.flags&=-16777217}function gg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!U_(n))if(Vg())e.flags|=8192;else throw Vs=ic,Rf}function yc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Mt():536870912,e.lanes|=n,Lr|=n)}function jo(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function en(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function xS(e,n,a){var o=n.pendingProps;switch(xf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ha(Sn),Gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(xr(n)?ga(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Sf())),en(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(ga(n),h!==null?(en(n),gg(n,h)):(en(n),fh(n,u,null,o,a))):h?h!==e.memoizedState?(ga(n),en(n),gg(n,h)):(en(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ga(n),en(n),fh(n,u,e,o,a)),null;case 27:if(Jt(n),a=lt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}e=Et.current,xr(n)?Zm(n):(e=b_(u,o,a),n.stateNode=e,ga(n))}return en(n),null;case 5:if(Jt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}if(h=Et.current,xr(n))Zm(n);else{var y=Oc(lt.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}h[gn]=n,h[In]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=h;t:switch(Hn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ga(n)}}return en(n),fh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ga(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=lt.current,xr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=zn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[gn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||h_(e.nodeValue,a)),e||qa(n,!0)}else e=Oc(e).createTextNode(o),e[gn]=n,n.stateNode=e}return en(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=xr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[gn]=n}else zs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),e=!1}else a=Sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(pi(n),n):(pi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return en(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=xr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[gn]=n}else zs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=Sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(pi(n),n):(pi(n),null)}return pi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),yc(n,n.updateQueue),en(n),null);case 4:return Gt(),e===null&&Nh(n.stateNode.containerInfo),en(n),null;case 10:return ha(n.type),en(n),null;case 19:if(Q(_n),o=n.memoizedState,o===null)return en(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)jo(o,!1);else{if(dn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=oc(e),h!==null){for(n.flags|=128,jo(o,!1),e=h.updateQueue,n.updateQueue=e,yc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Xm(a,e),a=a.sibling;return vt(_n,_n.current&1|2),Ae&&ua(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&wt()>Tc&&(n.flags|=128,u=!0,jo(o,!1),n.lanes=4194304)}else{if(!u)if(e=oc(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,yc(n,e),jo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ae)return en(n),null}else 2*wt()-o.renderingStartTime>Tc&&a!==536870912&&(n.flags|=128,u=!0,jo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=wt(),e.sibling=null,a=_n.current,vt(_n,u?a&1|2:a&1),Ae&&ua(n,o.treeForkCount),e):(en(n),null);case 22:case 23:return pi(n),Pf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&yc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Q(Hs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ha(Sn),en(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function yS(e,n){switch(xf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ha(Sn),Gt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Jt(n),null;case 31:if(n.memoizedState!==null){if(pi(n),n.alternate===null)throw Error(s(340));zs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(pi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));zs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Q(_n),null;case 4:return Gt(),null;case 10:return ha(n.type),null;case 22:case 23:return pi(n),Pf(),e!==null&&Q(Hs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ha(Sn),null;case 25:return null;default:return null}}function _g(e,n){switch(xf(n),n.tag){case 3:ha(Sn),Gt();break;case 26:case 27:case 5:Jt(n);break;case 4:Gt();break;case 31:n.memoizedState!==null&&pi(n);break;case 13:pi(n);break;case 19:Q(_n);break;case 10:ha(n.type);break;case 22:case 23:pi(n),Pf(),e!==null&&Q(Hs);break;case 24:ha(Sn)}}function Zo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,y=a.inst;o=h(),y.destroy=o}a=a.next}while(a!==u)}}catch(D){Ge(n,n.return,D)}}function ts(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var y=o.inst,D=y.destroy;if(D!==void 0){y.destroy=void 0,u=n;var V=a,et=D;try{et()}catch(dt){Ge(u,V,dt)}}}o=o.next}while(o!==h)}}catch(dt){Ge(n,n.return,dt)}}function vg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{l0(n,a)}catch(o){Ge(e,e.return,o)}}}function xg(e,n,a){a.props=Ys(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function Ko(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function Wi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function yg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function hh(e,n,a){try{var o=e.stateNode;VS(o,e.type,a,n),o[In]=n}catch(u){Ge(e,e.return,u)}}function Sg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&os(e.type)||e.tag===4}function dh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Sg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&os(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ph(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=oa));else if(o!==4&&(o===27&&os(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ph(e,n,a),e=e.sibling;e!==null;)ph(e,n,a),e=e.sibling}function Sc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&os(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Sc(e,n,a),e=e.sibling;e!==null;)Sc(e,n,a),e=e.sibling}function Mg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Hn(n,o,a),n[gn]=e,n[In]=a}catch(h){Ge(e,e.return,h)}}var _a=!1,En=!1,mh=!1,bg=typeof WeakSet=="function"?WeakSet:Set,Ln=null;function SS(e,n){if(e=e.containerInfo,Ih=Vc,e=Om(e),lf(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var y=0,D=-1,V=-1,et=0,dt=0,yt=e,st=null;e:for(;;){for(var ut;yt!==a||u!==0&&yt.nodeType!==3||(D=y+u),yt!==h||o!==0&&yt.nodeType!==3||(V=y+o),yt.nodeType===3&&(y+=yt.nodeValue.length),(ut=yt.firstChild)!==null;)st=yt,yt=ut;for(;;){if(yt===e)break e;if(st===a&&++et===u&&(D=y),st===h&&++dt===o&&(V=y),(ut=yt.nextSibling)!==null)break;yt=st,st=yt.parentNode}yt=ut}a=D===-1||V===-1?null:{start:D,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(zh={focusedElem:e,selectionRange:a},Vc=!1,Ln=n;Ln!==null;)if(n=Ln,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Ln=e;else for(;Ln!==null;){switch(n=Ln,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Wt=Ys(a.type,u);e=o.getSnapshotBeforeUpdate(Wt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){Ge(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Hh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Ln=e;break}Ln=n.return}}function Eg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:xa(e,a),o&4&&Zo(5,a);break;case 1:if(xa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Ge(a,a.return,y)}else{var u=Ys(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ge(a,a.return,y)}}o&64&&vg(a),o&512&&Ko(a,a.return);break;case 3:if(xa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{l0(e,n)}catch(y){Ge(a,a.return,y)}}break;case 27:n===null&&o&4&&Mg(a);case 26:case 5:xa(e,a),n===null&&o&4&&yg(a),o&512&&Ko(a,a.return);break;case 12:xa(e,a);break;case 31:xa(e,a),o&4&&wg(e,a);break;case 13:xa(e,a),o&4&&Rg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=DS.bind(null,a),KS(e,a))));break;case 22:if(o=a.memoizedState!==null||_a,!o){n=n!==null&&n.memoizedState!==null||En,u=_a;var h=En;_a=o,(En=n)&&!h?ya(e,a,(a.subtreeFlags&8772)!==0):xa(e,a),_a=u,En=h}break;case 30:break;default:xa(e,a)}}function Tg(e){var n=e.alternate;n!==null&&(e.alternate=null,Tg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Eo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ln=null,ei=!1;function va(e,n,a){for(a=a.child;a!==null;)Ag(e,n,a),a=a.sibling}function Ag(e,n,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:En||Wi(a,n),va(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:En||Wi(a,n);var o=ln,u=ei;os(a.type)&&(ln=a.stateNode,ei=!1),va(e,n,a),sl(a.stateNode),ln=o,ei=u;break;case 5:En||Wi(a,n);case 6:if(o=ln,u=ei,ln=null,va(e,n,a),ln=o,ei=u,ln!==null)if(ei)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(a.stateNode)}catch(h){Ge(a,n,h)}else try{ln.removeChild(a.stateNode)}catch(h){Ge(a,n,h)}break;case 18:ln!==null&&(ei?(e=ln,v_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Hr(e)):v_(ln,a.stateNode));break;case 4:o=ln,u=ei,ln=a.stateNode.containerInfo,ei=!0,va(e,n,a),ln=o,ei=u;break;case 0:case 11:case 14:case 15:ts(2,a,n),En||ts(4,a,n),va(e,n,a);break;case 1:En||(Wi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&xg(a,n,o)),va(e,n,a);break;case 21:va(e,n,a);break;case 22:En=(o=En)||a.memoizedState!==null,va(e,n,a),En=o;break;default:va(e,n,a)}}function wg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hr(e)}catch(a){Ge(n,n.return,a)}}}function Rg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hr(e)}catch(a){Ge(n,n.return,a)}}function MS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new bg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new bg),n;default:throw Error(s(435,e.tag))}}function Mc(e,n){var a=MS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=US.bind(null,e,o);o.then(u,u)}})}function ni(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,y=n,D=y;t:for(;D!==null;){switch(D.tag){case 27:if(os(D.type)){ln=D.stateNode,ei=!1;break t}break;case 5:ln=D.stateNode,ei=!1;break t;case 3:case 4:ln=D.stateNode.containerInfo,ei=!0;break t}D=D.return}if(ln===null)throw Error(s(160));Ag(h,y,u),ln=null,ei=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Cg(n,e),n=n.sibling}var Ii=null;function Cg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ni(n,e),ii(e),o&4&&(ts(3,e,e.return),Zo(3,e),ts(5,e,e.return));break;case 1:ni(n,e),ii(e),o&512&&(En||a===null||Wi(a,a.return)),o&64&&_a&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ii;if(ni(n,e),ii(e),o&512&&(En||a===null||Wi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Ba]||h[gn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Hn(h,o,a),h[gn]=e,yn(h),o=h;break t;case"link":var y=C_("link","href",u).get(o+(a.href||""));if(y){for(var D=0;D<y.length;D++)if(h=y[D],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(D,1);break e}}h=u.createElement(o),Hn(h,o,a),u.head.appendChild(h);break;case"meta":if(y=C_("meta","content",u).get(o+(a.content||""))){for(D=0;D<y.length;D++)if(h=y[D],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(D,1);break e}}h=u.createElement(o),Hn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[gn]=e,yn(h),o=h}e.stateNode=o}else D_(u,e.type,e.stateNode);else e.stateNode=R_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?D_(u,e.type,e.stateNode):R_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&hh(e,e.memoizedProps,a.memoizedProps)}break;case 27:ni(n,e),ii(e),o&512&&(En||a===null||Wi(a,a.return)),a!==null&&o&4&&hh(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ni(n,e),ii(e),o&512&&(En||a===null||Wi(a,a.return)),e.flags&32){u=e.stateNode;try{ui(u,"")}catch(Wt){Ge(e,e.return,Wt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,hh(e,u,a!==null?a.memoizedProps:u)),o&1024&&(mh=!0);break;case 6:if(ni(n,e),ii(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Wt){Ge(e,e.return,Wt)}}break;case 3:if(Fc=null,u=Ii,Ii=Ic(n.containerInfo),ni(n,e),Ii=u,ii(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Hr(n.containerInfo)}catch(Wt){Ge(e,e.return,Wt)}mh&&(mh=!1,Dg(e));break;case 4:o=Ii,Ii=Ic(e.stateNode.containerInfo),ni(n,e),ii(e),Ii=o;break;case 12:ni(n,e),ii(e);break;case 31:ni(n,e),ii(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Mc(e,o)));break;case 13:ni(n,e),ii(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ec=wt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Mc(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,et=_a,dt=En;if(_a=et||u,En=dt||V,ni(n,e),En=dt,_a=et,ii(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||_a||En||Ws(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(h=V.stateNode,u)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{D=V.stateNode;var yt=V.memoizedProps.style,st=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;D.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Wt){Ge(V,V.return,Wt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(Wt){Ge(V,V.return,Wt)}}}else if(n.tag===18){if(a===null){V=n;try{var ut=V.stateNode;u?x_(ut,!0):x_(V.stateNode,!1)}catch(Wt){Ge(V,V.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Mc(e,a))));break;case 19:ni(n,e),ii(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Mc(e,o)));break;case 30:break;case 21:break;default:ni(n,e),ii(e)}}function ii(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Sg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=dh(e);Sc(e,h,u);break;case 5:var y=a.stateNode;a.flags&32&&(ui(y,""),a.flags&=-33);var D=dh(e);Sc(e,D,y);break;case 3:case 4:var V=a.stateNode.containerInfo,et=dh(e);ph(e,et,V);break;default:throw Error(s(161))}}catch(dt){Ge(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Dg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Dg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function xa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Eg(e,n.alternate,n),n=n.sibling}function Ws(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ts(4,n,n.return),Ws(n);break;case 1:Wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&xg(n,n.return,a),Ws(n);break;case 27:sl(n.stateNode);case 26:case 5:Wi(n,n.return),Ws(n);break;case 22:n.memoizedState===null&&Ws(n);break;case 30:Ws(n);break;default:Ws(n)}e=e.sibling}}function ya(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:ya(u,h,a),Zo(4,h);break;case 1:if(ya(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Ge(o,o.return,et)}if(o=h,u=o.updateQueue,u!==null){var D=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)o0(V[u],D)}catch(et){Ge(o,o.return,et)}}a&&y&64&&vg(h),Ko(h,h.return);break;case 27:Mg(h);case 26:case 5:ya(u,h,a),a&&o===null&&y&4&&yg(h),Ko(h,h.return);break;case 12:ya(u,h,a);break;case 31:ya(u,h,a),a&&y&4&&wg(u,h);break;case 13:ya(u,h,a),a&&y&4&&Rg(u,h);break;case 22:h.memoizedState===null&&ya(u,h,a),Ko(h,h.return);break;case 30:break;default:ya(u,h,a)}n=n.sibling}}function gh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Io(a))}function _h(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Io(e))}function zi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ug(e,n,a,o),n=n.sibling}function Ug(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:zi(e,n,a,o),u&2048&&Zo(9,n);break;case 1:zi(e,n,a,o);break;case 3:zi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Io(e)));break;case 12:if(u&2048){zi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,y=h.id,D=h.onPostCommit;typeof D=="function"&&D(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Ge(n,n.return,V)}}else zi(e,n,a,o);break;case 31:zi(e,n,a,o);break;case 13:zi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?zi(e,n,a,o):Qo(e,n):h._visibility&2?zi(e,n,a,o):(h._visibility|=2,Cr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&gh(y,n);break;case 24:zi(e,n,a,o),u&2048&&_h(n.alternate,n);break;default:zi(e,n,a,o)}}function Cr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,y=n,D=a,V=o,et=y.flags;switch(y.tag){case 0:case 11:case 15:Cr(h,y,D,V,u),Zo(8,y);break;case 23:break;case 22:var dt=y.stateNode;y.memoizedState!==null?dt._visibility&2?Cr(h,y,D,V,u):Qo(h,y):(dt._visibility|=2,Cr(h,y,D,V,u)),u&&et&2048&&gh(y.alternate,y);break;case 24:Cr(h,y,D,V,u),u&&et&2048&&_h(y.alternate,y);break;default:Cr(h,y,D,V,u)}n=n.sibling}}function Qo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Qo(a,o),u&2048&&gh(o.alternate,o);break;case 24:Qo(a,o),u&2048&&_h(o.alternate,o);break;default:Qo(a,o)}n=n.sibling}}var Jo=8192;function Dr(e,n,a){if(e.subtreeFlags&Jo)for(e=e.child;e!==null;)Lg(e,n,a),e=e.sibling}function Lg(e,n,a){switch(e.tag){case 26:Dr(e,n,a),e.flags&Jo&&e.memoizedState!==null&&lM(a,Ii,e.memoizedState,e.memoizedProps);break;case 5:Dr(e,n,a);break;case 3:case 4:var o=Ii;Ii=Ic(e.stateNode.containerInfo),Dr(e,n,a),Ii=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Jo,Jo=16777216,Dr(e,n,a),Jo=o):Dr(e,n,a));break;default:Dr(e,n,a)}}function Ng(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function $o(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Ln=o,Og(o,e)}Ng(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pg(e),e=e.sibling}function Pg(e){switch(e.tag){case 0:case 11:case 15:$o(e),e.flags&2048&&ts(9,e,e.return);break;case 3:$o(e);break;case 12:$o(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,bc(e)):$o(e);break;default:$o(e)}}function bc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Ln=o,Og(o,e)}Ng(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ts(8,n,n.return),bc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bc(n));break;default:bc(n)}e=e.sibling}}function Og(e,n){for(;Ln!==null;){var a=Ln;switch(a.tag){case 0:case 11:case 15:ts(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Io(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Ln=o;else t:for(a=e;Ln!==null;){o=Ln;var u=o.sibling,h=o.return;if(Tg(o),o===a){Ln=null;break t}if(u!==null){u.return=h,Ln=u;break t}Ln=h}}}var bS={getCacheForType:function(e){var n=Fn(Sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Fn(Sn).controller.signal}},ES=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Qe=null,ye=null,Ee=0,He=0,mi=null,es=!1,Ur=!1,vh=!1,Sa=0,dn=0,ns=0,qs=0,xh=0,gi=0,Lr=0,tl=null,ai=null,yh=!1,Ec=0,Ig=0,Tc=1/0,Ac=null,is=null,wn=0,as=null,Nr=null,Ma=0,Sh=0,Mh=null,zg=null,el=0,bh=null;function _i(){return(Pe&2)!==0&&Ee!==0?Ee&-Ee:z.T!==null?Ch():So()}function Fg(){if(gi===0)if((Ee&536870912)===0||Ae){var e=ve;ve<<=1,(ve&3932160)===0&&(ve=262144),gi=e}else gi=536870912;return e=di.current,e!==null&&(e.flags|=32),gi}function si(e,n,a){(e===Qe&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(Pr(e,0),ss(e,Ee,gi,!1)),ne(e,a),((Pe&2)===0||e!==Qe)&&(e===Qe&&((Pe&2)===0&&(qs|=a),dn===4&&ss(e,Ee,gi,!1)),qi(e))}function Bg(e,n,a){if((Pe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Bt(e,n),u=o?wS(e,n):Th(e,n,!0),h=o;do{if(u===0){Ur&&!o&&ss(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!TS(a)){u=Th(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var D=e;u=tl;var V=D.current.memoizedState.isDehydrated;if(V&&(Pr(D,y).flags|=256),y=Th(D,y,!1),y!==2){if(vh&&!V){D.errorRecoveryDisabledLanes|=h,qs|=h,u=4;break t}h=ai,ai=u,h!==null&&(ai===null?ai=h:ai.push.apply(ai,h))}u=y}if(h=!1,u!==2)continue}}if(u===1){Pr(e,0),ss(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ss(o,n,gi,!es);break t;case 2:ai=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ec+300-wt(),10<u)){if(ss(o,n,gi,!es),pt(o,0,!0)!==0)break t;Ma=n,o.timeoutHandle=g_(Hg.bind(null,o,a,ai,Ac,yh,n,gi,qs,Lr,es,h,"Throttled",-0,0),u);break t}Hg(o,a,ai,Ac,yh,n,gi,qs,Lr,es,h,null,-0,0)}}break}while(!0);qi(e)}function Hg(e,n,a,o,u,h,y,D,V,et,dt,yt,st,ut){if(e.timeoutHandle=-1,yt=n.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},Lg(n,h,yt);var Wt=(h&62914560)===h?Ec-wt():(h&4194048)===h?Ig-wt():0;if(Wt=cM(yt,Wt),Wt!==null){Ma=h,e.cancelPendingCommit=Wt(jg.bind(null,e,n,h,a,o,u,y,D,V,dt,yt,null,st,ut)),ss(e,h,y,!et);return}}jg(e,n,h,a,o,u,y,D,V)}function TS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!fi(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ss(e,n,a,o){n&=~xh,n&=~qs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-It(u),y=1<<h;o[h]=-1,u&=~y}a!==0&&Ne(e,a,n)}function wc(){return(Pe&6)===0?(nl(0),!1):!0}function Eh(){if(ye!==null){if(He===0)var e=ye.return;else e=ye,fa=Fs=null,Hf(e),Er=null,Fo=0,e=ye;for(;e!==null;)_g(e.alternate,e),e=e.return;ye=null}}function Pr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,YS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ma=0,Eh(),Qe=e,ye=a=ca(e.current,null),Ee=n,He=0,mi=null,es=!1,Ur=Bt(e,n),vh=!1,Lr=gi=xh=qs=ns=dn=0,ai=tl=null,yh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-It(o),h=1<<u;n|=e[u],o&=~h}return Sa=n,jl(),a}function Gg(e,n){ce=null,z.H=Wo,n===br||n===nc?(n=i0(),He=3):n===Rf?(n=i0(),He=4):He=n===nh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,mi=n,ye===null&&(dn=1,gc(e,Ei(n,e.current)))}function Vg(){var e=di.current;return e===null?!0:(Ee&4194048)===Ee?Ri===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?e===Ri:!1}function kg(){var e=z.H;return z.H=Wo,e===null?Wo:e}function Xg(){var e=z.A;return z.A=bS,e}function Rc(){dn=4,es||(Ee&4194048)!==Ee&&di.current!==null||(Ur=!0),(ns&134217727)===0&&(qs&134217727)===0||Qe===null||ss(Qe,Ee,gi,!1)}function Th(e,n,a){var o=Pe;Pe|=2;var u=kg(),h=Xg();(Qe!==e||Ee!==n)&&(Ac=null,Pr(e,n)),n=!1;var y=dn;t:do try{if(He!==0&&ye!==null){var D=ye,V=mi;switch(He){case 8:Eh(),y=6;break t;case 3:case 2:case 9:case 6:di.current===null&&(n=!0);var et=He;if(He=0,mi=null,Or(e,D,V,et),a&&Ur){y=0;break t}break;default:et=He,He=0,mi=null,Or(e,D,V,et)}}AS(),y=dn;break}catch(dt){Gg(e,dt)}while(!0);return n&&e.shellSuspendCounter++,fa=Fs=null,Pe=o,z.H=u,z.A=h,ye===null&&(Qe=null,Ee=0,jl()),y}function AS(){for(;ye!==null;)Yg(ye)}function wS(e,n){var a=Pe;Pe|=2;var o=kg(),u=Xg();Qe!==e||Ee!==n?(Ac=null,Tc=wt()+500,Pr(e,n)):Ur=Bt(e,n);t:do try{if(He!==0&&ye!==null){n=ye;var h=mi;e:switch(He){case 1:He=0,mi=null,Or(e,n,h,1);break;case 2:case 9:if(e0(h)){He=0,mi=null,Wg(n);break}n=function(){He!==2&&He!==9||Qe!==e||(He=7),qi(e)},h.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:e0(h)?(He=0,mi=null,Wg(n)):(He=0,mi=null,Or(e,n,h,7));break;case 5:var y=null;switch(ye.tag){case 26:y=ye.memoizedState;case 5:case 27:var D=ye;if(y?U_(y):D.stateNode.complete){He=0,mi=null;var V=D.sibling;if(V!==null)ye=V;else{var et=D.return;et!==null?(ye=et,Cc(et)):ye=null}break e}}He=0,mi=null,Or(e,n,h,5);break;case 6:He=0,mi=null,Or(e,n,h,6);break;case 8:Eh(),dn=6;break t;default:throw Error(s(462))}}RS();break}catch(dt){Gg(e,dt)}while(!0);return fa=Fs=null,z.H=o,z.A=u,Pe=a,ye!==null?0:(Qe=null,Ee=0,jl(),dn)}function RS(){for(;ye!==null&&!ge();)Yg(ye)}function Yg(e){var n=mg(e.alternate,e,Sa);e.memoizedProps=e.pendingProps,n===null?Cc(e):ye=n}function Wg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=cg(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=cg(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:Hf(n);default:_g(a,n),n=ye=Xm(n,Sa),n=mg(a,n,Sa)}e.memoizedProps=e.pendingProps,n===null?Cc(e):ye=n}function Or(e,n,a,o){fa=Fs=null,Hf(n),Er=null,Fo=0;var u=n.return;try{if(gS(e,u,n,a,Ee)){dn=1,gc(e,Ei(a,e.current)),ye=null;return}}catch(h){if(u!==null)throw ye=u,h;dn=1,gc(e,Ei(a,e.current)),ye=null;return}n.flags&32768?(Ae||o===1?e=!0:Ur||(Ee&536870912)!==0?e=!1:(es=e=!0,(o===2||o===9||o===3||o===6)&&(o=di.current,o!==null&&o.tag===13&&(o.flags|=16384))),qg(n,e)):Cc(n)}function Cc(e){var n=e;do{if((n.flags&32768)!==0){qg(n,es);return}e=n.return;var a=xS(n.alternate,n,Sa);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);dn===0&&(dn=5)}function qg(e,n){do{var a=yS(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);dn=6,ye=null}function jg(e,n,a,o,u,h,y,D,V){e.cancelPendingCommit=null;do Dc();while(wn!==0);if((Pe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=df,fn(e,a,h,y,D,V),e===Qe&&(ye=Qe=null,Ee=0),Nr=n,as=e,Ma=a,Sh=h,Mh=u,zg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,LS(J,function(){return $g(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=B.p,B.p=2,y=Pe,Pe|=4;try{SS(e,n,a)}finally{Pe=y,B.p=u,z.T=o}}wn=1,Zg(),Kg(),Qg()}}function Zg(){if(wn===1){wn=0;var e=as,n=Nr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=B.p;B.p=2;var u=Pe;Pe|=4;try{Cg(n,e);var h=zh,y=Om(e.containerInfo),D=h.focusedElem,V=h.selectionRange;if(y!==D&&D&&D.ownerDocument&&Pm(D.ownerDocument.documentElement,D)){if(V!==null&&lf(D)){var et=V.start,dt=V.end;if(dt===void 0&&(dt=et),"selectionStart"in D)D.selectionStart=et,D.selectionEnd=Math.min(dt,D.value.length);else{var yt=D.ownerDocument||document,st=yt&&yt.defaultView||window;if(st.getSelection){var ut=st.getSelection(),Wt=D.textContent.length,$t=Math.min(V.start,Wt),We=V.end===void 0?$t:Math.min(V.end,Wt);!ut.extend&&$t>We&&(y=We,We=$t,$t=y);var K=Nm(D,$t),q=Nm(D,We);if(K&&q&&(ut.rangeCount!==1||ut.anchorNode!==K.node||ut.anchorOffset!==K.offset||ut.focusNode!==q.node||ut.focusOffset!==q.offset)){var tt=yt.createRange();tt.setStart(K.node,K.offset),ut.removeAllRanges(),$t>We?(ut.addRange(tt),ut.extend(q.node,q.offset)):(tt.setEnd(q.node,q.offset),ut.addRange(tt))}}}}for(yt=[],ut=D;ut=ut.parentNode;)ut.nodeType===1&&yt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<yt.length;D++){var gt=yt[D];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Vc=!!Ih,zh=Ih=null}finally{Pe=u,B.p=o,z.T=a}}e.current=n,wn=2}}function Kg(){if(wn===2){wn=0;var e=as,n=Nr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=B.p;B.p=2;var u=Pe;Pe|=4;try{Eg(e,n.alternate,n)}finally{Pe=u,B.p=o,z.T=a}}wn=3}}function Qg(){if(wn===4||wn===3){wn=0,ke();var e=as,n=Nr,a=Ma,o=zg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?wn=5:(wn=0,Nr=as=null,Jg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(is=null),yo(a),n=n.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=B.p,B.p=2,z.T=null;try{for(var h=e.onRecoverableError,y=0;y<o.length;y++){var D=o[y];h(D.value,{componentStack:D.stack})}}finally{z.T=n,B.p=u}}(Ma&3)!==0&&Dc(),qi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===bh?el++:(el=0,bh=e):el=0,nl(0)}}function Jg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Io(n)))}function Dc(){return Zg(),Kg(),Qg(),$g()}function $g(){if(wn!==5)return!1;var e=as,n=Sh;Sh=0;var a=yo(Ma),o=z.T,u=B.p;try{B.p=32>a?32:a,z.T=null,a=Mh,Mh=null;var h=as,y=Ma;if(wn=0,Nr=as=null,Ma=0,(Pe&6)!==0)throw Error(s(331));var D=Pe;if(Pe|=4,Pg(h.current),Ug(h,h.current,y,a),Pe=D,nl(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ft,h)}catch{}return!0}finally{B.p=u,z.T=o,Jg(e,n)}}function t_(e,n,a){n=Ei(a,n),n=eh(e.stateNode,n,2),e=Qa(e,n,2),e!==null&&(ne(e,2),qi(e))}function Ge(e,n,a){if(e.tag===3)t_(e,e,a);else for(;n!==null;){if(n.tag===3){t_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(is===null||!is.has(o))){e=Ei(a,e),a=eg(2),o=Qa(n,a,2),o!==null&&(ng(a,o,n,e),ne(o,2),qi(o));break}}n=n.return}}function Ah(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new ES;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(vh=!0,u.add(a),e=CS.bind(null,e,n,a),n.then(e,e))}function CS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Qe===e&&(Ee&a)===a&&(dn===4||dn===3&&(Ee&62914560)===Ee&&300>wt()-Ec?(Pe&2)===0&&Pr(e,0):xh|=a,Lr===Ee&&(Lr=0)),qi(e)}function e_(e,n){n===0&&(n=Mt()),e=Os(e,n),e!==null&&(ne(e,n),qi(e))}function DS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),e_(e,a)}function US(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),e_(e,a)}function LS(e,n){return j(e,n)}var Uc=null,Ir=null,wh=!1,Lc=!1,Rh=!1,rs=0;function qi(e){e!==Ir&&e.next===null&&(Ir===null?Uc=Ir=e:Ir=Ir.next=e),Lc=!0,wh||(wh=!0,PS())}function nl(e,n){if(!Rh&&Lc){Rh=!0;do for(var a=!1,o=Uc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var y=o.suspendedLanes,D=o.pingedLanes;h=(1<<31-It(42|e)+1)-1,h&=u&~(y&~D),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,s_(o,h))}else h=Ee,h=pt(o,o===Qe?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Bt(o,h)||(a=!0,s_(o,h));o=o.next}while(a);Rh=!1}}function NS(){n_()}function n_(){Lc=wh=!1;var e=0;rs!==0&&XS()&&(e=rs);for(var n=wt(),a=null,o=Uc;o!==null;){var u=o.next,h=i_(o,n);h===0?(o.next=null,a===null?Uc=u:a.next=u,u===null&&(Ir=a)):(a=o,(e!==0||(h&3)!==0)&&(Lc=!0)),o=u}wn!==0&&wn!==5||nl(e),rs!==0&&(rs=0)}function i_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var y=31-It(h),D=1<<y,V=u[y];V===-1?((D&a)===0||(D&o)!==0)&&(u[y]=Lt(D,n)):V<=n&&(e.expiredLanes|=D),h&=~D}if(n=Qe,a=Ee,a=pt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&un(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Bt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&un(o),yo(a)){case 2:case 8:a=E;break;case 32:a=J;break;case 268435456:a=bt;break;default:a=J}return o=a_.bind(null,e),a=j(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&un(o),e.callbackPriority=2,e.callbackNode=null,2}function a_(e,n){if(wn!==0&&wn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Dc()&&e.callbackNode!==a)return null;var o=Ee;return o=pt(e,e===Qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Bg(e,o,n),i_(e,wt()),e.callbackNode!=null&&e.callbackNode===a?a_.bind(null,e):null)}function s_(e,n){if(Dc())return null;Bg(e,n,!0)}function PS(){WS(function(){(Pe&6)!==0?j(P,NS):n_()})}function Ch(){if(rs===0){var e=Sr;e===0&&(e=se,se<<=1,(se&261888)===0&&(se=256)),rs=e}return rs}function r_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Us(""+e)}function o_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function OS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=r_((u[In]||null).action),y=o.submitter;y&&(n=(n=y[In]||null)?r_(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var D=new Xl("action","action",null,o,u);e.push({event:D,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(rs!==0){var V=y?o_(u,y):new FormData(u);Zf(a,{pending:!0,data:V,method:u.method,action:h},null,V)}}else typeof h=="function"&&(D.preventDefault(),V=y?o_(u,y):new FormData(u),Zf(a,{pending:!0,data:V,method:u.method,action:h},h,V))},currentTarget:u}]})}}for(var Dh=0;Dh<hf.length;Dh++){var Uh=hf[Dh],IS=Uh.toLowerCase(),zS=Uh[0].toUpperCase()+Uh.slice(1);Oi(IS,"on"+zS)}Oi(Fm,"onAnimationEnd"),Oi(Bm,"onAnimationIteration"),Oi(Hm,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi($y,"onTransitionRun"),Oi(tS,"onTransitionStart"),Oi(eS,"onTransitionCancel"),Oi(Gm,"onTransitionEnd"),at("onMouseEnter",["mouseout","mouseover"]),at("onMouseLeave",["mouseout","mouseover"]),at("onPointerEnter",["pointerout","pointerover"]),at("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function l_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var y=o.length-1;0<=y;y--){var D=o[y],V=D.instance,et=D.currentTarget;if(D=D.listener,V!==h&&u.isPropagationStopped())break t;h=D,u.currentTarget=et;try{h(u)}catch(dt){ql(dt)}u.currentTarget=null,h=V}else for(y=0;y<o.length;y++){if(D=o[y],V=D.instance,et=D.currentTarget,D=D.listener,V!==h&&u.isPropagationStopped())break t;h=D,u.currentTarget=et;try{h(u)}catch(dt){ql(dt)}u.currentTarget=null,h=V}}}}function Se(e,n){var a=n[Fa];a===void 0&&(a=n[Fa]=new Set);var o=e+"__bubble";a.has(o)||(c_(n,e,2,!1),a.add(o))}function Lh(e,n,a){var o=0;n&&(o|=4),c_(a,e,o,n)}var Nc="_reactListening"+Math.random().toString(36).slice(2);function Nh(e){if(!e[Nc]){e[Nc]=!0,Hl.forEach(function(a){a!=="selectionchange"&&(FS.has(a)||Lh(a,!1,e),Lh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Nc]||(n[Nc]=!0,Lh("selectionchange",!1,n))}}function c_(e,n,a,o){switch(F_(n)){case 2:var u=hM;break;case 8:u=dM;break;default:u=jh}a=u.bind(null,n,a,e),u=void 0,!Ju||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Ph(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var D=o.stateNode.containerInfo;if(D===u)break;if(y===4)for(y=o.return;y!==null;){var V=y.tag;if((V===3||V===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;D!==null;){if(y=Ha(D),y===null)return;if(V=y.tag,V===5||V===6||V===26||V===27){o=h=y;continue t}D=D.parentNode}}o=o.return}pm(function(){var et=h,dt=Ku(a),yt=[];t:{var st=Vm.get(e);if(st!==void 0){var ut=Xl,Wt=e;switch(e){case"keypress":if(Vl(a)===0)break t;case"keydown":case"keyup":ut=Uy;break;case"focusin":Wt="focus",ut=nf;break;case"focusout":Wt="blur",ut=nf;break;case"beforeblur":case"afterblur":ut=nf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=_m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=xy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Py;break;case Fm:case Bm:case Hm:ut=My;break;case Gm:ut=Iy;break;case"scroll":case"scrollend":ut=_y;break;case"wheel":ut=Fy;break;case"copy":case"cut":case"paste":ut=Ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=xm;break;case"toggle":case"beforetoggle":ut=Hy}var $t=(n&4)!==0,We=!$t&&(e==="scroll"||e==="scrollend"),K=$t?st!==null?st+"Capture":null:st;$t=[];for(var q=et,tt;q!==null;){var gt=q;if(tt=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||tt===null||K===null||(gt=To(q,K),gt!=null&&$t.push(al(q,gt,tt))),We)break;q=q.return}0<$t.length&&(st=new ut(st,Wt,null,a,dt),yt.push({event:st,listeners:$t}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",st&&a!==Zu&&(Wt=a.relatedTarget||a.fromElement)&&(Ha(Wt)||Wt[ra]))break t;if((ut||st)&&(st=dt.window===dt?dt:(st=dt.ownerDocument)?st.defaultView||st.parentWindow:window,ut?(Wt=a.relatedTarget||a.toElement,ut=et,Wt=Wt?Ha(Wt):null,Wt!==null&&(We=c(Wt),$t=Wt.tag,Wt!==We||$t!==5&&$t!==27&&$t!==6)&&(Wt=null)):(ut=null,Wt=et),ut!==Wt)){if($t=_m,gt="onMouseLeave",K="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&($t=xm,gt="onPointerLeave",K="onPointerEnter",q="pointer"),We=ut==null?st:Ds(ut),tt=Wt==null?st:Ds(Wt),st=new $t(gt,q+"leave",ut,a,dt),st.target=We,st.relatedTarget=tt,gt=null,Ha(dt)===et&&($t=new $t(K,q+"enter",Wt,a,dt),$t.target=tt,$t.relatedTarget=We,gt=$t),We=gt,ut&&Wt)e:{for($t=BS,K=ut,q=Wt,tt=0,gt=K;gt;gt=$t(gt))tt++;gt=0;for(var Qt=q;Qt;Qt=$t(Qt))gt++;for(;0<tt-gt;)K=$t(K),tt--;for(;0<gt-tt;)q=$t(q),gt--;for(;tt--;){if(K===q||q!==null&&K===q.alternate){$t=K;break e}K=$t(K),q=$t(q)}$t=null}else $t=null;ut!==null&&u_(yt,st,ut,$t,!1),Wt!==null&&We!==null&&u_(yt,We,Wt,$t,!0)}}t:{if(st=et?Ds(et):window,ut=st.nodeName&&st.nodeName.toLowerCase(),ut==="select"||ut==="input"&&st.type==="file")var De=wm;else if(Tm(st))if(Rm)De=Ky;else{De=jy;var jt=qy}else ut=st.nodeName,!ut||ut.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?et&&Oe(et.elementType)&&(De=wm):De=Zy;if(De&&(De=De(e,et))){Am(yt,De,a,dt);break t}jt&&jt(e,st,et),e==="focusout"&&et&&st.type==="number"&&et.memoizedProps.value!=null&&xe(st,"number",st.value)}switch(jt=et?Ds(et):window,e){case"focusin":(Tm(jt)||jt.contentEditable==="true")&&(dr=jt,cf=et,No=null);break;case"focusout":No=cf=dr=null;break;case"mousedown":uf=!0;break;case"contextmenu":case"mouseup":case"dragend":uf=!1,Im(yt,a,dt);break;case"selectionchange":if(Jy)break;case"keydown":case"keyup":Im(yt,a,dt)}var fe;if(sf)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else hr?bm(e,a)&&(Te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(ym&&a.locale!=="ko"&&(hr||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&hr&&(fe=mm()):(Xa=dt,$u="value"in Xa?Xa.value:Xa.textContent,hr=!0)),jt=Pc(et,Te),0<jt.length&&(Te=new vm(Te,e,null,a,dt),yt.push({event:Te,listeners:jt}),fe?Te.data=fe:(fe=Em(a),fe!==null&&(Te.data=fe)))),(fe=Vy?ky(e,a):Xy(e,a))&&(Te=Pc(et,"onBeforeInput"),0<Te.length&&(jt=new vm("onBeforeInput","beforeinput",null,a,dt),yt.push({event:jt,listeners:Te}),jt.data=fe)),OS(yt,e,et,a,dt)}l_(yt,n)})}function al(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Pc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=To(e,a),u!=null&&o.unshift(al(e,u,h)),u=To(e,n),u!=null&&o.push(al(e,u,h))),e.tag===3)return o;e=e.return}return[]}function BS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function u_(e,n,a,o,u){for(var h=n._reactName,y=[];a!==null&&a!==o;){var D=a,V=D.alternate,et=D.stateNode;if(D=D.tag,V!==null&&V===o)break;D!==5&&D!==26&&D!==27||et===null||(V=et,u?(et=To(a,h),et!=null&&y.unshift(al(a,et,V))):u||(et=To(a,h),et!=null&&y.push(al(a,et,V)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var HS=/\r\n?/g,GS=/\u0000|\uFFFD/g;function f_(e){return(typeof e=="string"?e:""+e).replace(HS,`
`).replace(GS,"")}function h_(e,n){return n=f_(n),f_(e)===n}function Ye(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ui(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ui(e,""+o);break;case"className":Yt(e,"class",o);break;case"tabIndex":Yt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Yt(e,a,o);break;case"style":Pi(e,o,h);break;case"data":if(n!=="object"){Yt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Us(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ye(e,n,"name",u.name,u,null),Ye(e,n,"formEncType",u.formEncType,u,null),Ye(e,n,"formMethod",u.formMethod,u,null),Ye(e,n,"formTarget",u.formTarget,u,null)):(Ye(e,n,"encType",u.encType,u,null),Ye(e,n,"method",u.method,u,null),Ye(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Us(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=oa);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Us(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Se("beforetoggle",e),Se("toggle",e),zt(e,"popover",o);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":zt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ki.get(a)||a,zt(e,a,o))}}function Oh(e,n,a,o,u,h){switch(a){case"style":Pi(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ui(e,o):(typeof o=="number"||typeof o=="bigint")&&ui(e,""+o);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"onClick":o!=null&&(e.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!C.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[In]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):zt(e,a,o)}}}function Hn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var y=a[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(e,n,h,y,a,null)}}u&&Ye(e,n,"srcSet",a.srcSet,a,null),o&&Ye(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var D=h=y=u=null,V=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":y=dt;break;case"checked":V=dt;break;case"defaultChecked":et=dt;break;case"value":h=dt;break;case"defaultValue":D=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:Ye(e,n,o,dt,a,null)}}Xn(e,h,D,V,et,y,u,!1);return;case"select":Se("invalid",e),o=y=h=null;for(u in a)if(a.hasOwnProperty(u)&&(D=a[u],D!=null))switch(u){case"value":h=D;break;case"defaultValue":y=D;break;case"multiple":o=D;default:Ye(e,n,u,D,a,null)}n=h,a=y,e.multiple=!!o,n!=null?An(e,!!o,n,!1):a!=null&&An(e,!!o,a,!0);return;case"textarea":Se("invalid",e),h=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(D=a[y],D!=null))switch(y){case"value":o=D;break;case"defaultValue":u=D;break;case"children":h=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(91));break;default:Ye(e,n,y,D,a,null)}Ni(e,o,u,h);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ye(e,n,V,o,a,null)}return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(o=0;o<il.length;o++)Se(il[o],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(e,n,et,o,a,null)}return;default:if(Oe(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&Oh(e,n,dt,o,a,void 0));return}}for(D in a)a.hasOwnProperty(D)&&(o=a[D],o!=null&&Ye(e,n,D,o,a,null))}function VS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,y=null,D=null,V=null,et=null,dt=null;for(ut in a){var yt=a[ut];if(a.hasOwnProperty(ut)&&yt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":V=yt;default:o.hasOwnProperty(ut)||Ye(e,n,ut,null,o,yt)}}for(var st in o){var ut=o[st];if(yt=a[st],o.hasOwnProperty(st)&&(ut!=null||yt!=null))switch(st){case"type":h=ut;break;case"name":u=ut;break;case"checked":et=ut;break;case"defaultChecked":dt=ut;break;case"value":y=ut;break;case"defaultValue":D=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==yt&&Ye(e,n,st,ut,o,yt)}}Vt(e,y,D,V,et,dt,h,u);return;case"select":ut=y=D=st=null;for(h in a)if(V=a[h],a.hasOwnProperty(h)&&V!=null)switch(h){case"value":break;case"multiple":ut=V;default:o.hasOwnProperty(h)||Ye(e,n,h,null,o,V)}for(u in o)if(h=o[u],V=a[u],o.hasOwnProperty(u)&&(h!=null||V!=null))switch(u){case"value":st=h;break;case"defaultValue":D=h;break;case"multiple":y=h;default:h!==V&&Ye(e,n,u,h,o,V)}n=D,a=y,o=ut,st!=null?An(e,!!a,st,!1):!!o!=!!a&&(n!=null?An(e,!!a,n,!0):An(e,!!a,a?[]:"",!1));return;case"textarea":ut=st=null;for(D in a)if(u=a[D],a.hasOwnProperty(D)&&u!=null&&!o.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Ye(e,n,D,null,o,u)}for(y in o)if(u=o[y],h=a[y],o.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){case"value":st=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Ye(e,n,y,u,o,h)}ci(e,st,ut);return;case"option":for(var Wt in a)if(st=a[Wt],a.hasOwnProperty(Wt)&&st!=null&&!o.hasOwnProperty(Wt))switch(Wt){case"selected":e.selected=!1;break;default:Ye(e,n,Wt,null,o,st)}for(V in o)if(st=o[V],ut=a[V],o.hasOwnProperty(V)&&st!==ut&&(st!=null||ut!=null))switch(V){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:Ye(e,n,V,st,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)st=a[$t],a.hasOwnProperty($t)&&st!=null&&!o.hasOwnProperty($t)&&Ye(e,n,$t,null,o,st);for(et in o)if(st=o[et],ut=a[et],o.hasOwnProperty(et)&&st!==ut&&(st!=null||ut!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Ye(e,n,et,st,o,ut)}return;default:if(Oe(n)){for(var We in a)st=a[We],a.hasOwnProperty(We)&&st!==void 0&&!o.hasOwnProperty(We)&&Oh(e,n,We,void 0,o,st);for(dt in o)st=o[dt],ut=a[dt],!o.hasOwnProperty(dt)||st===ut||st===void 0&&ut===void 0||Oh(e,n,dt,st,o,ut);return}}for(var K in a)st=a[K],a.hasOwnProperty(K)&&st!=null&&!o.hasOwnProperty(K)&&Ye(e,n,K,null,o,st);for(yt in o)st=o[yt],ut=a[yt],!o.hasOwnProperty(yt)||st===ut||st==null&&ut==null||Ye(e,n,yt,st,o,ut)}function d_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,y=u.initiatorType,D=u.duration;if(h&&D&&d_(y)){for(y=0,D=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],et=V.startTime;if(et>D)break;var dt=V.transferSize,yt=V.initiatorType;dt&&d_(yt)&&(V=V.responseEnd,y+=dt*(V<D?1:(D-et)/(V-et)))}if(--o,n+=8*(h+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ih=null,zh=null;function Oc(e){return e.nodeType===9?e:e.ownerDocument}function p_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function m_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Fh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bh=null;function XS(){var e=window.event;return e&&e.type==="popstate"?e===Bh?!1:(Bh=e,!0):(Bh=null,!1)}var g_=typeof setTimeout=="function"?setTimeout:void 0,YS=typeof clearTimeout=="function"?clearTimeout:void 0,__=typeof Promise=="function"?Promise:void 0,WS=typeof queueMicrotask=="function"?queueMicrotask:typeof __<"u"?function(e){return __.resolve(null).then(e).catch(qS)}:g_;function qS(e){setTimeout(function(){throw e})}function os(e){return e==="head"}function v_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Hr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")sl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,sl(a);for(var h=a.firstChild;h;){var y=h.nextSibling,D=h.nodeName;h[Ba]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=y}}else a==="body"&&sl(e.ownerDocument.body);a=u}while(a);Hr(n)}function x_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Hh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hh(a),Eo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function jS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ba])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Ci(e.nextSibling),e===null)break}return null}function ZS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ci(e.nextSibling),e===null))return null;return e}function y_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ci(e.nextSibling),e===null))return null;return e}function Gh(e){return e.data==="$?"||e.data==="$~"}function Vh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function KS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ci(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var kh=null;function S_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ci(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function M_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function b_(e,n,a){switch(n=Oc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function sl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Eo(e)}var Di=new Map,E_=new Set;function Ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ba=B.d;B.d={f:QS,r:JS,D:$S,C:tM,L:eM,m:nM,X:aM,S:iM,M:sM};function QS(){var e=ba.f(),n=wc();return e||n}function JS(e){var n=Ga(e);n!==null&&n.tag===5&&n.type==="form"?G0(n):ba.r(e)}var zr=typeof document>"u"?null:document;function T_(e,n,a){var o=zr;if(o&&typeof n=="string"&&n){var u=Fe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),E_.has(u)||(E_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Hn(n,"link",e),yn(n),o.head.appendChild(n)))}}function $S(e){ba.D(e),T_("dns-prefetch",e,null)}function tM(e,n){ba.C(e,n),T_("preconnect",e,n)}function eM(e,n,a){ba.L(e,n,a);var o=zr;if(o&&e&&n){var u='link[rel="preload"][as="'+Fe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Fe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Fe(a.imageSizes)+'"]')):u+='[href="'+Fe(e)+'"]';var h=u;switch(n){case"style":h=Fr(e);break;case"script":h=Br(e)}Di.has(h)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Di.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(rl(h))||n==="script"&&o.querySelector(ol(h))||(n=o.createElement("link"),Hn(n,"link",e),yn(n),o.head.appendChild(n)))}}function nM(e,n){ba.m(e,n);var a=zr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Fe(o)+'"][href="'+Fe(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Br(e)}if(!Di.has(h)&&(e=x({rel:"modulepreload",href:e},n),Di.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ol(h)))return}o=a.createElement("link"),Hn(o,"link",e),yn(o),a.head.appendChild(o)}}}function iM(e,n,a){ba.S(e,n,a);var o=zr;if(o&&e){var u=Va(o).hoistableStyles,h=Fr(e);n=n||"default";var y=u.get(h);if(!y){var D={loading:0,preload:null};if(y=o.querySelector(rl(h)))D.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Di.get(h))&&Xh(e,a);var V=y=o.createElement("link");yn(V),Hn(V,"link",e),V._p=new Promise(function(et,dt){V.onload=et,V.onerror=dt}),V.addEventListener("load",function(){D.loading|=1}),V.addEventListener("error",function(){D.loading|=2}),D.loading|=4,zc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:D},u.set(h,y)}}}function aM(e,n){ba.X(e,n);var a=zr;if(a&&e){var o=Va(a).hoistableScripts,u=Br(e),h=o.get(u);h||(h=a.querySelector(ol(u)),h||(e=x({src:e,async:!0},n),(n=Di.get(u))&&Yh(e,n),h=a.createElement("script"),yn(h),Hn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function sM(e,n){ba.M(e,n);var a=zr;if(a&&e){var o=Va(a).hoistableScripts,u=Br(e),h=o.get(u);h||(h=a.querySelector(ol(u)),h||(e=x({src:e,async:!0,type:"module"},n),(n=Di.get(u))&&Yh(e,n),h=a.createElement("script"),yn(h),Hn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function A_(e,n,a,o){var u=(u=lt.current)?Ic(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Fr(a.href),a=Va(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Fr(a.href);var h=Va(u).hoistableStyles,y=h.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,y),(h=u.querySelector(rl(e)))&&!h._p&&(y.instance=h,y.state.loading=5),Di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Di.set(e,a),h||rM(u,e,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Br(a),a=Va(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Fr(e){return'href="'+Fe(e)+'"'}function rl(e){return'link[rel="stylesheet"]['+e+"]"}function w_(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function rM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Hn(n,"link",a),yn(n),e.head.appendChild(n))}function Br(e){return'[src="'+Fe(e)+'"]'}function ol(e){return"script[async]"+e}function R_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Fe(a.href)+'"]');if(o)return n.instance=o,yn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),yn(o),Hn(o,"style",u),zc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Fr(a.href);var h=e.querySelector(rl(u));if(h)return n.state.loading|=4,n.instance=h,yn(h),h;o=w_(a),(u=Di.get(u))&&Xh(o,u),h=(e.ownerDocument||e).createElement("link"),yn(h);var y=h;return y._p=new Promise(function(D,V){y.onload=D,y.onerror=V}),Hn(h,"link",o),n.state.loading|=4,zc(h,a.precedence,e),n.instance=h;case"script":return h=Br(a.src),(u=e.querySelector(ol(h)))?(n.instance=u,yn(u),u):(o=a,(u=Di.get(h))&&(o=x({},a),Yh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),yn(u),Hn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,zc(o,a.precedence,e));return n.instance}function zc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,y=0;y<o.length;y++){var D=o[y];if(D.dataset.precedence===n)h=D;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Xh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Yh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Fc=null;function C_(e,n,a){if(Fc===null){var o=new Map,u=Fc=new Map;u.set(a,o)}else u=Fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Ba]||h[gn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=e+y;var D=o.get(y);D?D.push(h):o.set(y,[h])}}return o}function D_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function oM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function U_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function lM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Fr(o.href),h=n.querySelector(rl(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Bc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,yn(h);return}h=n.ownerDocument||n,o=w_(o),(u=Di.get(u))&&Xh(o,u),h=h.createElement("link"),yn(h);var y=h;y._p=new Promise(function(D,V){y.onload=D,y.onerror=V}),Hn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Bc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Wh=0;function cM(e,n){return e.stylesheets&&e.count===0&&Gc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Gc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Wh===0&&(Wh=62500*kS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Gc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Wh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Bc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Hc=null;function Gc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hc=new Map,n.forEach(uM,e),Hc=null,Bc.call(e))}function uM(e,n){if(!(n.state.loading&4)){var a=Hc.get(e);if(a)var o=a.get(null);else{a=new Map,Hc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var y=u[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),h=a.get(y)||o,h===o&&a.set(null,u),a.set(y,u),this.count++,o=Bc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var ll={$$typeof:L,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function fM(e,n,a,o,u,h,y,D,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qt(0),this.hiddenUpdates=qt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function L_(e,n,a,o,u,h,y,D,V,et,dt,yt){return e=new fM(e,n,a,y,V,et,dt,yt,D),n=1,h===!0&&(n|=24),h=hi(3,null,null,n),e.current=h,h.stateNode=e,n=Tf(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Cf(h),e}function N_(e){return e?(e=gr,e):gr}function P_(e,n,a,o,u,h){u=N_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ka(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Qa(e,o,n),a!==null&&(si(a,e,n),Ho(a,e,n))}function O_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function qh(e,n){O_(e,n),(e=e.alternate)&&O_(e,n)}function I_(e){if(e.tag===13||e.tag===31){var n=Os(e,67108864);n!==null&&si(n,e,67108864),qh(e,67108864)}}function z_(e){if(e.tag===13||e.tag===31){var n=_i();n=Cs(n);var a=Os(e,n);a!==null&&si(a,e,n),qh(e,n)}}var Vc=!0;function hM(e,n,a,o){var u=z.T;z.T=null;var h=B.p;try{B.p=2,jh(e,n,a,o)}finally{B.p=h,z.T=u}}function dM(e,n,a,o){var u=z.T;z.T=null;var h=B.p;try{B.p=8,jh(e,n,a,o)}finally{B.p=h,z.T=u}}function jh(e,n,a,o){if(Vc){var u=Zh(o);if(u===null)Ph(e,n,o,kc,a),B_(e,o);else if(mM(u,e,n,a,o))o.stopPropagation();else if(B_(e,o),n&4&&-1<pM.indexOf(e)){for(;u!==null;){var h=Ga(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=At(h.pendingLanes);if(y!==0){var D=h;for(D.pendingLanes|=2,D.entangledLanes|=2;y;){var V=1<<31-It(y);D.entanglements[1]|=V,y&=~V}qi(h),(Pe&6)===0&&(Tc=wt()+500,nl(0))}}break;case 31:case 13:D=Os(h,2),D!==null&&si(D,h,2),wc(),qh(h,2)}if(h=Zh(o),h===null&&Ph(e,n,o,kc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Ph(e,n,o,null,a)}}function Zh(e){return e=Ku(e),Kh(e)}var kc=null;function Kh(e){if(kc=null,e=Ha(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return kc=e,null}function F_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sn()){case P:return 2;case E:return 8;case J:case _t:return 32;case bt:return 268435456;default:return 32}default:return 32}}var Qh=!1,ls=null,cs=null,us=null,cl=new Map,ul=new Map,fs=[],pM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function B_(e,n){switch(e){case"focusin":case"focusout":ls=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":cl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(n.pointerId)}}function fl(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Ga(n),n!==null&&I_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function mM(e,n,a,o,u){switch(n){case"focusin":return ls=fl(ls,e,n,a,o,u),!0;case"dragenter":return cs=fl(cs,e,n,a,o,u),!0;case"mouseover":return us=fl(us,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return cl.set(h,fl(cl.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,ul.set(h,fl(ul.get(h)||null,e,n,a,o,u)),!0}return!1}function H_(e){var n=Ha(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Mo(e.priority,function(){z_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Mo(e.priority,function(){z_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Zh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Zu=o,a.target.dispatchEvent(o),Zu=null}else return n=Ga(a),n!==null&&I_(n),e.blockedOn=a,!1;n.shift()}return!0}function G_(e,n,a){Xc(e)&&a.delete(n)}function gM(){Qh=!1,ls!==null&&Xc(ls)&&(ls=null),cs!==null&&Xc(cs)&&(cs=null),us!==null&&Xc(us)&&(us=null),cl.forEach(G_),ul.forEach(G_)}function Yc(e,n){e.blockedOn===n&&(e.blockedOn=null,Qh||(Qh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,gM)))}var Wc=null;function V_(e){Wc!==e&&(Wc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Wc===e&&(Wc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Kh(o||a)===null)continue;break}var h=Ga(a);h!==null&&(e.splice(n,3),n-=3,Zf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Hr(e){function n(V){return Yc(V,e)}ls!==null&&Yc(ls,e),cs!==null&&Yc(cs,e),us!==null&&Yc(us,e),cl.forEach(n),ul.forEach(n);for(var a=0;a<fs.length;a++){var o=fs[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<fs.length&&(a=fs[0],a.blockedOn===null);)H_(a),a.blockedOn===null&&fs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],y=u[In]||null;if(typeof h=="function")y||V_(a);else if(y){var D=null;if(h&&h.hasAttribute("formAction")){if(u=h,y=h[In]||null)D=y.formAction;else if(Kh(u)!==null)continue}else D=y.action;typeof D=="function"?a[o+1]=D:(a.splice(o,3),o-=3),V_(a)}}}function k_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Jh(e){this._internalRoot=e}qc.prototype.render=Jh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=_i();P_(a,o,e,n,null,null)},qc.prototype.unmount=Jh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;P_(e.current,2,null,e,null,null),wc(),n[ra]=null}};function qc(e){this._internalRoot=e}qc.prototype.unstable_scheduleHydration=function(e){if(e){var n=So();e={blockedOn:null,target:e,priority:n};for(var a=0;a<fs.length&&n!==0&&n<fs[a].priority;a++);fs.splice(a,0,e),a===0&&H_(e)}};var X_=t.version;if(X_!=="19.2.7")throw Error(s(527,X_,"19.2.7"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var _M={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jc.isDisabled&&jc.supportsFiber)try{ft=jc.inject(_M),ht=jc}catch{}}return dl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Q0,h=J0,y=$0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=L_(e,1,!1,null,null,a,o,null,u,h,y,k_),e[ra]=n.current,Nh(e),new Jh(n)},dl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=Q0,y=J0,D=$0,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(D=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=L_(e,1,!0,n,a??null,o,u,V,h,y,D,k_),n.context=N_(null),a=n.current,o=_i(),o=Cs(o),u=Ka(o),u.callback=null,Qa(a,u,o),a=o,n.current.lanes=a,ne(n,a),qi(n),e[ra]=n.current,Nh(e),new qc(n)},dl.version="19.2.7",dl}var tv;function RM(){if(tv)return ed.exports;tv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ed.exports=wM(),ed.exports}var CM=RM();const DM=Mx(CM);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bx=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var LM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=Me.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...d},m)=>Me.createElement("svg",{ref:m,...LM,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:bx("lucide",l),...d},[...f.map(([p,_])=>Me.createElement(p,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=(r,t)=>{const i=Me.forwardRef(({className:s,...l},c)=>Me.createElement(NM,{ref:c,iconNode:t,className:bx(`lucide-${UM(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=za("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=za("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=za("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=za("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=za("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=za("Move3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=za("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=za("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=za("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bp="184",ro={ROTATE:0,DOLLY:1,PAN:2},io={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kM=0,ev=1,XM=2,Au=1,Ex=2,Tl=3,ws=0,oi=1,Ji=2,La=0,oo=1,nv=2,iv=3,av=4,YM=5,nr=100,WM=101,qM=102,jM=103,ZM=104,KM=200,QM=201,JM=202,$M=203,Xd=204,Yd=205,tb=206,eb=207,nb=208,ib=209,ab=210,sb=211,rb=212,ob=213,lb=214,Wd=0,qd=1,jd=2,uo=3,Zd=4,Kd=5,Qd=6,Jd=7,Tx=0,cb=1,ub=2,ea=0,Ax=1,wx=2,Rx=3,Cx=4,Dx=5,Ux=6,Lx=7,Nx=300,or=301,fo=302,sd=303,rd=304,Vu=306,$d=1e3,Ua=1001,tp=1002,Vn=1003,fb=1004,Zc=1005,Zn=1006,od=1007,sr=1008,Si=1009,Px=1010,Ox=1011,Ll=1012,Hp=1013,aa=1014,$i=1015,Pa=1016,Gp=1017,Vp=1018,Nl=1020,Ix=35902,zx=35899,Fx=1021,Bx=1022,Vi=1023,Oa=1026,rr=1027,Hx=1028,kp=1029,lr=1030,Xp=1031,Yp=1033,wu=33776,Ru=33777,Cu=33778,Du=33779,ep=35840,np=35841,ip=35842,ap=35843,sp=36196,rp=37492,op=37496,lp=37488,cp=37489,Pu=37490,up=37491,fp=37808,hp=37809,dp=37810,pp=37811,mp=37812,gp=37813,_p=37814,vp=37815,xp=37816,yp=37817,Sp=37818,Mp=37819,bp=37820,Ep=37821,Tp=36492,Ap=36494,wp=36495,Rp=36283,Cp=36284,Ou=36285,Dp=36286,hb=3200,Up=0,db=1,bs="",Li="srgb",Iu="srgb-linear",zu="linear",Ve="srgb",Gr=7680,sv=519,pb=512,mb=513,gb=514,Wp=515,_b=516,vb=517,qp=518,xb=519,rv=35044,ov="300 es",ta=2e3,Pl=2001;function yb(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Fu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Sb(){const r=Fu("canvas");return r.style.display="block",r}const lv={};function cv(...r){const t="THREE."+r.shift();console.log(t,...r)}function Gx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function te(...r){r=Gx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Re(...r){r=Gx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Lp(...r){const t=r.join(" ");t in lv||(lv[t]=!0,te(...r))}function Mb(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const bb={[Wd]:qd,[jd]:Qd,[Zd]:Jd,[uo]:Kd,[qd]:Wd,[Qd]:jd,[Jd]:Zd,[Kd]:uo};class Rs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uv=1234567;const Cl=Math.PI/180,Ol=180/Math.PI;function mo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]+"-"+Wn[t&255]+Wn[t>>8&255]+"-"+Wn[t>>16&15|64]+Wn[t>>24&255]+"-"+Wn[i&63|128]+Wn[i>>8&255]+"-"+Wn[i>>16&255]+Wn[i>>24&255]+Wn[s&255]+Wn[s>>8&255]+Wn[s>>16&255]+Wn[s>>24&255]).toLowerCase()}function _e(r,t,i){return Math.max(t,Math.min(i,r))}function jp(r,t){return(r%t+t)%t}function Eb(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function Tb(r,t,i){return r!==t?(i-r)/(t-r):0}function Dl(r,t,i){return(1-i)*r+i*t}function Ab(r,t,i,s){return Dl(r,t,1-Math.exp(-i*s))}function wb(r,t=1){return t-Math.abs(jp(r,t*2)-t)}function Rb(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function Cb(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function Db(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Ub(r,t){return r+Math.random()*(t-r)}function Lb(r){return r*(.5-Math.random())}function Nb(r){r!==void 0&&(uv=r);let t=uv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pb(r){return r*Cl}function Ob(r){return r*Ol}function Ib(r){return(r&r-1)===0&&r!==0}function zb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Fb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Bb(r,t,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),p=c((t+s)/2),_=f((t+s)/2),x=c((t-s)/2),g=f((t-s)/2),M=c((s-t)/2),A=f((s-t)/2);switch(l){case"XYX":r.set(d*_,m*x,m*g,d*p);break;case"YZY":r.set(m*g,d*_,m*x,d*p);break;case"ZXZ":r.set(m*x,m*g,d*_,d*p);break;case"XZX":r.set(d*_,m*A,m*M,d*p);break;case"YXY":r.set(m*M,d*_,m*A,d*p);break;case"ZYZ":r.set(m*A,m*M,d*_,d*p);break;default:te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function no(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Qn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Il={DEG2RAD:Cl,RAD2DEG:Ol,generateUUID:mo,clamp:_e,euclideanModulo:jp,mapLinear:Eb,inverseLerp:Tb,lerp:Dl,damp:Ab,pingpong:wb,smoothstep:Rb,smootherstep:Cb,randInt:Db,randFloat:Ub,randFloatSpread:Lb,seededRandom:Nb,degToRad:Pb,radToDeg:Ob,isPowerOfTwo:Ib,ceilPowerOfTwo:zb,floorPowerOfTwo:Fb,setQuaternionFromProperEuler:Bb,normalize:Qn,denormalize:no},lm=class lm{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lm.prototype.isVector2=!0;let ie=lm;class Pn{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],_=s[l+2],x=s[l+3],g=c[f+0],M=c[f+1],A=c[f+2],R=c[f+3];if(x!==R||m!==g||p!==M||_!==A){let S=m*g+p*M+_*A+x*R;S<0&&(g=-g,M=-M,A=-A,R=-R,S=-S);let v=1-d;if(S<.9995){const T=Math.acos(S),L=Math.sin(T);v=Math.sin(v*T)/L,d=Math.sin(d*T)/L,m=m*v+g*d,p=p*v+M*d,_=_*v+A*d,x=x*v+R*d}else{m=m*v+g*d,p=p*v+M*d,_=_*v+A*d,x=x*v+R*d;const T=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=T,p*=T,_*=T,x*=T}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],x=c[f],g=c[f+1],M=c[f+2],A=c[f+3];return t[i]=d*A+_*x+m*M-p*g,t[i+1]=m*A+_*g+p*x-d*M,t[i+2]=p*A+_*M+d*g-m*x,t[i+3]=_*A-d*x-m*g-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),x=d(c/2),g=m(s/2),M=m(l/2),A=m(c/2);switch(f){case"XYZ":this._x=g*_*x+p*M*A,this._y=p*M*x-g*_*A,this._z=p*_*A+g*M*x,this._w=p*_*x-g*M*A;break;case"YXZ":this._x=g*_*x+p*M*A,this._y=p*M*x-g*_*A,this._z=p*_*A-g*M*x,this._w=p*_*x+g*M*A;break;case"ZXY":this._x=g*_*x-p*M*A,this._y=p*M*x+g*_*A,this._z=p*_*A+g*M*x,this._w=p*_*x-g*M*A;break;case"ZYX":this._x=g*_*x-p*M*A,this._y=p*M*x+g*_*A,this._z=p*_*A-g*M*x,this._w=p*_*x+g*M*A;break;case"YZX":this._x=g*_*x+p*M*A,this._y=p*M*x+g*_*A,this._z=p*_*A-g*M*x,this._w=p*_*x-g*M*A;break;case"XZY":this._x=g*_*x-p*M*A,this._y=p*M*x-g*_*A,this._z=p*_*A+g*M*x,this._w=p*_*x+g*M*A;break;default:te("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],_=i[6],x=i[10],g=s+d+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>d&&s>x){const M=2*Math.sqrt(1+s-d-x);this._w=(_-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-s-x);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+x-s-d);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*d+l*p-c*m,this._y=l*_+f*m+c*d-s*p,this._z=c*_+f*p+s*m-l*d,this._w=f*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const cm=class cm{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(fv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(fv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),_=2*(d*i-c*l),x=2*(c*s-f*i);return this.x=i+m*p+f*x-d*_,this.y=s+m*_+d*p-c*x,this.z=l+m*x+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ld.copy(this).projectOnVector(t),this.sub(ld)}reflect(t){return this.sub(ld.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cm.prototype.isVector3=!0;let X=cm;const ld=new X,fv=new Pn,um=class um{constructor(t,i,s,l,c,f,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],_=s[4],x=s[7],g=s[2],M=s[5],A=s[8],R=l[0],S=l[3],v=l[6],T=l[1],L=l[4],U=l[7],F=l[2],w=l[5],O=l[8];return c[0]=f*R+d*T+m*F,c[3]=f*S+d*L+m*w,c[6]=f*v+d*U+m*O,c[1]=p*R+_*T+x*F,c[4]=p*S+_*L+x*w,c[7]=p*v+_*U+x*O,c[2]=g*R+M*T+A*F,c[5]=g*S+M*L+A*w,c[8]=g*v+M*U+A*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*d*p-s*c*_+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=_*f-d*p,g=d*m-_*c,M=p*c-f*m,A=i*x+s*g+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=x*R,t[1]=(l*p-_*s)*R,t[2]=(d*s-l*f)*R,t[3]=g*R,t[4]=(_*i-l*m)*R,t[5]=(l*c-d*i)*R,t[6]=M*R,t[7]=(s*m-p*i)*R,t[8]=(f*i-s*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(cd.makeScale(t,i)),this}rotate(t){return this.premultiply(cd.makeRotation(-t)),this}translate(t,i){return this.premultiply(cd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};um.prototype.isMatrix3=!0;let oe=um;const cd=new oe,hv=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dv=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hb(){const r={enabled:!0,workingColorSpace:Iu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ve&&(l.r=Na(l.r),l.g=Na(l.g),l.b=Na(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ve&&(l.r=lo(l.r),l.g=lo(l.g),l.b=lo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===bs?zu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Lp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Lp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Iu]:{primaries:t,whitePoint:s,transfer:zu,toXYZ:hv,fromXYZ:dv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Li},outputColorSpaceConfig:{drawingBufferColorSpace:Li}},[Li]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:hv,fromXYZ:dv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Li}}}),r}const we=Hb();function Na(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function lo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Vr;class Gb{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Vr===void 0&&(Vr=Fu("canvas")),Vr.width=t.width,Vr.height=t.height;const l=Vr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Vr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Fu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Na(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Na(i[s]/255)*255):i[s]=Na(i[s]);return{data:i,width:t.width,height:t.height}}else return te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vb=0;class Zp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=mo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(ud(l[f].image)):c.push(ud(l[f]))}else c=ud(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function ud(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(te("Texture: Unable to serialize Texture."),{})}let kb=0;const fd=new X;class $n extends Rs{constructor(t=$n.DEFAULT_IMAGE,i=$n.DEFAULT_MAPPING,s=Ua,l=Ua,c=Zn,f=sr,d=Vi,m=Si,p=$n.DEFAULT_ANISOTROPY,_=bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=mo(),this.name="",this.source=new Zp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fd).x}get height(){return this.source.getSize(fd).y}get depth(){return this.source.getSize(fd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){te(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){te(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $d:t.x=t.x-Math.floor(t.x);break;case Ua:t.x=t.x<0?0:1;break;case tp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $d:t.y=t.y-Math.floor(t.y);break;case Ua:t.y=t.y<0?0:1;break;case tp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Nx;$n.DEFAULT_ANISOTROPY=1;const fm=class fm{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],x=m[8],g=m[1],M=m[5],A=m[9],R=m[2],S=m[6],v=m[10];if(Math.abs(_-g)<.01&&Math.abs(x-R)<.01&&Math.abs(A-S)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+R)<.1&&Math.abs(A+S)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,U=(M+1)/2,F=(v+1)/2,w=(_+g)/4,O=(x+R)/4,b=(A+S)/4;return L>U&&L>F?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=w/s,c=O/s):U>F?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=w/l,c=b/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=O/c,l=b/c),this.set(s,l,c,i),this}let T=Math.sqrt((S-A)*(S-A)+(x-R)*(x-R)+(g-_)*(g-_));return Math.abs(T)<.001&&(T=1),this.x=(S-A)/T,this.y=(x-R)/T,this.z=(g-_)/T,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this.w=_e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this.w=_e(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fm.prototype.isVector4=!0;let pn=fm;class Xb extends Rs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new pn(0,0,t,i),this.scissorTest=!1,this.viewport=new pn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new $n(l),f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Zp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class na extends Xb{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Vx extends $n{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yb extends $n{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gu=class Gu{constructor(t,i,s,l,c,f,d,m,p,_,x,g,M,A,R,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,_,x,g,M,A,R,S)}set(t,i,s,l,c,f,d,m,p,_,x,g,M,A,R,S){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=x,v[14]=g,v[3]=M,v[7]=A,v[11]=R,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/kr.setFromMatrixColumn(t,0).length(),c=1/kr.setFromMatrixColumn(t,1).length(),f=1/kr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=f*_,M=f*x,A=d*_,R=d*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=M+A*p,i[5]=g-R*p,i[9]=-d*m,i[2]=R-g*p,i[6]=A+M*p,i[10]=f*m}else if(t.order==="YXZ"){const g=m*_,M=m*x,A=p*_,R=p*x;i[0]=g+R*d,i[4]=A*d-M,i[8]=f*p,i[1]=f*x,i[5]=f*_,i[9]=-d,i[2]=M*d-A,i[6]=R+g*d,i[10]=f*m}else if(t.order==="ZXY"){const g=m*_,M=m*x,A=p*_,R=p*x;i[0]=g-R*d,i[4]=-f*x,i[8]=A+M*d,i[1]=M+A*d,i[5]=f*_,i[9]=R-g*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const g=f*_,M=f*x,A=d*_,R=d*x;i[0]=m*_,i[4]=A*p-M,i[8]=g*p+R,i[1]=m*x,i[5]=R*p+g,i[9]=M*p-A,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,M=f*p,A=d*m,R=d*p;i[0]=m*_,i[4]=R-g*x,i[8]=A*x+M,i[1]=x,i[5]=f*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*x+A,i[10]=g-R*x}else if(t.order==="XZY"){const g=f*m,M=f*p,A=d*m,R=d*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=g*x+R,i[5]=f*_,i[9]=M*x-A,i[2]=A*x-M,i[6]=d*_,i[10]=R*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wb,t,qb)}lookAt(t,i,s){const l=this.elements;return vi.subVectors(t,i),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),ds.crossVectors(s,vi),ds.lengthSq()===0&&(Math.abs(s.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),ds.crossVectors(s,vi)),ds.normalize(),Kc.crossVectors(vi,ds),l[0]=ds.x,l[4]=Kc.x,l[8]=vi.x,l[1]=ds.y,l[5]=Kc.y,l[9]=vi.y,l[2]=ds.z,l[6]=Kc.z,l[10]=vi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],_=s[1],x=s[5],g=s[9],M=s[13],A=s[2],R=s[6],S=s[10],v=s[14],T=s[3],L=s[7],U=s[11],F=s[15],w=l[0],O=l[4],b=l[8],N=l[12],G=l[1],H=l[5],k=l[9],rt=l[13],ot=l[2],Y=l[6],z=l[10],B=l[14],$=l[3],ct=l[7],mt=l[11],I=l[15];return c[0]=f*w+d*G+m*ot+p*$,c[4]=f*O+d*H+m*Y+p*ct,c[8]=f*b+d*k+m*z+p*mt,c[12]=f*N+d*rt+m*B+p*I,c[1]=_*w+x*G+g*ot+M*$,c[5]=_*O+x*H+g*Y+M*ct,c[9]=_*b+x*k+g*z+M*mt,c[13]=_*N+x*rt+g*B+M*I,c[2]=A*w+R*G+S*ot+v*$,c[6]=A*O+R*H+S*Y+v*ct,c[10]=A*b+R*k+S*z+v*mt,c[14]=A*N+R*rt+S*B+v*I,c[3]=T*w+L*G+U*ot+F*$,c[7]=T*O+L*H+U*Y+F*ct,c[11]=T*b+L*k+U*z+F*mt,c[15]=T*N+L*rt+U*B+F*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],_=t[2],x=t[6],g=t[10],M=t[14],A=t[3],R=t[7],S=t[11],v=t[15],T=m*M-p*g,L=d*M-p*x,U=d*g-m*x,F=f*M-p*_,w=f*g-m*_,O=f*x-d*_;return i*(R*T-S*L+v*U)-s*(A*T-S*F+v*w)+l*(A*L-R*F+v*O)-c*(A*U-R*w+S*O)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=t[9],g=t[10],M=t[11],A=t[12],R=t[13],S=t[14],v=t[15],T=i*d-s*f,L=i*m-l*f,U=i*p-c*f,F=s*m-l*d,w=s*p-c*d,O=l*p-c*m,b=_*R-x*A,N=_*S-g*A,G=_*v-M*A,H=x*S-g*R,k=x*v-M*R,rt=g*v-M*S,ot=T*rt-L*k+U*H+F*G-w*N+O*b;if(ot===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/ot;return t[0]=(d*rt-m*k+p*H)*Y,t[1]=(l*k-s*rt-c*H)*Y,t[2]=(R*O-S*w+v*F)*Y,t[3]=(g*w-x*O-M*F)*Y,t[4]=(m*G-f*rt-p*N)*Y,t[5]=(i*rt-l*G+c*N)*Y,t[6]=(S*U-A*O-v*L)*Y,t[7]=(_*O-g*U+M*L)*Y,t[8]=(f*k-d*G+p*b)*Y,t[9]=(s*G-i*k-c*b)*Y,t[10]=(A*w-R*U+v*T)*Y,t[11]=(x*U-_*w-M*T)*Y,t[12]=(d*N-f*H-m*b)*Y,t[13]=(i*H-s*N+l*b)*Y,t[14]=(R*L-A*F-S*T)*Y,t[15]=(_*F-x*L+g*T)*Y,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,_=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*f,0,p*m-l*d,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,_=f+f,x=d+d,g=c*p,M=c*_,A=c*x,R=f*_,S=f*x,v=d*x,T=m*p,L=m*_,U=m*x,F=s.x,w=s.y,O=s.z;return l[0]=(1-(R+v))*F,l[1]=(M+U)*F,l[2]=(A-L)*F,l[3]=0,l[4]=(M-U)*w,l[5]=(1-(g+v))*w,l[6]=(S+T)*w,l[7]=0,l[8]=(A+L)*O,l[9]=(S-T)*O,l[10]=(1-(g+R))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=kr.set(l[0],l[1],l[2]).length();const d=kr.set(l[4],l[5],l[6]).length(),m=kr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Fi.copy(this);const p=1/f,_=1/d,x=1/m;return Fi.elements[0]*=p,Fi.elements[1]*=p,Fi.elements[2]*=p,Fi.elements[4]*=_,Fi.elements[5]*=_,Fi.elements[6]*=_,Fi.elements[8]*=x,Fi.elements[9]*=x,Fi.elements[10]*=x,i.setFromRotationMatrix(Fi),s.x=f,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,f,d=ta,m=!1){const p=this.elements,_=2*c/(i-t),x=2*c/(s-l),g=(i+t)/(i-t),M=(s+l)/(s-l);let A,R;if(m)A=c/(f-c),R=f*c/(f-c);else if(d===ta)A=-(f+c)/(f-c),R=-2*f*c/(f-c);else if(d===Pl)A=-f/(f-c),R=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=ta,m=!1){const p=this.elements,_=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),M=-(s+l)/(s-l);let A,R;if(m)A=1/(f-c),R=f/(f-c);else if(d===ta)A=-2/(f-c),R=-(f+c)/(f-c);else if(d===Pl)A=-1/(f-c),R=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Gu.prototype.isMatrix4=!0;let an=Gu;const kr=new X,Fi=new an,Wb=new X(0,0,0),qb=new X(1,1,1),ds=new X,Kc=new X,vi=new X,pv=new an,mv=new Pn;class Ia{constructor(t=0,i=0,s=0,l=Ia.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],_=l[9],x=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_e(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:te("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return pv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return mv.setFromEuler(this),this.setFromQuaternion(mv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ia.DEFAULT_ORDER="XYZ";class Kp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jb=0;const gv=new X,Xr=new Pn,Ea=new an,Qc=new X,pl=new X,Zb=new X,Kb=new Pn,_v=new X(1,0,0),vv=new X(0,1,0),xv=new X(0,0,1),yv={type:"added"},Qb={type:"removed"},Yr={type:"childadded",child:null},hd={type:"childremoved",child:null};class xn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const t=new X,i=new Ia,s=new Pn,l=new X(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new oe}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Xr.setFromAxisAngle(t,i),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(t,i){return Xr.setFromAxisAngle(t,i),this.quaternion.premultiply(Xr),this}rotateX(t){return this.rotateOnAxis(_v,t)}rotateY(t){return this.rotateOnAxis(vv,t)}rotateZ(t){return this.rotateOnAxis(xv,t)}translateOnAxis(t,i){return gv.copy(t).applyQuaternion(this.quaternion),this.position.add(gv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(_v,t)}translateY(t){return this.translateOnAxis(vv,t)}translateZ(t){return this.translateOnAxis(xv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Qc.copy(t):Qc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),pl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(pl,Qc,this.up):Ea.lookAt(Qc,pl,this.up),this.quaternion.setFromRotationMatrix(Ea),l&&(Ea.extractRotation(l.matrixWorld),Xr.setFromRotationMatrix(Ea),this.quaternion.premultiply(Xr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yv),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Qb),hd.child=t,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yv),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pl,t,Zb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pl,Kb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),x=f(t.shapes),g=f(t.skeletons),M=f(t.animations),A=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=l,s;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}xn.DEFAULT_UP=new X(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ao extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jb={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const R of t.hand.values()){const S=i.getJointPose(R,s),v=this._getHandJoint(p,R);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=_.position.distanceTo(x.position),M=.02,A=.005;p.inputState.pinching&&g>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Jb)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new ao;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},Jc={h:0,s:0,l:0};function pd(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class me{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=s,we.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=we.workingColorSpace){if(t=jp(t,1),i=_e(i,0,1),s=_e(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=pd(f,c,t+1/3),this.g=pd(f,c,t),this.b=pd(f,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,i=Li){function s(c){c!==void 0&&parseFloat(c)<1&&te("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:te("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Li){const s=kx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Na(t.r),this.g=Na(t.g),this.b=Na(t.b),this}copyLinearToSRGB(t){return this.r=lo(t.r),this.g=lo(t.g),this.b=lo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Li){return we.workingToColorSpace(qn.copy(this),t),Math.round(_e(qn.r*255,0,255))*65536+Math.round(_e(qn.g*255,0,255))*256+Math.round(_e(qn.b*255,0,255))}getHexString(t=Li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.workingToColorSpace(qn.copy(this),i);const s=qn.r,l=qn.g,c=qn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const x=f-d;switch(p=_<=.5?x/(f+d):x/(2-f-d),f){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=we.workingColorSpace){return we.workingToColorSpace(qn.copy(this),i),t.r=qn.r,t.g=qn.g,t.b=qn.b,t}getStyle(t=Li){we.workingToColorSpace(qn.copy(this),t);const i=qn.r,s=qn.g,l=qn.b;return t!==Li?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ps),this.setHSL(ps.h+t,ps.s+i,ps.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ps),t.getHSL(Jc);const s=Dl(ps.h,Jc.h,i),l=Dl(ps.s,Jc.s,i),c=Dl(ps.l,Jc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new me;me.NAMES=kx;class Qp{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new me(t),this.near=i,this.far=s}clone(){return new Qp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $b extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ia,this.environmentIntensity=1,this.environmentRotation=new Ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bi=new X,Ta=new X,md=new X,Aa=new X,Wr=new X,qr=new X,Sv=new X,gd=new X,_d=new X,vd=new X,xd=new pn,yd=new pn,Sd=new pn;class Gi{constructor(t=new X,i=new X,s=new X){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Bi.subVectors(t,i),l.cross(Bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Bi.subVectors(l,i),Ta.subVectors(s,i),md.subVectors(t,i);const f=Bi.dot(Bi),d=Bi.dot(Ta),m=Bi.dot(md),p=Ta.dot(Ta),_=Ta.dot(md),x=f*p-d*d;if(x===0)return c.set(0,0,0),null;const g=1/x,M=(p*m-d*_)*g,A=(f*_-d*m)*g;return c.set(1-M-A,A,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,Aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Aa.x),m.addScaledVector(f,Aa.y),m.addScaledVector(d,Aa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return xd.setScalar(0),yd.setScalar(0),Sd.setScalar(0),xd.fromBufferAttribute(t,i),yd.fromBufferAttribute(t,s),Sd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(xd,c.x),f.addScaledVector(yd,c.y),f.addScaledVector(Sd,c.z),f}static isFrontFacing(t,i,s,l){return Bi.subVectors(s,i),Ta.subVectors(t,i),Bi.cross(Ta).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),Bi.cross(Ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Gi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;Wr.subVectors(l,s),qr.subVectors(c,s),gd.subVectors(t,s);const m=Wr.dot(gd),p=qr.dot(gd);if(m<=0&&p<=0)return i.copy(s);_d.subVectors(t,l);const _=Wr.dot(_d),x=qr.dot(_d);if(_>=0&&x<=_)return i.copy(l);const g=m*x-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(Wr,f);vd.subVectors(t,c);const M=Wr.dot(vd),A=qr.dot(vd);if(A>=0&&M<=A)return i.copy(c);const R=M*p-m*A;if(R<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(s).addScaledVector(qr,d);const S=_*A-M*x;if(S<=0&&x-_>=0&&M-A>=0)return Sv.subVectors(c,l),d=(x-_)/(x-_+(M-A)),i.copy(l).addScaledVector(Sv,d);const v=1/(S+R+g);return f=R*v,d=g*v,i.copy(s).addScaledVector(Wr,f).addScaledVector(qr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class zl{constructor(t=new X(1/0,1/0,1/0),i=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Hi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Hi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Hi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Hi):Hi.fromBufferAttribute(c,f),Hi.applyMatrix4(t.matrixWorld),this.expandByPoint(Hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$c.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),$c.copy(s.boundingBox)),$c.applyMatrix4(t.matrixWorld),this.union($c)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hi),Hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ml),tu.subVectors(this.max,ml),jr.subVectors(t.a,ml),Zr.subVectors(t.b,ml),Kr.subVectors(t.c,ml),ms.subVectors(Zr,jr),gs.subVectors(Kr,Zr),js.subVectors(jr,Kr);let i=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-js.z,js.y,ms.z,0,-ms.x,gs.z,0,-gs.x,js.z,0,-js.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-js.y,js.x,0];return!Md(i,jr,Zr,Kr,tu)||(i=[1,0,0,0,1,0,0,0,1],!Md(i,jr,Zr,Kr,tu))?!1:(eu.crossVectors(ms,gs),i=[eu.x,eu.y,eu.z],Md(i,jr,Zr,Kr,tu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wa=[new X,new X,new X,new X,new X,new X,new X,new X],Hi=new X,$c=new zl,jr=new X,Zr=new X,Kr=new X,ms=new X,gs=new X,js=new X,ml=new X,tu=new X,eu=new X,Zs=new X;function Md(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Zs.fromArray(r,c);const d=l.x*Math.abs(Zs.x)+l.y*Math.abs(Zs.y)+l.z*Math.abs(Zs.z),m=t.dot(Zs),p=i.dot(Zs),_=s.dot(Zs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Tn=new X,nu=new ie;let tE=0;class ia extends Rs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=rv,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)nu.fromBufferAttribute(this,i),nu.applyMatrix3(t),this.setXY(i,nu.x,nu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyMatrix3(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyMatrix4(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyNormalMatrix(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.transformDirection(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=no(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Qn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=no(i,this.array)),i}setX(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=no(i,this.array)),i}setY(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=no(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=no(i,this.array)),i}setW(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),l=Qn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),l=Qn(l,this.array),c=Qn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rv&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Xx extends ia{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Yx extends ia{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Le extends ia{constructor(t,i,s){super(new Float32Array(t),i,s)}}const eE=new zl,gl=new X,bd=new X;class ku{constructor(t=new X,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):eE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gl.subVectors(t,this.center);const i=gl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(gl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gl.copy(t.center).add(bd)),this.expandByPoint(gl.copy(t.center).sub(bd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let nE=0;const Ui=new an,Ed=new xn,Qr=new X,xi=new zl,_l=new zl,Nn=new X;class Cn extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yb(t)?Yx:Xx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new oe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ui.makeRotationFromQuaternion(t),this.applyMatrix4(Ui),this}rotateX(t){return Ui.makeRotationX(t),this.applyMatrix4(Ui),this}rotateY(t){return Ui.makeRotationY(t),this.applyMatrix4(Ui),this}rotateZ(t){return Ui.makeRotationZ(t),this.applyMatrix4(Ui),this}translate(t,i,s){return Ui.makeTranslation(t,i,s),this.applyMatrix4(Ui),this}scale(t,i,s){return Ui.makeScale(t,i,s),this.applyMatrix4(Ui),this}lookAt(t){return Ed.lookAt(t),Ed.updateMatrix(),this.applyMatrix4(Ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Le(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];xi.setFromBufferAttribute(c),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ku);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const s=this.boundingSphere.center;if(xi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];_l.setFromBufferAttribute(d),this.morphTargetsRelative?(Nn.addVectors(xi.min,_l.min),xi.expandByPoint(Nn),Nn.addVectors(xi.max,_l.max),xi.expandByPoint(Nn)):(xi.expandByPoint(_l.min),xi.expandByPoint(_l.max))}xi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Nn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Nn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Nn.fromBufferAttribute(d,p),m&&(Qr.fromBufferAttribute(t,p),Nn.add(Qr)),l=Math.max(l,s.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ia(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let b=0;b<s.count;b++)d[b]=new X,m[b]=new X;const p=new X,_=new X,x=new X,g=new ie,M=new ie,A=new ie,R=new X,S=new X;function v(b,N,G){p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,N),x.fromBufferAttribute(s,G),g.fromBufferAttribute(c,b),M.fromBufferAttribute(c,N),A.fromBufferAttribute(c,G),_.sub(p),x.sub(p),M.sub(g),A.sub(g);const H=1/(M.x*A.y-A.x*M.y);isFinite(H)&&(R.copy(_).multiplyScalar(A.y).addScaledVector(x,-M.y).multiplyScalar(H),S.copy(x).multiplyScalar(M.x).addScaledVector(_,-A.x).multiplyScalar(H),d[b].add(R),d[N].add(R),d[G].add(R),m[b].add(S),m[N].add(S),m[G].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let b=0,N=T.length;b<N;++b){const G=T[b],H=G.start,k=G.count;for(let rt=H,ot=H+k;rt<ot;rt+=3)v(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const L=new X,U=new X,F=new X,w=new X;function O(b){F.fromBufferAttribute(l,b),w.copy(F);const N=d[b];L.copy(N),L.sub(F.multiplyScalar(F.dot(N))).normalize(),U.crossVectors(w,N);const H=U.dot(m[b])<0?-1:1;f.setXYZW(b,L.x,L.y,L.z,H)}for(let b=0,N=T.length;b<N;++b){const G=T[b],H=G.start,k=G.count;for(let rt=H,ot=H+k;rt<ot;rt+=3)O(t.getX(rt+0)),O(t.getX(rt+1)),O(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ia(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new X,c=new X,f=new X,d=new X,m=new X,p=new X,_=new X,x=new X;if(t)for(let g=0,M=t.count;g<M;g+=3){const A=t.getX(g+0),R=t.getX(g+1),S=t.getX(g+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,S),_.subVectors(f,c),x.subVectors(l,c),_.cross(x),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,S),d.add(_),m.add(_),p.add(_),s.setXYZ(A,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),x.subVectors(l,c),_.cross(x),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Nn.fromBufferAttribute(t,i),Nn.normalize(),t.setXYZ(i,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,x=d.normalized,g=new p.constructor(m.length*_);let M=0,A=0;for(let R=0,S=m.length;R<S;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*_;for(let v=0;v<_;v++)g[A++]=p[M++]}return new ia(g,_,x)}if(this.index===null)return te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Cn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,x=p.length;_<x;_++){const g=p[_],M=t(g,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,g=p.length;x<g;x++){const M=p[x];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],x=c[p];for(let g=0,M=x.length;g<M;g++)_.push(x[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const x=f[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let iE=0;class go extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=oo,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=Yd,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){te(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){te(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(s.blending=this.blending),this.side!==ws&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Xd&&(s.blendSrc=this.blendSrc),this.blendDst!==Yd&&(s.blendDst=this.blendDst),this.blendEquation!==nr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ra=new X,Td=new X,iu=new X,_s=new X,Ad=new X,au=new X,wd=new X;class Xu{constructor(t=new X,i=new X(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ra)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ra.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ra.copy(this.origin).addScaledVector(this.direction,i),Ra.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Td.copy(t).add(i).multiplyScalar(.5),iu.copy(i).sub(t).normalize(),_s.copy(this.origin).sub(Td);const c=t.distanceTo(i)*.5,f=-this.direction.dot(iu),d=_s.dot(this.direction),m=-_s.dot(iu),p=_s.lengthSq(),_=Math.abs(1-f*f);let x,g,M,A;if(_>0)if(x=f*m-d,g=f*d-m,A=c*_,x>=0)if(g>=-A)if(g<=A){const R=1/_;x*=R,g*=R,M=x*(x+f*g+2*d)+g*(f*x+g+2*m)+p}else g=c,x=Math.max(0,-(f*g+d)),M=-x*x+g*(g+2*m)+p;else g=-c,x=Math.max(0,-(f*g+d)),M=-x*x+g*(g+2*m)+p;else g<=-A?(x=Math.max(0,-(-f*c+d)),g=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+p):g<=A?(x=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+p):(x=Math.max(0,-(f*c+d)),g=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+p);else g=f>0?-c:c,x=Math.max(0,-(f*g+d)),M=-x*x+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Td).addScaledVector(iu,g),M}intersectSphere(t,i){Ra.subVectors(t.center,this.origin);const s=Ra.dot(this.direction),l=Ra.dot(Ra)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),x>=0?(d=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(d=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ra)!==null}intersectTriangle(t,i,s,l,c){Ad.subVectors(i,t),au.subVectors(s,t),wd.crossVectors(Ad,au);let f=this.direction.dot(wd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;_s.subVectors(this.origin,t);const m=d*this.direction.dot(au.crossVectors(_s,au));if(m<0)return null;const p=d*this.direction.dot(Ad.cross(_s));if(p<0||m+p>f)return null;const _=-d*_s.dot(wd);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fl extends go{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ia,this.combine=Tx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Mv=new an,Ks=new Xu,su=new ku,bv=new X,ru=new X,ou=new X,lu=new X,Rd=new X,cu=new X,Ev=new X,uu=new X;class Pt extends xn{constructor(t=new Cn,i=new Fl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){cu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],x=c[m];_!==0&&(Rd.fromBufferAttribute(x,t),f?cu.addScaledVector(Rd,_):cu.addScaledVector(Rd.sub(i),_))}i.add(cu)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),su.copy(s.boundingSphere),su.applyMatrix4(c),Ks.copy(t.ray).recast(t.near),!(su.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(su,bv)===null||Ks.origin.distanceToSquared(bv)>(t.far-t.near)**2))&&(Mv.copy(c).invert(),Ks.copy(t.ray).applyMatrix4(Mv),!(s.boundingBox!==null&&Ks.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ks)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,g=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let A=0,R=g.length;A<R;A++){const S=g[A],v=f[S.materialIndex],T=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let U=T,F=L;U<F;U+=3){const w=d.getX(U),O=d.getX(U+1),b=d.getX(U+2);l=fu(this,v,t,s,p,_,x,w,O,b),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let S=A,v=R;S<v;S+=3){const T=d.getX(S),L=d.getX(S+1),U=d.getX(S+2);l=fu(this,f,t,s,p,_,x,T,L,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let A=0,R=g.length;A<R;A++){const S=g[A],v=f[S.materialIndex],T=Math.max(S.start,M.start),L=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let U=T,F=L;U<F;U+=3){const w=U,O=U+1,b=U+2;l=fu(this,v,t,s,p,_,x,w,O,b),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let S=A,v=R;S<v;S+=3){const T=S,L=S+1,U=S+2;l=fu(this,f,t,s,p,_,x,T,L,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function aE(r,t,i,s,l,c,f,d){let m;if(t.side===oi?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===ws,d),m===null)return null;uu.copy(d),uu.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(uu);return p<i.near||p>i.far?null:{distance:p,point:uu.clone(),object:r}}function fu(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,ru),r.getVertexPosition(m,ou),r.getVertexPosition(p,lu);const _=aE(r,t,i,s,ru,ou,lu,Ev);if(_){const x=new X;Gi.getBarycoord(Ev,ru,ou,lu,x),l&&(_.uv=Gi.getInterpolatedAttribute(l,d,m,p,x,new ie)),c&&(_.uv1=Gi.getInterpolatedAttribute(c,d,m,p,x,new ie)),f&&(_.normal=Gi.getInterpolatedAttribute(f,d,m,p,x,new X),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new X,materialIndex:0};Gi.getNormal(ru,ou,lu,g.normal),_.face=g,_.barycoord=x}return _}class sE extends $n{constructor(t=null,i=1,s=1,l,c,f,d,m,p=Vn,_=Vn,x,g){super(null,f,d,m,p,_,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cd=new X,rE=new X,oE=new oe;class Ms{constructor(t=new X(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Cd.subVectors(s,i).cross(rE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Cd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(t.start).addScaledVector(l,f)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||oE.getNormalMatrix(t),l=this.coplanarPoint(Cd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qs=new ku,lE=new ie(.5,.5),hu=new X;class Jp{constructor(t=new Ms,i=new Ms,s=new Ms,l=new Ms,c=new Ms,f=new Ms){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ta,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],_=c[4],x=c[5],g=c[6],M=c[7],A=c[8],R=c[9],S=c[10],v=c[11],T=c[12],L=c[13],U=c[14],F=c[15];if(l[0].setComponents(p-f,M-_,v-A,F-T).normalize(),l[1].setComponents(p+f,M+_,v+A,F+T).normalize(),l[2].setComponents(p+d,M+x,v+R,F+L).normalize(),l[3].setComponents(p-d,M-x,v-R,F-L).normalize(),s)l[4].setComponents(m,g,S,U).normalize(),l[5].setComponents(p-m,M-g,v-S,F-U).normalize();else if(l[4].setComponents(p-m,M-g,v-S,F-U).normalize(),i===ta)l[5].setComponents(p+m,M+g,v+S,F+U).normalize();else if(i===Pl)l[5].setComponents(m,g,S,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(t){Qs.center.set(0,0,0);const i=lE.distanceTo(t.center);return Qs.radius=.7071067811865476+i,Qs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(hu.x=l.normal.x>0?t.max.x:t.min.x,hu.y=l.normal.y>0?t.max.y:t.min.y,hu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(hu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yu extends go{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Bu=new X,Hu=new X,Tv=new an,vl=new Xu,du=new ku,Dd=new X,Av=new X;class Da extends xn{constructor(t=new Cn,i=new Yu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Bu.fromBufferAttribute(i,l-1),Hu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Bu.distanceTo(Hu);t.setAttribute("lineDistance",new Le(s,1))}else te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),du.copy(s.boundingSphere),du.applyMatrix4(l),du.radius+=c,t.ray.intersectsSphere(du)===!1)return;Tv.copy(l).invert(),vl.copy(t.ray).applyMatrix4(Tv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const M=Math.max(0,f.start),A=Math.min(_.count,f.start+f.count);for(let R=M,S=A-1;R<S;R+=p){const v=_.getX(R),T=_.getX(R+1),L=pu(this,t,vl,m,v,T,R);L&&i.push(L)}if(this.isLineLoop){const R=_.getX(A-1),S=_.getX(M),v=pu(this,t,vl,m,R,S,A-1);v&&i.push(v)}}else{const M=Math.max(0,f.start),A=Math.min(g.count,f.start+f.count);for(let R=M,S=A-1;R<S;R+=p){const v=pu(this,t,vl,m,R,R+1,R);v&&i.push(v)}if(this.isLineLoop){const R=pu(this,t,vl,m,A-1,M,A-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function pu(r,t,i,s,l,c,f){const d=r.geometry.attributes.position;if(Bu.fromBufferAttribute(d,l),Hu.fromBufferAttribute(d,c),i.distanceSqToSegment(Bu,Hu,Dd,Av)>s)return;Dd.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Dd);if(!(p<t.near||p>t.far))return{distance:p,point:Av.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const wv=new X,Rv=new X;class Wx extends Da{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)wv.fromBufferAttribute(i,l),Rv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+wv.distanceTo(Rv);t.setAttribute("lineDistance",new Le(s,1))}else te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qx extends $n{constructor(t=[],i=or,s,l,c,f,d,m,p,_){super(t,i,s,l,c,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ho extends $n{constructor(t,i,s=aa,l,c,f,d=Vn,m=Vn,p,_=Oa,x=1){if(_!==Oa&&_!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,c,f,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class cE extends ho{constructor(t,i=aa,s=or,l,c,f=Vn,d=Vn,m,p=Oa){const _={width:t,height:t,depth:1},x=[_,_,_,_,_,_];super(t,t,i,s,l,c,f,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class jx extends $n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class qe extends Cn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],x=[];let g=0,M=0;A("z","y","x",-1,-1,s,i,t,f,c,0),A("z","y","x",1,-1,s,i,-t,f,c,1),A("x","z","y",1,1,t,s,i,l,f,2),A("x","z","y",1,-1,t,s,-i,l,f,3),A("x","y","z",1,-1,t,i,s,l,c,4),A("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Le(p,3)),this.setAttribute("normal",new Le(_,3)),this.setAttribute("uv",new Le(x,2));function A(R,S,v,T,L,U,F,w,O,b,N){const G=U/O,H=F/b,k=U/2,rt=F/2,ot=w/2,Y=O+1,z=b+1;let B=0,$=0;const ct=new X;for(let mt=0;mt<z;mt++){const I=mt*H-rt;for(let Q=0;Q<Y;Q++){const vt=Q*G-k;ct[R]=vt*T,ct[S]=I*L,ct[v]=ot,p.push(ct.x,ct.y,ct.z),ct[R]=0,ct[S]=0,ct[v]=w>0?1:-1,_.push(ct.x,ct.y,ct.z),x.push(Q/O),x.push(1-mt/b),B+=1}}for(let mt=0;mt<b;mt++)for(let I=0;I<O;I++){const Q=g+I+Y*mt,vt=g+I+Y*(mt+1),Et=g+(I+1)+Y*(mt+1),Rt=g+(I+1)+Y*mt;m.push(Q,vt,Rt),m.push(vt,Et,Rt),$+=6}d.addGroup(M,$,N),M+=$,g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class $p extends Cn{constructor(t=1,i=1,s=4,l=8,c=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:s,radialSegments:l,heightSegments:c},i=Math.max(0,i),s=Math.max(1,Math.floor(s)),l=Math.max(3,Math.floor(l)),c=Math.max(1,Math.floor(c));const f=[],d=[],m=[],p=[],_=i/2,x=Math.PI/2*t,g=i,M=2*x+g,A=s*2+c,R=l+1,S=new X,v=new X;for(let T=0;T<=A;T++){let L=0,U=0,F=0,w=0;if(T<=s){const N=T/s,G=N*Math.PI/2;U=-_-t*Math.cos(G),F=t*Math.sin(G),w=-t*Math.cos(G),L=N*x}else if(T<=s+c){const N=(T-s)/c;U=-_+N*i,F=t,w=0,L=x+N*g}else{const N=(T-s-c)/s,G=N*Math.PI/2;U=_+t*Math.sin(G),F=t*Math.cos(G),w=t*Math.sin(G),L=x+g+N*x}const O=Math.max(0,Math.min(1,L/M));let b=0;T===0?b=.5/l:T===A&&(b=-.5/l);for(let N=0;N<=l;N++){const G=N/l,H=G*Math.PI*2,k=Math.sin(H),rt=Math.cos(H);v.x=-F*rt,v.y=U,v.z=F*k,d.push(v.x,v.y,v.z),S.set(-F*rt,w,F*k),S.normalize(),m.push(S.x,S.y,S.z),p.push(G+b,O)}if(T>0){const N=(T-1)*R;for(let G=0;G<l;G++){const H=N+G,k=N+G+1,rt=T*R+G,ot=T*R+G+1;f.push(H,k,rt),f.push(k,ot,rt)}}}this.setIndex(f),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(m,3)),this.setAttribute("uv",new Le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $p(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Gn extends Cn{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],x=[],g=[],M=[];let A=0;const R=[],S=s/2;let v=0;T(),f===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new Le(x,3)),this.setAttribute("normal",new Le(g,3)),this.setAttribute("uv",new Le(M,2));function T(){const U=new X,F=new X;let w=0;const O=(i-t)/s;for(let b=0;b<=c;b++){const N=[],G=b/c,H=G*(i-t)+t;for(let k=0;k<=l;k++){const rt=k/l,ot=rt*m+d,Y=Math.sin(ot),z=Math.cos(ot);F.x=H*Y,F.y=-G*s+S,F.z=H*z,x.push(F.x,F.y,F.z),U.set(Y,O,z).normalize(),g.push(U.x,U.y,U.z),M.push(rt,1-G),N.push(A++)}R.push(N)}for(let b=0;b<l;b++)for(let N=0;N<c;N++){const G=R[N][b],H=R[N+1][b],k=R[N+1][b+1],rt=R[N][b+1];(t>0||N!==0)&&(_.push(G,H,rt),w+=3),(i>0||N!==c-1)&&(_.push(H,k,rt),w+=3)}p.addGroup(v,w,0),v+=w}function L(U){const F=A,w=new ie,O=new X;let b=0;const N=U===!0?t:i,G=U===!0?1:-1;for(let k=1;k<=l;k++)x.push(0,S*G,0),g.push(0,G,0),M.push(.5,.5),A++;const H=A;for(let k=0;k<=l;k++){const ot=k/l*m+d,Y=Math.cos(ot),z=Math.sin(ot);O.x=N*z,O.y=S*G,O.z=N*Y,x.push(O.x,O.y,O.z),g.push(0,G,0),w.x=Y*.5+.5,w.y=z*.5*G+.5,M.push(w.x,w.y),A++}for(let k=0;k<l;k++){const rt=F+k,ot=H+k;U===!0?_.push(ot,ot+1,rt):_.push(ot+1,ot,rt),b+=3}p.addGroup(v,b,U===!0?1:2),v+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tm extends Gn{constructor(t=1,i=1,s=32,l=1,c=!1,f=0,d=Math.PI*2){super(0,t,i,s,l,c,f,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:d}}static fromJSON(t){return new tm(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class em extends Cn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],f=[];d(l),p(s),_(),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(c.slice(),3)),this.setAttribute("uv",new Le(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(T){const L=new X,U=new X,F=new X;for(let w=0;w<i.length;w+=3)M(i[w+0],L),M(i[w+1],U),M(i[w+2],F),m(L,U,F,T)}function m(T,L,U,F){const w=F+1,O=[];for(let b=0;b<=w;b++){O[b]=[];const N=T.clone().lerp(U,b/w),G=L.clone().lerp(U,b/w),H=w-b;for(let k=0;k<=H;k++)k===0&&b===w?O[b][k]=N:O[b][k]=N.clone().lerp(G,k/H)}for(let b=0;b<w;b++)for(let N=0;N<2*(w-b)-1;N++){const G=Math.floor(N/2);N%2===0?(g(O[b][G+1]),g(O[b+1][G]),g(O[b][G])):(g(O[b][G+1]),g(O[b+1][G+1]),g(O[b+1][G]))}}function p(T){const L=new X;for(let U=0;U<c.length;U+=3)L.x=c[U+0],L.y=c[U+1],L.z=c[U+2],L.normalize().multiplyScalar(T),c[U+0]=L.x,c[U+1]=L.y,c[U+2]=L.z}function _(){const T=new X;for(let L=0;L<c.length;L+=3){T.x=c[L+0],T.y=c[L+1],T.z=c[L+2];const U=S(T)/2/Math.PI+.5,F=v(T)/Math.PI+.5;f.push(U,1-F)}A(),x()}function x(){for(let T=0;T<f.length;T+=6){const L=f[T+0],U=f[T+2],F=f[T+4],w=Math.max(L,U,F),O=Math.min(L,U,F);w>.9&&O<.1&&(L<.2&&(f[T+0]+=1),U<.2&&(f[T+2]+=1),F<.2&&(f[T+4]+=1))}}function g(T){c.push(T.x,T.y,T.z)}function M(T,L){const U=T*3;L.x=t[U+0],L.y=t[U+1],L.z=t[U+2]}function A(){const T=new X,L=new X,U=new X,F=new X,w=new ie,O=new ie,b=new ie;for(let N=0,G=0;N<c.length;N+=9,G+=6){T.set(c[N+0],c[N+1],c[N+2]),L.set(c[N+3],c[N+4],c[N+5]),U.set(c[N+6],c[N+7],c[N+8]),w.set(f[G+0],f[G+1]),O.set(f[G+2],f[G+3]),b.set(f[G+4],f[G+5]),F.copy(T).add(L).add(U).divideScalar(3);const H=S(F);R(w,G+0,T,H),R(O,G+2,L,H),R(b,G+4,U,H)}}function R(T,L,U,F){F<0&&T.x===1&&(f[L]=T.x-1),U.x===0&&U.z===0&&(f[L]=F/2/Math.PI+.5)}function S(T){return Math.atan2(T.z,-T.x)}function v(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new em(t.vertices,t.indices,t.radius,t.detail)}}class so extends em{constructor(t=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,l,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new so(t.radius,t.detail)}}class _o extends Cn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,x=t/d,g=i/m,M=[],A=[],R=[],S=[];for(let v=0;v<_;v++){const T=v*g-f;for(let L=0;L<p;L++){const U=L*x-c;A.push(U,-T,0),R.push(0,0,1),S.push(L/d),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let T=0;T<d;T++){const L=T+p*v,U=T+p*(v+1),F=T+1+p*(v+1),w=T+1+p*v;M.push(L,U,w),M.push(U,F,w)}this.setIndex(M),this.setAttribute("position",new Le(A,3)),this.setAttribute("normal",new Le(R,3)),this.setAttribute("uv",new Le(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.width,t.height,t.widthSegments,t.heightSegments)}}class Wu extends Cn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+d,Math.PI);let p=0;const _=[],x=new X,g=new X,M=[],A=[],R=[],S=[];for(let v=0;v<=s;v++){const T=[],L=v/s;let U=0;v===0&&f===0?U=.5/i:v===s&&m===Math.PI&&(U=-.5/i);for(let F=0;F<=i;F++){const w=F/i;x.x=-t*Math.cos(l+w*c)*Math.sin(f+L*d),x.y=t*Math.cos(f+L*d),x.z=t*Math.sin(l+w*c)*Math.sin(f+L*d),A.push(x.x,x.y,x.z),g.copy(x).normalize(),R.push(g.x,g.y,g.z),S.push(w+U,1-L),T.push(p++)}_.push(T)}for(let v=0;v<s;v++)for(let T=0;T<i;T++){const L=_[v][T+1],U=_[v][T],F=_[v+1][T],w=_[v+1][T+1];(v!==0||f>0)&&M.push(L,U,w),(v!==s-1||m<Math.PI)&&M.push(U,F,w)}this.setIndex(M),this.setAttribute("position",new Le(A,3)),this.setAttribute("normal",new Le(R,3)),this.setAttribute("uv",new Le(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ir extends Cn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2,f=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:f,thetaLength:d},s=Math.floor(s),l=Math.floor(l);const m=[],p=[],_=[],x=[],g=new X,M=new X,A=new X;for(let R=0;R<=s;R++){const S=f+R/s*d;for(let v=0;v<=l;v++){const T=v/l*c;M.x=(t+i*Math.cos(S))*Math.cos(T),M.y=(t+i*Math.cos(S))*Math.sin(T),M.z=i*Math.sin(S),p.push(M.x,M.y,M.z),g.x=t*Math.cos(T),g.y=t*Math.sin(T),A.subVectors(M,g).normalize(),_.push(A.x,A.y,A.z),x.push(v/l),x.push(R/s)}}for(let R=1;R<=s;R++)for(let S=1;S<=l;S++){const v=(l+1)*R+S-1,T=(l+1)*(R-1)+S-1,L=(l+1)*(R-1)+S,U=(l+1)*R+S;m.push(v,T,U),m.push(T,L,U)}this.setIndex(m),this.setAttribute("position",new Le(p,3)),this.setAttribute("normal",new Le(_,3)),this.setAttribute("uv",new Le(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function po(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(Cv(l))l.isRenderTargetTexture?(te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(Cv(l[0])){const c=[];for(let f=0,d=l.length;f<d;f++)c[f]=l[f].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Jn(r){const t={};for(let i=0;i<r.length;i++){const s=po(r[i]);for(const l in s)t[l]=s[l]}return t}function Cv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function uE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Zx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const fE={clone:po,merge:Jn};var hE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends go{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hE,this.fragmentShader=dE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=po(t.uniforms),this.uniformsGroups=uE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class pE extends sa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Es extends go{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Up,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ia,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mE extends go{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gE extends go{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class nm extends xn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class _E extends nm{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const Ud=new an,Dv=new X,Uv=new X;class Kx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jp,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Dv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Dv),Uv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Uv),i.updateMatrixWorld(),Ud.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ud,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Pl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ud)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const mu=new X,gu=new Pn,ji=new X;class Qx extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(mu,gu,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mu,gu,ji.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(mu,gu,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mu,gu,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vs=new X,Lv=new ie,Nv=new ie;class yi extends Qx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ol*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(Cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-t/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(vs.x,vs.y).multiplyScalar(-t/vs.z)}getViewSize(t,i){return this.getViewBounds(t,Lv,Nv),i.subVectors(Nv,Lv)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Cl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class vE extends Kx{constructor(){super(new yi(90,1,.5,500)),this.isPointLightShadow=!0}}class xE extends nm{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new vE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class im extends Qx{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class yE extends Kx{constructor(){super(new im(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class SE extends nm{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new yE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const Jr=-90,$r=1;class ME extends xn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Jr,$r,t,i);l.layers=this.layers,this.add(l);const c=new yi(Jr,$r,t,i);c.layers=this.layers,this.add(c);const f=new yi(Jr,$r,t,i);f.layers=this.layers,this.add(f);const d=new yi(Jr,$r,t,i);d.layers=this.layers,this.add(d);const m=new yi(Jr,$r,t,i);m.layers=this.layers,this.add(m);const p=new yi(Jr,$r,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===ta)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Pl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,_]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(x,g,M),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class bE extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Pv=new an;class Jx{constructor(t,i,s=0,l=1/0){this.ray=new Xu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Kp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Re("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Pv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pv),this}intersectObject(t,i=!0,s=[]){return Np(t,this,s,i),s.sort(Ov),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Np(t[l],this,s,i);return s.sort(Ov),s}}function Ov(r,t){return r.distance-t.distance}function Np(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)Np(c[f],t,i,!0)}}class Iv{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(_e(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const hm=class hm{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};hm.prototype.isMatrix2=!0;let zv=hm;class EE extends Wx{constructor(t=10,i=10,s=4473924,l=8947848){s=new me(s),l=new me(l);const c=i/2,f=t/i,d=t/2,m=[],p=[];for(let g=0,M=0,A=-d;g<=i;g++,A+=f){m.push(-d,0,A,d,0,A),m.push(A,0,-d,A,0,d);const R=g===c?s:l;R.toArray(p,M),M+=3,R.toArray(p,M),M+=3,R.toArray(p,M),M+=3,R.toArray(p,M),M+=3}const _=new Cn;_.setAttribute("position",new Le(m,3)),_.setAttribute("color",new Le(p,3));const x=new Yu({vertexColors:!0,toneMapped:!1});super(_,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class TE extends Wx{constructor(t=1){const i=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new Cn;l.setAttribute("position",new Le(i,3)),l.setAttribute("color",new Le(s,3));const c=new Yu({vertexColors:!0,toneMapped:!1});super(l,c),this.type="AxesHelper"}setColors(t,i,s){const l=new me,c=this.geometry.attributes.color.array;return l.set(t),l.toArray(c,0),l.toArray(c,3),l.set(i),l.toArray(c,6),l.toArray(c,9),l.set(s),l.toArray(c,12),l.toArray(c,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class $x extends Rs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){te("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Fv(r,t,i,s){const l=AE(s);switch(i){case Fx:return r*t;case Hx:return r*t/l.components*l.byteLength;case kp:return r*t/l.components*l.byteLength;case lr:return r*t*2/l.components*l.byteLength;case Xp:return r*t*2/l.components*l.byteLength;case Bx:return r*t*3/l.components*l.byteLength;case Vi:return r*t*4/l.components*l.byteLength;case Yp:return r*t*4/l.components*l.byteLength;case wu:case Ru:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Cu:case Du:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case np:case ap:return Math.max(r,16)*Math.max(t,8)/4;case ep:case ip:return Math.max(r,8)*Math.max(t,8)/2;case sp:case rp:case lp:case cp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case op:case Pu:case up:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case fp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hp:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case dp:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case pp:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case mp:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case gp:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case _p:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case vp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case xp:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case yp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Sp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Mp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case bp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ep:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Tp:case Ap:case wp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Rp:case Cp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ou:case Dp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function AE(r){switch(r){case Si:case Px:return{byteLength:1,components:1};case Ll:case Ox:case Pa:return{byteLength:2,components:1};case Gp:case Vp:return{byteLength:2,components:4};case aa:case Hp:case $i:return{byteLength:4,components:1};case Ix:case zx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bp}}));typeof window<"u"&&(window.__THREE__?te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ty(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function wE(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,x=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const _=m.array,x=m.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,_);else{x.sort((M,A)=>M.start-A.start);let g=0;for(let M=1;M<x.length;M++){const A=x[g],R=x[M];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++g,x[g]=R)}x.length=g+1;for(let M=0,A=x.length;M<A;M++){const R=x[M];r.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var RE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,DE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,GE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,VE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,XE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ZE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,KE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,QE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,JE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$E=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,t1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a1="gl_FragColor = linearToOutputTexel( gl_FragColor );",s1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,l1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,c1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,f1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,g1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,y1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,S1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,A1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,w1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,R1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,C1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,U1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,F1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Y1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,q1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,J1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,aT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_T=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ST=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,MT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ET=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,OT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$T=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:RE,alphahash_pars_fragment:CE,alphamap_fragment:DE,alphamap_pars_fragment:UE,alphatest_fragment:LE,alphatest_pars_fragment:NE,aomap_fragment:PE,aomap_pars_fragment:OE,batching_pars_vertex:IE,batching_vertex:zE,begin_vertex:FE,beginnormal_vertex:BE,bsdfs:HE,iridescence_fragment:GE,bumpmap_pars_fragment:VE,clipping_planes_fragment:kE,clipping_planes_pars_fragment:XE,clipping_planes_pars_vertex:YE,clipping_planes_vertex:WE,color_fragment:qE,color_pars_fragment:jE,color_pars_vertex:ZE,color_vertex:KE,common:QE,cube_uv_reflection_fragment:JE,defaultnormal_vertex:$E,displacementmap_pars_vertex:t1,displacementmap_vertex:e1,emissivemap_fragment:n1,emissivemap_pars_fragment:i1,colorspace_fragment:a1,colorspace_pars_fragment:s1,envmap_fragment:r1,envmap_common_pars_fragment:o1,envmap_pars_fragment:l1,envmap_pars_vertex:c1,envmap_physical_pars_fragment:y1,envmap_vertex:u1,fog_vertex:f1,fog_pars_vertex:h1,fog_fragment:d1,fog_pars_fragment:p1,gradientmap_pars_fragment:m1,lightmap_pars_fragment:g1,lights_lambert_fragment:_1,lights_lambert_pars_fragment:v1,lights_pars_begin:x1,lights_toon_fragment:S1,lights_toon_pars_fragment:M1,lights_phong_fragment:b1,lights_phong_pars_fragment:E1,lights_physical_fragment:T1,lights_physical_pars_fragment:A1,lights_fragment_begin:w1,lights_fragment_maps:R1,lights_fragment_end:C1,lightprobes_pars_fragment:D1,logdepthbuf_fragment:U1,logdepthbuf_pars_fragment:L1,logdepthbuf_pars_vertex:N1,logdepthbuf_vertex:P1,map_fragment:O1,map_pars_fragment:I1,map_particle_fragment:z1,map_particle_pars_fragment:F1,metalnessmap_fragment:B1,metalnessmap_pars_fragment:H1,morphinstance_vertex:G1,morphcolor_vertex:V1,morphnormal_vertex:k1,morphtarget_pars_vertex:X1,morphtarget_vertex:Y1,normal_fragment_begin:W1,normal_fragment_maps:q1,normal_pars_fragment:j1,normal_pars_vertex:Z1,normal_vertex:K1,normalmap_pars_fragment:Q1,clearcoat_normal_fragment_begin:J1,clearcoat_normal_fragment_maps:$1,clearcoat_pars_fragment:tT,iridescence_pars_fragment:eT,opaque_fragment:nT,packing:iT,premultiplied_alpha_fragment:aT,project_vertex:sT,dithering_fragment:rT,dithering_pars_fragment:oT,roughnessmap_fragment:lT,roughnessmap_pars_fragment:cT,shadowmap_pars_fragment:uT,shadowmap_pars_vertex:fT,shadowmap_vertex:hT,shadowmask_pars_fragment:dT,skinbase_vertex:pT,skinning_pars_vertex:mT,skinning_vertex:gT,skinnormal_vertex:_T,specularmap_fragment:vT,specularmap_pars_fragment:xT,tonemapping_fragment:yT,tonemapping_pars_fragment:ST,transmission_fragment:MT,transmission_pars_fragment:bT,uv_pars_fragment:ET,uv_pars_vertex:TT,uv_vertex:AT,worldpos_vertex:wT,background_vert:RT,background_frag:CT,backgroundCube_vert:DT,backgroundCube_frag:UT,cube_vert:LT,cube_frag:NT,depth_vert:PT,depth_frag:OT,distance_vert:IT,distance_frag:zT,equirect_vert:FT,equirect_frag:BT,linedashed_vert:HT,linedashed_frag:GT,meshbasic_vert:VT,meshbasic_frag:kT,meshlambert_vert:XT,meshlambert_frag:YT,meshmatcap_vert:WT,meshmatcap_frag:qT,meshnormal_vert:jT,meshnormal_frag:ZT,meshphong_vert:KT,meshphong_frag:QT,meshphysical_vert:JT,meshphysical_frag:$T,meshtoon_vert:tA,meshtoon_frag:eA,points_vert:nA,points_frag:iA,shadow_vert:aA,shadow_frag:sA,sprite_vert:rA,sprite_frag:oA},Ht={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Qi={basic:{uniforms:Jn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Jn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new me(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Jn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Jn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Jn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new me(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Jn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Jn([Ht.points,Ht.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Jn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Jn([Ht.common,Ht.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Jn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Jn([Ht.sprite,Ht.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Jn([Ht.common,Ht.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Jn([Ht.lights,Ht.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Qi.physical={uniforms:Jn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const _u={r:0,b:0,g:0},lA=new an,ey=new oe;ey.set(-1,0,0,0,1,0,0,0,1);function cA(r,t,i,s,l,c){const f=new me(0);let d=l===!0?0:1,m,p,_=null,x=0,g=null;function M(T){let L=T.isScene===!0?T.background:null;if(L&&L.isTexture){const U=T.backgroundBlurriness>0;L=t.get(L,U)}return L}function A(T){let L=!1;const U=M(T);U===null?S(f,d):U&&U.isColor&&(S(U,1),L=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(T,L){const U=M(L);U&&(U.isCubeTexture||U.mapping===Vu)?(p===void 0&&(p=new Pt(new qe(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:po(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,w,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=U,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(lA.makeRotationFromEuler(L.backgroundRotation)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(ey),p.material.toneMapped=we.getTransfer(U.colorSpace)!==Ve,(_!==U||x!==U.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=U,x=U.version,g=r.toneMapping),p.layers.enableAll(),T.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Pt(new _o(2,2),new sa({name:"BackgroundMaterial",uniforms:po(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=we.getTransfer(U.colorSpace)!==Ve,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||x!==U.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=U,x=U.version,g=r.toneMapping),m.layers.enableAll(),T.unshift(m,m.geometry,m.material,0,0,null))}function S(T,L){T.getRGB(_u,Zx(r)),i.buffers.color.setClear(_u.r,_u.g,_u.b,L,c)}function v(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(T,L=1){f.set(T),d=L,S(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(T){d=T,S(f,d)},render:A,addToRenderList:R,dispose:v}}function uA(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function d(H,k,rt,ot,Y){let z=!1;const B=x(H,ot,rt,k);c!==B&&(c=B,p(c.object)),z=M(H,ot,rt,Y),z&&A(H,ot,rt,Y),Y!==null&&t.update(Y,r.ELEMENT_ARRAY_BUFFER),(z||f)&&(f=!1,U(H,k,rt,ot),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function m(){return r.createVertexArray()}function p(H){return r.bindVertexArray(H)}function _(H){return r.deleteVertexArray(H)}function x(H,k,rt,ot){const Y=ot.wireframe===!0;let z=s[k.id];z===void 0&&(z={},s[k.id]=z);const B=H.isInstancedMesh===!0?H.id:0;let $=z[B];$===void 0&&($={},z[B]=$);let ct=$[rt.id];ct===void 0&&(ct={},$[rt.id]=ct);let mt=ct[Y];return mt===void 0&&(mt=g(m()),ct[Y]=mt),mt}function g(H){const k=[],rt=[],ot=[];for(let Y=0;Y<i;Y++)k[Y]=0,rt[Y]=0,ot[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:rt,attributeDivisors:ot,object:H,attributes:{},index:null}}function M(H,k,rt,ot){const Y=c.attributes,z=k.attributes;let B=0;const $=rt.getAttributes();for(const ct in $)if($[ct].location>=0){const I=Y[ct];let Q=z[ct];if(Q===void 0&&(ct==="instanceMatrix"&&H.instanceMatrix&&(Q=H.instanceMatrix),ct==="instanceColor"&&H.instanceColor&&(Q=H.instanceColor)),I===void 0||I.attribute!==Q||Q&&I.data!==Q.data)return!0;B++}return c.attributesNum!==B||c.index!==ot}function A(H,k,rt,ot){const Y={},z=k.attributes;let B=0;const $=rt.getAttributes();for(const ct in $)if($[ct].location>=0){let I=z[ct];I===void 0&&(ct==="instanceMatrix"&&H.instanceMatrix&&(I=H.instanceMatrix),ct==="instanceColor"&&H.instanceColor&&(I=H.instanceColor));const Q={};Q.attribute=I,I&&I.data&&(Q.data=I.data),Y[ct]=Q,B++}c.attributes=Y,c.attributesNum=B,c.index=ot}function R(){const H=c.newAttributes;for(let k=0,rt=H.length;k<rt;k++)H[k]=0}function S(H){v(H,0)}function v(H,k){const rt=c.newAttributes,ot=c.enabledAttributes,Y=c.attributeDivisors;rt[H]=1,ot[H]===0&&(r.enableVertexAttribArray(H),ot[H]=1),Y[H]!==k&&(r.vertexAttribDivisor(H,k),Y[H]=k)}function T(){const H=c.newAttributes,k=c.enabledAttributes;for(let rt=0,ot=k.length;rt<ot;rt++)k[rt]!==H[rt]&&(r.disableVertexAttribArray(rt),k[rt]=0)}function L(H,k,rt,ot,Y,z,B){B===!0?r.vertexAttribIPointer(H,k,rt,Y,z):r.vertexAttribPointer(H,k,rt,ot,Y,z)}function U(H,k,rt,ot){R();const Y=ot.attributes,z=rt.getAttributes(),B=k.defaultAttributeValues;for(const $ in z){const ct=z[$];if(ct.location>=0){let mt=Y[$];if(mt===void 0&&($==="instanceMatrix"&&H.instanceMatrix&&(mt=H.instanceMatrix),$==="instanceColor"&&H.instanceColor&&(mt=H.instanceColor)),mt!==void 0){const I=mt.normalized,Q=mt.itemSize,vt=t.get(mt);if(vt===void 0)continue;const Et=vt.buffer,Rt=vt.type,lt=vt.bytesPerElement,St=Rt===r.INT||Rt===r.UNSIGNED_INT||mt.gpuType===Hp;if(mt.isInterleavedBufferAttribute){const Tt=mt.data,Gt=Tt.stride,ee=mt.offset;if(Tt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<ct.locationSize;Jt++)v(ct.location+Jt,Tt.meshPerAttribute);H.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Jt=0;Jt<ct.locationSize;Jt++)S(ct.location+Jt);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let Jt=0;Jt<ct.locationSize;Jt++)L(ct.location+Jt,Q/ct.locationSize,Rt,I,Gt*lt,(ee+Q/ct.locationSize*Jt)*lt,St)}else{if(mt.isInstancedBufferAttribute){for(let Tt=0;Tt<ct.locationSize;Tt++)v(ct.location+Tt,mt.meshPerAttribute);H.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Tt=0;Tt<ct.locationSize;Tt++)S(ct.location+Tt);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let Tt=0;Tt<ct.locationSize;Tt++)L(ct.location+Tt,Q/ct.locationSize,Rt,I,Q*lt,Q/ct.locationSize*Tt*lt,St)}}else if(B!==void 0){const I=B[$];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(ct.location,I);break;case 3:r.vertexAttrib3fv(ct.location,I);break;case 4:r.vertexAttrib4fv(ct.location,I);break;default:r.vertexAttrib1fv(ct.location,I)}}}}T()}function F(){N();for(const H in s){const k=s[H];for(const rt in k){const ot=k[rt];for(const Y in ot){const z=ot[Y];for(const B in z)_(z[B].object),delete z[B];delete ot[Y]}}delete s[H]}}function w(H){if(s[H.id]===void 0)return;const k=s[H.id];for(const rt in k){const ot=k[rt];for(const Y in ot){const z=ot[Y];for(const B in z)_(z[B].object),delete z[B];delete ot[Y]}}delete s[H.id]}function O(H){for(const k in s){const rt=s[k];for(const ot in rt){const Y=rt[ot];if(Y[H.id]===void 0)continue;const z=Y[H.id];for(const B in z)_(z[B].object),delete z[B];delete Y[H.id]}}}function b(H){for(const k in s){const rt=s[k],ot=H.isInstancedMesh===!0?H.id:0,Y=rt[ot];if(Y!==void 0){for(const z in Y){const B=Y[z];for(const $ in B)_(B[$].object),delete B[$];delete Y[z]}delete rt[ot],Object.keys(rt).length===0&&delete s[k]}}}function N(){G(),f=!0,c!==l&&(c=l,p(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:N,resetDefaultState:G,dispose:F,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:S,disableUnusedAttributes:T}}function fA(r,t,i){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function f(m,p,_){_!==0&&(r.drawArraysInstanced(s,m,p,_),i.update(p,s,_))}function d(m,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,_);let g=0;for(let M=0;M<_;M++)g+=p[M];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function hA(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==Vi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const b=O===Pa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Si&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==$i&&!b)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(te("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:T,maxVaryings:L,maxFragmentUniforms:U,maxSamples:F,samples:w}}function dA(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Ms,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||s!==0||l;return l=g,s=x.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=_(x,g,0)},this.setState=function(x,g,M){const A=x.clippingPlanes,R=x.clipIntersection,S=x.clipShadows,v=r.get(x);if(!l||A===null||A.length===0||c&&!S)c?_(null):p();else{const T=c?0:s,L=T*4;let U=v.clippingState||null;m.value=U,U=_(A,g,L,M);for(let F=0;F!==L;++F)U[F]=i[F];v.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=T}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(x,g,M,A){const R=x!==null?x.length:0;let S=null;if(R!==0){if(S=m.value,A!==!0||S===null){const v=M+R*4,T=g.matrixWorldInverse;d.getNormalMatrix(T),(S===null||S.length<v)&&(S=new Float32Array(v));for(let L=0,U=M;L!==R;++L,U+=4)f.copy(x[L]).applyMatrix4(T,d),f.normal.toArray(S,U),S[U+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,S}}const Ts=4,Bv=[.125,.215,.35,.446,.526,.582],ar=20,pA=256,xl=new im,Hv=new me;let Ld=null,Nd=0,Pd=0,Od=!1;const mA=new X;class Gv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=mA}=c;Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ld,Nd,Pd),this._renderer.xr.enabled=Od,t.scissorTest=!1,to(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===or||t.mapping===fo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Pa,format:Vi,colorSpace:Iu,depthBuffer:!1},l=Vv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gA(c)),this._blurMaterial=vA(c,t,i),this._ggxMaterial=_A(c,t,i)}return l}_compileMaterial(t){const i=new Pt(new Cn,t);this._renderer.compile(i,xl)}_sceneToCubeUV(t,i,s,l,c){const m=new yi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(Hv),x.toneMapping=ea,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new qe,new Fl({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let v=!1;const T=t.background;T?T.isColor&&(S.color.copy(T),t.background=null,v=!0):(S.color.copy(Hv),v=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):U===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const F=this._cubeSize;to(l,U*F,L>2?F:0,F,F),x.setRenderTarget(l),v&&x.render(R,m),x.render(t,m)}x.toneMapping=M,x.autoClear=g,t.background=T}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===or||t.mapping===fo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;to(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,xl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-_*_),g=0+p*1.25,M=x*g,{_lodMax:A}=this,R=this._sizeLods[s],S=3*R*(s>A-Ts?s-A+Ts:0),v=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=A-i,to(c,S,v,3*R,2*R),l.setRenderTarget(c),l.render(d,xl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-s,to(t,S,v,3*R,2*R),l.setRenderTarget(t),l.render(d,xl)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=p;const g=p.uniforms,M=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*ar-1),R=c/A,S=isFinite(c)?1+Math.floor(_*R):ar;S>ar&&te(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ar}`);const v=[];let T=0;for(let O=0;O<ar;++O){const b=O/R,N=Math.exp(-b*b/2);v.push(N),O===0?T+=N:O<S&&(T+=2*N)}for(let O=0;O<v.length;O++)v[O]=v[O]/T;g.envMap.value=t.texture,g.samples.value=S,g.weights.value=v,g.latitudinal.value=f==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:L}=this;g.dTheta.value=A,g.mipInt.value=L-s;const U=this._sizeLods[l],F=3*U*(l>L-Ts?l-L+Ts:0),w=4*(this._cubeSize-U);to(i,F,w,3*U,2*U),m.setRenderTarget(i),m.render(x,xl)}}function gA(r){const t=[],i=[],s=[];let l=r;const c=r-Ts+1+Bv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-Ts?m=Bv[f-r+Ts-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,x=1+p,g=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,A=6,R=3,S=2,v=1,T=new Float32Array(R*A*M),L=new Float32Array(S*A*M),U=new Float32Array(v*A*M);for(let w=0;w<M;w++){const O=w%3*2/3-1,b=w>2?0:-1,N=[O,b,0,O+2/3,b,0,O+2/3,b+1,0,O,b,0,O+2/3,b+1,0,O,b+1,0];T.set(N,R*A*w),L.set(g,S*A*w);const G=[w,w,w,w,w,w];U.set(G,v*A*w)}const F=new Cn;F.setAttribute("position",new ia(T,R)),F.setAttribute("uv",new ia(L,S)),F.setAttribute("faceIndex",new ia(U,v)),s.push(new Pt(F,null)),l>Ts&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Vv(r,t,i){const s=new na(r,t,i);return s.texture.mapping=Vu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function to(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function _A(r,t,i){return new sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function vA(r,t,i){const s=new Float32Array(ar),l=new X(0,1,0);return new sa({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function kv(){return new sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function Xv(){return new sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function qu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class ny extends na{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new qx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new qe(5,5,5),c=new sa({name:"CubemapFromEquirect",uniforms:po(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:oi,blending:La});c.uniforms.tEquirect.value=i;const f=new Pt(l,c),d=i.minFilter;return i.minFilter===sr&&(i.minFilter=Zn),new ME(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function xA(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?f(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===sd||M===rd)if(t.has(g)){const A=t.get(g).texture;return d(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const R=new ny(A.height);return R.fromEquirectangularTexture(r,g),t.set(g,R),g.addEventListener("dispose",p),d(R.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const M=g.mapping,A=M===sd||M===rd,R=M===or||M===fo;if(A||R){let S=i.get(g);const v=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new Gv(r)),S=A?s.fromEquirectangular(g,S):s.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const T=g.image;return A&&T&&T.height>0||R&&T&&m(T)?(s===null&&(s=new Gv(r)),S=A?s.fromEquirectangular(g):s.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",_),S.texture):null}}}return g}function d(g,M){return M===sd?g.mapping=or:M===rd&&(g.mapping=fo),g}function m(g){let M=0;const A=6;for(let R=0;R<A;R++)g[R]!==void 0&&M++;return M===A}function p(g){const M=g.target;M.removeEventListener("dispose",p);const A=t.get(M);A!==void 0&&(t.delete(M),A.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const A=i.get(M);A!==void 0&&(i.delete(M),A.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function yA(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Lp("WebGLRenderer: "+s+" extension not supported."),l}}}function SA(r,t,i,s){const l={},c=new WeakMap;function f(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const A in g.attributes)t.remove(g.attributes[A]);g.removeEventListener("dispose",f),delete l[g.id];const M=c.get(g);M&&(t.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(x,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const M in g)t.update(g[M],r.ARRAY_BUFFER)}function p(x){const g=[],M=x.index,A=x.attributes.position;let R=0;if(A===void 0)return;if(M!==null){const T=M.array;R=M.version;for(let L=0,U=T.length;L<U;L+=3){const F=T[L+0],w=T[L+1],O=T[L+2];g.push(F,w,w,O,O,F)}}else{const T=A.array;R=A.version;for(let L=0,U=T.length/3-1;L<U;L+=3){const F=L+0,w=L+1,O=L+2;g.push(F,w,w,O,O,F)}}const S=new(A.count>=65535?Yx:Xx)(g,1);S.version=R;const v=c.get(x);v&&t.remove(v),c.set(x,S)}function _(x){const g=c.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:_}}function MA(r,t,i){let s;function l(x){s=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function m(x,g){r.drawElements(s,g,c,x*f),i.update(g,s,1)}function p(x,g,M){M!==0&&(r.drawElementsInstanced(s,g,c,x*f,M),i.update(g,s,M))}function _(x,g,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,x,0,M);let R=0;for(let S=0;S<M;S++)R+=g[S];i.update(R,s,1)}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function bA(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Re("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function EA(r,t,i){const s=new WeakMap,l=new pn;function c(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==x){let G=function(){b.dispose(),s.delete(d),d.removeEventListener("dispose",G)};var M=G;g!==void 0&&g.texture.dispose();const A=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let U=0;A===!0&&(U=1),R===!0&&(U=2),S===!0&&(U=3);let F=d.attributes.position.count*U,w=1;F>t.maxTextureSize&&(w=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const O=new Float32Array(F*w*4*x),b=new Vx(O,F,w,x);b.type=$i,b.needsUpdate=!0;const N=U*4;for(let H=0;H<x;H++){const k=v[H],rt=T[H],ot=L[H],Y=F*w*4*H;for(let z=0;z<k.count;z++){const B=z*N;A===!0&&(l.fromBufferAttribute(k,z),O[Y+B+0]=l.x,O[Y+B+1]=l.y,O[Y+B+2]=l.z,O[Y+B+3]=0),R===!0&&(l.fromBufferAttribute(rt,z),O[Y+B+4]=l.x,O[Y+B+5]=l.y,O[Y+B+6]=l.z,O[Y+B+7]=0),S===!0&&(l.fromBufferAttribute(ot,z),O[Y+B+8]=l.x,O[Y+B+9]=l.y,O[Y+B+10]=l.z,O[Y+B+11]=ot.itemSize===4?l.w:1)}}g={count:x,texture:b,size:new ie(F,w)},s.set(d,g),d.addEventListener("dispose",G)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let A=0;for(let S=0;S<p.length;S++)A+=p[S];const R=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function TA(r,t,i,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,x=p.geometry,g=t.get(p,x);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:d}}const AA={[Ax]:"LINEAR_TONE_MAPPING",[wx]:"REINHARD_TONE_MAPPING",[Rx]:"CINEON_TONE_MAPPING",[Cx]:"ACES_FILMIC_TONE_MAPPING",[Ux]:"AGX_TONE_MAPPING",[Lx]:"NEUTRAL_TONE_MAPPING",[Dx]:"CUSTOM_TONE_MAPPING"};function wA(r,t,i,s,l){const c=new na(t,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new ho(t,i):void 0}),f=new na(t,i,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),d=new Cn;d.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Le([0,2,0,0,2,0],2));const m=new pE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Pt(d,m),_=new im(-1,1,1,-1,0,1);let x=null,g=null,M=!1,A,R=null,S=[],v=!1;this.setSize=function(T,L){c.setSize(T,L),f.setSize(T,L);for(let U=0;U<S.length;U++){const F=S[U];F.setSize&&F.setSize(T,L)}},this.setEffects=function(T){S=T,v=S.length>0&&S[0].isRenderPass===!0;const L=c.width,U=c.height;for(let F=0;F<S.length;F++){const w=S[F];w.setSize&&w.setSize(L,U)}},this.begin=function(T,L){if(M||T.toneMapping===ea&&S.length===0)return!1;if(R=L,L!==null){const U=L.width,F=L.height;(c.width!==U||c.height!==F)&&this.setSize(U,F)}return v===!1&&T.setRenderTarget(c),A=T.toneMapping,T.toneMapping=ea,!0},this.hasRenderPass=function(){return v},this.end=function(T,L){T.toneMapping=A,M=!0;let U=c,F=f;for(let w=0;w<S.length;w++){const O=S[w];if(O.enabled!==!1&&(O.render(T,F,U,L),O.needsSwap!==!1)){const b=U;U=F,F=b}}if(x!==T.outputColorSpace||g!==T.toneMapping){x=T.outputColorSpace,g=T.toneMapping,m.defines={},we.getTransfer(x)===Ve&&(m.defines.SRGB_TRANSFER="");const w=AA[g];w&&(m.defines[w]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,T.setRenderTarget(R),T.render(p,_),R=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const iy=new $n,Pp=new ho(1,1),ay=new Vx,sy=new Yb,ry=new qx,Yv=[],Wv=[],qv=new Float32Array(16),jv=new Float32Array(9),Zv=new Float32Array(4);function vo(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Yv[l];if(c===void 0&&(c=new Float32Array(l),Yv[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function Dn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Un(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function ju(r,t){let i=Wv[t];i===void 0&&(i=new Int32Array(t),Wv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function RA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function CA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Dn(i,t))return;r.uniform2fv(this.addr,t),Un(i,t)}}function DA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Dn(i,t))return;r.uniform3fv(this.addr,t),Un(i,t)}}function UA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Dn(i,t))return;r.uniform4fv(this.addr,t),Un(i,t)}}function LA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Dn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Un(i,t)}else{if(Dn(i,s))return;Zv.set(s),r.uniformMatrix2fv(this.addr,!1,Zv),Un(i,s)}}function NA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Dn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Un(i,t)}else{if(Dn(i,s))return;jv.set(s),r.uniformMatrix3fv(this.addr,!1,jv),Un(i,s)}}function PA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Dn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Un(i,t)}else{if(Dn(i,s))return;qv.set(s),r.uniformMatrix4fv(this.addr,!1,qv),Un(i,s)}}function OA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function IA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Dn(i,t))return;r.uniform2iv(this.addr,t),Un(i,t)}}function zA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Dn(i,t))return;r.uniform3iv(this.addr,t),Un(i,t)}}function FA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Dn(i,t))return;r.uniform4iv(this.addr,t),Un(i,t)}}function BA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function HA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Dn(i,t))return;r.uniform2uiv(this.addr,t),Un(i,t)}}function GA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Dn(i,t))return;r.uniform3uiv(this.addr,t),Un(i,t)}}function VA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Dn(i,t))return;r.uniform4uiv(this.addr,t),Un(i,t)}}function kA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Pp.compareFunction=i.isReversedDepthBuffer()?qp:Wp,c=Pp):c=iy,i.setTexture2D(t||c,l)}function XA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||sy,l)}function YA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||ry,l)}function WA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||ay,l)}function qA(r){switch(r){case 5126:return RA;case 35664:return CA;case 35665:return DA;case 35666:return UA;case 35674:return LA;case 35675:return NA;case 35676:return PA;case 5124:case 35670:return OA;case 35667:case 35671:return IA;case 35668:case 35672:return zA;case 35669:case 35673:return FA;case 5125:return BA;case 36294:return HA;case 36295:return GA;case 36296:return VA;case 35678:case 36198:case 36298:case 36306:case 35682:return kA;case 35679:case 36299:case 36307:return XA;case 35680:case 36300:case 36308:case 36293:return YA;case 36289:case 36303:case 36311:case 36292:return WA}}function jA(r,t){r.uniform1fv(this.addr,t)}function ZA(r,t){const i=vo(t,this.size,2);r.uniform2fv(this.addr,i)}function KA(r,t){const i=vo(t,this.size,3);r.uniform3fv(this.addr,i)}function QA(r,t){const i=vo(t,this.size,4);r.uniform4fv(this.addr,i)}function JA(r,t){const i=vo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function $A(r,t){const i=vo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function tw(r,t){const i=vo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function ew(r,t){r.uniform1iv(this.addr,t)}function nw(r,t){r.uniform2iv(this.addr,t)}function iw(r,t){r.uniform3iv(this.addr,t)}function aw(r,t){r.uniform4iv(this.addr,t)}function sw(r,t){r.uniform1uiv(this.addr,t)}function rw(r,t){r.uniform2uiv(this.addr,t)}function ow(r,t){r.uniform3uiv(this.addr,t)}function lw(r,t){r.uniform4uiv(this.addr,t)}function cw(r,t,i){const s=this.cache,l=t.length,c=ju(i,l);Dn(s,c)||(r.uniform1iv(this.addr,c),Un(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Pp:f=iy;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,c[d])}function uw(r,t,i){const s=this.cache,l=t.length,c=ju(i,l);Dn(s,c)||(r.uniform1iv(this.addr,c),Un(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||sy,c[f])}function fw(r,t,i){const s=this.cache,l=t.length,c=ju(i,l);Dn(s,c)||(r.uniform1iv(this.addr,c),Un(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||ry,c[f])}function hw(r,t,i){const s=this.cache,l=t.length,c=ju(i,l);Dn(s,c)||(r.uniform1iv(this.addr,c),Un(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||ay,c[f])}function dw(r){switch(r){case 5126:return jA;case 35664:return ZA;case 35665:return KA;case 35666:return QA;case 35674:return JA;case 35675:return $A;case 35676:return tw;case 5124:case 35670:return ew;case 35667:case 35671:return nw;case 35668:case 35672:return iw;case 35669:case 35673:return aw;case 5125:return sw;case 36294:return rw;case 36295:return ow;case 36296:return lw;case 35678:case 36198:case 36298:case 36306:case 35682:return cw;case 35679:case 36299:case 36307:return uw;case 35680:case 36300:case 36308:case 36293:return fw;case 36289:case 36303:case 36311:case 36292:return hw}}class pw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=qA(i.type)}}class mw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=dw(i.type)}}class gw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Id=/(\w+)(\])?(\[|\.)?/g;function Kv(r,t){r.seq.push(t),r.map[t.id]=t}function _w(r,t,i){const s=r.name,l=s.length;for(Id.lastIndex=0;;){const c=Id.exec(s),f=Id.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){Kv(i,p===void 0?new pw(d,r,t):new mw(d,r,t));break}else{let x=i.map[d];x===void 0&&(x=new gw(d),Kv(i,x)),i=x}}}class Uu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),m=t.getUniformLocation(i,d.name);_w(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function Qv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const vw=37297;let xw=0;function yw(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const Jv=new oe;function Sw(r){we._getMatrix(Jv,we.workingColorSpace,r);const t=`mat3( ${Jv.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(r)){case zu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return te("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function $v(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+yw(r.getShaderSource(t),d)}else return c}function Mw(r,t){const i=Sw(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const bw={[Ax]:"Linear",[wx]:"Reinhard",[Rx]:"Cineon",[Cx]:"ACESFilmic",[Ux]:"AgX",[Lx]:"Neutral",[Dx]:"Custom"};function Ew(r,t){const i=bw[t];return i===void 0?(te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const vu=new X;function Tw(){we.getLuminanceCoefficients(vu);const r=vu.x.toFixed(4),t=vu.y.toFixed(4),i=vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Aw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Al).join(`
`)}function ww(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function Rw(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function Al(r){return r!==""}function tx(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ex(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Op(r){return r.replace(Cw,Uw)}const Dw=new Map;function Uw(r,t){let i=de[t];if(i===void 0){const s=Dw.get(t);if(s!==void 0)i=de[s],te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Op(i)}const Lw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nx(r){return r.replace(Lw,Nw)}function Nw(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function ix(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Pw={[Au]:"SHADOWMAP_TYPE_PCF",[Tl]:"SHADOWMAP_TYPE_VSM"};function Ow(r){return Pw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Iw={[or]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE",[Vu]:"ENVMAP_TYPE_CUBE_UV"};function zw(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Iw[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Fw={[fo]:"ENVMAP_MODE_REFRACTION"};function Bw(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Fw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Hw={[Tx]:"ENVMAP_BLENDING_MULTIPLY",[cb]:"ENVMAP_BLENDING_MIX",[ub]:"ENVMAP_BLENDING_ADD"};function Gw(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Hw[r.combine]||"ENVMAP_BLENDING_NONE"}function Vw(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function kw(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=Ow(i),p=zw(i),_=Bw(i),x=Gw(i),g=Vw(i),M=Aw(i),A=ww(c),R=l.createProgram();let S,v,T=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Al).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Al).join(`
`),v.length>0&&(v+=`
`)):(S=[ix(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Al).join(`
`),v=[ix(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ea?"#define TONE_MAPPING":"",i.toneMapping!==ea?de.tonemapping_pars_fragment:"",i.toneMapping!==ea?Ew("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,Mw("linearToOutputTexel",i.outputColorSpace),Tw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Al).join(`
`)),f=Op(f),f=tx(f,i),f=ex(f,i),d=Op(d),d=tx(d,i),d=ex(d,i),f=nx(f),d=nx(d),i.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=T+S+f,U=T+v+d,F=Qv(l,l.VERTEX_SHADER,L),w=Qv(l,l.FRAGMENT_SHADER,U);l.attachShader(R,F),l.attachShader(R,w),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function O(H){if(r.debug.checkShaderErrors){const k=l.getProgramInfoLog(R)||"",rt=l.getShaderInfoLog(F)||"",ot=l.getShaderInfoLog(w)||"",Y=k.trim(),z=rt.trim(),B=ot.trim();let $=!0,ct=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,F,w);else{const mt=$v(l,F,"vertex"),I=$v(l,w,"fragment");Re("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Y+`
`+mt+`
`+I)}else Y!==""?te("WebGLProgram: Program Info Log:",Y):(z===""||B==="")&&(ct=!1);ct&&(H.diagnostics={runnable:$,programLog:Y,vertexShader:{log:z,prefix:S},fragmentShader:{log:B,prefix:v}})}l.deleteShader(F),l.deleteShader(w),b=new Uu(l,R),N=Rw(l,R)}let b;this.getUniforms=function(){return b===void 0&&O(this),b};let N;this.getAttributes=function(){return N===void 0&&O(this),N};let G=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=l.getProgramParameter(R,vw)),G},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=xw++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=F,this.fragmentShader=w,this}let Xw=0;class Yw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Ww(t),i.set(t,s)),s}}class Ww{constructor(t){this.id=Xw++,this.code=t,this.usedTimes=0}}function qw(r){return r===lr||r===Pu||r===Ou}function jw(r,t,i,s,l,c){const f=new Kp,d=new Yw,m=new Set,p=[],_=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return m.add(b),b===0?"uv":`uv${b}`}function R(b,N,G,H,k,rt){const ot=H.fog,Y=k.geometry,z=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,$=t.get(b.envMap||z,B),ct=$&&$.mapping===Vu?$.image.height:null,mt=M[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&te("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const I=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Q=I!==void 0?I.length:0;let vt=0;Y.morphAttributes.position!==void 0&&(vt=1),Y.morphAttributes.normal!==void 0&&(vt=2),Y.morphAttributes.color!==void 0&&(vt=3);let Et,Rt,lt,St;if(mt){const ne=Qi[mt];Et=ne.vertexShader,Rt=ne.fragmentShader}else Et=b.vertexShader,Rt=b.fragmentShader,d.update(b),lt=d.getVertexShaderID(b),St=d.getFragmentShaderID(b);const Tt=r.getRenderTarget(),Gt=r.state.buffers.depth.getReversed(),ee=k.isInstancedMesh===!0,Jt=k.isBatchedMesh===!0,Ze=!!b.map,pe=!!b.matcap,be=!!$,Ie=!!b.aoMap,ue=!!b.lightMap,mn=!!b.bumpMap,$e=!!b.normalMap,On=!!b.displacementMap,j=!!b.emissiveMap,un=!!b.metalnessMap,ge=!!b.roughnessMap,ke=b.anisotropy>0,wt=b.clearcoat>0,sn=b.dispersion>0,P=b.iridescence>0,E=b.sheen>0,J=b.transmission>0,_t=ke&&!!b.anisotropyMap,bt=wt&&!!b.clearcoatMap,Ct=wt&&!!b.clearcoatNormalMap,Nt=wt&&!!b.clearcoatRoughnessMap,ft=P&&!!b.iridescenceMap,ht=P&&!!b.iridescenceThicknessMap,Ot=E&&!!b.sheenColorMap,It=E&&!!b.sheenRoughnessMap,Ut=!!b.specularMap,Dt=!!b.specularColorMap,ae=!!b.specularIntensityMap,se=J&&!!b.transmissionMap,ve=J&&!!b.thicknessMap,W=!!b.gradientMap,At=!!b.alphaMap,pt=b.alphaTest>0,Bt=!!b.alphaHash,Lt=!!b.extensions;let Mt=ea;b.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Mt=r.toneMapping);const qt={shaderID:mt,shaderType:b.type,shaderName:b.name,vertexShader:Et,fragmentShader:Rt,defines:b.defines,customVertexShaderID:lt,customFragmentShaderID:St,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Jt,batchingColor:Jt&&k._colorsTexture!==null,instancing:ee,instancingColor:ee&&k.instanceColor!==null,instancingMorph:ee&&k.morphTexture!==null,outputColorSpace:Tt===null?r.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:we.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ze,matcap:pe,envMap:be,envMapMode:be&&$.mapping,envMapCubeUVHeight:ct,aoMap:Ie,lightMap:ue,bumpMap:mn,normalMap:$e,displacementMap:On,emissiveMap:j,normalMapObjectSpace:$e&&b.normalMapType===db,normalMapTangentSpace:$e&&b.normalMapType===Up,packedNormalMap:$e&&b.normalMapType===Up&&qw(b.normalMap.format),metalnessMap:un,roughnessMap:ge,anisotropy:ke,anisotropyMap:_t,clearcoat:wt,clearcoatMap:bt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Nt,dispersion:sn,iridescence:P,iridescenceMap:ft,iridescenceThicknessMap:ht,sheen:E,sheenColorMap:Ot,sheenRoughnessMap:It,specularMap:Ut,specularColorMap:Dt,specularIntensityMap:ae,transmission:J,transmissionMap:se,thicknessMap:ve,gradientMap:W,opaque:b.transparent===!1&&b.blending===oo&&b.alphaToCoverage===!1,alphaMap:At,alphaTest:pt,alphaHash:Bt,combine:b.combine,mapUv:Ze&&A(b.map.channel),aoMapUv:Ie&&A(b.aoMap.channel),lightMapUv:ue&&A(b.lightMap.channel),bumpMapUv:mn&&A(b.bumpMap.channel),normalMapUv:$e&&A(b.normalMap.channel),displacementMapUv:On&&A(b.displacementMap.channel),emissiveMapUv:j&&A(b.emissiveMap.channel),metalnessMapUv:un&&A(b.metalnessMap.channel),roughnessMapUv:ge&&A(b.roughnessMap.channel),anisotropyMapUv:_t&&A(b.anisotropyMap.channel),clearcoatMapUv:bt&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:It&&A(b.sheenRoughnessMap.channel),specularMapUv:Ut&&A(b.specularMap.channel),specularColorMapUv:Dt&&A(b.specularColorMap.channel),specularIntensityMapUv:ae&&A(b.specularIntensityMap.channel),transmissionMapUv:se&&A(b.transmissionMap.channel),thicknessMapUv:ve&&A(b.thicknessMap.channel),alphaMapUv:At&&A(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&($e||ke),vertexNormals:!!Y.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(Ze||At),fog:!!ot,useFog:b.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||Y.attributes.normal===void 0&&$e===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Gt,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:vt,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:rt.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:Mt,decodeVideoTexture:Ze&&b.map.isVideoTexture===!0&&we.getTransfer(b.map.colorSpace)===Ve,decodeVideoTextureEmissive:j&&b.emissiveMap.isVideoTexture===!0&&we.getTransfer(b.emissiveMap.colorSpace)===Ve,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ji,flipSided:b.side===oi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Lt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&b.extensions.multiDraw===!0||Jt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function S(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const G in b.defines)N.push(G),N.push(b.defines[G]);return b.isRawShaderMaterial===!1&&(v(N,b),T(N,b),N.push(r.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function v(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function T(b,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),N.packedNormalMap&&f.enable(22),N.vertexNormals&&f.enable(23),b.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),N.numLightProbeGrids>0&&f.enable(22),b.push(f.mask)}function L(b){const N=M[b.type];let G;if(N){const H=Qi[N];G=fE.clone(H.uniforms)}else G=b.uniforms;return G}function U(b,N){let G=_.get(N);return G!==void 0?++G.usedTimes:(G=new kw(r,N,b,l),p.push(G),_.set(N,G)),G}function F(b){if(--b.usedTimes===0){const N=p.indexOf(b);p[N]=p[p.length-1],p.pop(),_.delete(b.cacheKey),b.destroy()}}function w(b){d.remove(b)}function O(){d.dispose()}return{getParameters:R,getProgramCacheKey:S,getUniforms:L,acquireProgram:U,releaseProgram:F,releaseShaderCache:w,programs:p,dispose:O}}function Zw(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function Kw(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function ax(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function sx(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function d(g,M,A,R,S,v){let T=r[t];return T===void 0?(T={id:g.id,object:g,geometry:M,material:A,materialVariant:f(g),groupOrder:R,renderOrder:g.renderOrder,z:S,group:v},r[t]=T):(T.id=g.id,T.object=g,T.geometry=M,T.material=A,T.materialVariant=f(g),T.groupOrder=R,T.renderOrder=g.renderOrder,T.z=S,T.group=v),t++,T}function m(g,M,A,R,S,v){const T=d(g,M,A,R,S,v);A.transmission>0?s.push(T):A.transparent===!0?l.push(T):i.push(T)}function p(g,M,A,R,S,v){const T=d(g,M,A,R,S,v);A.transmission>0?s.unshift(T):A.transparent===!0?l.unshift(T):i.unshift(T)}function _(g,M){i.length>1&&i.sort(g||Kw),s.length>1&&s.sort(M||ax),l.length>1&&l.sort(M||ax)}function x(){for(let g=t,M=r.length;g<M;g++){const A=r[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:x,sort:_}}function Qw(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new sx,r.set(s,[f])):l>=c.length?(f=new sx,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function Jw(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new X,color:new me};break;case"SpotLight":i={position:new X,direction:new X,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new X,color:new me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new X,skyColor:new me,groundColor:new me};break;case"RectAreaLight":i={color:new me,position:new X,halfWidth:new X,halfHeight:new X};break}return r[t.id]=i,i}}}function $w(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let tR=0;function eR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function nR(r){const t=new Jw,i=$w(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new X);const l=new X,c=new an,f=new an;function d(p){let _=0,x=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let M=0,A=0,R=0,S=0,v=0,T=0,L=0,U=0,F=0,w=0,O=0;p.sort(eR);for(let N=0,G=p.length;N<G;N++){const H=p[N],k=H.color,rt=H.intensity,ot=H.distance;let Y=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===lr?Y=H.shadow.map.texture:Y=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=k.r*rt,x+=k.g*rt,g+=k.b*rt;else if(H.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(H.sh.coefficients[z],rt);O++}else if(H.isDirectionalLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const B=H.shadow,$=i.get(H);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,s.directionalShadow[M]=$,s.directionalShadowMap[M]=Y,s.directionalShadowMatrix[M]=H.shadow.matrix,T++}s.directional[M]=z,M++}else if(H.isSpotLight){const z=t.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(k).multiplyScalar(rt),z.distance=ot,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,s.spot[R]=z;const B=H.shadow;if(H.map&&(s.spotLightMap[F]=H.map,F++,B.updateMatrices(H),H.castShadow&&w++),s.spotLightMatrix[R]=B.matrix,H.castShadow){const $=i.get(H);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,s.spotShadow[R]=$,s.spotShadowMap[R]=Y,U++}R++}else if(H.isRectAreaLight){const z=t.get(H);z.color.copy(k).multiplyScalar(rt),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=z,S++}else if(H.isPointLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const B=H.shadow,$=i.get(H);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,$.shadowCameraNear=B.camera.near,$.shadowCameraFar=B.camera.far,s.pointShadow[A]=$,s.pointShadowMap[A]=Y,s.pointShadowMatrix[A]=H.shadow.matrix,L++}s.point[A]=z,A++}else if(H.isHemisphereLight){const z=t.get(H);z.skyColor.copy(H.color).multiplyScalar(rt),z.groundColor.copy(H.groundColor).multiplyScalar(rt),s.hemi[v]=z,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==M||b.pointLength!==A||b.spotLength!==R||b.rectAreaLength!==S||b.hemiLength!==v||b.numDirectionalShadows!==T||b.numPointShadows!==L||b.numSpotShadows!==U||b.numSpotMaps!==F||b.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=S,s.point.length=A,s.hemi.length=v,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=U+F-w,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=w,s.numLightProbes=O,b.directionalLength=M,b.pointLength=A,b.spotLength=R,b.rectAreaLength=S,b.hemiLength=v,b.numDirectionalShadows=T,b.numPointShadows=L,b.numSpotShadows=U,b.numSpotMaps=F,b.numLightProbes=O,s.version=tR++)}function m(p,_){let x=0,g=0,M=0,A=0,R=0;const S=_.matrixWorldInverse;for(let v=0,T=p.length;v<T;v++){const L=p[v];if(L.isDirectionalLight){const U=s.directional[x];U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),x++}else if(L.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const U=s.rectArea[A];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(S),f.identity(),c.copy(L.matrixWorld),c.premultiply(S),f.extractRotation(c),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),A++}else if(L.isPointLight){const U=s.point[g];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(S),g++}else if(L.isHemisphereLight){const U=s.hemi[R];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(S),R++}}}return{setup:d,setupView:m,state:s}}function rx(r){const t=new nR(r),i=[],s=[],l=[];function c(g){x.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function d(g){s.push(g)}function m(g){l.push(g)}function p(){t.setup(i)}function _(g){t.setupView(i,g)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:p,setupLightsView:_,pushLight:f,pushShadow:d,pushLightProbeGrid:m}}function iR(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new rx(r),t.set(l,[d])):c>=f.length?(d=new rx(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const aR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rR=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],oR=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],ox=new an,yl=new X,zd=new X;function lR(r,t,i){let s=new Jp;const l=new ie,c=new ie,f=new pn,d=new mE,m=new gE,p={},_=i.maxTextureSize,x={[ws]:oi,[oi]:ws,[Ji]:Ji},g=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:aR,fragmentShader:sR}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const A=new Cn;A.setAttribute("position",new ia(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Pt(A,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Au;let v=this.type;this.render=function(w,O,b){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||w.length===0)return;this.type===Ex&&(te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Au);const N=r.getRenderTarget(),G=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),k=r.state;k.setBlending(La),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const rt=v!==this.type;rt&&O.traverse(function(ot){ot.material&&(Array.isArray(ot.material)?ot.material.forEach(Y=>Y.needsUpdate=!0):ot.material.needsUpdate=!0)});for(let ot=0,Y=w.length;ot<Y;ot++){const z=w[ot],B=z.shadow;if(B===void 0){te("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const $=B.getFrameExtents();l.multiply($),c.copy(B.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/$.x),l.x=c.x*$.x,B.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/$.y),l.y=c.y*$.y,B.mapSize.y=c.y));const ct=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ct,B.map===null||rt===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Tl){if(z.isPointLight){te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new na(l.x,l.y,{format:lr,type:Pa,minFilter:Zn,magFilter:Zn,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new ho(l.x,l.y,$i),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=Oa,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Vn,B.map.depthTexture.magFilter=Vn}else z.isPointLight?(B.map=new ny(l.x),B.map.depthTexture=new cE(l.x,aa)):(B.map=new na(l.x,l.y),B.map.depthTexture=new ho(l.x,l.y,aa)),B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=Oa,this.type===Au?(B.map.depthTexture.compareFunction=ct?qp:Wp,B.map.depthTexture.minFilter=Zn,B.map.depthTexture.magFilter=Zn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Vn,B.map.depthTexture.magFilter=Vn);B.camera.updateProjectionMatrix()}const mt=B.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<mt;I++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,I),r.clear();else{I===0&&(r.setRenderTarget(B.map),r.clear());const Q=B.getViewport(I);f.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),k.viewport(f)}if(z.isPointLight){const Q=B.camera,vt=B.matrix,Et=z.distance||Q.far;Et!==Q.far&&(Q.far=Et,Q.updateProjectionMatrix()),yl.setFromMatrixPosition(z.matrixWorld),Q.position.copy(yl),zd.copy(Q.position),zd.add(rR[I]),Q.up.copy(oR[I]),Q.lookAt(zd),Q.updateMatrixWorld(),vt.makeTranslation(-yl.x,-yl.y,-yl.z),ox.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(ox,Q.coordinateSystem,Q.reversedDepth)}else B.updateMatrices(z);s=B.getFrustum(),U(O,b,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===Tl&&T(B,b),B.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(N,G,H)};function T(w,O){const b=t.update(R);g.defines.VSM_SAMPLES!==w.blurSamples&&(g.defines.VSM_SAMPLES=w.blurSamples,M.defines.VSM_SAMPLES=w.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new na(l.x,l.y,{format:lr,type:Pa})),g.uniforms.shadow_pass.value=w.map.depthTexture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(O,null,b,g,R,null),M.uniforms.shadow_pass.value=w.mapPass.texture,M.uniforms.resolution.value=w.mapSize,M.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(O,null,b,M,R,null)}function L(w,O,b,N){let G=null;const H=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(H!==void 0)G=H;else if(G=b.isPointLight===!0?m:d,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const k=G.uuid,rt=O.uuid;let ot=p[k];ot===void 0&&(ot={},p[k]=ot);let Y=ot[rt];Y===void 0&&(Y=G.clone(),ot[rt]=Y,O.addEventListener("dispose",F)),G=Y}if(G.visible=O.visible,G.wireframe=O.wireframe,N===Tl?G.side=O.shadowSide!==null?O.shadowSide:O.side:G.side=O.shadowSide!==null?O.shadowSide:x[O.side],G.alphaMap=O.alphaMap,G.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,G.map=O.map,G.clipShadows=O.clipShadows,G.clippingPlanes=O.clippingPlanes,G.clipIntersection=O.clipIntersection,G.displacementMap=O.displacementMap,G.displacementScale=O.displacementScale,G.displacementBias=O.displacementBias,G.wireframeLinewidth=O.wireframeLinewidth,G.linewidth=O.linewidth,b.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const k=r.properties.get(G);k.light=b}return G}function U(w,O,b,N,G){if(w.visible===!1)return;if(w.layers.test(O.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&G===Tl)&&(!w.frustumCulled||s.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const rt=t.update(w),ot=w.material;if(Array.isArray(ot)){const Y=rt.groups;for(let z=0,B=Y.length;z<B;z++){const $=Y[z],ct=ot[$.materialIndex];if(ct&&ct.visible){const mt=L(w,ct,N,G);w.onBeforeShadow(r,w,O,b,rt,mt,$),r.renderBufferDirect(b,null,rt,mt,w,$),w.onAfterShadow(r,w,O,b,rt,mt,$)}}}else if(ot.visible){const Y=L(w,ot,N,G);w.onBeforeShadow(r,w,O,b,rt,Y,null),r.renderBufferDirect(b,null,rt,Y,w,null),w.onAfterShadow(r,w,O,b,rt,Y,null)}}const k=w.children;for(let rt=0,ot=k.length;rt<ot;rt++)U(k[rt],O,b,N,G)}function F(w){w.target.removeEventListener("dispose",F);for(const b in p){const N=p[b],G=w.target.uuid;G in N&&(N[G].dispose(),delete N[G])}}}function cR(r,t){function i(){let W=!1;const At=new pn;let pt=null;const Bt=new pn(0,0,0,0);return{setMask:function(Lt){pt!==Lt&&!W&&(r.colorMask(Lt,Lt,Lt,Lt),pt=Lt)},setLocked:function(Lt){W=Lt},setClear:function(Lt,Mt,qt,ne,fn){fn===!0&&(Lt*=ne,Mt*=ne,qt*=ne),At.set(Lt,Mt,qt,ne),Bt.equals(At)===!1&&(r.clearColor(Lt,Mt,qt,ne),Bt.copy(At))},reset:function(){W=!1,pt=null,Bt.set(-1,0,0,0)}}}function s(){let W=!1,At=!1,pt=null,Bt=null,Lt=null;return{setReversed:function(Mt){if(At!==Mt){const qt=t.get("EXT_clip_control");Mt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),At=Mt;const ne=Lt;Lt=null,this.setClear(ne)}},getReversed:function(){return At},setTest:function(Mt){Mt?Tt(r.DEPTH_TEST):Gt(r.DEPTH_TEST)},setMask:function(Mt){pt!==Mt&&!W&&(r.depthMask(Mt),pt=Mt)},setFunc:function(Mt){if(At&&(Mt=bb[Mt]),Bt!==Mt){switch(Mt){case Wd:r.depthFunc(r.NEVER);break;case qd:r.depthFunc(r.ALWAYS);break;case jd:r.depthFunc(r.LESS);break;case uo:r.depthFunc(r.LEQUAL);break;case Zd:r.depthFunc(r.EQUAL);break;case Kd:r.depthFunc(r.GEQUAL);break;case Qd:r.depthFunc(r.GREATER);break;case Jd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=Mt}},setLocked:function(Mt){W=Mt},setClear:function(Mt){Lt!==Mt&&(Lt=Mt,At&&(Mt=1-Mt),r.clearDepth(Mt))},reset:function(){W=!1,pt=null,Bt=null,Lt=null,At=!1}}}function l(){let W=!1,At=null,pt=null,Bt=null,Lt=null,Mt=null,qt=null,ne=null,fn=null;return{setTest:function(Ne){W||(Ne?Tt(r.STENCIL_TEST):Gt(r.STENCIL_TEST))},setMask:function(Ne){At!==Ne&&!W&&(r.stencilMask(Ne),At=Ne)},setFunc:function(Ne,Mi,li){(pt!==Ne||Bt!==Mi||Lt!==li)&&(r.stencilFunc(Ne,Mi,li),pt=Ne,Bt=Mi,Lt=li)},setOp:function(Ne,Mi,li){(Mt!==Ne||qt!==Mi||ne!==li)&&(r.stencilOp(Ne,Mi,li),Mt=Ne,qt=Mi,ne=li)},setLocked:function(Ne){W=Ne},setClear:function(Ne){fn!==Ne&&(r.clearStencil(Ne),fn=Ne)},reset:function(){W=!1,At=null,pt=null,Bt=null,Lt=null,Mt=null,qt=null,ne=null,fn=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},x={},g={},M=new WeakMap,A=[],R=null,S=!1,v=null,T=null,L=null,U=null,F=null,w=null,O=null,b=new me(0,0,0),N=0,G=!1,H=null,k=null,rt=null,ot=null,Y=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const ct=r.getParameter(r.VERSION);ct.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ct)[1]),B=$>=1):ct.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),B=$>=2);let mt=null,I={};const Q=r.getParameter(r.SCISSOR_BOX),vt=r.getParameter(r.VIEWPORT),Et=new pn().fromArray(Q),Rt=new pn().fromArray(vt);function lt(W,At,pt,Bt){const Lt=new Uint8Array(4),Mt=r.createTexture();r.bindTexture(W,Mt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qt=0;qt<pt;qt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(At,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Lt):r.texImage2D(At+qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Lt);return Mt}const St={};St[r.TEXTURE_2D]=lt(r.TEXTURE_2D,r.TEXTURE_2D,1),St[r.TEXTURE_CUBE_MAP]=lt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[r.TEXTURE_2D_ARRAY]=lt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),St[r.TEXTURE_3D]=lt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Tt(r.DEPTH_TEST),f.setFunc(uo),mn(!1),$e(ev),Tt(r.CULL_FACE),Ie(La);function Tt(W){_[W]!==!0&&(r.enable(W),_[W]=!0)}function Gt(W){_[W]!==!1&&(r.disable(W),_[W]=!1)}function ee(W,At){return g[W]!==At?(r.bindFramebuffer(W,At),g[W]=At,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=At),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=At),!0):!1}function Jt(W,At){let pt=A,Bt=!1;if(W){pt=M.get(At),pt===void 0&&(pt=[],M.set(At,pt));const Lt=W.textures;if(pt.length!==Lt.length||pt[0]!==r.COLOR_ATTACHMENT0){for(let Mt=0,qt=Lt.length;Mt<qt;Mt++)pt[Mt]=r.COLOR_ATTACHMENT0+Mt;pt.length=Lt.length,Bt=!0}}else pt[0]!==r.BACK&&(pt[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(pt)}function Ze(W){return R!==W?(r.useProgram(W),R=W,!0):!1}const pe={[nr]:r.FUNC_ADD,[WM]:r.FUNC_SUBTRACT,[qM]:r.FUNC_REVERSE_SUBTRACT};pe[jM]=r.MIN,pe[ZM]=r.MAX;const be={[KM]:r.ZERO,[QM]:r.ONE,[JM]:r.SRC_COLOR,[Xd]:r.SRC_ALPHA,[ab]:r.SRC_ALPHA_SATURATE,[nb]:r.DST_COLOR,[tb]:r.DST_ALPHA,[$M]:r.ONE_MINUS_SRC_COLOR,[Yd]:r.ONE_MINUS_SRC_ALPHA,[ib]:r.ONE_MINUS_DST_COLOR,[eb]:r.ONE_MINUS_DST_ALPHA,[sb]:r.CONSTANT_COLOR,[rb]:r.ONE_MINUS_CONSTANT_COLOR,[ob]:r.CONSTANT_ALPHA,[lb]:r.ONE_MINUS_CONSTANT_ALPHA};function Ie(W,At,pt,Bt,Lt,Mt,qt,ne,fn,Ne){if(W===La){S===!0&&(Gt(r.BLEND),S=!1);return}if(S===!1&&(Tt(r.BLEND),S=!0),W!==YM){if(W!==v||Ne!==G){if((T!==nr||F!==nr)&&(r.blendEquation(r.FUNC_ADD),T=nr,F=nr),Ne)switch(W){case oo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nv:r.blendFunc(r.ONE,r.ONE);break;case iv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case av:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Re("WebGLState: Invalid blending: ",W);break}else switch(W){case oo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case iv:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case av:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",W);break}L=null,U=null,w=null,O=null,b.set(0,0,0),N=0,v=W,G=Ne}return}Lt=Lt||At,Mt=Mt||pt,qt=qt||Bt,(At!==T||Lt!==F)&&(r.blendEquationSeparate(pe[At],pe[Lt]),T=At,F=Lt),(pt!==L||Bt!==U||Mt!==w||qt!==O)&&(r.blendFuncSeparate(be[pt],be[Bt],be[Mt],be[qt]),L=pt,U=Bt,w=Mt,O=qt),(ne.equals(b)===!1||fn!==N)&&(r.blendColor(ne.r,ne.g,ne.b,fn),b.copy(ne),N=fn),v=W,G=!1}function ue(W,At){W.side===Ji?Gt(r.CULL_FACE):Tt(r.CULL_FACE);let pt=W.side===oi;At&&(pt=!pt),mn(pt),W.blending===oo&&W.transparent===!1?Ie(La):Ie(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Bt=W.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),j(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Tt(r.SAMPLE_ALPHA_TO_COVERAGE):Gt(r.SAMPLE_ALPHA_TO_COVERAGE)}function mn(W){H!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),H=W)}function $e(W){W!==kM?(Tt(r.CULL_FACE),W!==k&&(W===ev?r.cullFace(r.BACK):W===XM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Gt(r.CULL_FACE),k=W}function On(W){W!==rt&&(B&&r.lineWidth(W),rt=W)}function j(W,At,pt){W?(Tt(r.POLYGON_OFFSET_FILL),(ot!==At||Y!==pt)&&(ot=At,Y=pt,f.getReversed()&&(At=-At),r.polygonOffset(At,pt))):Gt(r.POLYGON_OFFSET_FILL)}function un(W){W?Tt(r.SCISSOR_TEST):Gt(r.SCISSOR_TEST)}function ge(W){W===void 0&&(W=r.TEXTURE0+z-1),mt!==W&&(r.activeTexture(W),mt=W)}function ke(W,At,pt){pt===void 0&&(mt===null?pt=r.TEXTURE0+z-1:pt=mt);let Bt=I[pt];Bt===void 0&&(Bt={type:void 0,texture:void 0},I[pt]=Bt),(Bt.type!==W||Bt.texture!==At)&&(mt!==pt&&(r.activeTexture(pt),mt=pt),r.bindTexture(W,At||St[W]),Bt.type=W,Bt.texture=At)}function wt(){const W=I[mt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function sn(){try{r.compressedTexImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function E(){try{r.texSubImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function J(){try{r.texSubImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function _t(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function bt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function Ct(){try{r.texStorage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function Nt(){try{r.texStorage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function ft(){try{r.texImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function ht(){try{r.texImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function Ot(W){return x[W]!==void 0?x[W]:r.getParameter(W)}function It(W,At){x[W]!==At&&(r.pixelStorei(W,At),x[W]=At)}function Ut(W){Et.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Et.copy(W))}function Dt(W){Rt.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Rt.copy(W))}function ae(W,At){let pt=p.get(At);pt===void 0&&(pt=new WeakMap,p.set(At,pt));let Bt=pt.get(W);Bt===void 0&&(Bt=r.getUniformBlockIndex(At,W.name),pt.set(W,Bt))}function se(W,At){const Bt=p.get(At).get(W);m.get(At)!==Bt&&(r.uniformBlockBinding(At,Bt,W.__bindingPointIndex),m.set(At,Bt))}function ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},x={},mt=null,I={},g={},M=new WeakMap,A=[],R=null,S=!1,v=null,T=null,L=null,U=null,F=null,w=null,O=null,b=new me(0,0,0),N=0,G=!1,H=null,k=null,rt=null,ot=null,Y=null,Et.set(0,0,r.canvas.width,r.canvas.height),Rt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Tt,disable:Gt,bindFramebuffer:ee,drawBuffers:Jt,useProgram:Ze,setBlending:Ie,setMaterial:ue,setFlipSided:mn,setCullFace:$e,setLineWidth:On,setPolygonOffset:j,setScissorTest:un,activeTexture:ge,bindTexture:ke,unbindTexture:wt,compressedTexImage2D:sn,compressedTexImage3D:P,texImage2D:ft,texImage3D:ht,pixelStorei:It,getParameter:Ot,updateUBOMapping:ae,uniformBlockBinding:se,texStorage2D:Ct,texStorage3D:Nt,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:_t,compressedTexSubImage3D:bt,scissor:Ut,viewport:Dt,reset:ve}}function uR(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ie,_=new WeakMap,x=new Set;let g;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(P,E){return A?new OffscreenCanvas(P,E):Fu("canvas")}function S(P,E,J){let _t=1;const bt=sn(P);if((bt.width>J||bt.height>J)&&(_t=J/Math.max(bt.width,bt.height)),_t<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ct=Math.floor(_t*bt.width),Nt=Math.floor(_t*bt.height);g===void 0&&(g=R(Ct,Nt));const ft=E?R(Ct,Nt):g;return ft.width=Ct,ft.height=Nt,ft.getContext("2d").drawImage(P,0,0,Ct,Nt),te("WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+Ct+"x"+Nt+")."),ft}else return"data"in P&&te("WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),P;return P}function v(P){return P.generateMipmaps}function T(P){r.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(P,E,J,_t,bt,Ct=!1){if(P!==null){if(r[P]!==void 0)return r[P];te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Nt;_t&&(Nt=t.get("EXT_texture_norm16"),Nt||te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=E;if(E===r.RED&&(J===r.FLOAT&&(ft=r.R32F),J===r.HALF_FLOAT&&(ft=r.R16F),J===r.UNSIGNED_BYTE&&(ft=r.R8),J===r.UNSIGNED_SHORT&&Nt&&(ft=Nt.R16_EXT),J===r.SHORT&&Nt&&(ft=Nt.R16_SNORM_EXT)),E===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.R8UI),J===r.UNSIGNED_SHORT&&(ft=r.R16UI),J===r.UNSIGNED_INT&&(ft=r.R32UI),J===r.BYTE&&(ft=r.R8I),J===r.SHORT&&(ft=r.R16I),J===r.INT&&(ft=r.R32I)),E===r.RG&&(J===r.FLOAT&&(ft=r.RG32F),J===r.HALF_FLOAT&&(ft=r.RG16F),J===r.UNSIGNED_BYTE&&(ft=r.RG8),J===r.UNSIGNED_SHORT&&Nt&&(ft=Nt.RG16_EXT),J===r.SHORT&&Nt&&(ft=Nt.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.RG8UI),J===r.UNSIGNED_SHORT&&(ft=r.RG16UI),J===r.UNSIGNED_INT&&(ft=r.RG32UI),J===r.BYTE&&(ft=r.RG8I),J===r.SHORT&&(ft=r.RG16I),J===r.INT&&(ft=r.RG32I)),E===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),J===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),J===r.UNSIGNED_INT&&(ft=r.RGB32UI),J===r.BYTE&&(ft=r.RGB8I),J===r.SHORT&&(ft=r.RGB16I),J===r.INT&&(ft=r.RGB32I)),E===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),J===r.UNSIGNED_INT&&(ft=r.RGBA32UI),J===r.BYTE&&(ft=r.RGBA8I),J===r.SHORT&&(ft=r.RGBA16I),J===r.INT&&(ft=r.RGBA32I)),E===r.RGB&&(J===r.UNSIGNED_SHORT&&Nt&&(ft=Nt.RGB16_EXT),J===r.SHORT&&Nt&&(ft=Nt.RGB16_SNORM_EXT),J===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),E===r.RGBA){const ht=Ct?zu:we.getTransfer(bt);J===r.FLOAT&&(ft=r.RGBA32F),J===r.HALF_FLOAT&&(ft=r.RGBA16F),J===r.UNSIGNED_BYTE&&(ft=ht===Ve?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT&&Nt&&(ft=Nt.RGBA16_EXT),J===r.SHORT&&Nt&&(ft=Nt.RGBA16_SNORM_EXT),J===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function F(P,E){let J;return P?E===null||E===aa||E===Nl?J=r.DEPTH24_STENCIL8:E===$i?J=r.DEPTH32F_STENCIL8:E===Ll&&(J=r.DEPTH24_STENCIL8,te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===aa||E===Nl?J=r.DEPTH_COMPONENT24:E===$i?J=r.DEPTH_COMPONENT32F:E===Ll&&(J=r.DEPTH_COMPONENT16),J}function w(P,E){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==Vn&&P.minFilter!==Zn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function O(P){const E=P.target;E.removeEventListener("dispose",O),N(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&x.delete(E)}function b(P){const E=P.target;E.removeEventListener("dispose",b),H(E)}function N(P){const E=s.get(P);if(E.__webglInit===void 0)return;const J=P.source,_t=M.get(J);if(_t){const bt=_t[E.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&G(P),Object.keys(_t).length===0&&M.delete(J)}s.remove(P)}function G(P){const E=s.get(P);r.deleteTexture(E.__webglTexture);const J=P.source,_t=M.get(J);delete _t[E.__cacheKey],f.memory.textures--}function H(P){const E=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(E.__webglFramebuffer[_t]))for(let bt=0;bt<E.__webglFramebuffer[_t].length;bt++)r.deleteFramebuffer(E.__webglFramebuffer[_t][bt]);else r.deleteFramebuffer(E.__webglFramebuffer[_t]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[_t])}else{if(Array.isArray(E.__webglFramebuffer))for(let _t=0;_t<E.__webglFramebuffer.length;_t++)r.deleteFramebuffer(E.__webglFramebuffer[_t]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _t=0;_t<E.__webglColorRenderbuffer.length;_t++)E.__webglColorRenderbuffer[_t]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[_t]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=P.textures;for(let _t=0,bt=J.length;_t<bt;_t++){const Ct=s.get(J[_t]);Ct.__webglTexture&&(r.deleteTexture(Ct.__webglTexture),f.memory.textures--),s.remove(J[_t])}s.remove(P)}let k=0;function rt(){k=0}function ot(){return k}function Y(P){k=P}function z(){const P=k;return P>=l.maxTextures&&te("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),k+=1,P}function B(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function $(P,E){const J=s.get(P);if(P.isVideoTexture&&ke(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&J.__version!==P.version){const _t=P.image;if(_t===null)te("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)te("WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(J,P,E);return}}else P.isExternalTexture&&(J.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+E)}function ct(P,E){const J=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){Gt(J,P,E);return}else P.isExternalTexture&&(J.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+E)}function mt(P,E){const J=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){Gt(J,P,E);return}i.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+E)}function I(P,E){const J=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&J.__version!==P.version){ee(J,P,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+E)}const Q={[$d]:r.REPEAT,[Ua]:r.CLAMP_TO_EDGE,[tp]:r.MIRRORED_REPEAT},vt={[Vn]:r.NEAREST,[fb]:r.NEAREST_MIPMAP_NEAREST,[Zc]:r.NEAREST_MIPMAP_LINEAR,[Zn]:r.LINEAR,[od]:r.LINEAR_MIPMAP_NEAREST,[sr]:r.LINEAR_MIPMAP_LINEAR},Et={[pb]:r.NEVER,[xb]:r.ALWAYS,[mb]:r.LESS,[Wp]:r.LEQUAL,[gb]:r.EQUAL,[qp]:r.GEQUAL,[_b]:r.GREATER,[vb]:r.NOTEQUAL};function Rt(P,E){if(E.type===$i&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Zn||E.magFilter===od||E.magFilter===Zc||E.magFilter===sr||E.minFilter===Zn||E.minFilter===od||E.minFilter===Zc||E.minFilter===sr)&&te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Q[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Q[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Q[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,vt[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,vt[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Et[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Vn||E.minFilter!==Zc&&E.minFilter!==sr||E.type===$i&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function lt(P,E){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",O));const _t=E.source;let bt=M.get(_t);bt===void 0&&(bt={},M.set(_t,bt));const Ct=B(E);if(Ct!==P.__cacheKey){bt[Ct]===void 0&&(bt[Ct]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,J=!0),bt[Ct].usedTimes++;const Nt=bt[P.__cacheKey];Nt!==void 0&&(bt[P.__cacheKey].usedTimes--,Nt.usedTimes===0&&G(E)),P.__cacheKey=Ct,P.__webglTexture=bt[Ct].texture}return J}function St(P,E,J){return Math.floor(Math.floor(P/J)/E)}function Tt(P,E,J,_t){const Ct=P.updateRanges;if(Ct.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,J,_t,E.data);else{Ct.sort((It,Ut)=>It.start-Ut.start);let Nt=0;for(let It=1;It<Ct.length;It++){const Ut=Ct[Nt],Dt=Ct[It],ae=Ut.start+Ut.count,se=St(Dt.start,E.width,4),ve=St(Ut.start,E.width,4);Dt.start<=ae+1&&se===ve&&St(Dt.start+Dt.count-1,E.width,4)===se?Ut.count=Math.max(Ut.count,Dt.start+Dt.count-Ut.start):(++Nt,Ct[Nt]=Dt)}Ct.length=Nt+1;const ft=i.getParameter(r.UNPACK_ROW_LENGTH),ht=i.getParameter(r.UNPACK_SKIP_PIXELS),Ot=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let It=0,Ut=Ct.length;It<Ut;It++){const Dt=Ct[It],ae=Math.floor(Dt.start/4),se=Math.ceil(Dt.count/4),ve=ae%E.width,W=Math.floor(ae/E.width),At=se,pt=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ve,W,At,pt,J,_t,E.data)}P.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ft),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ht),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ot)}}function Gt(P,E,J){let _t=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_t=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_t=r.TEXTURE_3D);const bt=lt(P,E),Ct=E.source;i.bindTexture(_t,P.__webglTexture,r.TEXTURE0+J);const Nt=s.get(Ct);if(Ct.version!==Nt.__version||bt===!0){if(i.activeTexture(r.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const pt=we.getPrimaries(we.workingColorSpace),Bt=E.colorSpace===bs?null:we.getPrimaries(E.colorSpace),Lt=E.colorSpace===bs||pt===Bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let ht=S(E.image,!1,l.maxTextureSize);ht=wt(E,ht);const Ot=c.convert(E.format,E.colorSpace),It=c.convert(E.type);let Ut=U(E.internalFormat,Ot,It,E.normalized,E.colorSpace,E.isVideoTexture);Rt(_t,E);let Dt;const ae=E.mipmaps,se=E.isVideoTexture!==!0,ve=Nt.__version===void 0||bt===!0,W=Ct.dataReady,At=w(E,ht);if(E.isDepthTexture)Ut=F(E.format===rr,E.type),ve&&(se?i.texStorage2D(r.TEXTURE_2D,1,Ut,ht.width,ht.height):i.texImage2D(r.TEXTURE_2D,0,Ut,ht.width,ht.height,0,Ot,It,null));else if(E.isDataTexture)if(ae.length>0){se&&ve&&i.texStorage2D(r.TEXTURE_2D,At,Ut,ae[0].width,ae[0].height);for(let pt=0,Bt=ae.length;pt<Bt;pt++)Dt=ae[pt],se?W&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,Dt.width,Dt.height,Ot,It,Dt.data):i.texImage2D(r.TEXTURE_2D,pt,Ut,Dt.width,Dt.height,0,Ot,It,Dt.data);E.generateMipmaps=!1}else se?(ve&&i.texStorage2D(r.TEXTURE_2D,At,Ut,ht.width,ht.height),W&&Tt(E,ht,Ot,It)):i.texImage2D(r.TEXTURE_2D,0,Ut,ht.width,ht.height,0,Ot,It,ht.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){se&&ve&&i.texStorage3D(r.TEXTURE_2D_ARRAY,At,Ut,ae[0].width,ae[0].height,ht.depth);for(let pt=0,Bt=ae.length;pt<Bt;pt++)if(Dt=ae[pt],E.format!==Vi)if(Ot!==null)if(se){if(W)if(E.layerUpdates.size>0){const Lt=Fv(Dt.width,Dt.height,E.format,E.type);for(const Mt of E.layerUpdates){const qt=Dt.data.subarray(Mt*Lt/Dt.data.BYTES_PER_ELEMENT,(Mt+1)*Lt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,Mt,Dt.width,Dt.height,1,Ot,qt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,0,Dt.width,Dt.height,ht.depth,Ot,Dt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pt,Ut,Dt.width,Dt.height,ht.depth,0,Dt.data,0,0);else te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?W&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,0,Dt.width,Dt.height,ht.depth,Ot,It,Dt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,pt,Ut,Dt.width,Dt.height,ht.depth,0,Ot,It,Dt.data)}else{se&&ve&&i.texStorage2D(r.TEXTURE_2D,At,Ut,ae[0].width,ae[0].height);for(let pt=0,Bt=ae.length;pt<Bt;pt++)Dt=ae[pt],E.format!==Vi?Ot!==null?se?W&&i.compressedTexSubImage2D(r.TEXTURE_2D,pt,0,0,Dt.width,Dt.height,Ot,Dt.data):i.compressedTexImage2D(r.TEXTURE_2D,pt,Ut,Dt.width,Dt.height,0,Dt.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?W&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,Dt.width,Dt.height,Ot,It,Dt.data):i.texImage2D(r.TEXTURE_2D,pt,Ut,Dt.width,Dt.height,0,Ot,It,Dt.data)}else if(E.isDataArrayTexture)if(se){if(ve&&i.texStorage3D(r.TEXTURE_2D_ARRAY,At,Ut,ht.width,ht.height,ht.depth),W)if(E.layerUpdates.size>0){const pt=Fv(ht.width,ht.height,E.format,E.type);for(const Bt of E.layerUpdates){const Lt=ht.data.subarray(Bt*pt/ht.data.BYTES_PER_ELEMENT,(Bt+1)*pt/ht.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Bt,ht.width,ht.height,1,Ot,It,Lt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Ot,It,ht.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ut,ht.width,ht.height,ht.depth,0,Ot,It,ht.data);else if(E.isData3DTexture)se?(ve&&i.texStorage3D(r.TEXTURE_3D,At,Ut,ht.width,ht.height,ht.depth),W&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Ot,It,ht.data)):i.texImage3D(r.TEXTURE_3D,0,Ut,ht.width,ht.height,ht.depth,0,Ot,It,ht.data);else if(E.isFramebufferTexture){if(ve)if(se)i.texStorage2D(r.TEXTURE_2D,At,Ut,ht.width,ht.height);else{let pt=ht.width,Bt=ht.height;for(let Lt=0;Lt<At;Lt++)i.texImage2D(r.TEXTURE_2D,Lt,Ut,pt,Bt,0,Ot,It,null),pt>>=1,Bt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const pt=r.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),ht.parentNode!==pt){pt.appendChild(ht),x.add(E),pt.onpaint=ne=>{const fn=ne.changedElements;for(const Ne of x)fn.includes(Ne.image)&&(Ne.needsUpdate=!0)},pt.requestPaint();return}const Bt=0,Lt=r.RGBA,Mt=r.RGBA,qt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Bt,Lt,Mt,qt,ht),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ae.length>0){if(se&&ve){const pt=sn(ae[0]);i.texStorage2D(r.TEXTURE_2D,At,Ut,pt.width,pt.height)}for(let pt=0,Bt=ae.length;pt<Bt;pt++)Dt=ae[pt],se?W&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,Ot,It,Dt):i.texImage2D(r.TEXTURE_2D,pt,Ut,Ot,It,Dt);E.generateMipmaps=!1}else if(se){if(ve){const pt=sn(ht);i.texStorage2D(r.TEXTURE_2D,At,Ut,pt.width,pt.height)}W&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ot,It,ht)}else i.texImage2D(r.TEXTURE_2D,0,Ut,Ot,It,ht);v(E)&&T(_t),Nt.__version=Ct.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ee(P,E,J){if(E.image.length!==6)return;const _t=lt(P,E),bt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+J);const Ct=s.get(bt);if(bt.version!==Ct.__version||_t===!0){i.activeTexture(r.TEXTURE0+J);const Nt=we.getPrimaries(we.workingColorSpace),ft=E.colorSpace===bs?null:we.getPrimaries(E.colorSpace),ht=E.colorSpace===bs||Nt===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Ot=E.isCompressedTexture||E.image[0].isCompressedTexture,It=E.image[0]&&E.image[0].isDataTexture,Ut=[];for(let Mt=0;Mt<6;Mt++)!Ot&&!It?Ut[Mt]=S(E.image[Mt],!0,l.maxCubemapSize):Ut[Mt]=It?E.image[Mt].image:E.image[Mt],Ut[Mt]=wt(E,Ut[Mt]);const Dt=Ut[0],ae=c.convert(E.format,E.colorSpace),se=c.convert(E.type),ve=U(E.internalFormat,ae,se,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,At=Ct.__version===void 0||_t===!0,pt=bt.dataReady;let Bt=w(E,Dt);Rt(r.TEXTURE_CUBE_MAP,E);let Lt;if(Ot){W&&At&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,ve,Dt.width,Dt.height);for(let Mt=0;Mt<6;Mt++){Lt=Ut[Mt].mipmaps;for(let qt=0;qt<Lt.length;qt++){const ne=Lt[qt];E.format!==Vi?ae!==null?W?pt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,qt,0,0,ne.width,ne.height,ae,ne.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,qt,ve,ne.width,ne.height,0,ne.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,qt,0,0,ne.width,ne.height,ae,se,ne.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,qt,ve,ne.width,ne.height,0,ae,se,ne.data)}}}else{if(Lt=E.mipmaps,W&&At){Lt.length>0&&Bt++;const Mt=sn(Ut[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,ve,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(It){W?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Ut[Mt].width,Ut[Mt].height,ae,se,Ut[Mt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ve,Ut[Mt].width,Ut[Mt].height,0,ae,se,Ut[Mt].data);for(let qt=0;qt<Lt.length;qt++){const fn=Lt[qt].image[Mt].image;W?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,qt+1,0,0,fn.width,fn.height,ae,se,fn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,qt+1,ve,fn.width,fn.height,0,ae,se,fn.data)}}else{W?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,ae,se,Ut[Mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ve,ae,se,Ut[Mt]);for(let qt=0;qt<Lt.length;qt++){const ne=Lt[qt];W?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,qt+1,0,0,ae,se,ne.image[Mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,qt+1,ve,ae,se,ne.image[Mt])}}}v(E)&&T(r.TEXTURE_CUBE_MAP),Ct.__version=bt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Jt(P,E,J,_t,bt,Ct){const Nt=c.convert(J.format,J.colorSpace),ft=c.convert(J.type),ht=U(J.internalFormat,Nt,ft,J.normalized,J.colorSpace),Ot=s.get(E),It=s.get(J);if(It.__renderTarget=E,!Ot.__hasExternalTextures){const Ut=Math.max(1,E.width>>Ct),Dt=Math.max(1,E.height>>Ct);bt===r.TEXTURE_3D||bt===r.TEXTURE_2D_ARRAY?i.texImage3D(bt,Ct,ht,Ut,Dt,E.depth,0,Nt,ft,null):i.texImage2D(bt,Ct,ht,Ut,Dt,0,Nt,ft,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),ge(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_t,bt,It.__webglTexture,0,un(E)):(bt===r.TEXTURE_2D||bt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_t,bt,It.__webglTexture,Ct),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ze(P,E,J){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const _t=E.depthTexture,bt=_t&&_t.isDepthTexture?_t.type:null,Ct=F(E.stencilBuffer,bt),Nt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ge(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,un(E),Ct,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,un(E),Ct,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ct,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Nt,r.RENDERBUFFER,P)}else{const _t=E.textures;for(let bt=0;bt<_t.length;bt++){const Ct=_t[bt],Nt=c.convert(Ct.format,Ct.colorSpace),ft=c.convert(Ct.type),ht=U(Ct.internalFormat,Nt,ft,Ct.normalized,Ct.colorSpace);ge(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,un(E),ht,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,un(E),ht,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ht,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pe(P,E,J){const _t=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const bt=s.get(E.depthTexture);if(bt.__renderTarget=E,(!bt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),_t){if(bt.__webglInit===void 0&&(bt.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),bt.__webglTexture===void 0){bt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,bt.__webglTexture),Rt(r.TEXTURE_CUBE_MAP,E.depthTexture);const Ot=c.convert(E.depthTexture.format),It=c.convert(E.depthTexture.type);let Ut;E.depthTexture.format===Oa?Ut=r.DEPTH_COMPONENT24:E.depthTexture.format===rr&&(Ut=r.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Ut,E.width,E.height,0,Ot,It,null)}}else $(E.depthTexture,0);const Ct=bt.__webglTexture,Nt=un(E),ft=_t?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,ht=E.depthTexture.format===rr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Oa)ge(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,ft,Ct,0,Nt):r.framebufferTexture2D(r.FRAMEBUFFER,ht,ft,Ct,0);else if(E.depthTexture.format===rr)ge(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,ft,Ct,0,Nt):r.framebufferTexture2D(r.FRAMEBUFFER,ht,ft,Ct,0);else throw new Error("Unknown depthTexture format")}function be(P){const E=s.get(P),J=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const _t=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),_t){const bt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,_t.removeEventListener("dispose",bt)};_t.addEventListener("dispose",bt),E.__depthDisposeCallback=bt}E.__boundDepthTexture=_t}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let _t=0;_t<6;_t++)pe(E.__webglFramebuffer[_t],P,_t);else{const _t=P.texture.mipmaps;_t&&_t.length>0?pe(E.__webglFramebuffer[0],P,0):pe(E.__webglFramebuffer,P,0)}else if(J){E.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[_t]),E.__webglDepthbuffer[_t]===void 0)E.__webglDepthbuffer[_t]=r.createRenderbuffer(),Ze(E.__webglDepthbuffer[_t],P,!1);else{const bt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=E.__webglDepthbuffer[_t];r.bindRenderbuffer(r.RENDERBUFFER,Ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,Ct)}}else{const _t=P.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ze(E.__webglDepthbuffer,P,!1);else{const bt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,Ct)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(P,E,J){const _t=s.get(P);E!==void 0&&Jt(_t.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&be(P)}function ue(P){const E=P.texture,J=s.get(P),_t=s.get(E);P.addEventListener("dispose",b);const bt=P.textures,Ct=P.isWebGLCubeRenderTarget===!0,Nt=bt.length>1;if(Nt||(_t.__webglTexture===void 0&&(_t.__webglTexture=r.createTexture()),_t.__version=E.version,f.memory.textures++),Ct){J.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[ft]=[];for(let ht=0;ht<E.mipmaps.length;ht++)J.__webglFramebuffer[ft][ht]=r.createFramebuffer()}else J.__webglFramebuffer[ft]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let ft=0;ft<E.mipmaps.length;ft++)J.__webglFramebuffer[ft]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Nt)for(let ft=0,ht=bt.length;ft<ht;ft++){const Ot=s.get(bt[ft]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&ge(P)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ft=0;ft<bt.length;ft++){const ht=bt[ft];J.__webglColorRenderbuffer[ft]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[ft]);const Ot=c.convert(ht.format,ht.colorSpace),It=c.convert(ht.type),Ut=U(ht.internalFormat,Ot,It,ht.normalized,ht.colorSpace,P.isXRRenderTarget===!0),Dt=un(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,Ut,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,J.__webglColorRenderbuffer[ft])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),Ze(J.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ct){i.bindTexture(r.TEXTURE_CUBE_MAP,_t.__webglTexture),Rt(r.TEXTURE_CUBE_MAP,E);for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0)for(let ht=0;ht<E.mipmaps.length;ht++)Jt(J.__webglFramebuffer[ft][ht],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ht);else Jt(J.__webglFramebuffer[ft],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);v(E)&&T(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let ft=0,ht=bt.length;ft<ht;ft++){const Ot=bt[ft],It=s.get(Ot);let Ut=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ut=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,It.__webglTexture),Rt(Ut,Ot),Jt(J.__webglFramebuffer,P,Ot,r.COLOR_ATTACHMENT0+ft,Ut,0),v(Ot)&&T(Ut)}i.unbindTexture()}else{let ft=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ft,_t.__webglTexture),Rt(ft,E),E.mipmaps&&E.mipmaps.length>0)for(let ht=0;ht<E.mipmaps.length;ht++)Jt(J.__webglFramebuffer[ht],P,E,r.COLOR_ATTACHMENT0,ft,ht);else Jt(J.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,ft,0);v(E)&&T(ft),i.unbindTexture()}P.depthBuffer&&be(P)}function mn(P){const E=P.textures;for(let J=0,_t=E.length;J<_t;J++){const bt=E[J];if(v(bt)){const Ct=L(P),Nt=s.get(bt).__webglTexture;i.bindTexture(Ct,Nt),T(Ct),i.unbindTexture()}}}const $e=[],On=[];function j(P){if(P.samples>0){if(ge(P)===!1){const E=P.textures,J=P.width,_t=P.height;let bt=r.COLOR_BUFFER_BIT;const Ct=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Nt=s.get(P),ft=E.length>1;if(ft)for(let Ot=0;Ot<E.length;Ot++)i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const ht=P.texture.mipmaps;ht&&ht.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Ot=0;Ot<E.length;Ot++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(bt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(bt|=r.STENCIL_BUFFER_BIT)),ft){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ot]);const It=s.get(E[Ot]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,It,0)}r.blitFramebuffer(0,0,J,_t,0,0,J,_t,bt,r.NEAREST),m===!0&&($e.length=0,On.length=0,$e.push(r.COLOR_ATTACHMENT0+Ot),P.depthBuffer&&P.resolveDepthBuffer===!1&&($e.push(Ct),On.push(Ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,On)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$e))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ft)for(let Ot=0;Ot<E.length;Ot++){i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ot]);const It=s.get(E[Ot]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.TEXTURE_2D,It,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function un(P){return Math.min(l.maxSamples,P.samples)}function ge(P){const E=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ke(P){const E=f.render.frame;_.get(P)!==E&&(_.set(P,E),P.update())}function wt(P,E){const J=P.colorSpace,_t=P.format,bt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==Iu&&J!==bs&&(we.getTransfer(J)===Ve?(_t!==Vi||bt!==Si)&&te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",J)),E}function sn(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=z,this.resetTextureUnits=rt,this.getTextureUnits=ot,this.setTextureUnits=Y,this.setTexture2D=$,this.setTexture2DArray=ct,this.setTexture3D=mt,this.setTextureCube=I,this.rebindTextures=Ie,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=mn,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Jt,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function fR(r,t){function i(s,l=bs){let c;const f=we.getTransfer(l);if(s===Si)return r.UNSIGNED_BYTE;if(s===Gp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Vp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ix)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===zx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Px)return r.BYTE;if(s===Ox)return r.SHORT;if(s===Ll)return r.UNSIGNED_SHORT;if(s===Hp)return r.INT;if(s===aa)return r.UNSIGNED_INT;if(s===$i)return r.FLOAT;if(s===Pa)return r.HALF_FLOAT;if(s===Fx)return r.ALPHA;if(s===Bx)return r.RGB;if(s===Vi)return r.RGBA;if(s===Oa)return r.DEPTH_COMPONENT;if(s===rr)return r.DEPTH_STENCIL;if(s===Hx)return r.RED;if(s===kp)return r.RED_INTEGER;if(s===lr)return r.RG;if(s===Xp)return r.RG_INTEGER;if(s===Yp)return r.RGBA_INTEGER;if(s===wu||s===Ru||s===Cu||s===Du)if(f===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===wu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===wu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ru)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Cu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Du)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ep||s===np||s===ip||s===ap)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ep)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===np)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ip)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ap)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sp||s===rp||s===op||s===lp||s===cp||s===Pu||s===up)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===sp||s===rp)return f===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===op)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===lp)return c.COMPRESSED_R11_EAC;if(s===cp)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Pu)return c.COMPRESSED_RG11_EAC;if(s===up)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===fp||s===hp||s===dp||s===pp||s===mp||s===gp||s===_p||s===vp||s===xp||s===yp||s===Sp||s===Mp||s===bp||s===Ep)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===fp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_p)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ep)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tp||s===Ap||s===wp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Tp)return f===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ap)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Rp||s===Cp||s===Ou||s===Dp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Rp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Cp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ou)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Dp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Nl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const hR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new jx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new sa({vertexShader:hR,fragmentShader:dR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Pt(new _o(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mR extends Rs{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,_=null,x=null,g=null,M=null,A=null;const R=typeof XRWebGLBinding<"u",S=new pR,v={},T=i.getContextAttributes();let L=null,U=null;const F=[],w=[],O=new ie;let b=null;const N=new yi;N.viewport=new pn;const G=new yi;G.viewport=new pn;const H=[N,G],k=new bE;let rt=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let St=F[lt];return St===void 0&&(St=new dd,F[lt]=St),St.getTargetRaySpace()},this.getControllerGrip=function(lt){let St=F[lt];return St===void 0&&(St=new dd,F[lt]=St),St.getGripSpace()},this.getHand=function(lt){let St=F[lt];return St===void 0&&(St=new dd,F[lt]=St),St.getHandSpace()};function Y(lt){const St=w.indexOf(lt.inputSource);if(St===-1)return;const Tt=F[St];Tt!==void 0&&(Tt.update(lt.inputSource,lt.frame,p||f),Tt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function z(){l.removeEventListener("select",Y),l.removeEventListener("selectstart",Y),l.removeEventListener("selectend",Y),l.removeEventListener("squeeze",Y),l.removeEventListener("squeezestart",Y),l.removeEventListener("squeezeend",Y),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",B);for(let lt=0;lt<F.length;lt++){const St=w[lt];St!==null&&(w[lt]=null,F[lt].disconnect(St))}rt=null,ot=null,S.reset();for(const lt in v)delete v[lt];t.setRenderTarget(L),M=null,g=null,x=null,l=null,U=null,Rt.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){c=lt,s.isPresenting===!0&&te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){d=lt,s.isPresenting===!0&&te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(lt){p=lt},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x===null&&R&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(lt){if(l=lt,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",Y),l.addEventListener("selectstart",Y),l.addEventListener("selectend",Y),l.addEventListener("squeeze",Y),l.addEventListener("squeezestart",Y),l.addEventListener("squeezeend",Y),l.addEventListener("end",z),l.addEventListener("inputsourceschange",B),T.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Gt=null,ee=null;T.depth&&(ee=T.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=T.stencil?rr:Oa,Gt=T.stencil?Nl:aa);const Jt={colorFormat:i.RGBA8,depthFormat:ee,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(Jt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),U=new na(g.textureWidth,g.textureHeight,{format:Vi,type:Si,depthTexture:new ho(g.textureWidth,g.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Tt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new na(M.framebufferWidth,M.framebufferHeight,{format:Vi,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Rt.setContext(l),Rt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function B(lt){for(let St=0;St<lt.removed.length;St++){const Tt=lt.removed[St],Gt=w.indexOf(Tt);Gt>=0&&(w[Gt]=null,F[Gt].disconnect(Tt))}for(let St=0;St<lt.added.length;St++){const Tt=lt.added[St];let Gt=w.indexOf(Tt);if(Gt===-1){for(let Jt=0;Jt<F.length;Jt++)if(Jt>=w.length){w.push(Tt),Gt=Jt;break}else if(w[Jt]===null){w[Jt]=Tt,Gt=Jt;break}if(Gt===-1)break}const ee=F[Gt];ee&&ee.connect(Tt)}}const $=new X,ct=new X;function mt(lt,St,Tt){$.setFromMatrixPosition(St.matrixWorld),ct.setFromMatrixPosition(Tt.matrixWorld);const Gt=$.distanceTo(ct),ee=St.projectionMatrix.elements,Jt=Tt.projectionMatrix.elements,Ze=ee[14]/(ee[10]-1),pe=ee[14]/(ee[10]+1),be=(ee[9]+1)/ee[5],Ie=(ee[9]-1)/ee[5],ue=(ee[8]-1)/ee[0],mn=(Jt[8]+1)/Jt[0],$e=Ze*ue,On=Ze*mn,j=Gt/(-ue+mn),un=j*-ue;if(St.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(un),lt.translateZ(j),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),ee[10]===-1)lt.projectionMatrix.copy(St.projectionMatrix),lt.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const ge=Ze+j,ke=pe+j,wt=$e-un,sn=On+(Gt-un),P=be*pe/ke*ge,E=Ie*pe/ke*ge;lt.projectionMatrix.makePerspective(wt,sn,P,E,ge,ke),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function I(lt,St){St===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(St.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(l===null)return;let St=lt.near,Tt=lt.far;S.texture!==null&&(S.depthNear>0&&(St=S.depthNear),S.depthFar>0&&(Tt=S.depthFar)),k.near=G.near=N.near=St,k.far=G.far=N.far=Tt,(rt!==k.near||ot!==k.far)&&(l.updateRenderState({depthNear:k.near,depthFar:k.far}),rt=k.near,ot=k.far),k.layers.mask=lt.layers.mask|6,N.layers.mask=k.layers.mask&-5,G.layers.mask=k.layers.mask&-3;const Gt=lt.parent,ee=k.cameras;I(k,Gt);for(let Jt=0;Jt<ee.length;Jt++)I(ee[Jt],Gt);ee.length===2?mt(k,N,G):k.projectionMatrix.copy(N.projectionMatrix),Q(lt,k,Gt)};function Q(lt,St,Tt){Tt===null?lt.matrix.copy(St.matrixWorld):(lt.matrix.copy(Tt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(St.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(St.projectionMatrix),lt.projectionMatrixInverse.copy(St.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=Ol*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(lt){m=lt,g!==null&&(g.fixedFoveation=lt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=lt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(k)},this.getCameraTexture=function(lt){return v[lt]};let vt=null;function Et(lt,St){if(_=St.getViewerPose(p||f),A=St,_!==null){const Tt=_.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let Gt=!1;Tt.length!==k.cameras.length&&(k.cameras.length=0,Gt=!0);for(let pe=0;pe<Tt.length;pe++){const be=Tt[pe];let Ie=null;if(M!==null)Ie=M.getViewport(be);else{const mn=x.getViewSubImage(g,be);Ie=mn.viewport,pe===0&&(t.setRenderTargetTextures(U,mn.colorTexture,mn.depthStencilTexture),t.setRenderTarget(U))}let ue=H[pe];ue===void 0&&(ue=new yi,ue.layers.enable(pe),ue.viewport=new pn,H[pe]=ue),ue.matrix.fromArray(be.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(be.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),pe===0&&(k.matrix.copy(ue.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Gt===!0&&k.cameras.push(ue)}const ee=l.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){x=s.getBinding();const pe=x.getDepthInformation(Tt[0]);pe&&pe.isValid&&pe.texture&&S.init(pe,l.renderState)}if(ee&&ee.includes("camera-access")&&R){t.state.unbindTexture(),x=s.getBinding();for(let pe=0;pe<Tt.length;pe++){const be=Tt[pe].camera;if(be){let Ie=v[be];Ie||(Ie=new jx,v[be]=Ie);const ue=x.getCameraImage(be);Ie.sourceTexture=ue}}}}for(let Tt=0;Tt<F.length;Tt++){const Gt=w[Tt],ee=F[Tt];Gt!==null&&ee!==void 0&&ee.update(Gt,St,p||f)}vt&&vt(lt,St),St.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:St}),A=null}const Rt=new ty;Rt.setAnimationLoop(Et),this.setAnimationLoop=function(lt){vt=lt},this.dispose=function(){}}}const gR=new an,oy=new oe;oy.set(-1,0,0,0,1,0,0,0,1);function _R(r,t){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,Zx(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,T,L,U){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?c(S,v):v.isMeshLambertMaterial?(c(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(S,v),x(S,v)):v.isMeshPhongMaterial?(c(S,v),_(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(S,v),g(S,v),v.isMeshPhysicalMaterial&&M(S,v,U)):v.isMeshMatcapMaterial?(c(S,v),A(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),R(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?m(S,v,T,L):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===oi&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===oi&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const T=t.get(v),L=T.envMap,U=T.envMapRotation;L&&(S.envMap.value=L,S.envMapRotation.value.setFromMatrix4(gR.makeRotationFromEuler(U)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(oy),S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,T,L){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*T,S.scale.value=L*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function _(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function x(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function g(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,T){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===oi&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=T.texture,S.transmissionSamplerSize.value.set(T.width,T.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,v){v.matcap&&(S.matcap.value=v.matcap)}function R(S,v){const T=t.get(v).light;S.referencePosition.value.setFromMatrixPosition(T.matrixWorld),S.nearDistance.value=T.shadow.camera.near,S.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function vR(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(T,L){const U=L.program;s.uniformBlockBinding(T,U)}function p(T,L){let U=l[T.id];U===void 0&&(A(T),U=_(T),l[T.id]=U,T.addEventListener("dispose",S));const F=L.program;s.updateUBOMapping(T,F);const w=t.render.frame;c[T.id]!==w&&(g(T),c[T.id]=w)}function _(T){const L=x();T.__bindingPointIndex=L;const U=r.createBuffer(),F=T.__size,w=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,F,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,U),U}function x(){for(let T=0;T<d;T++)if(f.indexOf(T)===-1)return f.push(T),T;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(T){const L=l[T.id],U=T.uniforms,F=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let w=0,O=U.length;w<O;w++){const b=Array.isArray(U[w])?U[w]:[U[w]];for(let N=0,G=b.length;N<G;N++){const H=b[N];if(M(H,w,N,F)===!0){const k=H.__offset,rt=Array.isArray(H.value)?H.value:[H.value];let ot=0;for(let Y=0;Y<rt.length;Y++){const z=rt[Y],B=R(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,k+ot,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):ArrayBuffer.isView(z)?H.__data.set(new z.constructor(z.buffer,z.byteOffset,H.__data.length)):(z.toArray(H.__data,ot),ot+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(T,L,U,F){const w=T.value,O=L+"_"+U;if(F[O]===void 0)return typeof w=="number"||typeof w=="boolean"?F[O]=w:ArrayBuffer.isView(w)?F[O]=w.slice():F[O]=w.clone(),!0;{const b=F[O];if(typeof w=="number"||typeof w=="boolean"){if(b!==w)return F[O]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(b.equals(w)===!1)return b.copy(w),!0}}return!1}function A(T){const L=T.uniforms;let U=0;const F=16;for(let O=0,b=L.length;O<b;O++){const N=Array.isArray(L[O])?L[O]:[L[O]];for(let G=0,H=N.length;G<H;G++){const k=N[G],rt=Array.isArray(k.value)?k.value:[k.value];for(let ot=0,Y=rt.length;ot<Y;ot++){const z=rt[ot],B=R(z),$=U%F,ct=$%B.boundary,mt=$+ct;U+=ct,mt!==0&&F-mt<B.storage&&(U+=F-mt),k.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=U,U+=B.storage}}}const w=U%F;return w>0&&(U+=F-w),T.__size=U,T.__cache={},this}function R(T){const L={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(L.boundary=4,L.storage=4):T.isVector2?(L.boundary=8,L.storage=8):T.isVector3||T.isColor?(L.boundary=16,L.storage=12):T.isVector4?(L.boundary=16,L.storage=16):T.isMatrix3?(L.boundary=48,L.storage=48):T.isMatrix4?(L.boundary=64,L.storage=64):T.isTexture?te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(L.boundary=16,L.storage=T.byteLength):te("WebGLRenderer: Unsupported uniform value type.",T),L}function S(T){const L=T.target;L.removeEventListener("dispose",S);const U=f.indexOf(L.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const T in l)r.deleteBuffer(l[T]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const xR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function yR(){return Zi===null&&(Zi=new sE(xR,16,16,lr,Pa),Zi.name="DFG_LUT",Zi.minFilter=Zn,Zi.magFilter=Zn,Zi.wrapS=Ua,Zi.wrapT=Ua,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class SR{constructor(t={}){const{canvas:i=Sb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:M=Si}=t;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=f;const R=M,S=new Set([Yp,Xp,kp]),v=new Set([Si,aa,Ll,Nl,Gp,Vp]),T=new Uint32Array(4),L=new Int32Array(4),U=new X;let F=null,w=null;const O=[],b=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ea,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let H=!1,k=null;this._outputColorSpace=Li;let rt=0,ot=0,Y=null,z=-1,B=null;const $=new pn,ct=new pn;let mt=null;const I=new me(0);let Q=0,vt=i.width,Et=i.height,Rt=1,lt=null,St=null;const Tt=new pn(0,0,vt,Et),Gt=new pn(0,0,vt,Et);let ee=!1;const Jt=new Jp;let Ze=!1,pe=!1;const be=new an,Ie=new X,ue=new pn,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function On(){return Y===null?Rt:1}let j=s;function un(C,Z){return i.getContext(C,Z)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Bp}`),i.addEventListener("webglcontextlost",Mt,!1),i.addEventListener("webglcontextrestored",qt,!1),i.addEventListener("webglcontextcreationerror",ne,!1),j===null){const Z="webgl2";if(j=un(Z,C),j===null)throw un(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Re("WebGLRenderer: "+C.message),C}let ge,ke,wt,sn,P,E,J,_t,bt,Ct,Nt,ft,ht,Ot,It,Ut,Dt,ae,se,ve,W,At,pt;function Bt(){ge=new yA(j),ge.init(),W=new fR(j,ge),ke=new hA(j,ge,t,W),wt=new cR(j,ge),ke.reversedDepthBuffer&&g&&wt.buffers.depth.setReversed(!0),sn=new bA(j),P=new Zw,E=new uR(j,ge,wt,P,ke,W,sn),J=new xA(G),_t=new wE(j),At=new uA(j,_t),bt=new SA(j,_t,sn,At),Ct=new TA(j,bt,_t,At,sn),ae=new EA(j,ke,E),It=new dA(P),Nt=new jw(G,J,ge,ke,At,It),ft=new _R(G,P),ht=new Qw,Ot=new iR(ge),Dt=new cA(G,J,wt,Ct,A,m),Ut=new lR(G,Ct,ke),pt=new vR(j,sn,ke,wt),se=new fA(j,ge,sn),ve=new MA(j,ge,sn),sn.programs=Nt.programs,G.capabilities=ke,G.extensions=ge,G.properties=P,G.renderLists=ht,G.shadowMap=Ut,G.state=wt,G.info=sn}Bt(),R!==Si&&(N=new wA(R,i.width,i.height,l,c));const Lt=new mR(G,j);this.xr=Lt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const C=ge.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ge.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Rt},this.setPixelRatio=function(C){C!==void 0&&(Rt=C,this.setSize(vt,Et,!1))},this.getSize=function(C){return C.set(vt,Et)},this.setSize=function(C,Z,at=!0){if(Lt.isPresenting){te("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=C,Et=Z,i.width=Math.floor(C*Rt),i.height=Math.floor(Z*Rt),at===!0&&(i.style.width=C+"px",i.style.height=Z+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(vt*Rt,Et*Rt).floor()},this.setDrawingBufferSize=function(C,Z,at){vt=C,Et=Z,Rt=at,i.width=Math.floor(C*at),i.height=Math.floor(Z*at),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(R===Si){Re("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){te("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy($)},this.getViewport=function(C){return C.copy(Tt)},this.setViewport=function(C,Z,at,nt){C.isVector4?Tt.set(C.x,C.y,C.z,C.w):Tt.set(C,Z,at,nt),wt.viewport($.copy(Tt).multiplyScalar(Rt).round())},this.getScissor=function(C){return C.copy(Gt)},this.setScissor=function(C,Z,at,nt){C.isVector4?Gt.set(C.x,C.y,C.z,C.w):Gt.set(C,Z,at,nt),wt.scissor(ct.copy(Gt).multiplyScalar(Rt).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(C){wt.setScissorTest(ee=C)},this.setOpaqueSort=function(C){lt=C},this.setTransparentSort=function(C){St=C},this.getClearColor=function(C){return C.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,at=!0){let nt=0;if(C){let it=!1;if(Y!==null){const Ft=Y.texture.format;it=S.has(Ft)}if(it){const Ft=Y.texture.type,kt=v.has(Ft),zt=Dt.getClearColor(),Yt=Dt.getClearAlpha(),Xt=zt.r,Kt=zt.g,le=zt.b;kt?(T[0]=Xt,T[1]=Kt,T[2]=le,T[3]=Yt,j.clearBufferuiv(j.COLOR,0,T)):(L[0]=Xt,L[1]=Kt,L[2]=le,L[3]=Yt,j.clearBufferiv(j.COLOR,0,L))}else nt|=j.COLOR_BUFFER_BIT}Z&&(nt|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(nt|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&j.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),k=C},this.dispose=function(){i.removeEventListener("webglcontextlost",Mt,!1),i.removeEventListener("webglcontextrestored",qt,!1),i.removeEventListener("webglcontextcreationerror",ne,!1),Dt.dispose(),ht.dispose(),Ot.dispose(),P.dispose(),J.dispose(),Ct.dispose(),At.dispose(),pt.dispose(),Nt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",So),Lt.removeEventListener("sessionend",Mo),kn.stop()};function Mt(C){C.preventDefault(),cv("WebGLRenderer: Context Lost."),H=!0}function qt(){cv("WebGLRenderer: Context Restored."),H=!1;const C=sn.autoReset,Z=Ut.enabled,at=Ut.autoUpdate,nt=Ut.needsUpdate,it=Ut.type;Bt(),sn.autoReset=C,Ut.enabled=Z,Ut.autoUpdate=at,Ut.needsUpdate=nt,Ut.type=it}function ne(C){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function fn(C){const Z=C.target;Z.removeEventListener("dispose",fn),Ne(Z)}function Ne(C){Mi(C),P.remove(C)}function Mi(C){const Z=P.get(C).programs;Z!==void 0&&(Z.forEach(function(at){Nt.releaseProgram(at)}),C.isShaderMaterial&&Nt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,at,nt,it,Ft){Z===null&&(Z=mn);const kt=it.isMesh&&it.matrixWorld.determinant()<0,zt=Ha(C,Z,at,nt,it);wt.setMaterial(nt,kt);let Yt=at.index,Xt=1;if(nt.wireframe===!0){if(Yt=bt.getWireframeAttribute(at),Yt===void 0)return;Xt=2}const Kt=at.drawRange,le=at.attributes.position;let Zt=Kt.start*Xt,Ce=(Kt.start+Kt.count)*Xt;Ft!==null&&(Zt=Math.max(Zt,Ft.start*Xt),Ce=Math.min(Ce,(Ft.start+Ft.count)*Xt)),Yt!==null?(Zt=Math.max(Zt,0),Ce=Math.min(Ce,Yt.count)):le!=null&&(Zt=Math.max(Zt,0),Ce=Math.min(Ce,le.count));const rn=Ce-Zt;if(rn<0||rn===1/0)return;At.setup(it,nt,zt,at,Yt);let Ke,ze=se;if(Yt!==null&&(Ke=_t.get(Yt),ze=ve,ze.setIndex(Ke)),it.isMesh)nt.wireframe===!0?(wt.setLineWidth(nt.wireframeLinewidth*On()),ze.setMode(j.LINES)):ze.setMode(j.TRIANGLES);else if(it.isLine){let Fe=nt.linewidth;Fe===void 0&&(Fe=1),wt.setLineWidth(Fe*On()),it.isLineSegments?ze.setMode(j.LINES):it.isLineLoop?ze.setMode(j.LINE_LOOP):ze.setMode(j.LINE_STRIP)}else it.isPoints?ze.setMode(j.POINTS):it.isSprite&&ze.setMode(j.TRIANGLES);if(it.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))ze.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const Fe=it._multiDrawStarts,Vt=it._multiDrawCounts,Xn=it._multiDrawCount,xe=Yt?_t.get(Yt).bytesPerElement:1,An=P.get(nt).currentProgram.getUniforms();for(let ci=0;ci<Xn;ci++)An.setValue(j,"_gl_DrawID",ci),ze.render(Fe[ci]/xe,Vt[ci])}else if(it.isInstancedMesh)ze.renderInstances(Zt,rn,it.count);else if(at.isInstancedBufferGeometry){const Fe=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Vt=Math.min(at.instanceCount,Fe);ze.renderInstances(Zt,rn,Vt)}else ze.render(Zt,rn)};function li(C,Z,at){C.transparent===!0&&C.side===Ji&&C.forceSinglePass===!1?(C.side=oi,C.needsUpdate=!0,cr(C,Z,at),C.side=ws,C.needsUpdate=!0,cr(C,Z,at),C.side=Ji):cr(C,Z,at)}this.compile=function(C,Z,at=null){at===null&&(at=C),w=Ot.get(at),w.init(Z),b.push(w),at.traverseVisible(function(it){it.isLight&&it.layers.test(Z.layers)&&(w.pushLight(it),it.castShadow&&w.pushShadow(it))}),C!==at&&C.traverseVisible(function(it){it.isLight&&it.layers.test(Z.layers)&&(w.pushLight(it),it.castShadow&&w.pushShadow(it))}),w.setupLights();const nt=new Set;return C.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Ft=it.material;if(Ft)if(Array.isArray(Ft))for(let kt=0;kt<Ft.length;kt++){const zt=Ft[kt];li(zt,at,it),nt.add(zt)}else li(Ft,at,it),nt.add(Ft)}),w=b.pop(),nt},this.compileAsync=function(C,Z,at=null){const nt=this.compile(C,Z,at);return new Promise(it=>{function Ft(){if(nt.forEach(function(kt){P.get(kt).currentProgram.isReady()&&nt.delete(kt)}),nt.size===0){it(C);return}setTimeout(Ft,10)}ge.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let Cs=null;function yo(C){Cs&&Cs(C)}function So(){kn.stop()}function Mo(){kn.start()}const kn=new ty;kn.setAnimationLoop(yo),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(C){Cs=C,Lt.setAnimationLoop(C),C===null?kn.stop():kn.start()},Lt.addEventListener("sessionstart",So),Lt.addEventListener("sessionend",Mo),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;k!==null&&k.renderStart(C,Z);const at=Lt.enabled===!0&&Lt.isPresenting===!0,nt=N!==null&&(Y===null||at)&&N.begin(G,Y);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(Z),Z=Lt.getCamera()),C.isScene===!0&&C.onBeforeRender(G,C,Z,Y),w=Ot.get(C,b.length),w.init(Z),w.state.textureUnits=E.getTextureUnits(),b.push(w),be.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Jt.setFromProjectionMatrix(be,ta,Z.reversedDepth),pe=this.localClippingEnabled,Ze=It.init(this.clippingPlanes,pe),F=ht.get(C,O.length),F.init(),O.push(F),Lt.enabled===!0&&Lt.isPresenting===!0){const kt=G.xr.getDepthSensingMesh();kt!==null&&gn(kt,Z,-1/0,G.sortObjects)}gn(C,Z,0,G.sortObjects),F.finish(),G.sortObjects===!0&&F.sort(lt,St),$e=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,$e&&Dt.addToRenderList(F,C),this.info.render.frame++,Ze===!0&&It.beginShadows();const it=w.state.shadowsArray;if(Ut.render(it,C,Z),Ze===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),(nt&&N.hasRenderPass())===!1){const kt=F.opaque,zt=F.transmissive;if(w.setupLights(),Z.isArrayCamera){const Yt=Z.cameras;if(zt.length>0)for(let Xt=0,Kt=Yt.length;Xt<Kt;Xt++){const le=Yt[Xt];ra(kt,zt,C,le)}$e&&Dt.render(C);for(let Xt=0,Kt=Yt.length;Xt<Kt;Xt++){const le=Yt[Xt];In(F,C,le,le.viewport)}}else zt.length>0&&ra(kt,zt,C,Z),$e&&Dt.render(C),In(F,C,Z)}Y!==null&&ot===0&&(E.updateMultisampleRenderTarget(Y),E.updateRenderTargetMipmap(Y)),nt&&N.end(G),C.isScene===!0&&C.onAfterRender(G,C,Z),At.resetDefaultState(),z=-1,B=null,b.pop(),b.length>0?(w=b[b.length-1],E.setTextureUnits(w.state.textureUnits),Ze===!0&&It.setGlobalState(G.clippingPlanes,w.state.camera)):w=null,O.pop(),O.length>0?F=O[O.length-1]:F=null,k!==null&&k.renderEnd()};function gn(C,Z,at,nt){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)at=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLightProbeGrid)w.pushLightProbeGrid(C);else if(C.isLight)w.pushLight(C),C.castShadow&&w.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Jt.intersectsSprite(C)){nt&&ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(be);const kt=Ct.update(C),zt=C.material;zt.visible&&F.push(C,kt,zt,at,ue.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Jt.intersectsObject(C))){const kt=Ct.update(C),zt=C.material;if(nt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ue.copy(C.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),ue.copy(kt.boundingSphere.center)),ue.applyMatrix4(C.matrixWorld).applyMatrix4(be)),Array.isArray(zt)){const Yt=kt.groups;for(let Xt=0,Kt=Yt.length;Xt<Kt;Xt++){const le=Yt[Xt],Zt=zt[le.materialIndex];Zt&&Zt.visible&&F.push(C,kt,Zt,at,ue.z,le)}}else zt.visible&&F.push(C,kt,zt,at,ue.z,null)}}const Ft=C.children;for(let kt=0,zt=Ft.length;kt<zt;kt++)gn(Ft[kt],Z,at,nt)}function In(C,Z,at,nt){const{opaque:it,transmissive:Ft,transparent:kt}=C;w.setupLightsView(at),Ze===!0&&It.setGlobalState(G.clippingPlanes,at),nt&&wt.viewport($.copy(nt)),it.length>0&&Fa(it,Z,at),Ft.length>0&&Fa(Ft,Z,at),kt.length>0&&Fa(kt,Z,at),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function ra(C,Z,at,nt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[nt.id]===void 0){const Zt=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[nt.id]=new na(1,1,{generateMipmaps:!0,type:Zt?Pa:Si,minFilter:sr,samples:Math.max(4,ke.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace})}const Ft=w.state.transmissionRenderTarget[nt.id],kt=nt.viewport||$;Ft.setSize(kt.z*G.transmissionResolutionScale,kt.w*G.transmissionResolutionScale);const zt=G.getRenderTarget(),Yt=G.getActiveCubeFace(),Xt=G.getActiveMipmapLevel();G.setRenderTarget(Ft),G.getClearColor(I),Q=G.getClearAlpha(),Q<1&&G.setClearColor(16777215,.5),G.clear(),$e&&Dt.render(at);const Kt=G.toneMapping;G.toneMapping=ea;const le=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),w.setupLightsView(nt),Ze===!0&&It.setGlobalState(G.clippingPlanes,nt),Fa(C,at,nt),E.updateMultisampleRenderTarget(Ft),E.updateRenderTargetMipmap(Ft),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ce=0,rn=Z.length;Ce<rn;Ce++){const Ke=Z[Ce],{object:ze,geometry:Fe,material:Vt,group:Xn}=Ke;if(Vt.side===Ji&&ze.layers.test(nt.layers)){const xe=Vt.side;Vt.side=oi,Vt.needsUpdate=!0,Bl(ze,at,nt,Fe,Vt,Xn),Vt.side=xe,Vt.needsUpdate=!0,Zt=!0}}Zt===!0&&(E.updateMultisampleRenderTarget(Ft),E.updateRenderTargetMipmap(Ft))}G.setRenderTarget(zt,Yt,Xt),G.setClearColor(I,Q),le!==void 0&&(nt.viewport=le),G.toneMapping=Kt}function Fa(C,Z,at){const nt=Z.isScene===!0?Z.overrideMaterial:null;for(let it=0,Ft=C.length;it<Ft;it++){const kt=C[it],{object:zt,geometry:Yt,group:Xt}=kt;let Kt=kt.material;Kt.allowOverride===!0&&nt!==null&&(Kt=nt),zt.layers.test(at.layers)&&Bl(zt,Z,at,Yt,Kt,Xt)}}function Bl(C,Z,at,nt,it,Ft){C.onBeforeRender(G,Z,at,nt,it,Ft),C.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),it.onBeforeRender(G,Z,at,nt,C,Ft),it.transparent===!0&&it.side===Ji&&it.forceSinglePass===!1?(it.side=oi,it.needsUpdate=!0,G.renderBufferDirect(at,Z,nt,it,C,Ft),it.side=ws,it.needsUpdate=!0,G.renderBufferDirect(at,Z,nt,it,C,Ft),it.side=Ji):G.renderBufferDirect(at,Z,nt,it,C,Ft),C.onAfterRender(G,Z,at,nt,it,Ft)}function cr(C,Z,at){Z.isScene!==!0&&(Z=mn);const nt=P.get(C),it=w.state.lights,Ft=w.state.shadowsArray,kt=it.state.version,zt=Nt.getParameters(C,it.state,Ft,Z,at,w.state.lightProbeGridArray),Yt=Nt.getProgramCacheKey(zt);let Xt=nt.programs;nt.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Z.environment:null,nt.fog=Z.fog;const Kt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;nt.envMap=J.get(C.envMap||nt.environment,Kt),nt.envMapRotation=nt.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,Xt===void 0&&(C.addEventListener("dispose",fn),Xt=new Map,nt.programs=Xt);let le=Xt.get(Yt);if(le!==void 0){if(nt.currentProgram===le&&nt.lightsStateVersion===kt)return Ba(C,zt),le}else zt.uniforms=Nt.getUniforms(C),k!==null&&C.isNodeMaterial&&k.build(C,at,zt),C.onBeforeCompile(zt,G),le=Nt.acquireProgram(zt,Yt),Xt.set(Yt,le),nt.uniforms=zt.uniforms;const Zt=nt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Zt.clippingPlanes=It.uniform),Ba(C,zt),nt.needsLights=Ds(C),nt.lightsStateVersion=kt,nt.needsLights&&(Zt.ambientLightColor.value=it.state.ambient,Zt.lightProbe.value=it.state.probe,Zt.directionalLights.value=it.state.directional,Zt.directionalLightShadows.value=it.state.directionalShadow,Zt.spotLights.value=it.state.spot,Zt.spotLightShadows.value=it.state.spotShadow,Zt.rectAreaLights.value=it.state.rectArea,Zt.ltc_1.value=it.state.rectAreaLTC1,Zt.ltc_2.value=it.state.rectAreaLTC2,Zt.pointLights.value=it.state.point,Zt.pointLightShadows.value=it.state.pointShadow,Zt.hemisphereLights.value=it.state.hemi,Zt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Zt.spotLightMatrix.value=it.state.spotLightMatrix,Zt.spotLightMap.value=it.state.spotLightMap,Zt.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.lightProbeGrid=w.state.lightProbeGridArray.length>0,nt.currentProgram=le,nt.uniformsList=null,le}function bo(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=Uu.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Ba(C,Z){const at=P.get(C);at.outputColorSpace=Z.outputColorSpace,at.batching=Z.batching,at.batchingColor=Z.batchingColor,at.instancing=Z.instancing,at.instancingColor=Z.instancingColor,at.instancingMorph=Z.instancingMorph,at.skinning=Z.skinning,at.morphTargets=Z.morphTargets,at.morphNormals=Z.morphNormals,at.morphColors=Z.morphColors,at.morphTargetsCount=Z.morphTargetsCount,at.numClippingPlanes=Z.numClippingPlanes,at.numIntersection=Z.numClipIntersection,at.vertexAlphas=Z.vertexAlphas,at.vertexTangents=Z.vertexTangents,at.toneMapping=Z.toneMapping}function Eo(C,Z){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;U.setFromMatrixPosition(Z.matrixWorld);for(let at=0,nt=C.length;at<nt;at++){const it=C[at];if(it.texture!==null&&it.boundingBox.containsPoint(U))return it}return null}function Ha(C,Z,at,nt,it){Z.isScene!==!0&&(Z=mn),E.resetTextureUnits();const Ft=Z.fog,kt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?Z.environment:null,zt=Y===null?G.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:we.workingColorSpace,Yt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Xt=J.get(nt.envMap||kt,Yt),Kt=nt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,le=!!at.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Zt=!!at.morphAttributes.position,Ce=!!at.morphAttributes.normal,rn=!!at.morphAttributes.color;let Ke=ea;nt.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ke=G.toneMapping);const ze=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Fe=ze!==void 0?ze.length:0,Vt=P.get(nt),Xn=w.state.lights;if(Ze===!0&&(pe===!0||C!==B)){const Oe=C===B&&nt.id===z;It.setState(nt,C,Oe)}let xe=!1;nt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Xn.state.version||Vt.outputColorSpace!==zt||it.isBatchedMesh&&Vt.batching===!1||!it.isBatchedMesh&&Vt.batching===!0||it.isBatchedMesh&&Vt.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&Vt.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&Vt.instancing===!1||!it.isInstancedMesh&&Vt.instancing===!0||it.isSkinnedMesh&&Vt.skinning===!1||!it.isSkinnedMesh&&Vt.skinning===!0||it.isInstancedMesh&&Vt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Vt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Vt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Vt.instancingMorph===!1&&it.morphTexture!==null||Vt.envMap!==Xt||nt.fog===!0&&Vt.fog!==Ft||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==It.numPlanes||Vt.numIntersection!==It.numIntersection)||Vt.vertexAlphas!==Kt||Vt.vertexTangents!==le||Vt.morphTargets!==Zt||Vt.morphNormals!==Ce||Vt.morphColors!==rn||Vt.toneMapping!==Ke||Vt.morphTargetsCount!==Fe||!!Vt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Vt.__version=nt.version);let An=Vt.currentProgram;xe===!0&&(An=cr(nt,Z,it),k&&nt.isNodeMaterial&&k.onUpdateProgram(nt,An,Vt));let ci=!1,Ni=!1,ui=!1;const Be=An.getUniforms(),on=Vt.uniforms;if(wt.useProgram(An.program)&&(ci=!0,Ni=!0,ui=!0),nt.id!==z&&(z=nt.id,Ni=!0),Vt.needsLights){const Oe=Eo(w.state.lightProbeGridArray,it);Vt.lightProbeGrid!==Oe&&(Vt.lightProbeGrid=Oe,Ni=!0)}if(ci||B!==C){wt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Be.setValue(j,"projectionMatrix",C.projectionMatrix),Be.setValue(j,"viewMatrix",C.matrixWorldInverse);const ki=Be.map.cameraPosition;ki!==void 0&&ki.setValue(j,Ie.setFromMatrixPosition(C.matrixWorld)),ke.logarithmicDepthBuffer&&Be.setValue(j,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Be.setValue(j,"isOrthographic",C.isOrthographicCamera===!0),B!==C&&(B=C,Ni=!0,ui=!0)}if(Vt.needsLights&&(Xn.state.directionalShadowMap.length>0&&Be.setValue(j,"directionalShadowMap",Xn.state.directionalShadowMap,E),Xn.state.spotShadowMap.length>0&&Be.setValue(j,"spotShadowMap",Xn.state.spotShadowMap,E),Xn.state.pointShadowMap.length>0&&Be.setValue(j,"pointShadowMap",Xn.state.pointShadowMap,E)),it.isSkinnedMesh){Be.setOptional(j,it,"bindMatrix"),Be.setOptional(j,it,"bindMatrixInverse");const Oe=it.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Be.setValue(j,"boneTexture",Oe.boneTexture,E))}it.isBatchedMesh&&(Be.setOptional(j,it,"batchingTexture"),Be.setValue(j,"batchingTexture",it._matricesTexture,E),Be.setOptional(j,it,"batchingIdTexture"),Be.setValue(j,"batchingIdTexture",it._indirectTexture,E),Be.setOptional(j,it,"batchingColorTexture"),it._colorsTexture!==null&&Be.setValue(j,"batchingColorTexture",it._colorsTexture,E));const Pi=at.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&ae.update(it,at,An),(Ni||Vt.receiveShadow!==it.receiveShadow)&&(Vt.receiveShadow=it.receiveShadow,Be.setValue(j,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&Z.environment!==null&&(on.envMapIntensity.value=Z.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=yR()),Ni){if(Be.setValue(j,"toneMappingExposure",G.toneMappingExposure),Vt.needsLights&&Ga(on,ui),Ft&&nt.fog===!0&&ft.refreshFogUniforms(on,Ft),ft.refreshMaterialUniforms(on,nt,Rt,Et,w.state.transmissionRenderTarget[C.id]),Vt.needsLights&&Vt.lightProbeGrid){const Oe=Vt.lightProbeGrid;on.probesSH.value=Oe.texture,on.probesMin.value.copy(Oe.boundingBox.min),on.probesMax.value.copy(Oe.boundingBox.max),on.probesResolution.value.copy(Oe.resolution)}Uu.upload(j,bo(Vt),on,E)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Uu.upload(j,bo(Vt),on,E),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Be.setValue(j,"center",it.center),Be.setValue(j,"modelViewMatrix",it.modelViewMatrix),Be.setValue(j,"normalMatrix",it.normalMatrix),Be.setValue(j,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){const Oe=nt.uniformsGroups;for(let ki=0,ka=Oe.length;ki<ka;ki++){const Us=Oe[ki];pt.update(Us,An),pt.bind(Us,An)}}return An}function Ga(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function Ds(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return rt},this.getActiveMipmapLevel=function(){return ot},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(C,Z,at){const nt=P.get(C);nt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),P.get(C.texture).__webglTexture=Z,P.get(C.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:at,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const at=P.get(C);at.__webglFramebuffer=Z,at.__useDefaultFramebuffer=Z===void 0};const Va=j.createFramebuffer();this.setRenderTarget=function(C,Z=0,at=0){Y=C,rt=Z,ot=at;let nt=null,it=!1,Ft=!1;if(C){const zt=P.get(C);if(zt.__useDefaultFramebuffer!==void 0){wt.bindFramebuffer(j.FRAMEBUFFER,zt.__webglFramebuffer),$.copy(C.viewport),ct.copy(C.scissor),mt=C.scissorTest,wt.viewport($),wt.scissor(ct),wt.setScissorTest(mt),z=-1;return}else if(zt.__webglFramebuffer===void 0)E.setupRenderTarget(C);else if(zt.__hasExternalTextures)E.rebindTextures(C,P.get(C.texture).__webglTexture,P.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Kt=C.depthTexture;if(zt.__boundDepthTexture!==Kt){if(Kt!==null&&P.has(Kt)&&(C.width!==Kt.image.width||C.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(C)}}const Yt=C.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Ft=!0);const Xt=P.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xt[Z])?nt=Xt[Z][at]:nt=Xt[Z],it=!0):C.samples>0&&E.useMultisampledRTT(C)===!1?nt=P.get(C).__webglMultisampledFramebuffer:Array.isArray(Xt)?nt=Xt[at]:nt=Xt,$.copy(C.viewport),ct.copy(C.scissor),mt=C.scissorTest}else $.copy(Tt).multiplyScalar(Rt).floor(),ct.copy(Gt).multiplyScalar(Rt).floor(),mt=ee;if(at!==0&&(nt=Va),wt.bindFramebuffer(j.FRAMEBUFFER,nt)&&wt.drawBuffers(C,nt),wt.viewport($),wt.scissor(ct),wt.setScissorTest(mt),it){const zt=P.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Z,zt.__webglTexture,at)}else if(Ft){const zt=Z;for(let Yt=0;Yt<C.textures.length;Yt++){const Xt=P.get(C.textures[Yt]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Yt,Xt.__webglTexture,at,zt)}}else if(C!==null&&at!==0){const zt=P.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,zt.__webglTexture,at)}z=-1},this.readRenderTargetPixels=function(C,Z,at,nt,it,Ft,kt,zt=0){if(!(C&&C.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=P.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&kt!==void 0&&(Yt=Yt[kt]),Yt){wt.bindFramebuffer(j.FRAMEBUFFER,Yt);try{const Xt=C.textures[zt],Kt=Xt.format,le=Xt.type;if(C.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+zt),!ke.textureFormatReadable(Kt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(le)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-nt&&at>=0&&at<=C.height-it&&j.readPixels(Z,at,nt,it,W.convert(Kt),W.convert(le),Ft)}finally{const Xt=Y!==null?P.get(Y).__webglFramebuffer:null;wt.bindFramebuffer(j.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(C,Z,at,nt,it,Ft,kt,zt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=P.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&kt!==void 0&&(Yt=Yt[kt]),Yt)if(Z>=0&&Z<=C.width-nt&&at>=0&&at<=C.height-it){wt.bindFramebuffer(j.FRAMEBUFFER,Yt);const Xt=C.textures[zt],Kt=Xt.format,le=Xt.type;if(C.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+zt),!ke.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Zt),j.bufferData(j.PIXEL_PACK_BUFFER,Ft.byteLength,j.STREAM_READ),j.readPixels(Z,at,nt,it,W.convert(Kt),W.convert(le),0);const Ce=Y!==null?P.get(Y).__webglFramebuffer:null;wt.bindFramebuffer(j.FRAMEBUFFER,Ce);const rn=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Mb(j,rn,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Zt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ft),j.deleteBuffer(Zt),j.deleteSync(rn),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,at=0){const nt=Math.pow(2,-at),it=Math.floor(C.image.width*nt),Ft=Math.floor(C.image.height*nt),kt=Z!==null?Z.x:0,zt=Z!==null?Z.y:0;E.setTexture2D(C,0),j.copyTexSubImage2D(j.TEXTURE_2D,at,0,0,kt,zt,it,Ft),wt.unbindTexture()};const yn=j.createFramebuffer(),Hl=j.createFramebuffer();this.copyTextureToTexture=function(C,Z,at=null,nt=null,it=0,Ft=0){let kt,zt,Yt,Xt,Kt,le,Zt,Ce,rn;const Ke=C.isCompressedTexture?C.mipmaps[Ft]:C.image;if(at!==null)kt=at.max.x-at.min.x,zt=at.max.y-at.min.y,Yt=at.isBox3?at.max.z-at.min.z:1,Xt=at.min.x,Kt=at.min.y,le=at.isBox3?at.min.z:0;else{const on=Math.pow(2,-it);kt=Math.floor(Ke.width*on),zt=Math.floor(Ke.height*on),C.isDataArrayTexture?Yt=Ke.depth:C.isData3DTexture?Yt=Math.floor(Ke.depth*on):Yt=1,Xt=0,Kt=0,le=0}nt!==null?(Zt=nt.x,Ce=nt.y,rn=nt.z):(Zt=0,Ce=0,rn=0);const ze=W.convert(Z.format),Fe=W.convert(Z.type);let Vt;Z.isData3DTexture?(E.setTexture3D(Z,0),Vt=j.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(E.setTexture2DArray(Z,0),Vt=j.TEXTURE_2D_ARRAY):(E.setTexture2D(Z,0),Vt=j.TEXTURE_2D),wt.activeTexture(j.TEXTURE0),wt.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Z.flipY),wt.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),wt.pixelStorei(j.UNPACK_ALIGNMENT,Z.unpackAlignment);const Xn=wt.getParameter(j.UNPACK_ROW_LENGTH),xe=wt.getParameter(j.UNPACK_IMAGE_HEIGHT),An=wt.getParameter(j.UNPACK_SKIP_PIXELS),ci=wt.getParameter(j.UNPACK_SKIP_ROWS),Ni=wt.getParameter(j.UNPACK_SKIP_IMAGES);wt.pixelStorei(j.UNPACK_ROW_LENGTH,Ke.width),wt.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ke.height),wt.pixelStorei(j.UNPACK_SKIP_PIXELS,Xt),wt.pixelStorei(j.UNPACK_SKIP_ROWS,Kt),wt.pixelStorei(j.UNPACK_SKIP_IMAGES,le);const ui=C.isDataArrayTexture||C.isData3DTexture,Be=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const on=P.get(C),Pi=P.get(Z),Oe=P.get(on.__renderTarget),ki=P.get(Pi.__renderTarget);wt.bindFramebuffer(j.READ_FRAMEBUFFER,Oe.__webglFramebuffer),wt.bindFramebuffer(j.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let ka=0;ka<Yt;ka++)ui&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,P.get(C).__webglTexture,it,le+ka),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,P.get(Z).__webglTexture,Ft,rn+ka)),j.blitFramebuffer(Xt,Kt,kt,zt,Zt,Ce,kt,zt,j.DEPTH_BUFFER_BIT,j.NEAREST);wt.bindFramebuffer(j.READ_FRAMEBUFFER,null),wt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(it!==0||C.isRenderTargetTexture||P.has(C)){const on=P.get(C),Pi=P.get(Z);wt.bindFramebuffer(j.READ_FRAMEBUFFER,yn),wt.bindFramebuffer(j.DRAW_FRAMEBUFFER,Hl);for(let Oe=0;Oe<Yt;Oe++)ui?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,on.__webglTexture,it,le+Oe):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,on.__webglTexture,it),Be?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Pi.__webglTexture,Ft,rn+Oe):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Pi.__webglTexture,Ft),it!==0?j.blitFramebuffer(Xt,Kt,kt,zt,Zt,Ce,kt,zt,j.COLOR_BUFFER_BIT,j.NEAREST):Be?j.copyTexSubImage3D(Vt,Ft,Zt,Ce,rn+Oe,Xt,Kt,kt,zt):j.copyTexSubImage2D(Vt,Ft,Zt,Ce,Xt,Kt,kt,zt);wt.bindFramebuffer(j.READ_FRAMEBUFFER,null),wt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Be?C.isDataTexture||C.isData3DTexture?j.texSubImage3D(Vt,Ft,Zt,Ce,rn,kt,zt,Yt,ze,Fe,Ke.data):Z.isCompressedArrayTexture?j.compressedTexSubImage3D(Vt,Ft,Zt,Ce,rn,kt,zt,Yt,ze,Ke.data):j.texSubImage3D(Vt,Ft,Zt,Ce,rn,kt,zt,Yt,ze,Fe,Ke):C.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ft,Zt,Ce,kt,zt,ze,Fe,Ke.data):C.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ft,Zt,Ce,Ke.width,Ke.height,ze,Ke.data):j.texSubImage2D(j.TEXTURE_2D,Ft,Zt,Ce,kt,zt,ze,Fe,Ke);wt.pixelStorei(j.UNPACK_ROW_LENGTH,Xn),wt.pixelStorei(j.UNPACK_IMAGE_HEIGHT,xe),wt.pixelStorei(j.UNPACK_SKIP_PIXELS,An),wt.pixelStorei(j.UNPACK_SKIP_ROWS,ci),wt.pixelStorei(j.UNPACK_SKIP_IMAGES,Ni),Ft===0&&Z.generateMipmaps&&j.generateMipmap(Vt),wt.unbindTexture()},this.initRenderTarget=function(C){P.get(C).__webglFramebuffer===void 0&&E.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),wt.unbindTexture()},this.resetState=function(){rt=0,ot=0,Y=null,wt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}const lx={type:"change"},am={type:"start"},ly={type:"end"},xu=new Xu,cx=new Ms,MR=Math.cos(70*Il.DEG2RAD),Rn=new X,ri=2*Math.PI,je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fd=1e-6;class bR extends $x{constructor(t,i=null){super(t,i),this.state=je.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ro.ROTATE,MIDDLE:ro.DOLLY,RIGHT:ro.PAN},this.touches={ONE:io.ROTATE,TWO:io.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Pn,this._lastTargetPosition=new X,this._quat=new Pn().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Iv,this._sphericalDelta=new Iv,this._scale=1,this._panOffset=new X,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new X,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=TR.bind(this),this._onPointerDown=ER.bind(this),this._onPointerUp=AR.bind(this),this._onContextMenu=NR.bind(this),this._onMouseWheel=CR.bind(this),this._onKeyDown=DR.bind(this),this._onTouchStart=UR.bind(this),this._onTouchMove=LR.bind(this),this._onMouseDown=wR.bind(this),this._onMouseMove=RR.bind(this),this._interceptControlDown=PR.bind(this),this._interceptControlUp=OR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lx),this.update(),this.state=je.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;Rn.copy(i).sub(this.target),Rn.applyQuaternion(this._quat),this._spherical.setFromVector3(Rn),this.autoRotate&&this.state===je.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ri:s>Math.PI&&(s-=ri),l<-Math.PI?l+=ri:l>Math.PI&&(l-=ri),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Rn.setFromSpherical(this._spherical),Rn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=Rn.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new X(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new X(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=Rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(xu.origin.copy(this.object.position),xu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xu.direction))<MR?this.object.lookAt(this.target):(cx.setFromNormalAndCoplanarPoint(this.object.up,this.target),xu.intersectPlane(cx,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Fd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fd||this._lastTargetPosition.distanceToSquared(this.target)>Fd?(this.dispatchEvent(lx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ri/60*this.autoRotateSpeed*t:ri/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Rn.setFromMatrixColumn(i,0),Rn.multiplyScalar(-t),this._panOffset.add(Rn)}_panUp(t,i){this.screenSpacePanning===!0?Rn.setFromMatrixColumn(i,1):(Rn.setFromMatrixColumn(i,0),Rn.crossVectors(this.object.up,Rn)),Rn.multiplyScalar(t),this._panOffset.add(Rn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Rn.copy(l).sub(this.target);let c=Rn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,d=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ri*this._rotateDelta.x/i.clientHeight),this._rotateUp(ri*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ri*this._rotateDelta.x/i.clientHeight),this._rotateUp(ri*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ie,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function ER(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function TR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function AR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ly),this.state=je.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function wR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ro.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=je.DOLLY;break;case ro.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=je.ROTATE}break;case ro.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=je.PAN}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(am)}function RR(r){switch(this.state){case je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function CR(r){this.enabled===!1||this.enableZoom===!1||this.state!==je.NONE||(r.preventDefault(),this.dispatchEvent(am),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(ly))}function DR(r){this.enabled!==!1&&this._handleKeyDown(r)}function UR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case io.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=je.TOUCH_ROTATE;break;case io.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=je.TOUCH_PAN;break;default:this.state=je.NONE}break;case 2:switch(this.touches.TWO){case io.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=je.TOUCH_DOLLY_PAN;break;case io.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=je.TOUCH_DOLLY_ROTATE;break;default:this.state=je.NONE}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(am)}function LR(r){switch(this._trackPointer(r),this.state){case je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=je.NONE}}function NR(r){this.enabled!==!1&&r.preventDefault()}function PR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function OR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Js=new Jx,jn=new X,xs=new X,cn=new Pn,ux={X:new X(1,0,0),Y:new X(0,1,0),Z:new X(0,0,1)},Bd={type:"change"},fx={type:"mouseDown",mode:null},hx={type:"mouseUp",mode:null},dx={type:"objectChange"};class IR extends $x{constructor(t,i=null){super(void 0,i);const s=new VR(this);this._root=s;const l=new kR;this._gizmo=l,s.add(l);const c=new XR;this._plane=c,s.add(c);const f=this;function d(L,U){let F=U;Object.defineProperty(f,L,{get:function(){return F!==void 0?F:U},set:function(w){F!==w&&(F=w,c[L]=w,l[L]=w,f.dispatchEvent({type:L+"-changed",value:w}),f.dispatchEvent(Bd))}}),f[L]=U,c[L]=U,l[L]=U}d("camera",t),d("object",void 0),d("enabled",!0),d("axis",null),d("mode","translate"),d("translationSnap",null),d("rotationSnap",null),d("scaleSnap",null),d("space","world"),d("size",1),d("dragging",!1),d("showX",!0),d("showY",!0),d("showZ",!0),d("showXY",!0),d("showYZ",!0),d("showXZ",!0),d("minX",-1/0),d("maxX",1/0),d("minY",-1/0),d("maxY",1/0),d("minZ",-1/0),d("maxZ",1/0);const m=new X,p=new X,_=new Pn,x=new Pn,g=new X,M=new Pn,A=new X,R=new X,S=new X,v=0,T=new X;d("worldPosition",m),d("worldPositionStart",p),d("worldQuaternion",_),d("worldQuaternionStart",x),d("cameraPosition",g),d("cameraQuaternion",M),d("pointStart",A),d("pointEnd",R),d("rotationAxis",S),d("rotationAngle",v),d("eye",T),this._offset=new X,this._startNorm=new X,this._endNorm=new X,this._cameraScale=new X,this._parentPosition=new X,this._parentQuaternion=new Pn,this._parentQuaternionInv=new Pn,this._parentScale=new X,this._worldScaleStart=new X,this._worldQuaternionInv=new Pn,this._worldScale=new X,this._positionStart=new X,this._quaternionStart=new Pn,this._scaleStart=new X,this._getPointer=zR.bind(this),this._onPointerDown=BR.bind(this),this._onPointerHover=FR.bind(this),this._onPointerMove=HR.bind(this),this._onPointerUp=GR.bind(this),i!==null&&this.connect(i)}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction=""}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&Js.setFromCamera(t,this.camera);const i=Hd(this._gizmo.picker[this.mode],Js);i?this.axis=i.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&Js.setFromCamera(t,this.camera);const i=Hd(this._plane,Js,!0);i&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(i.point).sub(this.worldPositionStart)),this.dragging=!0,fx.mode=this.mode,this.dispatchEvent(fx)}}pointerMove(t){const i=this.axis,s=this.mode,l=this.object;let c=this.space;if(s==="scale"?c="local":(i==="E"||i==="XYZE"||i==="XYZ")&&(c="world"),l===void 0||i===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&Js.setFromCamera(t,this.camera);const f=Hd(this._plane,Js,!0);if(f){if(this.pointEnd.copy(f.point).sub(this.worldPositionStart),s==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),c==="local"&&i!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),i.indexOf("X")===-1&&(this._offset.x=0),i.indexOf("Y")===-1&&(this._offset.y=0),i.indexOf("Z")===-1&&(this._offset.z=0),c==="local"&&i!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),l.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(c==="local"&&(l.position.applyQuaternion(cn.copy(this._quaternionStart).invert()),i.search("X")!==-1&&(l.position.x=Math.round(l.position.x/this.translationSnap)*this.translationSnap),i.search("Y")!==-1&&(l.position.y=Math.round(l.position.y/this.translationSnap)*this.translationSnap),i.search("Z")!==-1&&(l.position.z=Math.round(l.position.z/this.translationSnap)*this.translationSnap),l.position.applyQuaternion(this._quaternionStart)),c==="world"&&(l.parent&&l.position.add(jn.setFromMatrixPosition(l.parent.matrixWorld)),i.search("X")!==-1&&(l.position.x=Math.round(l.position.x/this.translationSnap)*this.translationSnap),i.search("Y")!==-1&&(l.position.y=Math.round(l.position.y/this.translationSnap)*this.translationSnap),i.search("Z")!==-1&&(l.position.z=Math.round(l.position.z/this.translationSnap)*this.translationSnap),l.parent&&l.position.sub(jn.setFromMatrixPosition(l.parent.matrixWorld)))),l.position.x=Math.max(this.minX,Math.min(this.maxX,l.position.x)),l.position.y=Math.max(this.minY,Math.min(this.maxY,l.position.y)),l.position.z=Math.max(this.minZ,Math.min(this.maxZ,l.position.z));else if(s==="scale"){if(i.search("XYZ")!==-1){let d=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(d*=-1),xs.set(d,d,d)}else jn.copy(this.pointStart),xs.copy(this.pointEnd),jn.applyQuaternion(this._worldQuaternionInv),xs.applyQuaternion(this._worldQuaternionInv),xs.divide(jn),i.search("X")===-1&&(xs.x=1),i.search("Y")===-1&&(xs.y=1),i.search("Z")===-1&&(xs.z=1);l.scale.copy(this._scaleStart).multiply(xs),this.scaleSnap&&(i.search("X")!==-1&&(l.scale.x=Math.round(l.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),i.search("Y")!==-1&&(l.scale.y=Math.round(l.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),i.search("Z")!==-1&&(l.scale.z=Math.round(l.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(s==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const d=20/this.worldPosition.distanceTo(jn.setFromMatrixPosition(this.camera.matrixWorld));let m=!1;i==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(jn.copy(this.rotationAxis).cross(this.eye))*d):(i==="X"||i==="Y"||i==="Z")&&(this.rotationAxis.copy(ux[i]),jn.copy(ux[i]),c==="local"&&jn.applyQuaternion(this.worldQuaternion),jn.cross(this.eye),jn.length()===0?m=!0:this.rotationAngle=this._offset.dot(jn.normalize())*d),(i==="E"||m)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),c==="local"&&i!=="E"&&i!=="XYZE"?(l.quaternion.copy(this._quaternionStart),l.quaternion.multiply(cn.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),l.quaternion.copy(cn.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),l.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Bd),this.dispatchEvent(dx)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(hx.mode=this.mode,this.dispatchEvent(hx)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Bd),this.dispatchEvent(dx),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Js}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}setColors(t,i,s,l){const c=this._gizmo.materialLib;c.xAxis.color.set(t),c.yAxis.color.set(i),c.zAxis.color.set(s),c.active.color.set(l),c.xAxisTransparent.color.set(t),c.yAxisTransparent.color.set(i),c.zAxisTransparent.color.set(s),c.activeTransparent.color.set(l),c.xAxis._color&&c.xAxis._color.set(t),c.yAxis._color&&c.yAxis._color.set(i),c.zAxis._color&&c.zAxis._color.set(s),c.active._color&&c.active._color.set(l),c.xAxisTransparent._color&&c.xAxisTransparent._color.set(t),c.yAxisTransparent._color&&c.yAxisTransparent._color.set(i),c.zAxisTransparent._color&&c.zAxisTransparent._color.set(s),c.activeTransparent._color&&c.activeTransparent._color.set(l)}}function zR(r){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:r.button};{const t=this.domElement.getBoundingClientRect();return{x:(r.clientX-t.left)/t.width*2-1,y:-(r.clientY-t.top)/t.height*2+1,button:r.button}}}function FR(r){if(this.enabled)switch(r.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(r));break}}function BR(r){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(r)),this.pointerDown(this._getPointer(r)))}function HR(r){this.enabled&&this.pointerMove(this._getPointer(r))}function GR(r){this.enabled&&(this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(r)))}function Hd(r,t,i){const s=t.intersectObject(r,!0);for(let l=0;l<s.length;l++)if(s[l].object.visible||i)return s[l];return!1}const yu=new Ia,Je=new X(0,1,0),px=new X(0,0,0),mx=new an,Su=new Pn,Lu=new Pn,Ki=new X,gx=new an,wl=new X(1,0,0),tr=new X(0,1,0),Rl=new X(0,0,1),Mu=new X,Sl=new X,Ml=new X;class VR extends xn{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){const i=this.controls;i.object!==void 0&&(i.object.updateMatrixWorld(),i.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):i.object.parent.matrixWorld.decompose(i._parentPosition,i._parentQuaternion,i._parentScale),i.object.matrixWorld.decompose(i.worldPosition,i.worldQuaternion,i._worldScale),i._parentQuaternionInv.copy(i._parentQuaternion).invert(),i._worldQuaternionInv.copy(i.worldQuaternion).invert()),i.camera.updateMatrixWorld(),i.camera.matrixWorld.decompose(i.cameraPosition,i.cameraQuaternion,i._cameraScale),i.camera.isOrthographicCamera?i.camera.getWorldDirection(i.eye).negate():i.eye.copy(i.cameraPosition).sub(i.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class kR extends xn{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new Fl({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=new Yu({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),s=t.clone();s.opacity=.15;const l=i.clone();l.opacity=.5;const c=t.clone();c.color.setHex(16711680);const f=t.clone();f.color.setHex(65280);const d=t.clone();d.color.setHex(255);const m=t.clone();m.color.setHex(16711680),m.opacity=.5;const p=t.clone();p.color.setHex(65280),p.opacity=.5;const _=t.clone();_.color.setHex(255),_.opacity=.5;const x=t.clone();x.opacity=.25;const g=t.clone();g.color.setHex(16776960),g.opacity=.25;const M=t.clone();M.color.setHex(16776960);const A=t.clone();A.color.setHex(7895160),this.materialLib={xAxis:c,yAxis:f,zAxis:d,active:M,xAxisTransparent:m,yAxisTransparent:p,zAxisTransparent:_,activeTransparent:g};const R=new Gn(0,.04,.1,12);R.translate(0,.05,0);const S=new qe(.08,.08,.08);S.translate(0,.04,0);const v=new Cn;v.setAttribute("position",new Le([0,0,0,1,0,0],3));const T=new Gn(.0075,.0075,.5,3);T.translate(0,.25,0);function L(Y,z){const B=new ir(Y,.0075,3,64,z*Math.PI*2);return B.rotateY(Math.PI/2),B.rotateX(Math.PI/2),B}function U(){const Y=new Cn;return Y.setAttribute("position",new Le([0,0,0,1,1,1],3)),Y}const F={X:[[new Pt(R,c),[.5,0,0],[0,0,-Math.PI/2]],[new Pt(R,c),[-.5,0,0],[0,0,Math.PI/2]],[new Pt(T,c),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Pt(R,f),[0,.5,0]],[new Pt(R,f),[0,-.5,0],[Math.PI,0,0]],[new Pt(T,f)]],Z:[[new Pt(R,d),[0,0,.5],[Math.PI/2,0,0]],[new Pt(R,d),[0,0,-.5],[-Math.PI/2,0,0]],[new Pt(T,d),null,[Math.PI/2,0,0]]],XYZ:[[new Pt(new so(.1,0),x),[0,0,0]]],XY:[[new Pt(new qe(.15,.15,.01),_),[.15,.15,0]]],YZ:[[new Pt(new qe(.15,.15,.01),m),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Pt(new qe(.15,.15,.01),p),[.15,0,.15],[-Math.PI/2,0,0]]]},w={X:[[new Pt(new Gn(.2,0,.6,4),s),[.3,0,0],[0,0,-Math.PI/2]],[new Pt(new Gn(.2,0,.6,4),s),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Pt(new Gn(.2,0,.6,4),s),[0,.3,0]],[new Pt(new Gn(.2,0,.6,4),s),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Pt(new Gn(.2,0,.6,4),s),[0,0,.3],[Math.PI/2,0,0]],[new Pt(new Gn(.2,0,.6,4),s),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Pt(new so(.2,0),s)]],XY:[[new Pt(new qe(.2,.2,.01),s),[.15,.15,0]]],YZ:[[new Pt(new qe(.2,.2,.01),s),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Pt(new qe(.2,.2,.01),s),[.15,0,.15],[-Math.PI/2,0,0]]]},O={START:[[new Pt(new so(.01,2),l),null,null,null,"helper"]],END:[[new Pt(new so(.01,2),l),null,null,null,"helper"]],DELTA:[[new Da(U(),l),null,null,null,"helper"]],X:[[new Da(v,l),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Da(v,l),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Da(v,l),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},b={XYZE:[[new Pt(L(.5,1),A),null,[0,Math.PI/2,0]]],X:[[new Pt(L(.5,.5),c)]],Y:[[new Pt(L(.5,.5),f),null,[0,0,-Math.PI/2]]],Z:[[new Pt(L(.5,.5),d),null,[0,Math.PI/2,0]]],E:[[new Pt(L(.75,1),g),null,[0,Math.PI/2,0]]]},N={AXIS:[[new Da(v,l),[-1e3,0,0],null,[1e6,1,1],"helper"]]},G={XYZE:[[new Pt(new Wu(.25,10,8),s)]],X:[[new Pt(new ir(.5,.1,4,24),s),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Pt(new ir(.5,.1,4,24),s),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Pt(new ir(.5,.1,4,24),s),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Pt(new ir(.75,.1,2,24),s)]]},H={X:[[new Pt(S,c),[.5,0,0],[0,0,-Math.PI/2]],[new Pt(T,c),[0,0,0],[0,0,-Math.PI/2]],[new Pt(S,c),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Pt(S,f),[0,.5,0]],[new Pt(T,f)],[new Pt(S,f),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Pt(S,d),[0,0,.5],[Math.PI/2,0,0]],[new Pt(T,d),[0,0,0],[Math.PI/2,0,0]],[new Pt(S,d),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Pt(new qe(.15,.15,.01),_),[.15,.15,0]]],YZ:[[new Pt(new qe(.15,.15,.01),m),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Pt(new qe(.15,.15,.01),p),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Pt(new qe(.1,.1,.1),x)]]},k={X:[[new Pt(new Gn(.2,0,.6,4),s),[.3,0,0],[0,0,-Math.PI/2]],[new Pt(new Gn(.2,0,.6,4),s),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Pt(new Gn(.2,0,.6,4),s),[0,.3,0]],[new Pt(new Gn(.2,0,.6,4),s),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Pt(new Gn(.2,0,.6,4),s),[0,0,.3],[Math.PI/2,0,0]],[new Pt(new Gn(.2,0,.6,4),s),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Pt(new qe(.2,.2,.01),s),[.15,.15,0]]],YZ:[[new Pt(new qe(.2,.2,.01),s),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Pt(new qe(.2,.2,.01),s),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Pt(new qe(.2,.2,.2),s),[0,0,0]]]},rt={X:[[new Da(v,l),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Da(v,l),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Da(v,l),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function ot(Y){const z=new xn;for(const B in Y)for(let $=Y[B].length;$--;){const ct=Y[B][$][0].clone(),mt=Y[B][$][1],I=Y[B][$][2],Q=Y[B][$][3],vt=Y[B][$][4];ct.name=B,ct.tag=vt,mt&&ct.position.set(mt[0],mt[1],mt[2]),I&&ct.rotation.set(I[0],I[1],I[2]),Q&&ct.scale.set(Q[0],Q[1],Q[2]),ct.updateMatrix();const Et=ct.geometry.clone();Et.applyMatrix4(ct.matrix),ct.geometry=Et,ct.renderOrder=1/0,ct.position.set(0,0,0),ct.rotation.set(0,0,0),ct.scale.set(1,1,1),z.add(ct)}return z}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=ot(F)),this.add(this.gizmo.rotate=ot(b)),this.add(this.gizmo.scale=ot(H)),this.add(this.picker.translate=ot(w)),this.add(this.picker.rotate=ot(G)),this.add(this.picker.scale=ot(k)),this.add(this.helper.translate=ot(O)),this.add(this.helper.rotate=ot(N)),this.add(this.helper.scale=ot(rt)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const s=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Lu;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let l=[];l=l.concat(this.picker[this.mode].children),l=l.concat(this.gizmo[this.mode].children),l=l.concat(this.helper[this.mode].children);for(let c=0;c<l.length;c++){const f=l[c];f.visible=!0,f.rotation.set(0,0,0),f.position.copy(this.worldPosition);let d;if(this.camera.isOrthographicCamera?d=(this.camera.top-this.camera.bottom)/this.camera.zoom:d=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),f.scale.set(1,1,1).multiplyScalar(d*this.size/4),f.tag==="helper"){f.visible=!1,f.name==="AXIS"?(f.visible=!!this.axis,this.axis==="X"&&(cn.setFromEuler(yu.set(0,0,0)),f.quaternion.copy(s).multiply(cn),Math.abs(Je.copy(wl).applyQuaternion(s).dot(this.eye))>.9&&(f.visible=!1)),this.axis==="Y"&&(cn.setFromEuler(yu.set(0,0,Math.PI/2)),f.quaternion.copy(s).multiply(cn),Math.abs(Je.copy(tr).applyQuaternion(s).dot(this.eye))>.9&&(f.visible=!1)),this.axis==="Z"&&(cn.setFromEuler(yu.set(0,Math.PI/2,0)),f.quaternion.copy(s).multiply(cn),Math.abs(Je.copy(Rl).applyQuaternion(s).dot(this.eye))>.9&&(f.visible=!1)),this.axis==="XYZE"&&(cn.setFromEuler(yu.set(0,Math.PI/2,0)),Je.copy(this.rotationAxis),f.quaternion.setFromRotationMatrix(mx.lookAt(px,Je,tr)),f.quaternion.multiply(cn),f.visible=this.dragging),this.axis==="E"&&(f.visible=!1)):f.name==="START"?(f.position.copy(this.worldPositionStart),f.visible=this.dragging):f.name==="END"?(f.position.copy(this.worldPosition),f.visible=this.dragging):f.name==="DELTA"?(f.position.copy(this.worldPositionStart),f.quaternion.copy(this.worldQuaternionStart),jn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),jn.applyQuaternion(this.worldQuaternionStart.clone().invert()),f.scale.copy(jn),f.visible=this.dragging):(f.quaternion.copy(s),this.dragging?f.position.copy(this.worldPositionStart):f.position.copy(this.worldPosition),this.axis&&(f.visible=this.axis.search(f.name)!==-1));continue}f.quaternion.copy(s),this.mode==="translate"||this.mode==="scale"?(f.name==="X"&&Math.abs(Je.copy(wl).applyQuaternion(s).dot(this.eye))>.99&&(f.scale.set(1e-10,1e-10,1e-10),f.visible=!1),f.name==="Y"&&Math.abs(Je.copy(tr).applyQuaternion(s).dot(this.eye))>.99&&(f.scale.set(1e-10,1e-10,1e-10),f.visible=!1),f.name==="Z"&&Math.abs(Je.copy(Rl).applyQuaternion(s).dot(this.eye))>.99&&(f.scale.set(1e-10,1e-10,1e-10),f.visible=!1),f.name==="XY"&&Math.abs(Je.copy(Rl).applyQuaternion(s).dot(this.eye))<.2&&(f.scale.set(1e-10,1e-10,1e-10),f.visible=!1),f.name==="YZ"&&Math.abs(Je.copy(wl).applyQuaternion(s).dot(this.eye))<.2&&(f.scale.set(1e-10,1e-10,1e-10),f.visible=!1),f.name==="XZ"&&Math.abs(Je.copy(tr).applyQuaternion(s).dot(this.eye))<.2&&(f.scale.set(1e-10,1e-10,1e-10),f.visible=!1)):this.mode==="rotate"&&(Su.copy(s),Je.copy(this.eye).applyQuaternion(cn.copy(s).invert()),f.name.search("E")!==-1&&f.quaternion.setFromRotationMatrix(mx.lookAt(this.eye,px,tr)),f.name==="X"&&(cn.setFromAxisAngle(wl,Math.atan2(-Je.y,Je.z)),cn.multiplyQuaternions(Su,cn),f.quaternion.copy(cn)),f.name==="Y"&&(cn.setFromAxisAngle(tr,Math.atan2(Je.x,Je.z)),cn.multiplyQuaternions(Su,cn),f.quaternion.copy(cn)),f.name==="Z"&&(cn.setFromAxisAngle(Rl,Math.atan2(Je.y,Je.x)),cn.multiplyQuaternions(Su,cn),f.quaternion.copy(cn))),f.visible=f.visible&&(f.name.indexOf("X")===-1||this.showX),f.visible=f.visible&&(f.name.indexOf("Y")===-1||this.showY),f.visible=f.visible&&(f.name.indexOf("Z")===-1||this.showZ),f.visible=f.visible&&(f.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),f.visible=f.visible&&(f.name.indexOf("XY")===-1||this.showXY),f.visible=f.visible&&(f.name.indexOf("YZ")===-1||this.showYZ),f.visible=f.visible&&(f.name.indexOf("XZ")===-1||this.showXZ),f.material._color=f.material._color||f.material.color.clone(),f.material._opacity=f.material._opacity||f.material.opacity,f.material.color.copy(f.material._color),f.material.opacity=f.material._opacity,this.enabled&&this.axis&&(f.name===this.axis?(f.material.color.copy(this.materialLib.active.color),f.material.opacity=1):this.axis.split("").some(function(m){return f.name===m})&&(f.material.color.copy(this.materialLib.active.color),f.material.opacity=1))}super.updateMatrixWorld(t)}}class XR extends Pt{constructor(){super(new _o(1e5,1e5,2,2),new Fl({visible:!1,wireframe:!0,side:Ji,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let i=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(i="local"),Mu.copy(wl).applyQuaternion(i==="local"?this.worldQuaternion:Lu),Sl.copy(tr).applyQuaternion(i==="local"?this.worldQuaternion:Lu),Ml.copy(Rl).applyQuaternion(i==="local"?this.worldQuaternion:Lu),Je.copy(Sl),this.mode){case"translate":case"scale":switch(this.axis){case"X":Je.copy(this.eye).cross(Mu),Ki.copy(Mu).cross(Je);break;case"Y":Je.copy(this.eye).cross(Sl),Ki.copy(Sl).cross(Je);break;case"Z":Je.copy(this.eye).cross(Ml),Ki.copy(Ml).cross(Je);break;case"XY":Ki.copy(Ml);break;case"YZ":Ki.copy(Mu);break;case"XZ":Je.copy(Ml),Ki.copy(Sl);break;case"XYZ":case"E":Ki.set(0,0,0);break}break;case"rotate":default:Ki.set(0,0,0)}Ki.length()===0?this.quaternion.copy(this.cameraQuaternion):(gx.lookAt(jn.set(0,0,0),Ki,Je),this.quaternion.setFromRotationMatrix(gx)),super.updateMatrixWorld(t)}}const sm=.004,YR=1/sm,Ip=100,WR=Ip*sm;function Gd(r){return r*sm}function Vd(r){return Math.round(r*YR/Ip)*Ip}function qR(r){return{x:Gd(r.y),y:Gd(r.z),z:Gd(-r.x)}}function jR(r){return{x:Vd(-r.z),y:Vd(r.x),z:Vd(r.y)}}function ZR(r){const t=Il.radToDeg(r);return Math.round((t%360+360)%360)}function KR(r){return Il.degToRad(r+90)}function QR(r){return ZR(r-Il.degToRad(90))}function JR(){const r=new ao;r.name="ark-door";const t=new Es({color:3095103,metalness:.65,roughness:.38,emissive:466717,emissiveIntensity:.16}),i=new Es({color:329480,metalness:.78,roughness:.38}),s=new Es({color:4608344,metalness:.38,roughness:.58}),l=new Es({color:1756088,emissive:1015154,emissiveIntensity:.28,transparent:!0,opacity:.2,roughness:.22}),c=new qe(.14,2.55,.16),f=new qe(1.95,.14,.16),d=new qe(.055,2.24,.09),m=new qe(1.62,.055,.09),p=new Pt(new qe(1.72,2.2,.035),l);p.position.set(0,1.28,-.03),r.add(p),[[-1,1.28,0],[1,1.28,0]].forEach(([g,M,A])=>{const R=new Pt(c,t);R.position.set(g,M,A),r.add(R)}),[[0,2.52,0],[0,.04,0]].forEach(([g,M,A])=>{const R=new Pt(f,t);R.position.set(g,M,A),r.add(R)}),[-.62,-.26,.26,.62].forEach(g=>{const M=new Pt(d,i);M.position.set(g,1.27,.04),r.add(M)}),[.42,.84,1.26,1.68,2.1].forEach(g=>{const M=new Pt(m,i);M.position.set(0,g,.06),r.add(M)});const _=new Pt(new qe(.42,.64,.12),s);_.position.set(0,.56,.12),r.add(_);const x=new Pt(new qe(2.1,2.7,.36),new Fl({transparent:!0,opacity:0,depthWrite:!1}));return x.position.set(0,1.35,0),x.name="picker",r.add(x),r.traverse(g=>{g instanceof Pt&&(g.castShadow=!0,g.receiveShadow=!0)}),r}function $R(){const r=new ao;r.name="player-marker";const t=new Es({color:14412542,roughness:.55,metalness:.08}),i=new Es({color:988970,roughness:.7}),s=new Es({color:6220500,emissive:1669231,emissiveIntensity:.45}),l=new Pt(new $p(.22,.7,6,14),t);l.position.y=.66,l.castShadow=!0,r.add(l);const c=new Pt(new Wu(.24,24,18),t);c.position.y=1.32,c.castShadow=!0,r.add(c);const f=new Pt(new qe(.26,.12,.035),i);f.position.set(0,1.32,-.22),r.add(f);const d=new Pt(new tm(.12,.42,24),s);return d.rotation.x=-Math.PI/2,d.position.set(0,.08,-.58),r.add(d),r.position.set(0,0,0),r}function t2({doors:r,mode:t,selectedDoorId:i,onChangeDoor:s,onSelectDoor:l}){const c=Me.useRef(null),f=Me.useRef(null),d=Me.useRef(null),m=Me.useRef(null),p=Me.useRef(null),_=Me.useRef(null),x=Me.useRef(new Map),g=Me.useRef(r),M=Me.useRef(i),A=Me.useRef(s),R=Me.useRef(l);return Me.useEffect(()=>{g.current=r,M.current=i,A.current=s,R.current=l},[r,s,l,i]),Me.useEffect(()=>{const S=c.current;if(!S)return;const v=S,T=new $b;T.background=new me(856343),T.fog=new Qp(856343,16,36),f.current=T;const L=new yi(45,1,.1,100);L.position.set(7.5,6.2,9.5),L.lookAt(0,1,0),d.current=L;const U=new SR({antialias:!0});U.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.shadowMap.enabled=!0,U.shadowMap.type=Ex,v.appendChild(U.domElement),m.current=U;const F=new bR(L,U.domElement);F.enableDamping=!0,F.dampingFactor=.08,F.target.set(0,1,0),p.current=F;const w=new IR(L,U.domElement);w.setSize(.82),w.setTranslationSnap(WR),w.setRotationSnap(Il.degToRad(15)),w.addEventListener("dragging-changed",mt=>{F.enabled=!mt.value}),w.addEventListener("objectChange",()=>{const mt=w.object;if(!mt)return;const I=g.current.find(Et=>Et.id===M.current);if(!I)return;const Q=mt.position.clone(),vt=jR(Q);A.current({...I,x:vt.x,y:vt.y,z:vt.z,yaw:QR(mt.rotation.y)})}),T.add(w.getHelper()),_.current=w;const O=new _E(15204345,1119e3,1.8);T.add(O);const b=new SE(15597563,2.8);b.position.set(6,8,5),b.castShadow=!0,b.shadow.mapSize.width=2048,b.shadow.mapSize.height=2048,T.add(b);const N=new xE(3594182,18,16);N.position.set(-4,3,4),T.add(N);const G=new Pt(new _o(48,48),new Es({color:1383202,roughness:.82,metalness:.04}));G.rotation.x=-Math.PI/2,G.receiveShadow=!0,T.add(G);const H=new EE(48,48,2803640,2502970);H.position.y=.01,T.add(H);const k=new TE(2.5);k.position.y=.03,T.add(k),T.add($R());const rt=new Jx,ot=new ie;function Y(mt){const I=U.domElement.getBoundingClientRect();ot.x=(mt.clientX-I.left)/I.width*2-1,ot.y=-((mt.clientY-I.top)/I.height)*2+1,rt.setFromCamera(ot,L);const Q=[...x.current.values()].map(Rt=>Rt.getObjectByName("picker")).filter(Rt=>!!Rt),vt=rt.intersectObjects(Q,!1);if(!vt[0])return;const Et=vt[0].object.parent;Et!=null&&Et.userData.id&&R.current(Et.userData.id)}U.domElement.addEventListener("pointerdown",Y);function z(){const{width:mt,height:I}=v.getBoundingClientRect();U.setSize(mt,I,!1),L.aspect=mt/I,L.updateProjectionMatrix()}z();const B=new ResizeObserver(z);B.observe(v);let $=0;function ct(){$=window.requestAnimationFrame(ct),F.update(),U.render(T,L)}return ct(),()=>{window.cancelAnimationFrame($),B.disconnect(),U.domElement.removeEventListener("pointerdown",Y),w.dispose(),F.dispose(),U.dispose(),v.removeChild(U.domElement)}},[]),Me.useEffect(()=>{var L,U;const S=f.current;if(!S)return;const v=new Set(r.map(F=>F.id));x.current.forEach((F,w)=>{v.has(w)||(S.remove(F),x.current.delete(w))}),r.forEach(F=>{let w=x.current.get(F.id);w||(w=JR(),w.userData.id=F.id,x.current.set(F.id,w),S.add(w));const O=qR(F);w.position.set(O.x,O.y,O.z),w.rotation.y=KR(F.yaw);const b=F.id===i;w.traverse(N=>{N instanceof Pt&&N.name!=="picker"&&(N.material=N.material.clone(),"emissive"in N.material&&(N.material.emissive=new me(b?1129528:0),N.material.emissiveIntensity=b?.45:0))})});const T=x.current.get(i);T?(L=_.current)==null||L.attach(T):(U=_.current)==null||U.detach()},[r,i]),Me.useEffect(()=>{const S=_.current;S&&(S.setMode(t),S.showX=!0,S.showY=t==="translate",S.showZ=!0)},[t]),xt.jsxs("div",{className:"ark-editor",children:[xt.jsx("div",{ref:c,className:"ark-canvas"}),xt.jsx("div",{className:"viewport-hint",children:"Click a door to select. Drag arrows to move. Switch to rotate for yaw."})]})}function cy(r){var t,i,s="";if(typeof r=="string"||typeof r=="number")s+=r;else if(typeof r=="object")if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(i=cy(r[t]))&&(s&&(s+=" "),s+=i)}else for(i in r)r[i]&&(s&&(s+=" "),s+=i);return s}function uy(){for(var r,t,i=0,s="",l=arguments.length;i<l;i++)(r=arguments[i])&&(t=cy(r))&&(s&&(s+=" "),s+=t);return s}const _x=r=>typeof r=="boolean"?`${r}`:r===0?"0":r,vx=uy,e2=(r,t)=>i=>{var s;if((t==null?void 0:t.variants)==null)return vx(r,i==null?void 0:i.class,i==null?void 0:i.className);const{variants:l,defaultVariants:c}=t,f=Object.keys(l).map(p=>{const _=i==null?void 0:i[p],x=c==null?void 0:c[p];if(_===null)return null;const g=_x(_)||_x(x);return l[p][g]}),d=i&&Object.entries(i).reduce((p,_)=>{let[x,g]=_;return g===void 0||(p[x]=g),p},{}),m=t==null||(s=t.compoundVariants)===null||s===void 0?void 0:s.reduce((p,_)=>{let{class:x,className:g,...M}=_;return Object.entries(M).every(A=>{let[R,S]=A;return Array.isArray(S)?S.includes({...c,...d}[R]):{...c,...d}[R]===S})?[...p,x,g]:p},[]);return vx(r,f,m,i==null?void 0:i.class,i==null?void 0:i.className)},rm="-",n2=r=>{const t=a2(r),{conflictingClassGroups:i,conflictingClassGroupModifiers:s}=r;return{getClassGroupId:f=>{const d=f.split(rm);return d[0]===""&&d.length!==1&&d.shift(),fy(d,t)||i2(f)},getConflictingClassGroupIds:(f,d)=>{const m=i[f]||[];return d&&s[f]?[...m,...s[f]]:m}}},fy=(r,t)=>{var f;if(r.length===0)return t.classGroupId;const i=r[0],s=t.nextPart.get(i),l=s?fy(r.slice(1),s):void 0;if(l)return l;if(t.validators.length===0)return;const c=r.join(rm);return(f=t.validators.find(({validator:d})=>d(c)))==null?void 0:f.classGroupId},xx=/^\[(.+)\]$/,i2=r=>{if(xx.test(r)){const t=xx.exec(r)[1],i=t==null?void 0:t.substring(0,t.indexOf(":"));if(i)return"arbitrary.."+i}},a2=r=>{const{theme:t,prefix:i}=r,s={nextPart:new Map,validators:[]};return r2(Object.entries(r.classGroups),i).forEach(([c,f])=>{zp(f,s,c,t)}),s},zp=(r,t,i,s)=>{r.forEach(l=>{if(typeof l=="string"){const c=l===""?t:yx(t,l);c.classGroupId=i;return}if(typeof l=="function"){if(s2(l)){zp(l(s),t,i,s);return}t.validators.push({validator:l,classGroupId:i});return}Object.entries(l).forEach(([c,f])=>{zp(f,yx(t,c),i,s)})})},yx=(r,t)=>{let i=r;return t.split(rm).forEach(s=>{i.nextPart.has(s)||i.nextPart.set(s,{nextPart:new Map,validators:[]}),i=i.nextPart.get(s)}),i},s2=r=>r.isThemeGetter,r2=(r,t)=>t?r.map(([i,s])=>{const l=s.map(c=>typeof c=="string"?t+c:typeof c=="object"?Object.fromEntries(Object.entries(c).map(([f,d])=>[t+f,d])):c);return[i,l]}):r,o2=r=>{if(r<1)return{get:()=>{},set:()=>{}};let t=0,i=new Map,s=new Map;const l=(c,f)=>{i.set(c,f),t++,t>r&&(t=0,s=i,i=new Map)};return{get(c){let f=i.get(c);if(f!==void 0)return f;if((f=s.get(c))!==void 0)return l(c,f),f},set(c,f){i.has(c)?i.set(c,f):l(c,f)}}},hy="!",l2=r=>{const{separator:t,experimentalParseClassName:i}=r,s=t.length===1,l=t[0],c=t.length,f=d=>{const m=[];let p=0,_=0,x;for(let S=0;S<d.length;S++){let v=d[S];if(p===0){if(v===l&&(s||d.slice(S,S+c)===t)){m.push(d.slice(_,S)),_=S+c;continue}if(v==="/"){x=S;continue}}v==="["?p++:v==="]"&&p--}const g=m.length===0?d:d.substring(_),M=g.startsWith(hy),A=M?g.substring(1):g,R=x&&x>_?x-_:void 0;return{modifiers:m,hasImportantModifier:M,baseClassName:A,maybePostfixModifierPosition:R}};return i?d=>i({className:d,parseClassName:f}):f},c2=r=>{if(r.length<=1)return r;const t=[];let i=[];return r.forEach(s=>{s[0]==="["?(t.push(...i.sort(),s),i=[]):i.push(s)}),t.push(...i.sort()),t},u2=r=>({cache:o2(r.cacheSize),parseClassName:l2(r),...n2(r)}),f2=/\s+/,h2=(r,t)=>{const{parseClassName:i,getClassGroupId:s,getConflictingClassGroupIds:l}=t,c=[],f=r.trim().split(f2);let d="";for(let m=f.length-1;m>=0;m-=1){const p=f[m],{modifiers:_,hasImportantModifier:x,baseClassName:g,maybePostfixModifierPosition:M}=i(p);let A=!!M,R=s(A?g.substring(0,M):g);if(!R){if(!A){d=p+(d.length>0?" "+d:d);continue}if(R=s(g),!R){d=p+(d.length>0?" "+d:d);continue}A=!1}const S=c2(_).join(":"),v=x?S+hy:S,T=v+R;if(c.includes(T))continue;c.push(T);const L=l(R,A);for(let U=0;U<L.length;++U){const F=L[U];c.push(v+F)}d=p+(d.length>0?" "+d:d)}return d};function d2(){let r=0,t,i,s="";for(;r<arguments.length;)(t=arguments[r++])&&(i=dy(t))&&(s&&(s+=" "),s+=i);return s}const dy=r=>{if(typeof r=="string")return r;let t,i="";for(let s=0;s<r.length;s++)r[s]&&(t=dy(r[s]))&&(i&&(i+=" "),i+=t);return i};function p2(r,...t){let i,s,l,c=f;function f(m){const p=t.reduce((_,x)=>x(_),r());return i=u2(p),s=i.cache.get,l=i.cache.set,c=d,d(m)}function d(m){const p=s(m);if(p)return p;const _=h2(m,i);return l(m,_),_}return function(){return c(d2.apply(null,arguments))}}const nn=r=>{const t=i=>i[r]||[];return t.isThemeGetter=!0,t},py=/^\[(?:([a-z-]+):)?(.+)\]$/i,m2=/^\d+\/\d+$/,g2=new Set(["px","full","screen"]),_2=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,v2=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,x2=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,y2=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,S2=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ca=r=>co(r)||g2.has(r)||m2.test(r),ys=r=>xo(r,"length",C2),co=r=>!!r&&!Number.isNaN(Number(r)),kd=r=>xo(r,"number",co),bl=r=>!!r&&Number.isInteger(Number(r)),M2=r=>r.endsWith("%")&&co(r.slice(0,-1)),he=r=>py.test(r),Ss=r=>_2.test(r),b2=new Set(["length","size","percentage"]),E2=r=>xo(r,b2,my),T2=r=>xo(r,"position",my),A2=new Set(["image","url"]),w2=r=>xo(r,A2,U2),R2=r=>xo(r,"",D2),El=()=>!0,xo=(r,t,i)=>{const s=py.exec(r);return s?s[1]?typeof t=="string"?s[1]===t:t.has(s[1]):i(s[2]):!1},C2=r=>v2.test(r)&&!x2.test(r),my=()=>!1,D2=r=>y2.test(r),U2=r=>S2.test(r),L2=()=>{const r=nn("colors"),t=nn("spacing"),i=nn("blur"),s=nn("brightness"),l=nn("borderColor"),c=nn("borderRadius"),f=nn("borderSpacing"),d=nn("borderWidth"),m=nn("contrast"),p=nn("grayscale"),_=nn("hueRotate"),x=nn("invert"),g=nn("gap"),M=nn("gradientColorStops"),A=nn("gradientColorStopPositions"),R=nn("inset"),S=nn("margin"),v=nn("opacity"),T=nn("padding"),L=nn("saturate"),U=nn("scale"),F=nn("sepia"),w=nn("skew"),O=nn("space"),b=nn("translate"),N=()=>["auto","contain","none"],G=()=>["auto","hidden","clip","visible","scroll"],H=()=>["auto",he,t],k=()=>[he,t],rt=()=>["",Ca,ys],ot=()=>["auto",co,he],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],z=()=>["solid","dashed","dotted","double","none"],B=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],$=()=>["start","end","center","between","around","evenly","stretch"],ct=()=>["","0",he],mt=()=>["auto","avoid","all","avoid-page","page","left","right","column"],I=()=>[co,he];return{cacheSize:500,separator:":",theme:{colors:[El],spacing:[Ca,ys],blur:["none","",Ss,he],brightness:I(),borderColor:[r],borderRadius:["none","","full",Ss,he],borderSpacing:k(),borderWidth:rt(),contrast:I(),grayscale:ct(),hueRotate:I(),invert:ct(),gap:k(),gradientColorStops:[r],gradientColorStopPositions:[M2,ys],inset:H(),margin:H(),opacity:I(),padding:k(),saturate:I(),scale:I(),sepia:ct(),skew:I(),space:k(),translate:k()},classGroups:{aspect:[{aspect:["auto","square","video",he]}],container:["container"],columns:[{columns:[Ss]}],"break-after":[{"break-after":mt()}],"break-before":[{"break-before":mt()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),he]}],overflow:[{overflow:G()}],"overflow-x":[{"overflow-x":G()}],"overflow-y":[{"overflow-y":G()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[R]}],"inset-x":[{"inset-x":[R]}],"inset-y":[{"inset-y":[R]}],start:[{start:[R]}],end:[{end:[R]}],top:[{top:[R]}],right:[{right:[R]}],bottom:[{bottom:[R]}],left:[{left:[R]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",bl,he]}],basis:[{basis:H()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",he]}],grow:[{grow:ct()}],shrink:[{shrink:ct()}],order:[{order:["first","last","none",bl,he]}],"grid-cols":[{"grid-cols":[El]}],"col-start-end":[{col:["auto",{span:["full",bl,he]},he]}],"col-start":[{"col-start":ot()}],"col-end":[{"col-end":ot()}],"grid-rows":[{"grid-rows":[El]}],"row-start-end":[{row:["auto",{span:[bl,he]},he]}],"row-start":[{"row-start":ot()}],"row-end":[{"row-end":ot()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",he]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",he]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...$()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...$(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...$(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[T]}],px:[{px:[T]}],py:[{py:[T]}],ps:[{ps:[T]}],pe:[{pe:[T]}],pt:[{pt:[T]}],pr:[{pr:[T]}],pb:[{pb:[T]}],pl:[{pl:[T]}],m:[{m:[S]}],mx:[{mx:[S]}],my:[{my:[S]}],ms:[{ms:[S]}],me:[{me:[S]}],mt:[{mt:[S]}],mr:[{mr:[S]}],mb:[{mb:[S]}],ml:[{ml:[S]}],"space-x":[{"space-x":[O]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[O]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",he,t]}],"min-w":[{"min-w":[he,t,"min","max","fit"]}],"max-w":[{"max-w":[he,t,"none","full","min","max","fit","prose",{screen:[Ss]},Ss]}],h:[{h:[he,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[he,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[he,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[he,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Ss,ys]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",kd]}],"font-family":[{font:[El]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",he]}],"line-clamp":[{"line-clamp":["none",co,kd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ca,he]}],"list-image":[{"list-image":["none",he]}],"list-style-type":[{list:["none","disc","decimal",he]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...z(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ca,ys]}],"underline-offset":[{"underline-offset":["auto",Ca,he]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:k()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",he]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",he]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),T2]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",E2]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},w2]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[A]}],"gradient-via-pos":[{via:[A]}],"gradient-to-pos":[{to:[A]}],"gradient-from":[{from:[M]}],"gradient-via":[{via:[M]}],"gradient-to":[{to:[M]}],rounded:[{rounded:[c]}],"rounded-s":[{"rounded-s":[c]}],"rounded-e":[{"rounded-e":[c]}],"rounded-t":[{"rounded-t":[c]}],"rounded-r":[{"rounded-r":[c]}],"rounded-b":[{"rounded-b":[c]}],"rounded-l":[{"rounded-l":[c]}],"rounded-ss":[{"rounded-ss":[c]}],"rounded-se":[{"rounded-se":[c]}],"rounded-ee":[{"rounded-ee":[c]}],"rounded-es":[{"rounded-es":[c]}],"rounded-tl":[{"rounded-tl":[c]}],"rounded-tr":[{"rounded-tr":[c]}],"rounded-br":[{"rounded-br":[c]}],"rounded-bl":[{"rounded-bl":[c]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...z(),"hidden"]}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:z()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-s":[{"border-s":[l]}],"border-color-e":[{"border-e":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:["",...z()]}],"outline-offset":[{"outline-offset":[Ca,he]}],"outline-w":[{outline:[Ca,ys]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:rt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[Ca,ys]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",Ss,R2]}],"shadow-color":[{shadow:[El]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":[...B(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":B()}],filter:[{filter:["","none"]}],blur:[{blur:[i]}],brightness:[{brightness:[s]}],contrast:[{contrast:[m]}],"drop-shadow":[{"drop-shadow":["","none",Ss,he]}],grayscale:[{grayscale:[p]}],"hue-rotate":[{"hue-rotate":[_]}],invert:[{invert:[x]}],saturate:[{saturate:[L]}],sepia:[{sepia:[F]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[i]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[m]}],"backdrop-grayscale":[{"backdrop-grayscale":[p]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[_]}],"backdrop-invert":[{"backdrop-invert":[x]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[L]}],"backdrop-sepia":[{"backdrop-sepia":[F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[f]}],"border-spacing-x":[{"border-spacing-x":[f]}],"border-spacing-y":[{"border-spacing-y":[f]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",he]}],duration:[{duration:I()}],ease:[{ease:["linear","in","out","in-out",he]}],delay:[{delay:I()}],animate:[{animate:["none","spin","ping","pulse","bounce",he]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[U]}],"scale-x":[{"scale-x":[U]}],"scale-y":[{"scale-y":[U]}],rotate:[{rotate:[bl,he]}],"translate-x":[{"translate-x":[b]}],"translate-y":[{"translate-y":[b]}],"skew-x":[{"skew-x":[w]}],"skew-y":[{"skew-y":[w]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",he]}],accent:[{accent:["auto",r]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",he]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":k()}],"scroll-mx":[{"scroll-mx":k()}],"scroll-my":[{"scroll-my":k()}],"scroll-ms":[{"scroll-ms":k()}],"scroll-me":[{"scroll-me":k()}],"scroll-mt":[{"scroll-mt":k()}],"scroll-mr":[{"scroll-mr":k()}],"scroll-mb":[{"scroll-mb":k()}],"scroll-ml":[{"scroll-ml":k()}],"scroll-p":[{"scroll-p":k()}],"scroll-px":[{"scroll-px":k()}],"scroll-py":[{"scroll-py":k()}],"scroll-ps":[{"scroll-ps":k()}],"scroll-pe":[{"scroll-pe":k()}],"scroll-pt":[{"scroll-pt":k()}],"scroll-pr":[{"scroll-pr":k()}],"scroll-pb":[{"scroll-pb":k()}],"scroll-pl":[{"scroll-pl":k()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",he]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[Ca,ys,kd]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},N2=p2(L2);function gy(...r){return N2(uy(r))}const P2=e2("btn",{variants:{variant:{default:"btn-primary",secondary:"btn-secondary",ghost:"btn-ghost",outline:"btn-outline"},size:{default:"btn-md",sm:"btn-sm",lg:"btn-lg",icon:"btn-icon"}},defaultVariants:{variant:"default",size:"default"}}),er=Me.forwardRef(({className:r,variant:t,size:i,...s},l)=>xt.jsx("button",{ref:l,className:gy(P2({variant:t,size:i}),r),...s}));er.displayName="Button";const Nu=Me.forwardRef(({className:r,label:t,id:i,...s},l)=>xt.jsxs("label",{className:gy("checkbox-row",r),htmlFor:i,children:[xt.jsxs("span",{className:"checkbox-shell",children:[xt.jsx("input",{ref:l,id:i,type:"checkbox",...s}),xt.jsx("span",{className:"checkbox-control",children:xt.jsx(PM,{"aria-hidden":"true"})})]}),t?xt.jsx("span",{children:t}):null]}));Nu.displayName="Checkbox";const O2="Blueprint'/Game/Mobile/Dungeon/Ruins/Ruins_LockedDoor.Ruins_LockedDoor_C'",om="ark-3d-door-editor-v1",Ul=[{id:"door-1",name:"Door 1",x:0,y:0,z:0,yaw:0},{id:"door-2",name:"Door 2",x:100,y:0,z:0,yaw:0},{id:"door-3",name:"Door 3",x:200,y:0,z:0,yaw:0}],bu={amount:5,startX:0,startY:0,startZ:0,offsetX:100,offsetY:0,offsetZ:0,incrementX:!0,incrementY:!1,incrementZ:!1};function Sx(){var r;try{const t=window.localStorage.getItem(om);if(!t)return Ul;const i=JSON.parse(t);return(r=i.doors)!=null&&r.length?i.doors:Ul}catch{return Ul}}function I2(){try{const r=window.localStorage.getItem(om);if(!r)return bu;const t=JSON.parse(r);return t.batchForm?{...bu,...t.batchForm}:bu}catch{return bu}}function As(r){return Number.isFinite(r)?Number.isInteger(r)?String(r):r.toFixed(2):"0"}function z2(r){return`SpawnActor "${O2}" ${As(r.x)} ${As(r.y)} ${As(r.z)} |`}function eo(r){return r===""?0:r}function Eu(r){return Math.round(r/100)*100}function F2(r){return r===""?1:Math.max(1,Math.min(200,Math.floor(r)))}function B2(){const[r,t]=Me.useState(Sx),[i,s]=Me.useState(I2),[l,c]=Me.useState(()=>{var w;return((w=Sx()[0])==null?void 0:w.id)??""}),[f,d]=Me.useState("translate"),[m,p]=Me.useState("Copy Commands"),_=r.find(w=>w.id===l)??r[0],x=Me.useMemo(()=>r.map(z2).join(`
`),[r]);Me.useEffect(()=>{window.localStorage.setItem(om,JSON.stringify({batchForm:i,doors:r}))},[i,r]),Me.useEffect(()=>{!_&&r[0]&&c(r[0].id)},[r,_]);function g(){const w=r.length+1,O=r[r.length-1],b={id:crypto.randomUUID(),name:`Door ${w}`,x:O?O.x+100:0,y:(O==null?void 0:O.y)??0,z:(O==null?void 0:O.z)??0,yaw:(O==null?void 0:O.yaw)??0};t(N=>[...N,b]),c(b.id)}function M(){_&&t(w=>w.filter(O=>O.id!==_.id))}function A(){t(Ul),c(Ul[0].id),d("translate")}function R(w,O){if(O==="")s(b=>({...b,[w]:""}));else{const b=Number(O);s(N=>({...N,[w]:isNaN(b)?0:b}))}}function S(w,O){s(b=>({...b,[w]:O}))}function v(){var b;const w=F2(i.amount),O=Array.from({length:w},(N,G)=>({id:crypto.randomUUID(),name:`Door ${G+1}`,x:Eu(eo(i.startX)+(i.incrementX?eo(i.offsetX)*G:0)),y:Eu(eo(i.startY)+(i.incrementY?eo(i.offsetY)*G:0)),z:Eu(eo(i.startZ)+(i.incrementZ?eo(i.offsetZ)*G:0)),yaw:(_==null?void 0:_.yaw)??0}));t(O),c(((b=O[0])==null?void 0:b.id)??"")}function T(w){t(O=>O.map(b=>b.id===w.id?w:b))}function L(w,O){if(_)if(w==="name")T({..._,name:O});else{const b=Number(O||0),N=isNaN(b)?0:b;T({..._,[w]:w==="yaw"?N:Eu(N)})}}async function U(){try{await navigator.clipboard.writeText(x),p("Copied")}catch{p("Select + copy")}}function F(){const w=new Blob([x],{type:"text/plain"}),O=document.createElement("a");O.href=URL.createObjectURL(w),O.download="ark-dungeon-door-spawn-commands.txt",O.click(),URL.revokeObjectURL(O.href)}return xt.jsxs("main",{className:"editor-page",children:[xt.jsxs("header",{className:"editor-header",children:[xt.jsx("a",{className:"logo",href:"/","aria-label":"ARK command home",children:"A"}),xt.jsxs("nav",{className:"nav-links","aria-label":"Primary navigation",children:[xt.jsx("a",{href:"#editor",children:"3D Editor"}),xt.jsx("a",{href:"#commands",children:"Commands"}),xt.jsx("a",{href:"#premium",children:"Premium"})]}),xt.jsx("a",{className:"discord-link",href:"#discord","aria-label":"Discord",children:xt.jsx(FM,{"aria-hidden":"true"})})]}),xt.jsxs("section",{className:"editor-hero",children:[xt.jsx("p",{className:"eyebrow",children:"ARK dungeon door placement"}),xt.jsx("h1",{children:"Place locked doors visually, then copy clean spawn commands."}),xt.jsx("p",{children:"Generate a batch from familiar command inputs, then select any standalone door in the viewport and place it visually."})]}),xt.jsxs("section",{className:"editor-shell",id:"editor",children:[xt.jsxs("div",{className:"viewport-panel",children:[xt.jsxs("div",{className:"viewport-topbar",children:[xt.jsxs("div",{children:[xt.jsx("span",{children:"3D Viewport"}),xt.jsx("strong",{children:_?_.name:"No door selected"})]}),xt.jsxs("div",{className:"tool-toggle","aria-label":"Transform mode",children:[xt.jsxs("button",{className:f==="translate"?"active":"",type:"button",onClick:()=>d("translate"),children:[xt.jsx(BM,{"aria-hidden":"true"}),"Move"]}),xt.jsxs("button",{className:f==="rotate"?"active":"",type:"button",onClick:()=>d("rotate"),children:[xt.jsx(GM,{"aria-hidden":"true"}),"Rotate"]})]})]}),xt.jsx(t2,{doors:r,mode:f,selectedDoorId:(_==null?void 0:_.id)??"",onChangeDoor:T,onSelectDoor:c})]}),xt.jsxs("aside",{className:"control-panel",children:[xt.jsxs("div",{className:"panel-card",children:[xt.jsxs("div",{className:"panel-heading",children:[xt.jsxs("div",{children:[xt.jsx("h2",{children:"Doors"}),xt.jsxs("p",{children:[r.length," placed actors"]})]}),xt.jsxs("span",{className:"save-state",children:[xt.jsx(OM,{"aria-hidden":"true"}),"Saved"]})]}),xt.jsxs("div",{className:"door-reference",children:[xt.jsxs("div",{className:"door-reference-model",children:[xt.jsx("span",{className:"door-ref-bars"}),xt.jsx("span",{className:"door-ref-plate"})]}),xt.jsxs("div",{children:[xt.jsx("strong",{children:"Locked door only"}),xt.jsx("p",{children:"No surrounding stone wall. This is the object rendered and exported."})]})]}),xt.jsxs("div",{className:"button-row",children:[xt.jsxs(er,{onClick:g,children:[xt.jsx(HM,{"aria-hidden":"true"}),"Add Door"]}),xt.jsxs(er,{variant:"secondary",onClick:M,disabled:!_,children:[xt.jsx(VM,{"aria-hidden":"true"}),"Delete"]})]}),xt.jsx("div",{className:"door-list",children:r.map(w=>xt.jsxs("button",{className:w.id===(_==null?void 0:_.id)?"door-list-item active":"door-list-item",type:"button",onClick:()=>c(w.id),children:[xt.jsx("span",{children:w.name}),xt.jsxs("small",{children:[As(w.x),", ",As(w.y),", ",As(w.z)]})]},w.id))})]}),xt.jsxs("div",{className:"panel-card",children:[xt.jsx("div",{className:"panel-heading",children:xt.jsxs("div",{children:[xt.jsx("h2",{children:"Batch generator"}),xt.jsx("p",{children:"Create doors from the old command inputs"})]})}),xt.jsxs("div",{className:"batch-grid",children:[xt.jsx($s,{label:"Amount",value:i.amount,onChange:w=>R("amount",w)}),xt.jsx($s,{label:"Start X (front/back)",value:i.startX,onChange:w=>R("startX",w)}),xt.jsx($s,{label:"Offset X (front/back)",value:i.offsetX,onChange:w=>R("offsetX",w)}),xt.jsx($s,{label:"Start Y (left/right)",value:i.startY,onChange:w=>R("startY",w)}),xt.jsx($s,{label:"Offset Y (left/right)",value:i.offsetY,onChange:w=>R("offsetY",w)}),xt.jsx($s,{label:"Start Z (up/down)",value:i.startZ,onChange:w=>R("startZ",w)}),xt.jsx($s,{label:"Offset Z (up/down)",value:i.offsetZ,onChange:w=>R("offsetZ",w)})]}),xt.jsxs("div",{className:"batch-checks",children:[xt.jsx(Nu,{id:"batch-x",checked:i.incrementX,label:"Increment X",onChange:w=>S("incrementX",w.target.checked)}),xt.jsx(Nu,{id:"batch-y",checked:i.incrementY,label:"Increment Y",onChange:w=>S("incrementY",w.target.checked)}),xt.jsx(Nu,{id:"batch-z",checked:i.incrementZ,label:"Increment Z",onChange:w=>S("incrementZ",w.target.checked)})]}),xt.jsx(er,{onClick:v,children:"Generate Doors Into 3D"})]}),xt.jsxs("div",{className:"panel-card",children:[xt.jsx("div",{className:"panel-heading",children:xt.jsxs("div",{children:[xt.jsx("h2",{children:"Selected transform"}),xt.jsx("p",{children:"Fine tune exact values"})]})}),_?xt.jsx(H2,{door:_,onUpdate:L}):xt.jsx("p",{className:"empty-note",children:"Add or select a door to edit transforms."}),xt.jsx(er,{variant:"ghost",onClick:A,children:"Reset Scene"})]}),xt.jsxs("div",{className:"panel-card command-card",id:"commands",children:[xt.jsx("div",{className:"panel-heading",children:xt.jsxs("div",{children:[xt.jsx("h2",{children:"Generated commands"}),xt.jsxs("p",{children:[r.length," command lines"]})]})}),xt.jsx("pre",{className:"command-box",children:xt.jsx("code",{children:x})}),xt.jsxs("div",{className:"button-row",children:[xt.jsxs(er,{onClick:U,children:[xt.jsx(IM,{"aria-hidden":"true"}),m]}),xt.jsxs(er,{variant:"secondary",onClick:F,children:[xt.jsx(zM,{"aria-hidden":"true"}),"Export"]})]})]})]})]})]})}function Tu({label:r,value:t,step:i=1,onChange:s}){const[l,c]=Me.useState(As(t));Me.useEffect(()=>{c(As(t))},[t]);const f=d=>{c(d.target.value),s(d.target.value)};return xt.jsxs("label",{className:"transform-field",children:[xt.jsx("span",{children:r}),xt.jsx("input",{type:"text",inputMode:"numeric",value:l,onChange:f,onKeyDown:d=>d.stopPropagation(),onMouseDown:d=>d.stopPropagation(),onTouchStart:d=>d.stopPropagation()})]})}function $s({label:r,value:t,step:i=100,onChange:s}){const[l,c]=Me.useState(String(t));Me.useEffect(()=>{c(String(t))},[t]);const f=d=>{c(d.target.value),s(d.target.value)};return xt.jsxs("label",{className:"transform-field",children:[xt.jsx("span",{children:r}),xt.jsx("input",{type:"text",inputMode:"numeric",value:l,onChange:f,onKeyDown:d=>d.stopPropagation(),onMouseDown:d=>d.stopPropagation(),onTouchStart:d=>d.stopPropagation()})]})}function H2({door:r,onUpdate:t}){const[i,s]=Me.useState(r.name);Me.useEffect(()=>{s(r.name)},[r.id,r.name]);const l=c=>{s(c.target.value),t("name",c.target.value)};return xt.jsxs(xt.Fragment,{children:[xt.jsxs("div",{className:"transform-grid",children:[xt.jsxs("label",{className:"transform-field",children:[xt.jsx("span",{children:"Name"}),xt.jsx("input",{type:"text",value:i,onChange:l,onKeyDown:c=>c.stopPropagation(),onMouseDown:c=>c.stopPropagation(),onTouchStart:c=>c.stopPropagation()})]}),xt.jsx(Tu,{label:"X (front/back)",step:100,value:r.x,onChange:c=>t("x",c)}),xt.jsx(Tu,{label:"Y (left/right)",step:100,value:r.y,onChange:c=>t("y",c)}),xt.jsx(Tu,{label:"Z (up/down)",step:100,value:r.z,onChange:c=>t("z",c)}),xt.jsx(Tu,{label:"Yaw (rotation)",step:15,value:r.yaw,onChange:c=>t("yaw",c)})]}),xt.jsx("p",{className:"axis-help",children:"X = front/back · Y = left/right · Z = up/down · Yaw = 0°-360°"})]})}DM.createRoot(document.getElementById("root")).render(xt.jsx(MM.StrictMode,{children:xt.jsx(B2,{})}));
