"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1571],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,d=u["".concat(c,".").concat(m)]||u[m]||v[m]||o;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19140:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(25773),i=(r(27378),r(35318));const o={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Rover service"},a="Rover",l={unversionedId:"api/clients/rover",id:"api/clients/rover",title:"Rover",description:"DeviceScript client for Rover service",source:"@site/docs/api/clients/rover.md",sourceDirName:"api/clients",slug:"/api/clients/rover",permalink:"/devicescript/api/clients/rover",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Rover service"},sidebar:"tutorialSidebar"},c={},p=[{value:"Registers",id:"registers",level:2},{value:"reading",id:"ro:reading",level:3}],s={toc:p},u="wrapper";function v(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rover"},"Rover"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This service is experimental and may change in the future.")),(0,i.kt)("p",null,"A roving robot."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"client for ",(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/jacdac-docs/services/rover/"},"Rover service")),(0,i.kt)("li",{parentName:"ul"},"inherits Sensor")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { Rover } from "@devicescript/core"\n\nconst rover = new Rover()\n')),(0,i.kt)("p",null),(0,i.kt)("h2",{id:"registers"},"Registers"),(0,i.kt)("h3",{id:"ro:reading"},"reading"),(0,i.kt)("p",null,"The current position and orientation of the robot."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Register<any[]>")," (packing format ",(0,i.kt)("inlineCode",{parentName:"p"},"i16.16 i16.16 i16.16 i16.16 i16.16"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"track incoming values"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Rover } from "@devicescript/core"\n\nconst rover = new Rover()\n// ...\nrover.reading.subscribe(async (value) => {\n    ...\n})\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,i.kt)("p",null))}v.isMDXComponent=!0}}]);