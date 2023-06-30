"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5635],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(25773),r=(n(27378),n(35318));const i={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Power service"},o="Power",l={unversionedId:"api/clients/power",id:"api/clients/power",title:"Power",description:"DeviceScript client for Power service",source:"@site/docs/api/clients/power.md",sourceDirName:"api/clients",slug:"/api/clients/power",permalink:"/devicescript/api/clients/power",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Power service"},sidebar:"tutorialSidebar"},s={},p=[{value:"About",id:"about",level:2},{value:"Power negotiation protocol",id:"power-negotiation-protocol",level:2},{value:"Protocol details",id:"protocol-details",level:3},{value:"Client notes",id:"client-notes",level:3},{value:"Server implementation notes",id:"server-implementation-notes",level:3},{value:"A dedicated MCU per channel",id:"a-dedicated-mcu-per-channel",level:4},{value:"A shared MCU for multiple channels",id:"a-shared-mcu-for-multiple-channels",level:4},{value:"A brain-integrated power supply",id:"a-brain-integrated-power-supply",level:4},{value:"Rationale for the grace period",id:"rationale-for-the-grace-period",level:3},{value:"Rationale for timings",id:"rationale-for-timings",level:3},{value:"Commands",id:"commands",level:2},{value:"shutdown",id:"shutdown",level:3},{value:"Registers",id:"registers",level:2},{value:"enabled",id:"rw:enabled",level:3},{value:"maxPower",id:"rw:maxPower",level:3},{value:"powerStatus",id:"ro:powerStatus",level:3},{value:"reading",id:"ro:reading",level:3},{value:"batteryVoltage",id:"ro:batteryVoltage",level:3},{value:"batteryCharge",id:"ro:batteryCharge",level:3},{value:"batteryCapacity",id:"const:batteryCapacity",level:3},{value:"keepOnPulseDuration",id:"rw:keepOnPulseDuration",level:3},{value:"keepOnPulsePeriod",id:"rw:keepOnPulsePeriod",level:3},{value:"Events",id:"events",level:2},{value:"change",id:"change",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"power"},"Power"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This service is experimental and may change in the future.")),(0,r.kt)("p",null,"A power-provider service."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"client for ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/jacdac-docs/services/power/"},"Power service")),(0,r.kt)("li",{parentName:"ul"},"inherits Role")),(0,r.kt)("h2",{id:"about"},"About"),(0,r.kt)("h2",{id:"power-negotiation-protocol"},"Power negotiation protocol"),(0,r.kt)("p",null,"The purpose of the power negotiation is to ensure that there is no more than ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/jacdac-docs/reference/electrical-spec/#power-providers"},"I",(0,r.kt)("sub",null,"out_hc(max)"))," delivered to the power rail.\nThis is realized by limiting the number of enabled power provider services to one."),(0,r.kt)("p",null,"Note, that it's also possible to have low-current power providers,\nwhich are limited to ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/jacdac-docs/reference/electrical-spec/#power-providers"},"I",(0,r.kt)("sub",null,"out_lc(max)"))," and do not run a power provider service.\nThese are ",(0,r.kt)("strong",{parentName:"p"},"not")," accounted for in the power negotiation protocol."),(0,r.kt)("p",null,"Power providers can have multiple ",(0,r.kt)("em",{parentName:"p"},"channels"),", typically multiple Jacdac ports on the provider.\nEach channel can be limited to ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/jacdac-docs/reference/electrical-spec/#power-providers"},"I",(0,r.kt)("sub",null,"out_hc(max)"))," separately.\nIn normal operation, the data lines of each channels are connected together.\nThe ground lines are always connected together.\nMulti-channel power providers are also called ",(0,r.kt)("em",{parentName:"p"},"powered hubs"),"."),(0,r.kt)("p",null,"While channels have separate current limits, there's nothing to prevent the user\nfrom joining two or more channels outside of the provider using a passive hub.\nThis would allow more than ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/jacdac-docs/reference/electrical-spec/#power-providers"},"I",(0,r.kt)("sub",null,"out_hc(max)"))," of current to be drawn, resulting in cables or components\ngetting hot and/or malfunctioning.\nThus, the power negotiation protocol seeks to detect situations where\nmultiple channels of power provider(s) are bridged together\nand shut down all but one of the channels involved."),(0,r.kt)("p",null,"The protocol is built around the power providers periodically sending specially crafted\n",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," commands in broadcast mode.\nNote that this is unusual - services typically only send reports."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," commands can be reliably identified based on their first half (more details below).\nWhen a power provider starts receiving a ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," command, it needs to take\nsteps to identify which of its channels the command is coming from.\nThis is typically realized with analog switches between the data lines of channels.\nThe delivery of power over the channel which received the ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," command is then shut down.\nNote that in the case of a single-channel provider, any received ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," command will cause a shut down."),(0,r.kt)("p",null,"A multi-channel provider needs to also identify when a ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," command it sent from one channel\nis received on any of its other channels and shut down one of the channels involved."),(0,r.kt)("p",null,"It is also possible to build a ",(0,r.kt)("em",{parentName:"p"},"data bridge")," device, with two or more ports.\nIt passes through all data except for ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," commands,\nbut ",(0,r.kt)("strong",{parentName:"p"},"does not")," connect the power lines."),(0,r.kt)("h3",{id:"protocol-details"},"Protocol details"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," commands follow a very narrow format:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"they need to be the only packet in the frame (and thus we can also call them ",(0,r.kt)("inlineCode",{parentName:"li"},"shutdown")," frames)"),(0,r.kt)("li",{parentName:"ul"},"the second word of ",(0,r.kt)("inlineCode",{parentName:"li"},"device_id")," needs to be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"0xAA_AA_AA_AA")," (alternating 0 and 1)"),(0,r.kt)("li",{parentName:"ul"},"the service index is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"0x3d")),(0,r.kt)("li",{parentName:"ul"},"the CRC is therefore fixed"),(0,r.kt)("li",{parentName:"ul"},"therefore, the packet can be recognized by reading the first 8 bytes (total length is 16 bytes)")),(0,r.kt)("p",null,"The exact byte structure of ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," command is:\n",(0,r.kt)("inlineCode",{parentName:"p"},"15 59 04 05 5A C9 A4 1F AA AA AA AA 00 3D 80 00")),(0,r.kt)("p",null,"There is one power service per channel.\nA multi-channel power provider can be implemented as one device with multiple services (typically with one MCU),\nor many devices with one service each (typically multiple MCUs).\nThe first option is preferred as it fixes the order of channels,\nbut the second option may be cheaper to implement."),(0,r.kt)("p",null,"After queuing a ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," command, the service enters a grace period\nuntil the report has been sent on the wire.\nDuring the grace period incoming ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," commands are ignored."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upon reset, a power service enables itself, and then only after 0-300ms (random)\nsends the first ",(0,r.kt)("inlineCode",{parentName:"li"},"shutdown")," command"),(0,r.kt)("li",{parentName:"ul"},"Every enabled power service emits ",(0,r.kt)("inlineCode",{parentName:"li"},"shutdown")," commands every 400-600ms (random; first few packets can be even sent more often)"),(0,r.kt)("li",{parentName:"ul"},"If an enabled power service sees a ",(0,r.kt)("inlineCode",{parentName:"li"},"shutdown")," command from somebody else,\nit disables itself (unless in grace period)"),(0,r.kt)("li",{parentName:"ul"},"If a disabled power service sees no ",(0,r.kt)("inlineCode",{parentName:"li"},"shutdown")," command for more than ~1200ms, it enables itself\n(this is when the previous power source is unplugged or otherwise malfunctions)"),(0,r.kt)("li",{parentName:"ul"},"If a power service has been disabled for around 10s, it enables itself.")),(0,r.kt)("p",null,"Additionally:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"While the ",(0,r.kt)("inlineCode",{parentName:"li"},"allowed")," register is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", the service will not enable itself (nor send ",(0,r.kt)("inlineCode",{parentName:"li"},"shutdown")," commands)"),(0,r.kt)("li",{parentName:"ul"},"When a current overdraw is detected, the service stop providing power and enters ",(0,r.kt)("inlineCode",{parentName:"li"},"Overload")," state for around 2 seconds,\nwhile still sending ",(0,r.kt)("inlineCode",{parentName:"li"},"shutdown")," commands.")),(0,r.kt)("h3",{id:"client-notes"},"Client notes"),(0,r.kt)("p",null,"If a client hears a ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," command it just means it's on a branch of the\nnetwork with a (high) power provider.\nAs clients (brains) typically do not consume much current (as opposed to, say, servos),\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," commands are typically irrelevant to them."),(0,r.kt)("p",null,"For power monitoring, the ",(0,r.kt)("inlineCode",{parentName:"p"},"power_status_changed")," event (and possibly ",(0,r.kt)("inlineCode",{parentName:"p"},"power_status")," register)\ncan be used.\nIn particular, user interfaces may alert the user to ",(0,r.kt)("inlineCode",{parentName:"p"},"Overload")," status.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Overprovision")," status is generally considered normal (eg. when two multi-channel power providers are linked together)."),(0,r.kt)("h3",{id:"server-implementation-notes"},"Server implementation notes"),(0,r.kt)("h4",{id:"a-dedicated-mcu-per-channel"},"A dedicated MCU per channel"),(0,r.kt)("p",null,"Every channel has:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a cheap 8-bit MCU (e.g. PMS150C, PFS122),"),(0,r.kt)("li",{parentName:"ul"},"a current limiter with FAULT output and ENABLE input, and"),(0,r.kt)("li",{parentName:"ul"},"an analog switch.")),(0,r.kt)("p",null,"The MCU here needs at least 4 pins per channel.\nIt is connected to data line of the channel, the control input of the switch, and to the current limiter's FAULT and ENABLE pins."),(0,r.kt)("p",null,"The switch connects the data line of the channel (JD_DATA_CHx) with the internal shared data bus, common to all channels (JD_DATA_COM).\nBoth the switch and the limiter are controlled by the MCU.\nA latching circuit is not needed for the limiter because the MCU will detect an overcurrent fault and shut it down immediately. "),(0,r.kt)("p",null,"During reception, after the beginning of ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," frame is detected,\nthe switch is opened for a brief period.\nIf the ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," frame is received correctly, it means it was on MCU's channel."),(0,r.kt)("p",null,"In the case of only one power delivery channel that's controlled by a dedicated MCU, the analog switch is not necessary. "),(0,r.kt)("h4",{id:"a-shared-mcu-for-multiple-channels"},"A shared MCU for multiple channels"),(0,r.kt)("p",null,"Every channel has:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a current limiter with FAULT output and ENABLE input, "),(0,r.kt)("li",{parentName:"ul"},"an analog switch, and"),(0,r.kt)("li",{parentName:"ul"},"a wiggle-detection line connecting the MCU to data line of the channel")),(0,r.kt)("p",null,"The MCU again needs at least 4 pins per channel.\nSwitches and limiters are set up like in the configuration above.\nThe Jacdac data line of the MCU is connected to internal data bus."),(0,r.kt)("p",null,"While a Jacdac packet is being received, the MCU keeps checking if it is a\nbeginning of the ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," frame.\nIf that is the case, it opens all switches and checks which one(s) of the channel\ndata lines wiggle (via the wiggle lines; this can be done with EXTI latches).\nThe one(s) that wiggle received the ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," frame and need to be disabled."),(0,r.kt)("p",null,"Also, while sending the ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," frames itself, it needs to be done separately\nfor each channel, with all the other switches open.\nIf during that operation we detect wiggle on other channels, then we have detected\na loop, and the respective channels needs to be disabled."),(0,r.kt)("h4",{id:"a-brain-integrated-power-supply"},"A brain-integrated power supply"),(0,r.kt)("p",null,"Here, there's only one channel of power and we don't have hard real time requirements,\nso user-programmable brain can control it.\nThere is no need for analog switch or wiggle-detection line,\nbut a current limiter with a latching circuit is needed."),(0,r.kt)("p",null,"There is nothing special to do during reception of ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," packet.\nWhen it is received, the current limiter should just be disabled."),(0,r.kt)("p",null,"Ideally, exception/hard-fault handlers on the MCU should also disable the current limiter.\nSimilarly, the limiter should be disabled while the MCU is in bootloader mode,\nor otherwise unaware of the power negotiation protocol. "),(0,r.kt)("h3",{id:"rationale-for-the-grace-period"},"Rationale for the grace period"),(0,r.kt)("p",null,"Consider the following scenario:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"device A queues ",(0,r.kt)("inlineCode",{parentName:"li"},"shutdown")," command for sending"),(0,r.kt)("li",{parentName:"ul"},"A receives external ",(0,r.kt)("inlineCode",{parentName:"li"},"shutdown")," packet from B (thus disabling A)"),(0,r.kt)("li",{parentName:"ul"},"the A ",(0,r.kt)("inlineCode",{parentName:"li"},"shutdown")," command is sent from the queue (thus eventually disabling B)")),(0,r.kt)("p",null,"To avoid that, we make sure that at the precise instant when ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," command is sent,\nthe power is enabled (and thus will stay enabled until another ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," command arrives).\nThis could be achieved by inspecting the enable bit, aftering acquiring the line\nand before starting UART transmission, however that would require breaking abstraction layers.\nSo instead, we never disable the service, while the ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," packet is queued.\nThis may lead to delays in disabling power services, but these should be limited due to the\nrandom nature of the ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," packet spacing."),(0,r.kt)("h3",{id:"rationale-for-timings"},"Rationale for timings"),(0,r.kt)("p",null,"The initial 0-300ms delay is set to spread out the ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," periods of power services,\nto minimize collisions.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," periods are randomized 400-600ms, instead of a fixed 500ms used for regular\nservices, for the same reason."),(0,r.kt)("p",null,"The 1200ms period is set so that droping two ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," packets in a row\nfrom the current provider will not cause power switch, while missing 3 will."),(0,r.kt)("p",null,"The 50-60s power switch period is arbitrary, but chosen to limit amount of switching between supplies,\nwhile keeping it short enough for user to notice any problems such switching may cause."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Power } from "@devicescript/core"\n\nconst power = new Power()\n')),(0,r.kt)("p",null),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("h3",{id:"shutdown"},"shutdown"),(0,r.kt)("p",null,"Sent by the power service periodically, as broadcast."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"power.shutdown(): Promise<void>\n")),(0,r.kt)("h2",{id:"registers"},"Registers"),(0,r.kt)("h3",{id:"rw:enabled"},"enabled"),(0,r.kt)("p",null,"Can be used to completely disable the service.\nWhen allowed, the service may still not be providing power, see\n",(0,r.kt)("inlineCode",{parentName:"p"},"power_status")," for the actual current state."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<boolean>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read and write"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Power } from "@devicescript/core"\n\nconst power = new Power()\n// ...\nconst value = await power.enabled.read()\nawait power.enabled.write(value)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"track incoming values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Power } from "@devicescript/core"\n\nconst power = new Power()\n// ...\npower.enabled.subscribe(async (value) => {\n    ...\n})\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"rw:maxPower"},"maxPower"),(0,r.kt)("p",null,"Limit the power provided by the service. The actual maximum limit will depend on hardware.\nThis field may be read-only in some implementations - you should read it back after setting."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u16"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read and write"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Power } from "@devicescript/core"\n\nconst power = new Power()\n// ...\nconst value = await power.maxPower.read()\nawait power.maxPower.write(value)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"track incoming values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Power } from "@devicescript/core"\n\nconst power = new Power()\n// ...\npower.maxPower.subscribe(async (value) => {\n    ...\n})\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"ro:powerStatus"},"powerStatus"),(0,r.kt)("p",null,"Indicates whether the power provider is currently providing power (",(0,r.kt)("inlineCode",{parentName:"p"},"Powering")," state), and if not, why not.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Overprovision")," means there was another power provider, and we stopped not to overprovision the bus."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read only"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Power } from "@devicescript/core"\n\nconst power = new Power()\n// ...\nconst value = await power.powerStatus.read()\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"track incoming values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Power } from "@devicescript/core"\n\nconst power = new Power()\n// ...\npower.powerStatus.subscribe(async (value) => {\n    ...\n})\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"ro:reading"},"reading"),(0,r.kt)("p",null,"Present current draw from the bus."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u16"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read only"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Power } from "@devicescript/core"\n\nconst power = new Power()\n// ...\nconst value = await power.reading.read()\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"track incoming values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Power } from "@devicescript/core"\n\nconst power = new Power()\n// ...\npower.reading.subscribe(async (value) => {\n    ...\n})\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"ro:batteryVoltage"},"batteryVoltage"),(0,r.kt)("p",null,"Voltage on input."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u16"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read only"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Power } from "@devicescript/core"\n\nconst power = new Power()\n// ...\nconst value = await power.batteryVoltage.read()\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"track incoming values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Power } from "@devicescript/core"\n\nconst power = new Power()\n// ...\npower.batteryVoltage.subscribe(async (value) => {\n    ...\n})\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"ro:batteryCharge"},"batteryCharge"),(0,r.kt)("p",null,"Fraction of charge in the battery."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u0.16"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read only"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Power } from "@devicescript/core"\n\nconst power = new Power()\n// ...\nconst value = await power.batteryCharge.read()\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"track incoming values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Power } from "@devicescript/core"\n\nconst power = new Power()\n// ...\npower.batteryCharge.subscribe(async (value) => {\n    ...\n})\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"const:batteryCapacity"},"batteryCapacity"),(0,r.kt)("p",null,"Energy that can be delivered to the bus when battery is fully charged.\nThis excludes conversion overheads if any."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u32"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read only"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Power } from "@devicescript/core"\n\nconst power = new Power()\n// ...\nconst value = await power.batteryCapacity.read()\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"rw:keepOnPulseDuration"},"keepOnPulseDuration"),(0,r.kt)("p",null,"Many USB power packs need current to be drawn from time to time to prevent shutdown.\nThis regulates how often and for how long such current is drawn.\nTypically a 1/8W 22 ohm resistor is used as load. This limits the duty cycle to 10%."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u16"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read and write"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Power } from "@devicescript/core"\n\nconst power = new Power()\n// ...\nconst value = await power.keepOnPulseDuration.read()\nawait power.keepOnPulseDuration.write(value)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"track incoming values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Power } from "@devicescript/core"\n\nconst power = new Power()\n// ...\npower.keepOnPulseDuration.subscribe(async (value) => {\n    ...\n})\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"rw:keepOnPulsePeriod"},"keepOnPulsePeriod"),(0,r.kt)("p",null,"Many USB power packs need current to be drawn from time to time to prevent shutdown.\nThis regulates how often and for how long such current is drawn.\nTypically a 1/8W 22 ohm resistor is used as load. This limits the duty cycle to 10%."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u16"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read and write"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Power } from "@devicescript/core"\n\nconst power = new Power()\n// ...\nconst value = await power.keepOnPulsePeriod.read()\nawait power.keepOnPulsePeriod.write(value)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"track incoming values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Power } from "@devicescript/core"\n\nconst power = new Power()\n// ...\npower.keepOnPulsePeriod.subscribe(async (value) => {\n    ...\n})\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"change"},"change"),(0,r.kt)("p",null,"Emitted whenever ",(0,r.kt)("inlineCode",{parentName:"p"},"power_status")," changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"power.change.subscribe(() => {\n\n})\n")),(0,r.kt)("p",null))}u.isMDXComponent=!0}}]);