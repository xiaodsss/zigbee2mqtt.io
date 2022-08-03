"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[73912],{26272:(t,e,o)=>{o.r(e),o.d(e,{data:()=>i});const i={key:"v-83c71f4e",path:"/devices/DNCKATSW004.html",title:"Custom devices (DiY) DNCKATSW004 control via MQTT",lang:"en-US",frontmatter:{title:"Custom devices (DiY) DNCKATSW004 control via MQTT",description:"Integrate your Custom devices (DiY) DNCKATSW004 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (bottom_left endpoint)",slug:"switch-bottom-left-endpoint",children:[]},{level:3,title:"Switch (bottom_right endpoint)",slug:"switch-bottom-right-endpoint",children:[]},{level:3,title:"Switch (top_left endpoint)",slug:"switch-top-left-endpoint",children:[]},{level:3,title:"Switch (top_right endpoint)",slug:"switch-top-right-endpoint",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/DNCKATSW004.md",git:{updatedTime:1659539852e3}}},16162:(t,e,o)=>{o.r(e),o.d(e,{default:()=>m});var i=o(66252);const d=(0,i._)("h1",{id:"custom-devices-diy-dnckatsw004",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#custom-devices-diy-dnckatsw004","aria-hidden":"true"},"#"),(0,i.Uk)(" Custom devices (DiY) DNCKATSW004")],-1),c=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"DNCKATSW004")],-1),a=(0,i._)("tr",null,[(0,i._)("td",null,"Vendor"),(0,i._)("td",null,"Custom devices (DiY)")],-1),l=(0,i._)("td",null,"Description",-1),u={href:"https://github.com/dzungpv/dnckatsw00x/",target:"_blank",rel:"noopener noreferrer"},h=(0,i.Uk)("DNCKAT quadruple key wired wall light switch"),n=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"switch (state), action, linkquality")],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DNCKATSW004.jpg",alt:"Custom devices (DiY) DNCKATSW004"})])],-1),p=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),_=(0,i.Uk)("How to use device type specific configuration"),g=(0,i.uE)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-bottom-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-bottom-left-endpoint" aria-hidden="true">#</a> Switch (bottom_left endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_bottom_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_bottom_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_bottom_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_bottom_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_bottom_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-bottom-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-bottom-right-endpoint" aria-hidden="true">#</a> Switch (bottom_right endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_bottom_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_bottom_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_bottom_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_bottom_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_bottom_right&quot;: &quot;&quot;}</code>.</p><h3 id="switch-top-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-top-left-endpoint" aria-hidden="true">#</a> Switch (top_left endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_top_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_top_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_top_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_top_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_top_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-top-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-top-right-endpoint" aria-hidden="true">#</a> Switch (top_right endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_top_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_top_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_top_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_top_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_top_right&quot;: &quot;&quot;}</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>release_bottom_left</code>, <code>hold_bottom_left</code>, <code>release_bottom_right</code>, <code>hold_bottom_right</code>, <code>release_top_left</code>, <code>hold_top_left</code>, <code>release_top_right</code>, <code>hold_top_right</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),q={},m=(0,o(83744).Z)(q,[["render",function(t,e){const o=(0,i.up)("OutboundLink"),q=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[d,(0,i._)("table",null,[c,(0,i._)("tbody",null,[s,a,(0,i._)("tr",null,[l,(0,i._)("td",null,[(0,i._)("a",u,[h,(0,i.Wm)(o)])])]),n,r])]),p,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(q,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[_])),_:1})])]),g],64)}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[o,i]of e)t[o]=i;return t}}}]);