"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[2485],{56341:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>p,data:()=>m});var i=o(37711);const a=(0,i.Lk)("h1",{id:"moes-brt-100-trv",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#moes-brt-100-trv"},[(0,i.Lk)("span",null,"Moes BRT-100-TRV")])],-1),n=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1),d=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"BRT-100-TRV")],-1),c=(0,i.Lk)("td",null,"Vendor",-1),s=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Thermostatic radiator valve")],-1),r=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"battery, lock (state), eco_mode, eco_temperature, max_temperature, min_temperature, valve_state, position, switch (state), window, climate (local_temperature, current_heating_setpoint, local_temperature_calibration, system_mode, running_state, preset), programming_mode, boost_heating, boost_heating_countdown, boost_heating_countdown_time_set, linkquality")],-1),l=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/BRT-100-TRV.png",alt:"Moes BRT-100-TRV"})])],-1),u=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>While pairing, keep the valve close to the coordinator.</p><ol><li><em>Turn the display on</em>: Short press home (🏠).</li><li><em>Enable pairing mode</em>: Long press - (minus) for 3 seconds. WiFi logo is now blinking.</li></ol><h3 id="broken-ota-updates" tabindex="-1"><a class="header-anchor" href="#broken-ota-updates"><span>Broken OTA updates</span></a></h3><p>In the past there have been at least 2 revisions of this device where Zigbee2MQTT detected new firmwares that were incompatible with the device. See :</p><ul><li><a href="https://github.com/Koenkk/zigbee2mqtt/issues/19173" target="_blank" rel="noopener noreferrer">BRT-100-TRV OTA broken / flash ZT5</a></li><li><a href="https://github.com/Koenkk/zigbee2mqtt/issues/7941" target="_blank" rel="noopener noreferrer">Moes BRT-100-TRV not reporting after OTA update</a></li></ul><p>In this situation a firmware update made the device unable to connect to the Zigbee network. As of Zigbee2MQTT 1.33.3 all OTA updates for this device have been disabled, if you are running an older Zigbee2MQTT version it is recommended to not do any OTA updates.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock"><span>Child lock (lock)</span></a></h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="eco-mode-binary" tabindex="-1"><a class="header-anchor" href="#eco-mode-binary"><span>Eco mode (binary)</span></a></h3><p>ECO mode (energy saving mode). Value can be found in the published state on the <code>eco_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eco_mode&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> eco mode is ON, if <code>OFF</code> OFF.</p><h3 id="eco-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#eco-temperature-numeric"><span>Eco temperature (numeric)</span></a></h3><p>Eco temperature. Value can be found in the published state on the <code>eco_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eco_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="max-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-numeric"><span>Max temperature (numeric)</span></a></h3><p>Maximum temperature. Value can be found in the published state on the <code>max_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>15</code> and the maximum value is <code>45</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#min-temperature-numeric"><span>Min temperature (numeric)</span></a></h3><p>Minimum temperature. Value can be found in the published state on the <code>min_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>15</code>. The unit of this value is <code>°C</code>.</p><h3 id="valve-state-binary" tabindex="-1"><a class="header-anchor" href="#valve-state-binary"><span>Valve state (binary)</span></a></h3><p>Valve state if open or closed. Value can be found in the published state on the <code>valve_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>OPEN</code> valve state is ON, if <code>CLOSED</code> OFF.</p><h3 id="position-numeric" tabindex="-1"><a class="header-anchor" href="#position-numeric"><span>Position (numeric)</span></a></h3><p>Position. Value can be found in the published state on the <code>position</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="window-detection-switch" tabindex="-1"><a class="header-anchor" href="#window-detection-switch"><span>Window detection (switch)</span></a></h3><p>The current state of this switch is in the published state under the <code>window_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;window_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;window_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="window-binary" tabindex="-1"><a class="header-anchor" href="#window-binary"><span>Window (binary)</span></a></h3><p>Window status closed or open . Value can be found in the published state on the <code>window</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>OPEN</code> window is ON, if <code>CLOSED</code> OFF.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>local_temperature</code>, <code>current_heating_setpoint</code>, <code>local_temperature_calibration</code>, <code>system_mode</code>, <code>running_state</code>, <code>preset</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>0</code> and <code>35</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: MANUAL MODE ☝ - In this mode, the device executes manual temperature setting. When the set temperature is lower than the &quot;minimum temperature&quot;, the valve is closed (forced closed). PROGRAMMING MODE ⏱ - In this mode, the device executes a preset week programming temperature time and temperature. HOLIDAY MODE ⛱ - In this mode, for example, the vacation mode is set for 10 days and the temperature is setto 15 degrees Celsius. After 10 days, the device will automatically switch to programming mode. TEMPORARY MANUAL MODE - In this mode, ☝ icon will flash. At this time, the device executes the manually set temperature and returns to the weekly programming mode in the next time period. . To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>programming</code>, <code>manual</code>, <code>temporary_manual</code>, <code>holiday</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-9</code> and the maximum value is <code>9</code> with a step size of <code>1</code>.</li></ul><h3 id="programming-mode-text" tabindex="-1"><a class="header-anchor" href="#programming-mode-text"><span>Programming mode (text)</span></a></h3><p>PROGRAMMING MODE ⏱ - In this mode, the device executes a preset week programming temperature time and temperature. You can set up to 4 stages of temperature every for WEEKDAY ➀➁➂➃➄, SATURDAY ➅ and SUNDAY ➆.. Value can be found in the published state on the <code>programming_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;programming_mode&quot;: NEW_VALUE}</code>.</p><h3 id="boost-heating-binary" tabindex="-1"><a class="header-anchor" href="#boost-heating-binary"><span>Boost heating (binary)</span></a></h3><p>Boost Heating: press and hold &quot;+&quot; for 3 seconds, the device will enter the boost heating mode, and the ▷╵◁ will flash. The countdown will be displayed in the APP. Value can be found in the published state on the <code>boost_heating</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;boost_heating&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> boost heating is ON, if <code>OFF</code> OFF.</p><h3 id="boost-heating-countdown-numeric" tabindex="-1"><a class="header-anchor" href="#boost-heating-countdown-numeric"><span>Boost heating countdown (numeric)</span></a></h3><p>Countdown in minutes. Value can be found in the published state on the <code>boost_heating_countdown</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>15</code>. The unit of this value is <code>min</code>.</p><h3 id="boost-heating-countdown-time-set-numeric" tabindex="-1"><a class="header-anchor" href="#boost-heating-countdown-time-set-numeric"><span>Boost heating countdown time set (numeric)</span></a></h3><p>Boost Time Setting 0 sec - 900 sec, (default = 300 sec). Value can be found in the published state on the <code>boost_heating_countdown_time_set</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;boost_heating_countdown_time_set&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>900</code>. The unit of this value is <code>s</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',42),h={},p=(0,o(3790).A)(h,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[a,(0,i.Lk)("table",null,[n,(0,i.Lk)("tbody",null,[d,(0,i.Lk)("tr",null,[c,(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Moes"},{default:(0,i.k6)((()=>[(0,i.eW)("Moes")])),_:1})])]),s,r,l])]),u])}]]),m=JSON.parse('{"path":"/devices/BRT-100-TRV.html","title":"Moes BRT-100-TRV control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Moes BRT-100-TRV control via MQTT","description":"Integrate your Moes BRT-100-TRV via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-07-01T18:17:29.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Broken OTA updates","slug":"broken-ota-updates","link":"#broken-ota-updates","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Eco mode (binary)","slug":"eco-mode-binary","link":"#eco-mode-binary","children":[]},{"level":3,"title":"Eco temperature (numeric)","slug":"eco-temperature-numeric","link":"#eco-temperature-numeric","children":[]},{"level":3,"title":"Max temperature (numeric)","slug":"max-temperature-numeric","link":"#max-temperature-numeric","children":[]},{"level":3,"title":"Min temperature (numeric)","slug":"min-temperature-numeric","link":"#min-temperature-numeric","children":[]},{"level":3,"title":"Valve state (binary)","slug":"valve-state-binary","link":"#valve-state-binary","children":[]},{"level":3,"title":"Position (numeric)","slug":"position-numeric","link":"#position-numeric","children":[]},{"level":3,"title":"Window detection (switch)","slug":"window-detection-switch","link":"#window-detection-switch","children":[]},{"level":3,"title":"Window (binary)","slug":"window-binary","link":"#window-binary","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Programming mode (text)","slug":"programming-mode-text","link":"#programming-mode-text","children":[]},{"level":3,"title":"Boost heating (binary)","slug":"boost-heating-binary","link":"#boost-heating-binary","children":[]},{"level":3,"title":"Boost heating countdown (numeric)","slug":"boost-heating-countdown-numeric","link":"#boost-heating-countdown-numeric","children":[]},{"level":3,"title":"Boost heating countdown time set (numeric)","slug":"boost-heating-countdown-time-set-numeric","link":"#boost-heating-countdown-time-set-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1723570797000},"filePathRelative":"devices/BRT-100-TRV.md"}')}}]);