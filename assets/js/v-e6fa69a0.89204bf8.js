"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[12040],{73470:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-e6fa69a0",path:"/devices/HS1SA.html",title:"HEIMAN HS1SA control via MQTT",lang:"en-US",frontmatter:{title:"HEIMAN HS1SA control via MQTT",description:"Integrate your HEIMAN HS1SA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-11-01T12:47:02.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Reset",slug:"reset",children:[]},{level:3,title:"Important",slug:"important",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Smoke (binary)",slug:"smoke-binary",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/HS1SA.md",git:{updatedTime:1659539852e3}}},53192:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});const a=(0,i(66252).uE)('<h1 id="heiman-hs1sa" tabindex="-1"><a class="header-anchor" href="#heiman-hs1sa" aria-hidden="true">#</a> HEIMAN HS1SA</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>HS1SA</td></tr><tr><td>Vendor</td><td>HEIMAN</td></tr><tr><td>Description</td><td>Smoke detector</td></tr><tr><td>Exposes</td><td>smoke, battery_low, battery, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/HS1SA.jpg" alt="HEIMAN HS1SA"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press the side button of the device with a paper clip for more than 2 seconds. The main button led will flash rapidly. Then make sure the device is awake during pairing phase or the configuration may fail. To ensure device is awake press the main button every 2 seconds until configuration is done in Zigbee2MQTT logs.</p><h3 id="reset" tabindex="-1"><a class="header-anchor" href="#reset" aria-hidden="true">#</a> Reset</h3><p>If you have trouble pairing, the device can be reset by pressing the side button with a paper clip for 5 seconds. The led will flash (slower than in pairing mode) 6 times to confirm. After that you can retry the normal pairing procedure.</p><h3 id="important" tabindex="-1"><a class="header-anchor" href="#important" aria-hidden="true">#</a> Important</h3><p>There are 3 versions of this device: Standalone, Zigbee and Z-wave. These are visually identical. Make sure to get the correct version that will work with Zigbee2MQTT:</p><p>Supported:</p><ul><li><strong>HS1SA-M : Zigbee</strong></li><li><strong>HS1SA-N : Zigbee</strong></li><li><strong>HS1SA-E : Zigbee 3.0</strong></li></ul><p>Unsupported:</p><ul><li>HS1SA : Standalone</li><li>HS1SA-Z : Z-wave</li></ul><p>The product code should end in <em>-M</em> for the Zigbee version. The label inside the battery compartment should also show the Zigbee logo.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="smoke-binary" tabindex="-1"><a class="header-anchor" href="#smoke-binary" aria-hidden="true">#</a> Smoke (binary)</h3><p>Indicates whether the device detected smoke. Value can be found in the published state on the <code>smoke</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> smoke is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',23),r={},o=(0,i(83744).Z)(r,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);