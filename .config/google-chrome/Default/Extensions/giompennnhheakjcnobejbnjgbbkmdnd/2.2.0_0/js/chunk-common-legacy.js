(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{4360:function(e,t,o){"use strict";o("99af"),o("4de4"),o("c740"),o("4160"),o("caad"),o("c975"),o("d81d"),o("a434"),o("b0c0"),o("2532"),o("2ca0"),o("159b"),o("96cf");var n=o("1da1"),c=o("2b0e"),a=o("bc3a"),i=o.n(a),r=o("aced"),u=(o("0481"),o("a15b"),o("4069"),o("b680"),o("a1f0"),o("2909"));function s(e){if(e.startsWith("[")||e.startsWith("{")){try{return JSON.parse(e),!0}catch(t){}return!1}return!1}function l(e){var t=/%[0-9a-fA-F]{2}/g,o=Object(u["a"])(e.matchAll(t)).flat();if(0===o.length)return!1;try{return o.forEach((function(e){decodeURIComponent(e)})),!0}catch(n){return!1}}function d(e){var t=e.map((function(e){return[e.key,e.value]})).flat().join(""),o=new Blob([t]).size,n=(o/1024).toFixed(2),c=(o/1024/1024).toFixed(2);return c>1?"".concat(c,"Mb"):"".concat(n,"kb")}function f(e){try{var t={};t[e.origin]={favorites:e.favorites,checked:e.checked,protection:e.protection},chrome.storage.sync.set(t,(function(){}))}catch(o){}}function p(e){var t=e.secure?"https://":"http://";return"."===e.domain.charAt(0)&&(t+="www"),t+e.domain+e.path}function k(e,t,o,n){e.forEach((function(e){e._canBeDeleted=!0})),t.forEach((function(t){var o=e.findIndex((function(e){return e.key===t.key&&"local"===e.type}));-1!==o?e[o].value!==t.value?e.splice(o,1,t):delete e[o]._canBeDeleted:e.splice(0,0,t)})),o.forEach((function(t){var o=e.findIndex((function(e){return e.key===t.key&&"session"===e.type}));-1!==o?e[o].value!==t.value?e.splice(o,1,t):delete e[o]._canBeDeleted:e.splice(0,0,t)})),n.forEach((function(t){var o=e.findIndex((function(e){return e.key===t.key&&"cookie"===e.type}));-1!==o?e[o].value!==t.value?e.splice(o,1,t):delete e[o]._canBeDeleted:e.splice(0,0,t)}));for(var c=0;c<e.length;c++)!0===e[c]._canBeDeleted&&(delete e[c]._canBeDeleted,e.splice(c,1),c--)}function v(e,t){return t?e.filter((function(e){return-1!==e.key.indexOf(t)||-1!==e.value.indexOf(t)})):e}var y=0,h=!1,m=[];t["a"]={state:{origin:"",domain:"",cookie:[],local:[],session:[],favorites:{},decodeUrl:{},protection:{},checked:["local"],checkedRows:[],keyword:"",isPopup2:!1,tabId:"",status:{action:null,key:null,type:null,value:null,json:null,cookie:null,isSearching:!1},club:{activated:!1,expiration:null}},getters:{tableData:function(e){if(0===m.length){if(e.checked.includes("local")){var t=v(e.local,e.keyword);t.forEach((function(e){m.push(e)}))}if(e.checked.includes("session")){var o=v(e.session,e.keyword);o.forEach((function(e){m.push(e)}))}if(e.checked.includes("cookie")){var n=v(e.cookie,e.keyword);n.forEach((function(e){m.push(e)}))}}else k(m,e.checked.includes("local")?v(e.local,e.keyword):[],e.checked.includes("session")?v(e.session,e.keyword):[],e.checked.includes("cookie")?v(e.cookie,e.keyword):[]);return m.forEach((function(t){var o=t.type,n=t.key;t._value=e.decodeUrl["".concat(o,"_").concat(n)]?decodeURIComponent(t.value):t.value,t._json=s(t._value),t._urlEncoded=l(t.value)})),m.sort((function(e,t){return e.key<t.key?-1:e.key>t.key?1:0})).sort((function(e,t){var o=e.type,n=t.type;return"local"===o&&"session"===n?-1:"session"===o&&"local"===n?1:"local"===o&&"cookie"===n?-2:"cookie"===o&&"local"===n?2:"session"===o&&"cookie"===n?-1:"cookie"===o&&"session"===n?1:0})).sort((function(t,o){var n=e.favorites["".concat(t.type,"_").concat(t.key)],c=e.favorites["".concat(o.type,"_").concat(o.key)];return n&&!c?-1:!n&&c?1:0})),m},local:function(e){return e.local},session:function(e){return e.session},cookie:function(e){return e.cookie},favorites:function(e){return e.favorites},decodeUrl:function(e){return e.decodeUrl},localSize:function(e){return d(e.local)},sessionSize:function(e){return d(e.session)},cookieSize:function(e){return d(e.cookie)},filterItem:function(e){return function(t){var o=t.type,n=t.key;return e[o].filter((function(e){return e.key===n}))}},displayType:function(e){return"cookie"===e.status.type?e.status.type:"".concat(e.status.type," storage")},isClub:function(e){return!0===e.club.activated&&null!==e.club.expiration&&e.club.expiration>Date.now()&&e.club.expiration<Date.now()+6048e5},clubExpired:function(e){return!0===e.club.activated&&null!==e.club.expiration&&e.club.expiration<Date.now()},isLocking:function(e){return function(t){var o=t.key,n=t.type;return Object.prototype.hasOwnProperty.call(e.protection,"".concat(n,"_").concat(o))}}},mutations:{setStorage:function(e,t){var o=t.local,n=t.session;e.local=o,e.session=n},enableUrlDecoding:function(e,t){var o=t.type,n=t.key,a=t.enable;!0===a?c["a"].set(e.decodeUrl,"".concat(o,"_").concat(n),!0):c["a"].delete(e.decodeUrl,"".concat(o,"_").concat(n))},addFavorites:function(e,t){var o=t.type,n=t.key;c["a"].set(e.favorites,"".concat(o,"_").concat(n),!0)},removeFavorites:function(e,t){var o=t.type,n=t.key;c["a"].delete(e.favorites,"".concat(o,"_").concat(n))},activateClub:function(e){e.club.activated=!0,e.club.expiration=Date.now()+6048e5;try{chrome.storage.sync.set({club:e.club},(function(){}))}catch(t){}},deactivateClub:function(e){e.club.activated=!1,e.club.expiration=null;try{chrome.storage.sync.set({club:e.club},(function(){}))}catch(t){}},lock:function(e,t){var o=t.type,n=t.key;e.protection["".concat(o,"_").concat(n)]=e[o].filter((function(e){return e.key===n}))[0].value},unlock:function(e,t){var o=t.type,n=t.key;c["a"].delete(e.protection,"".concat(o,"_").concat(n))},deleteCookie:function(e,t){c["a"].delete(e.cookie,t)},insertCookie:function(e,t){var o=t.index,n=t.key,c=t.value,a=t.cookie;e.cookie.splice(o,0,{key:n,value:c,type:"cookie",cookie:a})},updateCookie:function(e,t){var o=t.key,n=t.value,c=t.cookie,a=t.index;e.cookie[a].key=o,e.cookie[a].value=n,e.cookie[a].cookie=c}},actions:{setStorage:function(e,t){var o=e.commit,n=t.timestamp,c=t.local,a=t.session;(c||a)&&n>y&&(o("setStorage",t),y=n)},chromeSetStorage:function(e){var t=e.state;f(t)},toggleFavorites:function(e,t){var o=e.state,n=e.commit,c=t.type,a=t.key;o.favorites["".concat(c,"_").concat(a)]?n("removeFavorites",t):n("addFavorites",t),f(o)},toggleLock:function(e,t){var o=e.state,n=e.commit,c=t.type,a=t.key;Object.prototype.hasOwnProperty.call(o.protection,"".concat(c,"_").concat(a))?n("unlock",t):n("lock",t),f(o)},verifyClubReceipt:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,o){var n,c,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,c=document.referrer.startsWith("http://localhost")?"http://localhost:8968/api/swoosh-storage-specialist/club?receipt=":"http://steampunck.herokuapp.com/api/swoosh-storage-specialist/club?receipt=",e.prev=2,e.next=5,i.a.put("".concat(c).concat(o));case 5:a=e.sent,a.data.result?n("activateClub"):n("deactivateClub"),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),n("deactivateClub");case 12:return e.prev=12,location.hash="",e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));function t(t,o){return e.apply(this,arguments)}return t}(),chromeUpdate:function(e,t){var o=e.dispatch,n=e.state,c=t.origin,a={active:!0,currentWindow:!0};chrome.tabs.query(a,(function(e){e.length&&e[0].url?e.length&&e[0].url.startsWith(c)&&o("setStorage",t):n.origin===c&&o("setStorage",t)}))},chromeInitStorage:function(e){var t=e.state;h||chrome.storage.sync.get([t.origin,"club"],(function(e){e&&(e[t.origin]?(t.favorites=e[t.origin].favorites||t.favorites,t.checked=e[t.origin].checked||["local","session","cookie"],t.protection=e[t.origin].protection||t.protection):t.checked=["local","session","cookie"],e.club&&(t.club=e.club)),h=!0}))},chromeRemove:function(e,t){var o=e.state,n=t.key,c=t.type;try{if("cookie"===c){var a=o.cookie.filter((function(e){return e.key===n}))[0].cookie;chrome.cookies.remove({name:a.name,url:p(a)},(function(e){}))}else chrome.tabs.query({active:!0,currentWindow:!0},(function(e){if(e.length){var t=e[0],a=o.isPopup2?o.tabId:t.id;chrome.tabs.sendMessage(a,{source:"popup",event:"remove",type:c,key:n})}}))}catch(i){}o.status.action=null,o.status.key=null,o.status.type=null},chromeRemoveChecked:function(e,t){var o=e.dispatch;t.forEach((function(e){o("chromeRemove",e)}))},chromeRemoveAll:function(e,t){var o=e.state,n=t.type;try{"cookie"===n?o.cookie.map((function(e){return e})).forEach((function(e){chrome.cookies.remove({name:e.cookie.name,url:p(e.cookie)},(function(e){}))})):chrome.tabs.query({active:!0,currentWindow:!0},(function(e){if(e.length){var t=e[0],c=o.isPopup2?o.tabId:t.id;chrome.tabs.sendMessage(c,{source:"popup",event:"removeAll",type:n})}}))}catch(c){}o.status.action=null,o.status.key=null,o.status.type=null},chromeEdit:function(e,t){var o=e.state,n=t.key,c=t.type,a=t.value,i=t.domain,u=t.path,s=t.secure,l=t.httpOnly,d=t.sameSite,f=t.expirationDate;try{if("cookie"===c){var k=o.cookie.filter((function(e){return e.key===n}))[0].cookie;chrome.cookies.set({name:n,value:a,domain:i,path:u,secure:s,httpOnly:l,sameSite:d,expirationDate:f,storeId:k.storeId,url:p(k)},(function(e){e?r["a"].open({message:"Cookie ".concat(e.name," updated"),type:"is-success"}):r["a"].open({message:"Error: "+chrome.runtime.lastError.message,type:"is-danger"})}))}else chrome.tabs.query({active:!0,currentWindow:!0},(function(e){if(e.length){var t=e[0],i=o.isPopup2?o.tabId:t.id;chrome.tabs.sendMessage(i,{source:"popup",event:"edit",type:c,key:n,value:a})}}))}catch(v){}o.status.action=null,o.status.key=null,o.status.type=null,o.status.value=null,o.status.index=null},chromeAdd:function(e,t){var o=e.state,n=t.addKey,c=t.addValue,a=t.addType;if(n){try{var i=n,r=c,u=a;"cookie"===u?chrome.cookies.set({name:i,value:r,domain:-1===o.domain.indexOf(".")?o.domain:"."+o.domain,url:p({secure:!1,domain:o.domain,path:"/"})},(function(e){})):chrome.tabs.query({active:!0,currentWindow:!0},(function(e){if(e.length){var t=e[0],n=o.isPopup2?o.tabId:t.id;chrome.tabs.sendMessage(n,{source:"popup",event:"add",type:u,key:i,value:r})}}))}catch(s){}o.status.action=null,o.status.key=null,o.status.type=null,o.status.value=null}},chromeInitCookies:function(e,t){var o=e.state,n=e.commit,c=t.domain,a=t.hostname,i=[c,a,".".concat(c),".".concat(a)];chrome.cookies.getAll({},(function(e){o.cookie=e.filter((function(e){return i.includes(e.domain)})).map((function(e){return{key:e.name,value:e.value,type:"cookie",cookie:e}})).sort((function(e,t){return e.key<t.key?-1:e.key>t.key?1:0}))})),chrome.cookies.onChanged.addListener((function(e){var t=e.cookie,c=e.cause,a=e.removed;if(i.includes(t.domain)){var r=o.cookie.findIndex((function(e){return e.key===t.name&&e.cookie.path===t.path&&e.cookie.domain===t.domain})),u=-1===r?o.cookie.map((function(e){return e.key})).concat([t.name]).sort().findIndex((function(e){return e===t.name})):null;a&&["evicted","expired","explicit"].includes(c)?n("deleteCookie",r):-1!==r?n("updateCookie",{index:r,key:t.name,value:t.value,cookie:t}):n("insertCookie",{index:u,key:t.name,value:t.value,cookie:t})}}))}}}},4369:function(e,t,o){},4570:function(e,t,o){"use strict";var n=o("ec26");t["a"]={init:function(){var e;(function(e,t,o,n,c,a,i){e["GoogleAnalyticsObject"]=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,a=t.createElement(o),i=t.getElementsByTagName(o)[0],a.async=!0,a.src=n,i.parentNode.insertBefore(a,i)})(window,document,"script","https://www.google-analytics.com/analytics.js","ga");try{chrome.storage.local.get(["uuid"],(function(t){t.uuid?e=t.uuid:(e=Object(n["a"])(),chrome.storage.local.set({uuid:e})),window.ga("create","UA-8332254-6",{storage:"none",clientId:e}),window.ga("set","checkProtocolTask",null)}))}catch(t){window.ga("create","UA-8332254-6",{storage:"none"}),window.ga("set","checkProtocolTask",null)}},page:function(e){setTimeout((function(){window.ga("send","pageview",e,{title:e})}),800)},event:function(e,t,o,n){window.ga("send","event",e,t,o,n)}}},f22e:function(e,t,o){"use strict";var n=o("4369"),c=o.n(n);c.a}}]);