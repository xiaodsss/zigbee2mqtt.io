"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[34269],{79086:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-0acf289e",path:"/devices/9290024684.html",title:"Philips 9290024684 control via MQTT",lang:"en-US",frontmatter:{title:"Philips 9290024684 control via MQTT",description:"Integrate your Philips 9290024684 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Power-on behavior",slug:"power-on-behavior",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Light",slug:"light",children:[]},{level:3,title:"Effect (enum)",slug:"effect-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/9290024684.md",git:{updatedTime:1659539852e3}}},38998:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Q});var a=o(66252);const s=(0,a.uE)('<h1 id="philips-9290024684" tabindex="-1"><a class="header-anchor" href="#philips-9290024684" aria-hidden="true">#</a> Philips 9290024684</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>9290024684</td></tr><tr><td>Vendor</td><td>Philips</td></tr><tr><td>Description</td><td>Hue white ambiance E27 1100lm with Bluetooth</td></tr><tr><td>Exposes</td><td>light (state, brightness, color_temp, color_temp_startup), effect, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/9290024684.jpg" alt="Philips 9290024684"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Factory resetting a Hue bulb can be accomplished in 5 ways. After resetting the bulb will automatically connect.</p><h4 id="touchlink-factory-reset" tabindex="-1"><a class="header-anchor" href="#touchlink-factory-reset" aria-hidden="true">#</a> Touchlink factory reset</h4>',6),n=(0,a.Uk)("See "),r=(0,a.Uk)("Touchlink"),i=(0,a._)("h4",{id:"hue-bridge",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#hue-bridge","aria-hidden":"true"},"#"),(0,a.Uk)(" Hue bridge")],-1),l=(0,a._)("p",null,"When the bulb is still connected to the Hue bridge, you can simply factory reset the bulb by removing it from the bridge via the Hue app. Orphaned bulbs (configured to connect to a non-existing Zigbee network) can be adopted by a Hue bridge by entering the 6 character serial number in the Philips Hue app.",-1),c=(0,a._)("h4",{id:"hue-dimmer-switch",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#hue-dimmer-switch","aria-hidden":"true"},"#"),(0,a.Uk)(" Hue dimmer switch")],-1),d=(0,a.Uk)("With "),p=(0,a.Uk)("one"),u=(0,a.Uk)(" of the "),h=(0,a.Uk)("two"),m=(0,a.Uk)(" Hue Dimmer switches it is possible to put the bulbs into a factory reset."),b=(0,a._)("ol",null,[(0,a._)("li",null,"Power-supply the bulb"),(0,a._)("li",null,"Bring the dimmer switch next to the bulb, as close as possible"),(0,a._)("li",null,"Hold the I/On and 0/Off button pressed simultaneously for 10 to 12 seconds until…"),(0,a._)("li",null,"The bulb flashes a couple of times. Don't release the buttons until the last flash + a safety second"),(0,a._)("li",null,"Switch the bulb off and on again: it can now be paired again.")],-1),g=(0,a.Uk)("See also the "),f={href:"https://www.youtube.com/watch?v=qvlEAELiJKs",target:"_blank",rel:"noopener noreferrer"},_=(0,a.Uk)("VIDEO: Factory reset a Hue bulb with Hue dimmer switch"),v=(0,a.Uk)("."),k=(0,a._)("h4",{id:"bluetooth-if-supported-by-device",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#bluetooth-if-supported-by-device","aria-hidden":"true"},"#"),(0,a.Uk)(" Bluetooth (if supported by device)")],-1),w=(0,a.Uk)("Install the Philips Hue Bluetooth app for "),y={href:"https://play.google.com/store/apps/details?id=com.signify.hue.blue",target:"_blank",rel:"noopener noreferrer"},q=(0,a.Uk)("Android"),T=(0,a.Uk)(" or "),E={href:"https://apps.apple.com/us/app/philips-hue-bluetooth/id1456604186",target:"_blank",rel:"noopener noreferrer"},U=(0,a.Uk)("iOS"),x=(0,a.Uk)(". You can use the app to trigger a factory reset on a paired light. (Note: The light will only be in bluetooth pairing mode for a couple of minutes after power-on)"),N=(0,a._)("h4",{id:"tradfri-remote-control",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#tradfri-remote-control","aria-hidden":"true"},"#"),(0,a.Uk)(" TRADFRI remote control")],-1),A=(0,a.Uk)("This may also be possible with the "),L={href:"https://www.ikea.com/us/en/images/products/tradfri-remote-control__0489469_PE623665_S4.JPG",target:"_blank",rel:"noopener noreferrer"},I=(0,a.Uk)("Tradfri Remote Control"),F=(0,a.Uk)(" by pressing and holding the reset button on the bottom of the remote (next to the battery). "),D={href:"https://github.com/Koenkk/zigbee2mqtt/issues/296#issuecomment-416923751",target:"_blank",rel:"noopener noreferrer"},M=(0,a.Uk)("This may not always work, even if the Hue bulb starts flashing"),O=(0,a.Uk)("."),P=(0,a._)("h3",{id:"power-on-behavior",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#power-on-behavior","aria-hidden":"true"},"#"),(0,a.Uk)(" Power-on behavior")],-1),R=(0,a.Uk)("This device allows you to set the power-on behavior. Note that this requires at least November/December '18 firmware update of the device. Send a MQTT command to "),H=(0,a._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/set",-1),W=(0,a.Uk)(" with the following payload."),z=(0,a.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;hue_power_on_behavior&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>          <span class="token comment">// default, on, off, recover</span>\n    <span class="token string-property property">&quot;hue_power_on_brightness&quot;</span><span class="token operator">:</span> <span class="token number">125</span><span class="token punctuation">,</span>         <span class="token comment">// same values as brightness</span>\n    <span class="token string-property property">&quot;hue_power_on_color_temperature&quot;</span><span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span>  <span class="token comment">// same values as color_temp</span>\n    <span class="token string-property property">&quot;hue_power_on_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0000FF&quot;</span>         <span class="token comment">// color in hex notation, e.g. #0000FF = blue</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><table><thead><tr><th>Attribute Value</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>reset to factory default value</td></tr><tr><td>on</td><td>bulb on after power loss with configured brightness, color-temperature and color</td></tr><tr><td>off</td><td>bulb off after power loss</td></tr><tr><td>recover</td><td>last running state after power loss</td></tr></tbody></table><p>Rules:</p><ul><li><code>hue_power_on_behavior</code> value always has to be provided</li><li><code>hue_power_on_brightness</code>, <code>hue_power_on_color_temperature</code> and <code>hue_power_on_color</code> can only be provided when <code>hue_power_on_behavior</code> = <code>on</code></li><li><code>hue_power_on_color_temperature</code> and <code>hue_power_on_color</code> cannot be provided together, only one can be set</li><li>When setting <code>hue_power_on_behavior</code> = <code>on</code>, any not provided values will be reset to their factory defaults</li></ul><p>Note: if <code>hue_power_on_behavior</code> is set to <code>off</code>, then the only way to turn the bulb on will be through a paired smart device (see pairing above). You will NOT be able to turn the bulb on by sequentially switching power on and off.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',6),Y=(0,a.Uk)("This device supports OTA updates, for more information see "),V=(0,a.Uk)("OTA updates"),S=(0,a.Uk)("."),j=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),B=(0,a.Uk)("How to use device type specific configuration"),C=(0,a.uE)('<ul><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>color_sync</code>: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>color_temp</code>, <code>color_temp_startup</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li><li><code>color_temp</code>: To control the color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color_temp&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>153</code> and <code>454</code>, the higher the warmer the color. To read the color temperature send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color_temp&quot;: &quot;&quot;}</code>. Besides the numeric values the following values are accepected: <code>coolest</code>, <code>cool</code>, <code>neutral</code>, <code>warm</code>, <code>warmest</code>.</li><li><code>color_temp_startup</code>: To set the startup color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color_temp_startup&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>153</code> and <code>454</code>, the higher the warmer the color. To read the startup color temperature send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color_temp_startup&quot;: &quot;&quot;}</code>. Besides the numeric values the following values are accepected: <code>coolest</code>, <code>cool</code>, <code>neutral</code>, <code>warm</code>, <code>warmest</code>, <code>previous</code>.</li></ul><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping" aria-hidden="true">#</a> Moving/stepping</h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span>\n  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span>\n  <span class="token string-property property">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span>\n  <span class="token string-property property">&quot;color_temp_move&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving color temperature up at 60 units per second</span>\n  <span class="token string-property property">&quot;color_temp_move&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stop&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving color temperature</span>\n  <span class="token string-property property">&quot;color_temp_step&quot;</span><span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token comment">// Increase color temperature by 99</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="effect-enum" tabindex="-1"><a class="header-anchor" href="#effect-enum" aria-hidden="true">#</a> Effect (enum)</h3><p>Triggers an effect on the light (e.g. make light blink for a few seconds). Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;effect&quot;: NEW_VALUE}</code>. The possible values are: <code>blink</code>, <code>breathe</code>, <code>okay</code>, <code>channel_change</code>, <code>finish_effect</code>, <code>stop_effect</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),Z={},Q=(0,o(83744).Z)(Z,[["render",function(e,t){const o=(0,a.up)("RouterLink"),Z=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[s,(0,a._)("p",null,[n,(0,a.Wm)(o,{to:"/guide/usage/touchlink.html"},{default:(0,a.w5)((()=>[r])),_:1})]),i,l,c,(0,a._)("p",null,[d,(0,a.Wm)(o,{to:"/devices/324131092621.html"},{default:(0,a.w5)((()=>[p])),_:1}),u,(0,a.Wm)(o,{to:"/devices/929002398602.html"},{default:(0,a.w5)((()=>[h])),_:1}),m]),b,(0,a._)("p",null,[g,(0,a._)("a",f,[_,(0,a.Wm)(Z)]),v]),k,(0,a._)("p",null,[w,(0,a._)("a",y,[q,(0,a.Wm)(Z)]),T,(0,a._)("a",E,[U,(0,a.Wm)(Z)]),x]),N,(0,a._)("p",null,[A,(0,a._)("a",L,[I,(0,a.Wm)(Z)]),F,(0,a._)("a",D,[M,(0,a.Wm)(Z)]),O]),P,(0,a._)("p",null,[R,(0,a.Wm)(o,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-friendly-name-set"},{default:(0,a.w5)((()=>[H])),_:1}),W]),z,(0,a._)("p",null,[Y,(0,a.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[V])),_:1}),S]),j,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[B])),_:1})])]),C],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);