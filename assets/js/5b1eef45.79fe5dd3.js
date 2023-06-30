"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8042],{35318:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>v});var n=t(27378);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,v=u["".concat(p,".").concat(d)]||u[d]||f[d]||i;return t?n.createElement(v,o(o({ref:r},l),{},{components:t})):n.createElement(v,o({ref:r},l))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},30185:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(25773),a=(t(27378),t(35318));const i={title:"SPI",sidebar_position:14},o="SPI",s={unversionedId:"developer/servers/spi",id:"developer/servers/spi",title:"SPI",description:"SPI builtin package that exposes functions to read, write, transfer buffers over SPI.",source:"@site/docs/developer/servers/spi.mdx",sourceDirName:"developer/servers",slug:"/developer/servers/spi",permalink:"/devicescript/developer/servers/spi",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"SPI",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Analog",permalink:"/devicescript/developer/servers/analog"},next:{title:"I2C",permalink:"/devicescript/developer/servers/i2c"}},p={},c=[{value:"See also",id:"see-also",level:2}],l={toc:c},u="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spi"},"SPI"),(0,a.kt)("p",null,"SPI ",(0,a.kt)("a",{parentName:"p",href:"/developer/packages"},"builtin package")," that exposes functions to read, write, transfer buffers over SPI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { spi } from "@devicescript/spi"\n\nawait spi.configure({})\n\n// write a few bytes\nawait spi.write(hex`abcd`)\n\n// read 8 bytes\nconst resp = await spi.read(8)\n\n// write and read a buffer\nconst resp2 = await spi.transfer(hex`abcd`)\n')),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"SPI is not yet implemented on ",(0,a.kt)("a",{parentName:"p",href:"/devices/"},"RP2040"),".")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/spi/"},"API reference"))))}f.isMDXComponent=!0}}]);