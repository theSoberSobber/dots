(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[4833],{61706:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});let a={};const s={bind(t,e){e.hasOwnProperty("value")&&!e.value||(t.dataset.resizeSensorId=Math.random().toString(36).substring(7),a[t.dataset.resizeSensorId]=new ResizeSensor(t,e.value))},unbind(t){a[t.dataset.resizeSensorId]&&a[t.dataset.resizeSensorId].detach(),delete a[t.dataset.resizeSensorId]}}},42223:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});const a={data:()=>({componentsMounted:{}}),unreactive:()=>({uid:m.utils.shortId()}),beforeCreate(){const t=this.$options.components;Object.keys(t).forEach((e=>{const i=t[e];"function"==typeof i&&(t[e]=function(){this.$set(this.componentsMounted,e,!1);const t=`${e}:${this.uid}:mounted`,a=()=>this.componentsMounted[e]=!0;return this.$e.$once(t,a),i(arguments).then((i=>{const s=i.default;return s&&s.doNotWaitForMount&&(this.$delete(this.componentsMounted,e),this.$e.$off(t,a)),i}))}.bind(this))}))},mounted(){if(Object.keys(this.componentsMounted).length){const t=this.$watch("componentsMounted",(e=>{Object.values(e).every((t=>t))&&(this.onAllComponentsMounted(),t())}),{deep:!0,immediate:!0})}else this.onAllComponentsMounted()},methods:{getContextUid(){return this.$vnode&&this.$vnode.context&&this.$vnode.context.uid||""},onAllComponentsMounted(){this.widgetId?m.widgetManager.appReady(this.widgetId):this.$e.$emit(`${this.$options.name}:${this.getContextUid()}:mounted`)}}}},95233:(t,e,i)=>{(t.exports=i(23645)(!1)).push([t.id,"\n/* stylelint-disable */\n.label-row[data-v-2a1ce230] { display: flex; align-items: center; cursor: pointer;\n}\n.label-row > label[data-v-2a1ce230] { margin-right: 4px; cursor: pointer;\n}\n.x-caret[data-v-2a1ce230] { height: 10px; width: 10px; position: relative; display: inline-block; opacity: 0.8;\n}\n.x-caret-left[data-v-2a1ce230], .x-caret-right[data-v-2a1ce230] { height: 7px; width: 7px; position: absolute; top: 1px; transition: all 0.3s ease;\n}\n.x-caret-left[data-v-2a1ce230] { left: 0; transform: rotate(45deg);\n}\n.x-caret-right[data-v-2a1ce230] { left: 4px; transform: rotate(-45deg);\n}\n.x-caret.active .x-caret-left[data-v-2a1ce230] { left: 2px; transform: scale(1.1) skewY(30deg) rotate(200deg);\n}\n.x-caret.active .x-caret-right[data-v-2a1ce230] { left: 2px; transform: scale(1.1) skewY(-30deg) rotate(-200deg);\n}\n",""])},17445:(t,e,i)=>{(t.exports=i(23645)(!1)).push([t.id,"\n/* stylelint-disable */\n.resize-wrapper.tr-height[data-v-2dd72ad0] { transition: height var(--duration) ease;\n}\n.resize-wrapper.tr-width[data-v-2dd72ad0] { display: flex; justify-content: center; transition: width var(--duration) ease;\n}\n.resize-wrapper.tr-height.tr-width[data-v-2dd72ad0] { transition: height var(--duration) ease, width var(--duration) ease;\n}\n.resize-wrapper.hide-overflow[data-v-2dd72ad0] { overflow: hidden;\n}\n.resize-wrapper.tr-width > div[data-v-2dd72ad0] { width: fit-content;\n}\n[data-v-2dd72ad0] .smooth-height-fade-enter-active { transition: opacity var(--transition-duration) cubic-bezier(.85,-0.18,.66,.66);\n}\n[data-v-2dd72ad0] .smooth-height-fade-leave-active { position: absolute !important; top: 0; right: 0; left: 0; transition: opacity var(--transition-duration) cubic-bezier(.33,.13,.33,1.26);\n}\n[data-v-2dd72ad0] .smooth-height-fade-enter,[data-v-2dd72ad0] .smooth-height-fade-leave-to { opacity: 0;\n}\n[data-v-2dd72ad0] .smooth-width-fade-enter-active { transition: opacity var(--transition-duration) cubic-bezier(.85,-0.18,.66,.66);\n}\n[data-v-2dd72ad0] .smooth-width-fade-leave-active { position: absolute; top: 0; left: 50%; transform: translateX(-50%); transition: opacity var(--transition-duration) cubic-bezier(.33,.13,.33,1.26);\n}\n[data-v-2dd72ad0] .smooth-width-fade-enter,[data-v-2dd72ad0] .smooth-width-fade-leave-to { opacity: 0;\n}\n[data-v-2dd72ad0] .smooth-height-slide-left-enter-active,[data-v-2dd72ad0] .smooth-height-slide-left-leave-active,[data-v-2dd72ad0] .smooth-height-slide-right-enter-active,[data-v-2dd72ad0] .smooth-height-slide-right-leave-active { transition: transform 300ms ease;\n}\n[data-v-2dd72ad0] .smooth-height-slide-left-leave-active,[data-v-2dd72ad0] .smooth-height-slide-right-leave-active { position: absolute; top: 0; right: 0; left: 0;\n}\n[data-v-2dd72ad0] .smooth-height-slide-left-leave-to,[data-v-2dd72ad0] .smooth-height-slide-right-enter { transform: translateX(-100%);\n}\n[data-v-2dd72ad0] .smooth-height-slide-left-enter,[data-v-2dd72ad0] .smooth-height-slide-right-leave-to { transform: translateX(100%);\n}\n",""])},57056:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1Mi4xNiAxMS43NSI+PHBhdGggZD0iTTUyLjE2LDI2LjA4QTUuODcsNS44NywwLDAsMSw0Ni4yOSwzMkg1Ljg4QTUuODgsNS44OCwwLDAsMSwwLDI2LjA4SDBhNS44Nyw1Ljg3LDAsMCwxLDUuODgtNS44N0g0Ni4yOWE1Ljg3LDUuODcsMCwwLDEsNS44Nyw1Ljg3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMjAuMjEpIi8+PC9zdmc+Cg=="},64833:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});var a=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"label-row",attrs:{"data-test":"collapsable-input-header"},on:{click:function(e){return t.$emit("toggleInput")}}},[e("label",[t._v(t._s(t.label))]),t._v(" "),e("span",{staticClass:"x-caret",class:{active:t.active}},[e("inline-svg",{staticClass:"icon x-caret-left",attrs:{src:i(57056)}}),t._v(" "),e("inline-svg",{staticClass:"icon x-caret-right",attrs:{src:i(57056)}})],1)]),t._v(" "),e("smooth-reflow",{attrs:{nested:!0,"hide-overflow":!0}},[t.active?t._t("default"):t._e()],2)],1)};a._withStripped=!0;const s={name:"CollapsibleInput",components:{SmoothReflow:i(97755).default},props:{label:{type:String,required:!0},active:{type:Boolean,default:!1}}};i(90786);const o=(0,i(51900).Z)(s,a,[],!1,null,"2a1ce230",null).exports},97755:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var a=function(){var t=this,e=t._self._c;return e("div",{ref:"wrapper",staticClass:"resize-wrapper",class:{"tr-height":t.height,"tr-width":t.width,"hide-overflow":t.hideOverflow&&(t.resizing||t.transitionActive)},style:{"--duration":t.resizeDuration+"ms","--transition-duration":(null===t.transitionDuration?t.duration:t.transitionDuration)+"ms",height:t.wrapperHeight,width:t.wrapperWidth},attrs:{"data-smooth-reflow-id":t.id,"data-test":"smooth-reflow","data-test-transitioning":t.resizing||t.transitionActive}},[t.transitionGroup?e("transition-group",t._g(t._b({directives:[{name:"resize-sensor",rawName:"v-resize-sensor",value:t.handleResize,expression:"handleResize"}],attrs:{tag:"div"}},"transition-group",t.transitionProps,!1),t.transitionHooks),[t._t("default")],2):e("div",{directives:[{name:"resize-sensor",rawName:"v-resize-sensor",value:t.handleResize,expression:"handleResize"}]},[e("transition",t._g(t._b({},"transition",t.transitionProps,!1),t.transitionHooks),[t._t("default")],2)],1)],1)};a._withStripped=!0;var s=i(61706),o=i(42223);const n={name:"SmoothReflow",directives:{ResizeSensor:s.Z},mixins:[o.Z],props:{height:{type:Boolean,default:!0},width:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},duration:{type:Number,default:500},transitionDuration:{type:Number,default:null},nested:{type:Boolean,default:!1},hideOverflow:{type:Boolean,default:!1},transition:{type:String,default:"smooth-height-fade"},transitionGroup:{type:Boolean,default:!1}},data:()=>({id:Math.random().toString(36).substring(7),wrapperHeightPx:null,wrapperWidthPx:null,auto:!0,resizing:!1,transitionActive:!1,ancestors:[]}),computed:{transitionProps(){return{name:this.transition,duration:null===this.transitionDuration?this.duration:this.transitionDuration}},wrapperHeight(){return!this.height||this.disabled||this.auto?"auto":this.wrapperHeightPx+"px"},wrapperWidth(){return this.width?this.disabled||this.auto?"auto":this.wrapperWidthPx+"px":""},resizeDuration(){return null===this.transitionDuration?this.duration:this.transitionActive?this.transitionDuration:this.duration}},created(){this.transitionHooks={beforeEnter:this.beforeEnter,enter:this.enter,afterEnter:this.afterEnter,enterCancelled:this.enterCancelled,beforeLeave:this.beforeLeave,leave:this.leave,afterLeave:this.afterLeave,leaveCancelled:this.leaveCancelled},this.$e.$on("pauseSmoothReflow:"+this.id,this.pauseSmoothReflow),this.$e.$on("resumeSmoothReflow:"+this.id,this.resumeSmoothReflow)},mounted(){this.nested?(this.$nextTick(this.findSmoothReflowAncestors),setTimeout((()=>{this.auto=!1,this.setExplicitDimensions()}),500)):(this.auto=!1,this.setExplicitDimensions())},destroyed(){this.$e.$off("pauseSmoothReflow:"+this.id,this.pauseSmoothReflow),this.$e.$off("resumeSmoothReflow:"+this.id,this.resumeSmoothReflow)},methods:{async handleResize(t){this.auto||this.height&&!this.width&&this.wrapperHeightPx===t.height||!this.height&&this.width&&this.wrapperWidthPx===t.width||this.height&&this.width&&this.wrapperHeightPx===t.height&&this.wrapperWidthPx===t.width||(this.resizing=!0,clearTimeout(this.timeout),this.nested&&this.ancestors.length&&(this.ancestors.forEach((t=>this.$e.$emit("pauseSmoothReflow:"+t))),await this.$nextTick()),this.height&&(this.wrapperHeightPx=t.height),this.width&&(this.wrapperWidthPx=t.width),this.timeout=setTimeout((()=>{this.nested&&this.ancestors.length&&this.ancestors.forEach((t=>this.$e.$emit("resumeSmoothReflow:"+t))),this.resizing=!1,this.$emit("afterResize")}),this.duration))},findSmoothReflowAncestors(){let t,e=!0;for(;e;)t=(t&&t.parentElement||this.$el.parentElement).closest("[data-smooth-reflow-id]"),t?this.ancestors.push(t.getAttribute("data-smooth-reflow-id")):e=!1},pauseSmoothReflow(){this.auto=!0},resumeSmoothReflow(){this.auto=!1,this.setExplicitDimensions()},setExplicitDimensions(){this.$refs.wrapper&&(this.height&&(this.wrapperHeightPx=this.$refs.wrapper.clientHeight),this.width&&(this.wrapperWidthPx=this.$refs.wrapper.clientWidth))},beforeEnter(t){this.transitionActive=!0,this.$emit("beforeEnter",t)},enter(t){this.$emit("enter",t)},afterEnter(t){this.transitionActive=!1,this.$emit("afterEnter",t)},enterCancelled(t){this.$emit("afterEnter",t)},beforeLeave(t){this.transitionActive=!0,this.$emit("beforeLeave",t)},leave(t){this.$emit("leave",t)},afterLeave(t){this.transitionActive=!1,this.$emit("afterLeave",t)},leaveCancelled(t){this.$emit("leaveCancelled",t)}}};i(93479);const r=(0,i(51900).Z)(n,a,[],!1,null,"2dd72ad0",null).exports},90786:(t,e,i)=>{var a=i(95233);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,i(45346).Z)("aec185e2",a,!1,{ssrId:!0})},93479:(t,e,i)=>{var a=i(17445);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,i(45346).Z)("7cd11664",a,!1,{ssrId:!0})}}]);