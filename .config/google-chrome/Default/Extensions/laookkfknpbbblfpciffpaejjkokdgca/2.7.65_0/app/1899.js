(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[1899,3376],{61899:(e,t,a)=>{"use strict";a.d(t,{CW:()=>r,DV:()=>l});var o=a(99100),s=a(79216),n=a(60083);function i(e=m.utils.getUserState().state){var t;let a={};return null===(t=o.C[e])||void 0===t||t.forEach((e=>{var t;d(null===(t=o.U[e])||void 0===t?void 0:t.disabledBrowsers)||(a[e]=o.U[e])})),a}function r(){var e;return Object.keys(s.V).length&&null!==(e=n.Z.experiments)&&void 0!==e&&e.length?function(){var e;const t=function(e=m.utils.getUserState().state){var t;let a={};return null===(t=s.$[e])||void 0===t||t.forEach((e=>{var t;d(null===(t=s.V[e])||void 0===t?void 0:t.disabledBrowsers)||(a[e]=s.V[e])})),a}(),a=i();if(!t)return a;let r={};return null===(e=n.Z.experiments)||void 0===e||e.forEach((e=>{let s=t[e.experimentName];if(!s)return;const n=s.variants[e.variantName];n&&n.steps.forEach((function(e){var t;r[e]={...o.U[e]},null!==(t=n.overrides)&&void 0!==t&&t[e]&&(r[e]=Object.assign(r[e],n.overrides[e])),n.deleteSteps&&n.deleteSteps.forEach((e=>{delete a[e]}))}))})),Object.assign(a,r)}():i()}function d(e){return(null==e?void 0:e.includes(m.utils.getBrowserName()))||(null==e?void 0:e.includes("Mobile"))&&m.utils.isTouchDevice()}function l(){if(!Object.keys(s.V).length)return{};const e=s.$.all;let t={};return e.forEach((e=>{let a=s.V[e],n={variants:{},name:a.name};Object.keys(a.variants).forEach((e=>{let t=a.variants[e];n.variants[e]={steps:{},name:t.name},t.steps.forEach((a=>{n.variants[e].steps[a]=Object.assign({},o.U[a],t.overrides?t.overrides[a]:{})}))})),t[e]=n})),t}},79216:(e,t,a)=>{"use strict";a.d(t,{$:()=>l,V:()=>d});var o=a(65238),s=a(38465),n=a(97340),i=a(13376),r=a(35746);const d={[o.fC.PAYWALL]:{name:"Paywall",disabledBrowsers:["Safari"],variants:{[o.HX.PAYWALL_ENABLED]:{steps:[o.os.FREE_INTRODUCTION,o.os.PLUS_OFFER],overrides:{[o.os.FREE_INTRODUCTION]:{shouldActivate:()=>{const e=r.default.getStep("plusOffer");return!!e&&("dismissed"===e.status||"complete"===e.status)}},[o.os.PLUS_OFFER]:{shouldActivate:()=>!r.default.getStep("introduction")}}}}},[o.fC.SEARCH_IN_CENTER]:{name:"Search in center intro",variants:{[o.HX.SEARCH_IN_CENTER_ENABLED]:{steps:[o.os.FREE_INTRODUCTION],overrides:{[o.os.FREE_INTRODUCTION]:{subSteps:[(0,n.p7)(),{name:"Focus",progressBarText:"Focus",component:i.default,subStepProps:{heading:"Get Focused",subheading:"Get more done daily with the power of our to-do list and the search bar. Use the conveniently located search bar to speed up how fast you can turn your to-do list into your done list.",arrow:"right-below",maskDefinitions:[{padding:[60,2,50,60],targetElements:".mock-todo-app, .search"}],elementReadyEvent:"mockTodo:mounted bigSearch:mounted",elementReadyCheck:()=>document.querySelector(".mock-todo")&&document.querySelector(".search"),showAppSelector:".mock-todo, .search",onCreated:()=>{m.once("mockTodo:created",(()=>{m.trigger("mockTodo:overrideContent",{mockListTitle:"Today",mockTodos:["Research travel industry","Book concert tickets","Write blog"]})})),m.trigger("mockTodo:mount"),m.widgetManager.loadWidget("mockTodo")},onDestroyed:()=>{m.trigger("mockTodo:destroy")}}},{name:"Motivation",progressBarText:"Motivation",component:i.default,subStepProps:{heading:"Get Motivated",subheading:"Refresh your mind with a daily photo, quote, and mantra that recenter racing thoughts.",arrow:"left-below",maskDefinitions:[{padding:[60,60,5],targetElements:".clock .center-col, .search, .quote .app-dash, .greeting .center-col, .mantra .center-col"}],elementReadyEvent:"centerBelow:show bigSearch:mounted",elementReadyCheck:()=>document.querySelector(".clock")&&document.querySelector(".quote")&&document.querySelector(".greeting")&&document.querySelector(".search"),showAppSelector:".clock, .greeting, .search, .quote",maskEvents:"showGreeting:updated",onCreated:()=>{m.trigger("pomodoro:show",!1),localStorage.setItem("mantra:force","true")},onDestroyed:()=>{localStorage.removeItem("mantra:force")}}},(0,n.tt)(),(0,n.v_)()]}}}}},[o.fC.PLUS_TRIAL_TOUR]:{name:"Plus trial",disabledBrowsers:["Safari"],variants:{[o.HX.PLUS_TRIAL_TOUR_VARIANT_A]:{steps:[o.os.TOUR],overrides:{[o.os.TOUR]:{subSteps:[(0,s.AZ)({subheading:"<p>We’ve unlocked our premium dashboard features for 30 days to help you get more organized, motivated, and focused to beat distractions!</p>"}),(0,s.zS)({subheading:"<p>Keep your most important goals in view with To-do lists.</p>",mockTitle:"Long Term Goals",mockTodos:["Run a 5k","Get the promotion","Get a dog","Visit Greece","Give a TEDx talk"]}),(0,s.qB)({subheading:"<p>Track your habits to stay consistent.</p>",mockData:{metrics:[{label:"Glasses of water",value:"7"},{label:"Pages read",value:"145"},{label:"Meditations this week",value:"5"},{label:"Fitbit steps today",value:"11859"}]}}),(0,s.Vk)({subheading:"<p>Click the clock to start a Pomodoro timer. Play nature soundscapes for deep work.</p>"}),(0,s.tj)({subheading:"<p>Welcome to your 1-stop dashboard to overcome distractions and achieve all your goals.</p>"})]}},deleteSteps:[o.os.FREE_INTRODUCTION]},[o.HX.PLUS_TRIAL_TOUR_VARIANT_B]:{steps:[o.os.TOUR],overrides:{[o.os.TOUR]:{subSteps:[(0,s.AZ)({subheading:"<p>We’ve unlocked our premium dashboard features for 30 days to help you get more organized, motivated, and focused to beat distractions!</p>"}),(0,s.zS)({subheading:"<p>Set your goals with multiple to-do lists and keep what’s important in front of you.</p>",mockTitle:"Long Term Goals",mockTodos:["Run a 5k","Get the promotion","Visit Greece","Join nonprofit board","Learn guitar"]}),(0,s.qB)({subheading:"<p>Consistent action is key to becoming the person you want to be.</p><p>You can track a habit manually or use our integrations to sync your fitness and work apps.</p>",mockData:{metrics:[{label:"Fitbit steps today",value:"11859"},{label:"Glasses of water today",value:"7"},{label:"Sales calls",value:"34"}]}}),(0,s.Vk)({subheading:"<p>Turn every day into a productive day with our unstoppable combo of the Pomodoro Timer and Soundscapes to get more done in less time.</p>"}),(0,s.tj)({subheading:"<p>We’re excited to help you get momentum towards your goals.</p>",buttonText:"Let’s go!"})]}},deleteSteps:[o.os.FREE_INTRODUCTION]}}}},l={all:Object.keys(d),unregistered:[o.fC.SEARCH_IN_CENTER,o.fC.PAYWALL],free:[o.fC.PLUS_TRIAL_TOUR,o.fC.SEARCH_IN_CENTER,o.fC.PAYWALL],plus:[o.fC.PLUS_TRIAL_TOUR,o.fC.SEARCH_IN_CENTER]}},10419:(e,t,a)=>{(e.exports=a(23645)(!1)).push([e.id,"\n/* stylelint-disable */\n.tour-feature[data-v-ffad8332] { max-width: 550px; position: absolute; display: flex; align-items: center;\n}\n.cta[data-v-ffad8332] { max-width: 400px; padding: 1rem; flex-grow: 1; display: flex; flex-direction: column;\n}\n.arrow[data-v-ffad8332] { padding: 15px; order: 1; font-size: 14px;\n}\n.arrow.right-below[data-v-ffad8332] { align-self: flex-end;\n}\n.arrow.right-above[data-v-ffad8332] { align-self: flex-start; transform: rotateX(180deg);\n}\n.arrow.below-left[data-v-ffad8332] { align-self: flex-start; transform: rotate(90deg);\n}\n.arrow.below-right[data-v-ffad8332] { align-self: flex-end; transform: rotateY(180deg) rotate(90deg);\n}\n.arrow.left-above[data-v-ffad8332] { order: -1; align-self: flex-start; transform: rotate(180deg);\n}\n.arrow.left-below[data-v-ffad8332] { order: -1; align-self: flex-end; transform: rotateX(180deg) rotate(180deg);\n}\n.arrow.above-right[data-v-ffad8332] { order: -1; align-self: flex-end; transform: rotate(-90deg);\n}\n.arrow.above-left[data-v-ffad8332] { order: -1; align-self: flex-start; transform: rotateY(180deg) rotate(-90deg);\n}\n.icon-arrow[data-v-ffad8332] { height: 60px; width: 60px;\n}\n.sub-step-transition-enter-active .feature[data-v-ffad8332], .sub-step-transition-leave-active .feature[data-v-ffad8332] { transition: opacity 0.5s ease;\n}\n.sub-step-transition-enter .feature[data-v-ffad8332], .sub-step-transition-leave-to .feature[data-v-ffad8332] { opacity: 0;\n}\n",""])},34598:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjEgNjEiIGZpbGw9IndoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01Ny44NTEyIDQxLjk4OEw0NS43Mzg3IDU0LjEwMDVDNDUuNTY0NSA1NC4yNzQ4IDQ1LjM1NzcgNTQuNDEzMSA0NS4xMzAxIDU0LjUwNzVDNDQuOTAyNSA1NC42MDE4IDQ0LjY1ODUgNTQuNjUwNCA0NC40MTIxIDU0LjY1MDRDNDQuMTY1NyA1NC42NTA0IDQzLjkyMTcgNTQuNjAxOCA0My42OTQxIDU0LjUwNzVDNDMuNDY2NSA1NC40MTMxIDQzLjI1OTcgNTQuMjc0OCA0My4wODU1IDU0LjEwMDVMMzAuOTczIDQxLjk4OEMzMC42MjEyIDQxLjYzNjIgMzAuNDIzNiA0MS4xNTkgMzAuNDIzNiA0MC42NjE0QzMwLjQyMzYgNDAuMTYzOSAzMC42MjEyIDM5LjY4NjcgMzAuOTczIDM5LjMzNDlDMzEuMzI0OSAzOC45ODMgMzEuODAyIDM4Ljc4NTQgMzIuMjk5NiAzOC43ODU0QzMyLjc5NzIgMzguNzg1NCAzMy4yNzQzIDM4Ljk4MyAzMy42MjYyIDM5LjMzNDlMNDIuNTQxOCA0OC4yNTA1QzQyLjU1MTcgMzguMDI1NSAzOC41MDAxIDI4LjIxNTMgMzEuMjc3OSAyMC45NzcyQzI0LjA1NTYgMTMuNzM5MiAxNC4yNTQzIDkuNjY2MDMgNC4wMjkzIDkuNjUzNkMzLjUzMjAyIDkuNjUzNiAzLjA1NTEgOS40NTYwNiAyLjcwMzQ3IDkuMTA0NDNDMi4zNTE4NCA4Ljc1MjggMi4xNTQzIDguMjc1ODggMi4xNTQzIDcuNzc4NkMyLjE1NDMgNy4yODEzMiAyLjM1MTg0IDYuODA0NDEgMi43MDM0NyA2LjQ1Mjc4QzMuMDU1MSA2LjEwMTE0IDMuNTMyMDIgNS45MDM2IDQuMDI5MyA1LjkwMzZDMTUuMjQ4OCA1LjkxNjAzIDI2LjAwNCAxMC4zODQyIDMzLjkyOTUgMTguMzI1NkM0MS44NTUgMjYuMjY2OSA0Ni4zMDE3IDM3LjAzMSA0Ni4yOTE4IDQ4LjI1MDVMNTUuMjA3NCAzOS4zMzQ5QzU1LjU1OSAzOC45ODYyIDU2LjAzNDIgMzguNzkwNyA1Ni41MjkzIDM4Ljc5MTFDNTYuODk5IDM4Ljc5MjcgNTcuMjYgMzguOTAzNSA1Ny41NjY5IDM5LjEwOTZDNTcuODczOCAzOS4zMTU3IDU4LjExMjkgMzkuNjA4IDU4LjI1NDEgMzkuOTQ5NkM1OC4zOTU0IDQwLjI5MTMgNTguNDMyNSA0MC42NjcgNTguMzYwOCA0MS4wMjk3QzU4LjI4OTEgNDEuMzkyNCA1OC4xMTE4IDQxLjcyNTggNTcuODUxMiA0MS45ODhWNDEuOTg4WiIvPjwvc3ZnPgo="},21173:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNiAxMCIgZmlsbD0id2hpdGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAuODg4NTA3IDEwQzAuNjg5Njk4IDEwIDAuNDkwNzI2IDkuOTI0MTMgMC4zMzkxOTMgOS43NzIzN0MwLjAzNTY5ODkgOS40NjkxIDAuMDM1Njk4OSA4Ljk3NzEgMC4zMzkxOTMgOC42NzM3OUw0LjAxMjggNUwwLjMzOTE5MyAxLjMyNjE5QzAuMDM1Njk4OSAxLjAyMjkgMC4wMzU2OTg5IDAuNTMwODk2IDAuMzM5MTkzIDAuMjI3NjA1QzAuNjQyMyAtMC4wNzU4NjgzIDEuMTM0NjcgLTAuMDc1ODY4MyAxLjQzNzc4IDAuMjI3NjA1TDUuNjYwOSA0LjQ1MDY5QzUuOTY0MzUgNC43NTM5OCA1Ljk2NDM1IDUuMjQ2IDUuNjYwOSA1LjU0OTMxTDEuNDM3NzggOS43NzIzN0MxLjI4NjI1IDkuOTI0MTUgMS4wODcyOCAxMCAwLjg4ODUwNyAxMFYxMFoiIC8+PC9zdmc+Cg=="},13376:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var o=function(){var e=this,t=e._self._c;return t("div",[t("transition",{attrs:{name:"fade"}},[e.maskReady?t("div",{staticClass:"tour-feature",style:e.containerStyle,attrs:{"data-test":"feature"}},[t("div",{staticClass:"cta",style:e.ctaStyle},[t("div",{staticClass:"heading"},[e._v(e._s(e.heading))]),e._v(" "),t("div",{staticClass:"subheading",domProps:{innerHTML:e._s(e.subheading)}}),e._v(" "),t("div",{staticClass:"button dash-button",attrs:{"data-test":"next"},on:{click:function(t){return e.$emit("next")}}},[e._v(e._s(e.buttonText)+"\n\t\t\t\t\t"),t("inline-svg",{staticClass:"icon icon-next",attrs:{src:a(21173)}})],1)]),e._v(" "),t("div",{staticClass:"arrow",class:e.arrow},[t("inline-svg",{staticClass:"icon-arrow",attrs:{src:a(34598)}})],1)]):e._e()])],1)};o._withStripped=!0;const s={name:"TourFeature",props:{onCreated:{type:Function,default:()=>{}},onDestroyed:{type:Function,default:()=>{}},maskDefinitions:{type:Array,default:()=>[]},elementReadyEvent:{type:String,default:""},elementReadyCheck:{type:Function,default:()=>!0},heading:{type:String,default:""},subheading:{type:String,default:""},buttonText:{type:String,default:"Next"},showAppSelector:{type:String,default:""},maskBorderRadius:{type:Number,default:7},alignCta:{type:String,default:""},updateMaskEvents:{type:String,default:""},arrow:{type:String,default:""}},data:()=>({masksDimensions:[],maskWrapperDimensions:{},maskReady:!1}),computed:{maskPadding(){return this.maskDefinitions.map((e=>e.padding))},maskTargetElements(){return this.maskDefinitions.map((e=>e.targetElements))},directions(){return this.arrow.split("-")},ctaStyle(){return{"justify-content":"below"===this.directions[0]?"flex-end":"flex-start"}},containerStyle(){if(!Object.keys(this.maskWrapperDimensions).length)return{};const{height:e,width:t,x:a,y:o,overlayOffsetX:s}=this.maskWrapperDimensions;let n="auto",i="auto",r="auto",d="auto";const l=["right","left"].includes(this.directions[0]),u=["above","below"].includes(this.directions[0]);let c=l?t/2:0;return this.directions.includes("right")?i=Math.max(window.innerWidth-(a+c)-s,50)+"px":this.directions.includes("left")&&(d=Math.max(a+t-c,50)+"px"),c=u?e/2:0,this.directions.includes("above")?(n=Math.max(o+e-c,50)+"px","above"===this.directions[0]&&(r=0)):this.directions.includes("below")&&(r=Math.max(window.innerHeight-(o+c),50)+"px","below"===this.directions[0]&&(n=0)),"start"===this.alignCta?(n=u?"90px":n,i=l?"auto":i,r=u?"auto":r,d=l?"90px":d):"end"===this.alignCta&&(n=u?"auto":n,i=l?"90px":i,r=u?"90px":r,d=l?"auto":d),{"justify-content":"above"===this.directions[0]?"flex-end":"flex-start","flex-direction":["above","below"].includes(this.directions[0])?"column":"row",top:n,right:i,bottom:r,left:d}},paddingList(){return this.maskPadding.map((e=>this.parsePadding(e)))}},mounted(){this.elementReadyCheck()?this.onElementReady():this.elementReadyEvent?m.on(this.elementReadyEvent,this.onElementReadyEvent):this.onElementReady(),window.addEventListener("keyup",this.handleKey)},created(){this.onCreated()},destroyed(){this.toggleAppsVisibility(!1),this.elementReadyEvent&&m.off(this.elementReadyEvent,this.onElementReadyEvent),this.updateMaskEvents&&m.on(this.updateMaskEvents,this.updateContainers),m.off("globalEvent:window:resize devPanelToggled metrics:resize",this.updateContainers),window.removeEventListener("keyup",this.handleKey),this.onDestroyed()},methods:{handleKey(e){"Enter"===e.code&&this.$emit("next")},onElementReadyEvent(){this.elementReadyCheck()&&(m.off(this.elementReadyEvent,this.onElementReadyEvent),this.onElementReady())},onElementReady(){this.updateMaskEvents&&m.on(this.updateMaskEvents,this.updateContainers),m.on("globalEvent:window:resize devPanelToggled baseMetric:updated",this.updateContainers),this.toggleAppsVisibility(!0),this.updateContainers(),this.$emit("maskReady")},updateContainers(){this.$nextTick((()=>{this.getMaskWrapperDimensions(),this.applyMask()}))},toggleAppsVisibility(e){m.widgetManager[e?"addAppExemption":"removeAppExemption"](this.showAppSelector||this.maskTargetElements.join(","))},getShowAppTargetElements(){return document.querySelectorAll(this.showAppSelector||this.maskTargetElements.join(","))},getMaskWrapperDimensions(){const e=document.querySelectorAll(this.maskTargetElements.join(","));e.length&&(this.maskWrapperDimensions=this.getContainerDimensions(e,this.parsePadding([60])))},applyMask(){const e=this.maskTargetElements;for(let[t,a]of e.entries()){const e=document.querySelectorAll(a);if(!e.length)return;this.masksDimensions[t]=this.getContainerDimensions(e,this.paddingList[t])}this.$emit("updateMaskDimensions",this.masksDimensions),this.maskReady=!0},parsePadding(e){switch(e.length||e.push(0),e.length){case 1:return{top:e[0],right:e[0],bottom:e[0],left:e[0]};case 2:return{top:e[0],right:e[1],bottom:e[0],left:e[1]};case 3:return{top:e[0],right:e[1],bottom:e[2],left:e[1]};case 4:return{top:e[0],right:e[1],bottom:e[2],left:e[3]}}},getContainerDimensions(e,t){var a;const o=null===(a=document.querySelector(".tour"))||void 0===a?void 0:a.getBoundingClientRect().x;let s=Number.MAX_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER,i=0,r=0;for(const t of e){const{left:e,top:a,right:o,bottom:d}=t.getBoundingClientRect();e<s&&(s=e),a<n&&(n=a),o>i&&(i=o),d>r&&(r=d)}return{x:s-o-t.left,y:n-t.top,width:i-s+t.left+t.right,height:r-n+t.top+t.bottom,borderRadius:this.maskBorderRadius,overlayOffsetX:o}}}};a(19152);const n=(0,a(51900).Z)(s,o,[],!1,null,"ffad8332",null).exports},19152:(e,t,a)=>{var o=a(10419);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),(0,a(45346).Z)("10094e65",o,!1,{ssrId:!0})}}]);