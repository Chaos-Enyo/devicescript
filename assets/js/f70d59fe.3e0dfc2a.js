"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1589],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var i=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?i.createElement(k,o(o({ref:t},c),{},{components:n})):i.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(25773),r=(n(27378),n(35318));const a={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Dot Matrix service"},o="DotMatrix",l={unversionedId:"api/clients/dotmatrix",id:"api/clients/dotmatrix",title:"DotMatrix",description:"DeviceScript client for Dot Matrix service",source:"@site/docs/api/clients/dotmatrix.md",sourceDirName:"api/clients",slug:"/api/clients/dotmatrix",permalink:"/devicescript/api/clients/dotmatrix",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Dot Matrix service"},sidebar:"tutorialSidebar"},p={},s=[{value:"Registers",id:"registers",level:2},{value:"dots",id:"rw:dots",level:3},{value:"intensity",id:"rw:intensity",level:3},{value:"rows",id:"const:rows",level:3},{value:"columns",id:"const:columns",level:3},{value:"variant",id:"const:variant",level:3}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dotmatrix"},"DotMatrix"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This service is rc and may change in the future.")),(0,r.kt)("p",null,"A rectangular dot matrix display, made of monochrome LEDs or Braille pins."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"client for ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/jacdac-docs/services/dotmatrix/"},"Dot Matrix service")),(0,r.kt)("li",{parentName:"ul"},"inherits Role")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { DotMatrix } from "@devicescript/core"\n\nconst dotMatrix = new DotMatrix()\n')),(0,r.kt)("p",null),(0,r.kt)("h2",{id:"registers"},"Registers"),(0,r.kt)("h3",{id:"rw:dots"},"dots"),(0,r.kt)("p",null,"The state of the screen where dot on/off state is\nstored as a bit, column by column. The column should be byte aligned."),(0,r.kt)("p",null,"For example, if the display has no more than 8 rows in each column, then each byte contains bits corresponding\nto a single column. Least-significant bit is on top.\nIf display has 10 rows, then each column is represented by two bytes.\nThe top-most 8 rows sit in the first byte (with the least significant bit being on top),\nand the remainign 2 row sit in the second byte."),(0,r.kt)("p",null,"The following C expression can be used to check if a given ",(0,r.kt)("inlineCode",{parentName:"p"},"column, row")," coordinate is set:\n",(0,r.kt)("inlineCode",{parentName:"p"},"dots[column * column_size + (row >> 3)] & (1 << (row & 7))"),", where\n",(0,r.kt)("inlineCode",{parentName:"p"},"column_size")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"(number_of_rows + 7) >> 3")," (note that if number of rows is 8 or less then ",(0,r.kt)("inlineCode",{parentName:"p"},"column_size")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"),\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"dots")," is of ",(0,r.kt)("inlineCode",{parentName:"p"},"uint8_t*")," type."),(0,r.kt)("p",null,"The size of this register is ",(0,r.kt)("inlineCode",{parentName:"p"},"number_of_columns * column_size")," bytes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<Buffer>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"track incoming values"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { DotMatrix } from "@devicescript/core"\n\nconst dotMatrix = new DotMatrix()\n// ...\ndotMatrix.dots.subscribe(async (value) => {\n    ...\n})\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"rw:intensity"},"intensity"),(0,r.kt)("p",null,"Reads the general brightness of the display, brightness for LEDs. ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," when the screen is off."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u0.8"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read and write"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { DotMatrix } from "@devicescript/core"\n\nconst dotMatrix = new DotMatrix()\n// ...\nconst value = await dotMatrix.intensity.read()\nawait dotMatrix.intensity.write(value)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"track incoming values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { DotMatrix } from "@devicescript/core"\n\nconst dotMatrix = new DotMatrix()\n// ...\ndotMatrix.intensity.subscribe(async (value) => {\n    ...\n})\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"const:rows"},"rows"),(0,r.kt)("p",null,"Number of rows on the screen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u16"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read only"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { DotMatrix } from "@devicescript/core"\n\nconst dotMatrix = new DotMatrix()\n// ...\nconst value = await dotMatrix.rows.read()\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"const:columns"},"columns"),(0,r.kt)("p",null,"Number of columns on the screen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u16"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read only"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { DotMatrix } from "@devicescript/core"\n\nconst dotMatrix = new DotMatrix()\n// ...\nconst value = await dotMatrix.columns.read()\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"const:variant"},"variant"),(0,r.kt)("p",null,"Describes the type of matrix used."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read only"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { DotMatrix } from "@devicescript/core"\n\nconst dotMatrix = new DotMatrix()\n// ...\nconst value = await dotMatrix.variant.read()\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("p",null))}u.isMDXComponent=!0}}]);