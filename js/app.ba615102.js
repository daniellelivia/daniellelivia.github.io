(function(e){function t(t){for(var n,c,i=t[0],s=t[1],l=t[2],f=0,d=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("a9e3"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("7bb1"),o=r("5f5b"),c=r("2b88"),i=r.n(c),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[r("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),r("b-navbar-brand",{attrs:{to:"/"}},[e._v("Danielle Livia Clarke")]),r("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/"}},[e._v("Home")])],1)],1)],1),r("div",{staticClass:"jumbotron"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6 offset-sm-3"},[e.alert.message?r("div",{class:"alert "+e.alert.type},[e._v(e._s(e.alert.message))]):e._e(),r("router-view")],1)])])])],1)},l=[],u=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),f=r("2f62");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(r,!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={name:"app",computed:p({},Object(f["c"])({alert:function(e){return e.alert}})),methods:p({},Object(f["b"])({clearAlert:"alert/clear"})),watch:{$route:function(e,t){this.clearAlert()}}},m=b,v=(r("5c0b"),r("2877")),g=Object(v["a"])(m,s,l,!1,null,null,null),h=g.exports,y=(r("caad"),r("8c4f")),O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v("Home Page")])])}],j={name:"home",components:{}},_=j,P=Object(v["a"])(_,O,w,!1,null,null,null),k=P.exports;n["default"].use(y["a"]);var x=[{path:"/",component:k},{path:"*",redirect:"/"}],S=new y["a"]({mode:"history",routes:x});S.beforeEach((function(e,t,r){var n=["/","/login","/register"],a=!n.includes(e.path),o=localStorage.getItem("user");if(a&&!o)return r("/login");r()}));var C=S,E={type:null,message:null},A={success:function(e,t){var r=e.commit;r("success",t)},error:function(e,t){var r=e.commit;r("error",t)},clear:function(e,t){var r=e.commit;r("success",t)}},N={success:function(e,t){e.type="alert-success",e.message=t},error:function(e,t){e.type="alert-danger",e.message=t},clear:function(e){e.type=null,e.message=null}},T={namespaced:!0,state:E,actions:A,mutations:N};n["default"].use(f["a"]);var D=new f["a"].Store({state:{},mutations:{},actions:{},modules:{alert:T}}),$=r("9483");Object($["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("f9e3"),r("2dd8");Object(a["c"])({bails:!1,events:"blur"}),Object(a["d"])("required",{validate:function(e){return!!e},message:"The {_field_} field is required"}),Object(a["d"])("between",{params:["min","max"],validate:function(e,t){var r=t.min,n=t.max;return Number(e)>=r&&Number(e)<=n},message:"The {_field_} field must be between {min} and {max}"}),Object(a["d"])("min",{params:["min"],validate:function(e,t){var r=t.min;return Number(e)>=r},message:"The {_field_} field must be higher than {min}"}),n["default"].use(o["a"]),n["default"].use(i.a),n["default"].component("ValidationObserver",a["a"]),n["default"].component("ValidationProvider",a["b"]),n["default"].config.productionTip=!1,new n["default"]({el:"#app",router:C,store:D,components:{App:h},data:function(){return{value:""}},render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.ba615102.js.map