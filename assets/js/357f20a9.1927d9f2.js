"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5370],{35318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(25773),i=(n(27378),n(35318));const o={sidebar_position:5,description:"Learn about tree-shaking in Microsoft DeviceScript, how to use the ds.keep() function, and potential improvements in future releases.",keywords:["tree-shaking","Microsoft DeviceScript","ds.keep","index operator","compiler warnings"]},a="Tree-shaking",s={unversionedId:"language/tree-shaking",id:"language/tree-shaking",title:"Tree-shaking",description:"Learn about tree-shaking in Microsoft DeviceScript, how to use the ds.keep() function, and potential improvements in future releases.",source:"@site/docs/language/tree-shaking.mdx",sourceDirName:"language",slug:"/language/tree-shaking",permalink:"/devicescript/language/tree-shaking",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Learn about tree-shaking in Microsoft DeviceScript, how to use the ds.keep() function, and potential improvements in future releases.",keywords:["tree-shaking","Microsoft DeviceScript","ds.keep","index operator","compiler warnings"]},sidebar:"tutorialSidebar",previous:{title:"Special objects",permalink:"/devicescript/language/special"},next:{title:"Runtime implementation",permalink:"/devicescript/language/runtime"}},c={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tree-shaking"},"Tree-shaking"),(0,i.kt)("p",null,"Classes and/or methods in classes can be marked with ",(0,i.kt)("inlineCode",{parentName:"p"},"@devsWhenUsed")," JSDoc attribute.\nThis will cause them to be omitted from compilation unless they are used.\nIn such case, care needs to be taken when using index operator (",(0,i.kt)("inlineCode",{parentName:"p"},"obj[some_expression]"),")\nor accessing properties through ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," type.\nYou can use ",(0,i.kt)("inlineCode",{parentName:"p"},"ds.keep()")," function to make sure methods are included."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * Foooooo!\n * \n * @devsWhenUsed\n */\nclass Foo {\n    bar() {}\n}\nfunction callBar(v: any) {\n    v["bar"]()\n}\ncallBar(new Foo())\n\n// can be called anywhere from the reachable code\nds.keep(Foo.prototype.bar)\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@devsWhenUsed")," attribute is implicit when methods are defined through\nprototype assignments."),(0,i.kt)("p",null,"We may improve compiler warnings about such cases in future."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/devicescript/discussions/36"},"discussion"),"."))}d.isMDXComponent=!0}}]);