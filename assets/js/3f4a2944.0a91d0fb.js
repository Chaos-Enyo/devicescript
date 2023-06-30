"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7573],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(25773),r=(n(27378),n(35318));const i={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Compass service"},o="Compass",s={unversionedId:"api/clients/compass",id:"api/clients/compass",title:"Compass",description:"DeviceScript client for Compass service",source:"@site/docs/api/clients/compass.md",sourceDirName:"api/clients",slug:"/api/clients/compass",permalink:"/devicescript/api/clients/compass",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Compass service"},sidebar:"tutorialSidebar"},p={},l=[{value:"Commands",id:"commands",level:2},{value:"calibrate",id:"calibrate",level:3},{value:"Registers",id:"registers",level:2},{value:"reading",id:"ro:reading",level:3},{value:"enabled",id:"rw:enabled",level:3},{value:"readingError",id:"ro:readingError",level:3}],c={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"compass"},"Compass"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This service is rc and may change in the future.")),(0,r.kt)("p",null,"A sensor that measures the heading."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"client for ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/jacdac-docs/services/compass/"},"Compass service")),(0,r.kt)("li",{parentName:"ul"},"inherits Sensor")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Compass } from "@devicescript/core"\n\nconst compass = new Compass()\n')),(0,r.kt)("p",null),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("h3",{id:"calibrate"},"calibrate"),(0,r.kt)("p",null,"Starts a calibration sequence for the compass."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"compass.calibrate(): Promise<void>\n")),(0,r.kt)("h2",{id:"registers"},"Registers"),(0,r.kt)("h3",{id:"ro:reading"},"reading"),(0,r.kt)("p",null,"The heading with respect to the magnetic north."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u16.16"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read only"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Compass } from "@devicescript/core"\n\nconst compass = new Compass()\n// ...\nconst value = await compass.reading.read()\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"track incoming values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Compass } from "@devicescript/core"\n\nconst compass = new Compass()\n// ...\ncompass.reading.subscribe(async (value) => {\n    ...\n})\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"rw:enabled"},"enabled"),(0,r.kt)("p",null,"Turn on or off the sensor. Turning on the sensor may start a calibration sequence."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<boolean>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read and write"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Compass } from "@devicescript/core"\n\nconst compass = new Compass()\n// ...\nconst value = await compass.enabled.read()\nawait compass.enabled.write(value)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"track incoming values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Compass } from "@devicescript/core"\n\nconst compass = new Compass()\n// ...\ncompass.enabled.subscribe(async (value) => {\n    ...\n})\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"ro:readingError"},"readingError"),(0,r.kt)("p",null,"Error on the heading reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u16.16"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read only"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Compass } from "@devicescript/core"\n\nconst compass = new Compass()\n// ...\nconst value = await compass.readingError.read()\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"track incoming values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Compass } from "@devicescript/core"\n\nconst compass = new Compass()\n// ...\ncompass.readingError.subscribe(async (value) => {\n    ...\n})\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("p",null))}u.isMDXComponent=!0}}]);