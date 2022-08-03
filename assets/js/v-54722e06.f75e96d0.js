"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[40535],{80537:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-54722e06",path:"/devices/GL-W-001Z.html",title:"Gledopto GL-W-001Z control via MQTT",lang:"en-US",frontmatter:{title:"Gledopto GL-W-001Z control via MQTT",description:"Integrate your Gledopto GL-W-001Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-11-09T18:37:38.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/GL-W-001Z.md",git:{updatedTime:1659539852e3}}},75195:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});const o=(0,i(66252).uE)('<h1 id="gledopto-gl-w-001z" tabindex="-1"><a class="header-anchor" href="#gledopto-gl-w-001z" aria-hidden="true">#</a> Gledopto GL-W-001Z</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>GL-W-001Z</td></tr><tr><td>Vendor</td><td>Gledopto</td></tr><tr><td>Description</td><td>Zigbee on/off wall switch</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/GL-W-001Z.jpg" alt="Gledopto GL-W-001Z"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><ol><li>Switch on your device.</li><li>Now switch off and on within 2 seconds.</li><li>Repeat off/on four times.</li><li>Reset is done when the device is switched on in the fifth time and the light stays on after blinking 4 times</li></ol><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),d={},a=(0,i(83744).Z)(d,[["render",function(e,t){return o}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);