Vue.component("change",{data:function(){return{text:null,type:null,typeText:null}},created:function(){switch(this.change.type){case"new":this.typeText=this.$t("tab.updated.new");break;case"change":this.typeText=this.$t("tab.updated.changed");break;case"fix":this.typeText=this.$t("tab.updated.fixed")}let t=this.$t(this.change.string);null!=t.match(/(\*.*?\*)/g)&&t.match(/(\*.*?\*)/g).map(((e,a)=>{t=t.replace(e,`<a target="_blank" href="${this.change.urls[a]}">${e.slice(1,e.length-1)}</a>`)})),this.text=t},mounted:function(){anime({targets:"#changeItem",opacity:[{value:0,duration:0},{value:1}],translateX:[{value:-50,duration:0},{value:0}],duration:2500,delay:anime.stagger(50,{start:600})})},props:["change"],template:'\n\t<div id="changeItem">\n    <div id="badge" v-bind:class="this.change.type">\n      <p v-text="$t(this.typeText)"/>\n    </div>\n    <p id="text" v-html="$t(this.text)"/>\n  </div>'});