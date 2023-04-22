Vue.component("installedView",{data:function(){return{error:this.$t("tab.installed.error"),connected:null}},created:function(){this.error=`<b>${this.error.match(/\*\*(.+?)\*\*/g)[0].slice(2,this.error.match(/\*\*(.+?)\*\*/g)[0].length-2)}</b> ${this.error.replace(/\*\*(.+?)\*\*/g,"")}`,chrome.runtime.connect({name:"tabs"}).onMessage.addListener((a=>{this.connected=a.connected}))},template:'\n  <mainBody heading="tab.installed.heading" subHeading="tab.installed.subHeading">\n    <div class="inline">\n      <a draggable="false" class="button donate" target="_blank" href="https://patreon.com/Timeraa"><i class="fas fa-donate"/> {{$t(\'donate\')}}</a>\n      <a draggable="false" class="button discord" target="_blank" href="https://discord.premid.app"><i class="fab fa-discord"></i>Discord</a>\n    </div>\n\n      <div v-bind:class="{hidden: !this.connected}" ref="table">\n        <a draggable="false" class="button start" target="_blank" href="https://premid.app" v-html="$t(\'tab.installed.start\', {0: \'<p class=pmd>PreMiD</p>\'})"/>\n      </div>\n      <div v-bind:class="{hidden: this.connected}" v-if="!this.connected">\n        <div id="error">\n          <p v-html="this.error"></p>\n          <a draggable="false" target="_blank" href="https://docs.premid.app/troubleshooting"><i class="fas fa-question"></i> {{$t(\'tab.installed.link.troubleshooting\')}}</a>\n          <a draggable="false" target="_blank" href="https://premid.app/downloads"><i class="fas fa-download"></i> {{$t(\'tab.installed.link.installApplication\')}}</a>\n        </div>\n      </div>\n  </mainBody>\n  '}),Vue.component("installedView",{data:function(){return{error:this.$t("tab.installed.error"),connected:null}},created:function(){this.error=`<b>${this.error.match(/\*\*(.+?)\*\*/g)[0].slice(2,this.error.match(/\*\*(.+?)\*\*/g)[0].length-2)}</b> ${this.error.replace(/\*\*(.+?)\*\*/g,"")}`,chrome.runtime.connect({name:"tabs"}).onMessage.addListener((a=>{this.connected=a.connected}))},template:'\n  <mainBody heading="tab.installed.heading" subHeading="tab.installed.subHeading">\n    <div class="inline">\n      <a draggable="false" class="button donate" target="_blank" href="https://patreon.com/Timeraa"><i class="fas fa-donate"/> {{$t(\'donate\')}}</a>\n      <a draggable="false" class="button discord" target="_blank" href="https://discord.premid.app"><i class="fab fa-discord"></i>Discord</a>\n    </div>\n\n      <div v-bind:class="{hidden: !this.connected}" ref="table">\n        <a draggable="false" class="button start" target="_blank" href="https://premid.app" v-html="$t(\'tab.installed.start\', {0: \'<p class=pmd>PreMiD</p>\'})"/>\n      </div>\n      <div v-bind:class="{hidden: this.connected}" v-if="!this.connected">\n        <div id="error">\n          <p v-html="this.error"></p>\n          <a draggable="false" target="_blank" href="https://docs.premid.app/troubleshooting"><i class="fas fa-question"></i> {{$t(\'tab.installed.link.troubleshooting\')}}</a>\n          <a draggable="false" target="_blank" href="https://premid.app/downloads"><i class="fas fa-download"></i> {{$t(\'tab.installed.link.installApplication\')}}</a>\n        </div>\n      </div>\n  </mainBody>\n  '});