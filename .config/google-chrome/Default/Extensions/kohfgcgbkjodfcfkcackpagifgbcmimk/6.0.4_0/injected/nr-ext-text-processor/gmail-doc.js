var doc=doc&&"gmail"===doc.type?doc:new function(){this.type="gmail";let e=this,t=[];this.op="all";let n=!1;function l(){findUIDiv=document.getElementsByClassName("UI");let e="",t="";return t=findUIDiv.length<=0?".a3s.aiL":findUIDiv[0].getAttribute("gh")?".UI":".a3s.aiL",$(t).map((function(){this.innerText.trim().length>0&&(e=this.innerText.trim())})),e}function o(n="all"){let o=l();return e.docInnerText===o&&"convert"!==n?Promise.reject("ERR_ALREADY_PARSED"):("convert"!==n&&(e.docInnerText=o),new Promise((async e=>{await c(),"convert"!==n&&await removeNRTags(),e()})).then((()=>s())).then((e=>new Promise((async l=>{if("all"===n)for(let t=0;t<e.length;t++){let l=$(e[t]).find(":visible").filter(f).hide();await a(e[t],n),l.show()}else{let n=g(e.map(p)).filter(isNotEmpty);for(let e=0;e<n.length;e++)n[e]&&t.push(n[e])}l(t)})))).catch((e=>{})))}async function i(e,t,n=null){try{if(n&&!e.contains(n)&&n.compareDocumentPosition(e)!=Node.DOCUMENT_POSITION_PRECEDING)return;if($(e).data("read-aloud-multi-block")){let l=$(e).children(":visible").get();l=l.filter((e=>e.contains(n)||n.compareDocumentPosition(e)==Node.DOCUMENT_POSITION_PRECEDING));for(let e=0;e<l.length;e++)$(l[e]).find("p, ul, ol, li").length>0?await i(l[e],t,n):await d(l[e],t,{position:"first",node:n})}else n&&(e.contains(n)||n.compareDocumentPosition(e)==Node.DOCUMENT_POSITION_PRECEDING)&&($(e).find("p, ul, ol, li").length>0?($(e).data("read-aloud-multi-block",!0),await i(e,t,n)):await d(e,t,{position:"first",node:n}))}catch(e){}}async function r(e,t,n=null){try{if(n&&!e.contains(n)&&n.compareDocumentPosition(e)!=Node.DOCUMENT_POSITION_FOLLOWING)return;if($(e).data("read-aloud-multi-block")){let l=$(e).children(":visible").get();n&&(l=l.filter((e=>e.contains(n)||n.compareDocumentPosition(e)==Node.DOCUMENT_POSITION_FOLLOWING)));for(let e=0;e<l.length;e++)$(l[e]).find("p, ul, ol, li").length>0?await r(l[e],t,n):await d(l[e],t,{position:"last",node:n})}else n&&(e.contains(n)||n.compareDocumentPosition(e)==Node.DOCUMENT_POSITION_FOLLOWING)&&($(e).find("p, ul, ol, li").length>0?($(e).data("read-aloud-multi-block",!0),await r(e,t,n)):await d(e,t,{position:"last",node:n}))}catch(e){}}function s(){return new Promise((t=>{let n=function(){divsToParse=[],findUIDiv=document.getElementsByClassName("UI"),findUIDiv.length<=0?innerDiv=".a3s.aiL":findUIDiv[0].getAttribute("gh")?innerDiv=".UI":innerDiv=".a3s.aiL";return $(innerDiv).map((function(){this.innerText.trim().length>0&&divsToParse.push(this)})),divsToParse}(),l=[];for(let e=0;e<n.length;e++)l.push.apply(l),l.push(n[e]);e.toRead=Array.from(l),t(l)})).catch((e=>{}))}async function a(e,t){if($(e).data("read-aloud-multi-block")){let n=$(e).children(":visible").get();for(let e=0;e<n.length;e++)$(n[e]).find("p, ul, ol, li").length>0?await a(n[e],t):await d(n[e],t)}else $(e).find("p, ul, ol, li").length>0?($(e).data("read-aloud-multi-block",!0),await a(e,t)):await d(e,t)}function c(){return Promise.resolve().then((()=>{t=[]})).catch((e=>{}))}async function d(e,n,l=null){let o=function(e,t,n=null){let l="",o=[],i=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null,!1),r=null;for(;r=i.nextNode();)r&&((!n||("first"!==n.position||n.node.compareDocumentPosition(r)!=Node.DOCUMENT_POSITION_PRECEDING&&n.node.compareDocumentPosition(e)!=Node.DOCUMENT_POSITION_PRECEDING)&&("last"!==n.position||n.node.compareDocumentPosition(r)!=Node.DOCUMENT_POSITION_FOLLOWING&&n.node.compareDocumentPosition(e)!=Node.DOCUMENT_POSITION_FOLLOWING))&&n||$(r.parentNode).is(":visible")&&(l+=m(r),o.push(r)));return{text:l,textNodes:o}}(e,0,l),i=o.textNodes,r=processHtmlText(o.text).trim(),s=processSentencesByLength(getNlpSentences(r));if("convert"!==n)try{if(s.length>0){e.normalize();let t=createDeepCopy(s),n=0;for(;i.length>0;){let e=i.shift(),l=await u(e,t,s,n),o=l.nextIndex,r=l.remainder;r&&i.unshift(r),n!=o&&(n=o)}}}catch(e){}else t.push(...s)}async function h(e,n){let l=function(e){let t="",n=[];for(let l=0;l<e.length;l++)e[l]&&$(e[l].parentNode).is(":visible")&&(t+=m(e[l]),n.push(e[l]));return{text:t,textNodes:n}}(e);e=l.textNodes;let o=processHtmlText(l.text).trim();if("convert"===n)return void t.push(o);let i=processSentencesByLength(getNlpSentences(o)),r=createDeepCopy(i),s=0;for(;e.length>0;){let t=e.shift(),n=await u(t,r,i,s),l=n.nextIndex,o=n.remainder;o&&e.unshift(o),s!=l&&(s=l)}}async function u(e,l,o,i){try{if(!$(e).text()||""===processHtmlText($(e).text()).trim())return{nextIndex:i,remainder:null};let r=$(e).text(),s=processHtmlText(l[i]).trim(),a=i;if(processHtmlText(r).length<=s.length){s=s.substring(r.length),l[i]=s;let c=document.createElement("nr-sentence");return $(c).addClass("nr-s"+t.length),c.id="nr-s"+t.length,c.setAttribute("page",0),n&&$(c).addClass("nr-selected"),0===l[i].length&&(t.push(o[i]),a++),$(e).wrap(c),{nextIndex:a,remainder:null}}{let c=r.search(/\S|$/),d=r.length;for(;c<r.length;){for(;r[c]&&""===processHtmlText(r[c]).trim()&&(c++,r[c]););if(!r[c])break;for(;s[0]&&""===processHtmlText(s[0]).trim();)if(s=s.substring(1),0===s.length){a++;break}if(0===s.length)break;if(processHtmlText(r[c])===processHtmlText(s[0])&&(s=s.substring(1),0===s.length)){c++,a++;break}c++}d=c;let h=document.createElement("nr-sentence");$(h).addClass("nr-s"+t.length),h.id="nr-s"+t.length,h.setAttribute("page",0),n&&$(h).addClass("nr-selected"),l[i]=s,0===l[i].length&&t.push(o[i]);let u=e.splitText(d);return""===$(u).text().trim()&&(u=null),$(e).wrap(h),{nextIndex:a,remainder:u}}}catch(e){}}function f(){let e=$(this).css("float"),t=$(this).css("position");return $(this).is(ignoreTags)||$(this).is("sup")||"right"==e||"fixed"==t}function m(e){return e.innerText?e.innerText:$(e).text()}function g(e){return[].concat.apply([],e)}function p(e){var t=$(e).find(":visible").filter(f).hide(),n=$(e).data("read-aloud-multi-block")?$(e).children(":visible").get().map(m):m(e).split(paragraphSplitter);return t.show(),n}function N(e){const t=[];if($(e).data("read-aloud-multi-block")){let n=$(e).children(":visible").get();for(let e=0;e<n.length;e++)t.push(n[e])}else $(e).find("p, ul, ol, li").length>0?($(e).data("read-aloud-multi-block",!0),N(e)):t.push(e);return t}e.docInnerText="",e.isSameText=function(){if("emailThread"===this.op){let t=document.getElementById("nr-gmail-email");return!(!t||t.innerText.trim()!=e.docInnerText)}return l()===e.docInnerText},e.getCurrentIndex=function(){return 0},this.getTexts=function(l="all"){return this.op=l,new Promise((async(d,u)=>{try{await function(l="all"){if("all"===l)return n=!1,o(l);if("selection"===l)return n=!0,function(l=!0,o=!0,a){let d={},u="";e.docInnerText="";const f=[];return new Promise(((e,t)=>{let n=window.getSelection(),i=n.getRangeAt(0);if(d=getSelectedNodes(),d.textNodes.length>0&&d.allNodes.length>0){if(l&&(d.textNodes[0].isSameNode(d.allNodes[0])||d.allNodes[0].contains(d.textNodes[0]))){let e=d.textNodes[0].splitText(i.startOffset);d.textNodes[0]=e,d.allNodes[0]=e}o&&(d.textNodes[d.textNodes.length-1].isSameNode(d.allNodes[d.allNodes.length-1])||d.allNodes[d.allNodes.length-1].contains(d.textNodes[d.textNodes.length-1]))&&d.textNodes[d.textNodes.length-1].splitText(i.endOffset)}else u=n.toString(),d=null;n.removeAllRanges(),e()})).then((()=>new Promise((async e=>{await c(),"convert"!==a&&await removeNRTags({toNormalize:!1}),e()})))).then((()=>new Promise((e=>{if(d){let n=[],l=[],o=d.textNodes,i=d.pNodes.shift();for(let r=0;r<o.length;r++)i&&i.contains(o[r])?(l.push(o[r]),r===o.length-1&&t()):(l.length>0&&t(),i=d.pNodes.shift(),i&&i.contains(o[r])?(l.push(o[r]),r===o.length-1&&t()):n.push(o[r]));function t(){let e=[];for(let t=0;t<l.length;t++)e.push(l[t]);l=[],n.push(e)}e(n)}else e([])})).then((async e=>{if(e.length>0){for(let t=0;t<e.length;t++)Array.isArray(e[t])?await h(e[t],a):await h([e[t]],a);return Promise.resolve()}return u.trim()&&(t=processSentencesByLength(getNlpSentences(u))),Promise.resolve()})))).then((()=>{for(let e=0;e<t.length;e++)f.push(t[e]);return t=[],n=!1,Promise.resolve()})).then((()=>s())).then((async e=>{const n=Array.from(document.querySelectorAll(".nr-selected")),l=n[0],o=n[n.length-1];for(let t=0;t<e.length;t++)await i(e[t],a,l);for(let e=0;e<f.length;e++){const n=Array.from(document.querySelectorAll(".nr-selected.nr-s"+e));for(let e=0;e<n.length;e++)n[e].className="",n[e].classList.add("nr-selected-post"),n[e].classList.add("nr-s"+t.length),n[e].id="nr-s"+t.length;t.push(f[e])}for(let t=0;t<e.length;t++)await r(e[t],a,o);return Promise.resolve()})).then((()=>{const e=Array.from(document.querySelectorAll(".nr-selected-post")),n=parseInt(e[0].id.split("nr-s")[1]),l=parseInt(e[e.length-1].id.split("nr-s")[1]);return reader.setReadIndex(n),reader.setLastReadIndex(l),Promise.resolve(t)})).catch((e=>{}))}();if("convert"===l)return n=!1,nrDomDetector.hasSelectionOnPage()?function(n=!0,l=!0,o){let i={},r="";return e.docInnerText="",new Promise(((e,t)=>{let o=window.getSelection(),s=o.getRangeAt(0);if(i=getSelectedNodes(),i.textNodes.length>0&&i.allNodes.length>0){if(n&&(i.textNodes[0].isSameNode(i.allNodes[0])||i.allNodes[0].contains(i.textNodes[0]))){let e=i.textNodes[0].splitText(s.startOffset);i.textNodes[0]=e,i.allNodes[0]=e}l&&(i.textNodes[i.textNodes.length-1].isSameNode(i.allNodes[i.allNodes.length-1])||i.allNodes[i.allNodes.length-1].contains(i.textNodes[i.textNodes.length-1]))&&i.textNodes[i.textNodes.length-1].splitText(s.endOffset)}else r=o.toString(),i=null;o.removeAllRanges(),e()})).then((()=>new Promise((async e=>{await c(),"convert"!==o&&await removeNRTags({toNormalize:!1}),e()})))).then((()=>new Promise((e=>{if(i){let n=[],l=[],o=i.textNodes,r=i.pNodes.shift();for(let s=0;s<o.length;s++)r&&r.contains(o[s])?(l.push(o[s]),s===o.length-1&&t()):(l.length>0&&t(),r=i.pNodes.shift(),r&&r.contains(o[s])?(l.push(o[s]),s===o.length-1&&t()):n.push(o[s]));function t(){let e=[];for(let t=0;t<l.length;t++)e.push(l[t]);l=[],n.push(e)}e(n)}else e([])})).then((async e=>{if(e.length>0){for(let t=0;t<e.length;t++)Array.isArray(e[t])?await h(e[t],o):await h([e[t]],o);return Promise.resolve(t)}return r.trim()&&(t=processSentencesByLength(getNlpSentences(r))),Promise.resolve(t)})))).catch((e=>{}))}(!0,!0,l):o(l);if("emailThread"==l)return n=!1,function(n="emailThread"){let l=document.getElementById("nr-gmail-email");if(l){let o=l.innerText.trim();return e.docInnerText===o&&"convert"!==n&&"emailThread"!==n?Promise.reject("ERR_ALREADY_PARSED"):("convert"!==n&&(e.docInnerText=o),new Promise((async e=>{await c(),"convert"!==n&&await removeNRTags(),e()})).then((()=>new Promise((t=>{let n=$("#nr-gmail-email"),l=[];for(let e=0;e<n.length;e++)l.push.apply(l),l.push(n[e]);e.toRead=Array.from(l),t(l)})).catch((e=>{})))).then((e=>new Promise((async l=>{if("all"===n||"emailThread"===n)for(let t=0;t<e.length;t++){let l=$(e[t]).find(":visible").filter(f).hide();await a(e[t],n),l.show()}else{let n=g(e.map(p)).filter(isNotEmpty);for(let e=0;e<n.length;e++)n[e]&&t.push(n[e])}l(t)})))).catch((e=>{})))}}(l)}(l),d(t)}catch(e){u(e)}}))},this.parseForConvertToPdf=function(){if(e.toRead.length>0){let t=[];for(let n=0;n<e.toRead.length;n++)t=t.concat(N(e.toRead[n]));return Promise.resolve(t)}return s().then((e=>{let t=[];for(let n=0;n<e.length;n++)t=t.concat(N(e[n]));return t})).catch((e=>{}))}};