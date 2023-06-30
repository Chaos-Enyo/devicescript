"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9449],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(25773),i=(n(27378),n(35318));const a={description:"Mounts an analog sensor",title:"Analog",sidebar_position:10},o="Analog",l={unversionedId:"developer/servers/analog",id:"developer/servers/analog",title:"Analog",description:"Mounts an analog sensor",source:"@site/docs/developer/servers/analog.mdx",sourceDirName:"developer/servers",slug:"/developer/servers/analog",permalink:"/devicescript/developer/servers/analog",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{description:"Mounts an analog sensor",title:"Analog",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"GPIO",permalink:"/devicescript/developer/servers/gpio"},next:{title:"SPI",permalink:"/devicescript/developer/servers/spi"}},s={},p=[{value:"Scaling",id:"scaling",level:2},{value:"Limiting power consumption",id:"limiting-power-consumption",level:2},{value:"Timings",id:"timings",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"analog"},"Analog"),(0,i.kt)("p",null,"There is a number of functions that start a simple analog sensor server.\nWe'll use ",(0,i.kt)("inlineCode",{parentName:"p"},"startPotentiometer()")," as an example, but you can use any of the following,\nas they all use the same configuration."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/servers/lightlevel"},"LightLevel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/servers/reflectedlight"},"ReflectedLight")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/servers/waterlevel"},"WaterLevel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/servers/soundlevel"},"SoundLevel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/servers/soilmoisture"},"SoilMoisture")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/servers/potentiometer"},"Potentiometer"))),(0,i.kt)("p",null,"In the simplest case, you just pass the pin to ",(0,i.kt)("inlineCode",{parentName:"p"},"startPotentiometer()"),".\nThe voltage on the pin (typically between 0V (GND) and 3.3V (VCC)) will be translated to a number between 0 and 1."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { gpio } from "@devicescript/core"\nimport { startPotentiometer } from "@devicescript/servers"\n\nconst slider = startPotentiometer({\n    pin: ds.gpio(3),\n})\nslider.reading.subscribe(v => console.data({ value: 100 * v }))\n')),(0,i.kt)("h2",{id:"scaling"},"Scaling"),(0,i.kt)("p",null,"There are two settings, ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"scale")," that let you modify the value read from the sensor.\nThe actual reported reading is ",(0,i.kt)("inlineCode",{parentName:"p"},"(offset + (raw_reading * scale) / 1024) / 0xffff"),"\nclamped to ",(0,i.kt)("inlineCode",{parentName:"p"},"0 ... 1")," range.\nThe range of ",(0,i.kt)("inlineCode",{parentName:"p"},"raw_reading")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"0 ... 0xffff"),".\nThe defaults are ",(0,i.kt)("inlineCode",{parentName:"p"},"{ offset: 0, scale: 1024 }")," so the ",(0,i.kt)("inlineCode",{parentName:"p"},"raw_reading")," is just reported back."),(0,i.kt)("p",null,"For example, if you find you can never quite reach the ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," values, you can try the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { gpio } from "@devicescript/core"\nimport { startPotentiometer } from "@devicescript/servers"\n\nconst slider = startPotentiometer({\n    pin: ds.gpio(3),\n    offset: 0x1000,\n    scale: 900,\n})\n')),(0,i.kt)("h2",{id:"limiting-power-consumption"},"Limiting power consumption"),(0,i.kt)("p",null,"A potentiometer typically has 3 terminals, let's call them L, M, R.\nYou connect L to GND, R to VCC and M (middle) to the sensing pin.\nThe M terminal will then get a voltage proportional to the position of the knob."),(0,i.kt)("p",null,"However, the current (0.3mA with typical 10kOhm potentiometer) will always flow from L to R,\nregardless if you measure it or not.\nTo improve power consumption, you may connect say R to a GPIO and configure the service like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { gpio } from "@devicescript/core"\nimport { startPotentiometer } from "@devicescript/servers"\n\nconst slider = startPotentiometer({\n    pin: ds.gpio(3),\n    pinHigh: ds.gpio(7),\n})\n')),(0,i.kt)("p",null,"This tells the driver to set GPIO7 (",(0,i.kt)("inlineCode",{parentName:"p"},"pinHigh"),") to 1 (3.3V) before taking the measurement\nfrom GPIO3 (",(0,i.kt)("inlineCode",{parentName:"p"},"pin"),").\nAfter taking the measurement, ",(0,i.kt)("inlineCode",{parentName:"p"},"pinHigh")," will be left floating, so no current will flow through the potentiometer."),(0,i.kt)("p",null,"You can also set ",(0,i.kt)("inlineCode",{parentName:"p"},"pinLow")," (which is set to 0 before taking measurement) or both ",(0,i.kt)("inlineCode",{parentName:"p"},"pinHigh")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pinLow"),",\nbut typically one is enough."),(0,i.kt)("h2",{id:"timings"},"Timings"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"samplingItv")," settings defaults to 9 milliseconds and specifies how often to sample the sensor."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"streamingItv")," setting defaults to 100 milliseconds and specifies how often to stream values\non the Jacdac bus.\nThe client can override this through ",(0,i.kt)("inlineCode",{parentName:"p"},"streaming_interval")," Jacdac register."),(0,i.kt)("p",null,"Additionally, you can set ",(0,i.kt)("inlineCode",{parentName:"p"},"samplingDelay")," to a number of milliseconds to wait after setting ",(0,i.kt)("inlineCode",{parentName:"p"},"pinHigh"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"pinLow"),"\nbefore taking the measurement\n(default is 0, so effectively a few microseconds (not milliseconds))."))}u.isMDXComponent=!0}}]);